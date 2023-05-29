import React, { useEffect, useRef, useState } from 'react'
import { Container, Props } from './styles'
import InputText from '../../../InputText'
import IconRoundedButton from '../../../IconRoundedButton'
import { SvgIconClose, SvgIconPlus, SvgIconReload } from '../../../SvgIcon'
import { invoke } from '@tauri-apps/api'
import usePersistedState from '../../../../utils/userPersistedState'
import { DefaultTheme } from 'styled-components'
import { Settings } from '../../../../Settings'


type JsonRenders = {
    renders: [
        {
            name: string,
            hours: number,
            minutes: number,
            seconds: number,
            frames: number,
            machines: number
        }
    ]
}
const empty_json = '{"renders": [{"name": "temp","hours": 0,"minutes": 0,"seconds": 0,"frames": 1,"machines": 1}]}'

const HomePage: React.FC<Props> = ({pageName, visible})=>{
    // Set useContext
    const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme', Settings.appDefaultTheme)
  
    // useState
    const [rendeNameValue, setRendeNameValue] = usePersistedState('rendeNameValue','')
    const [inputHoursValue, setInputHoursValue] = usePersistedState('inputHoursValue','')
    const [inputMinutesValue, setInputMinutesValue] = usePersistedState('inputMinutesValue','')
    const [inputSecondsValue, setInputSecondsValue] = usePersistedState('inputSecondsValue','')
    const [inputFramesValue, setInputFramesValue] = usePersistedState('inputFramesValue','1')
    const [inputMachinesValue, setInputMachinesValue] = usePersistedState('inputMachinesValue','1')
    const [renderTime, setRenderTime] = useState('00d 00h 00m 00s')
    const [endTime, setEndTime] = useState('loading...')
    // ----- main JSON data ----- //
    const [jsonData, setJsonData] = useState<JsonRenders>(JSON.parse(empty_json))

    // useRef
    const myTable = useRef<HTMLTableElement>(null)
    const myTableBody = useRef<HTMLTableSectionElement>(null)
    const inputHours = useRef<HTMLInputElement>(null)
    const inputMinutes = useRef<HTMLInputElement>(null)
    const inputSeconds = useRef<HTMLInputElement>(null)
    const inputFrames = useRef<HTMLInputElement>(null)
    const inputMachines = useRef<HTMLInputElement>(null)
    const inputName = useRef<HTMLInputElement>(null)
    const alertBoxEmptyFields = useRef<HTMLDivElement>(null)
    const alertBoxExists = useRef<HTMLDivElement>(null)

    // Icons
    const plusIcon = <SvgIconPlus size='20' />
    const reloadIcon = <SvgIconReload size='16' />

    async function calculate(isNew?: boolean) {
        // Pass Objects
        const passName = rendeNameValue ? rendeNameValue : ""
        const passHours = inputHoursValue ? Number(inputHoursValue) : 0
        const passMinutes = inputMinutesValue ? Number(inputMinutesValue) : 0
        const passSeconds = inputSecondsValue ? Number(inputSecondsValue) : 0
        const passFrames = inputFramesValue ? Number(inputFramesValue) : 1
        const passMachines = inputMachinesValue ? Number(inputMachinesValue) : 1

        // Add render time or temp render and return json
        if (isNew){
            if(passHours || passMinutes || passSeconds){

                // Check if name already exists
                const itemName = passName;
                let itemFound = false;

                for (const item of jsonData.renders) {
                    if (item.name === itemName) { itemFound = true; break; }
                }

                if (itemFound) {
                    // Show alert if a render with the same name already exists
                    const div_alert = alertBoxExists.current
                    const input = inputName.current
                    div_alert?.classList.remove('hide-app-div')
                    input?.classList.add('error')
                    setTimeout(()=>{ 
                        div_alert?.classList.add('hide-app-div')
                        input?.classList.remove('error')
                    }, 5000)
                } else {
                    // Add new render time
                    setJsonData(JSON.parse(await invoke("add_time_json", { 
                        passName,
                        passHours,
                        passMinutes,
                        passSeconds,
                        passFrames,
                        passMachines
                    })))
                    // Clear fields
                    resetFields()
                }
            } else {
                // Show alert if fields are empty
                const div_alert = alertBoxEmptyFields.current
                const hours = inputHours.current
                const minutes = inputMinutes.current
                const seconds = inputSeconds.current

                div_alert?.classList.remove('hide-app-div')
                hours?.classList.add('error')
                setTimeout(()=>{ minutes?.classList.add('error') }, 100)
                setTimeout(()=>{ seconds?.classList.add('error') }, 200)
                setTimeout(()=>{ 
                    div_alert?.classList.add('hide-app-div')
                }, 5000)
                setTimeout(()=>{ hours?.classList.remove('error') }, 800)
                setTimeout(()=>{ minutes?.classList.remove('error') }, 900)
                setTimeout(()=>{ seconds?.classList.remove('error') }, 1000)        
            }        
        } else {
            // Reset name to prevent freeze calculator when name field are not empty
            const passName = ""

            // Pass temp time
            setJsonData(JSON.parse(await invoke("temp_time_json", { 
                passName,
                passHours,
                passMinutes,
                passSeconds,
                passFrames,
                passMachines
            })))
        }

        // Set render time
        setRenderTime(await invoke("calculate_time"))

        // Set end time
        setEndTime(await invoke("calculate_end_time"))
    }

    function resetFields(all?: boolean){
        // Clear InputText 
        setRendeNameValue('')
        setInputHoursValue('')
        setInputMinutesValue('')
        setInputSecondsValue('')
        if(all){
            setInputFramesValue('1')
            setInputMachinesValue('1')
            setRendeNameValue('')
        }
    }

    // Send form and prevent reload
    const sendForm = (event: any)=>{
        event.preventDefault()
        calculate(true)
    }    

    // Fill 
    function fillTable() {
        const table = myTableBody.current;
        clearRows()

        jsonData.renders.forEach(item => {
          if(table) {
            // Get name and empyt value
            const nameValues = Object.values(item.name)
            const nameText = nameValues.join("")

            const row = table.insertRow()
            if(!nameText) row.style.display = "none"
            if(nameText == "temp") row.style.display = "none"
            const nameCell = row.insertCell()
            const timeCell = row.insertCell()
            const deleteCell = row.insertCell()
            deleteCell.classList.add('button-cell')
    
            // "Name"
            nameCell.innerText = nameText
            nameCell.classList.add('text-left')
    
            // "Time"
            const timeText = `Frame: <span>${item.hours}h ${item.minutes}m ${item.seconds}s</span> 
                | <span>${item.frames}</span> frame(s) / <span>${item.machines}</span> machine(s)`
            timeCell.innerHTML = timeText
            timeCell.classList.add('text-left')
    
            // "Delete"
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                    <path fill="white" d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46L13.46 12Z"/>
                </svg>
            `
            deleteButton.classList.add('button-left')
            deleteButton.setAttribute('name', `${item.name}`)
            deleteButton.onmousedown = deleteItem
            deleteButton.title = "Delete render"
            deleteCell.appendChild(deleteButton)
          }
        });
    };

    // Clear rows
    function clearRows() {
        const tableBody = myTableBody.current
        if(tableBody) tableBody.innerHTML = ""
    }

    // Delete Item
    async function deleteItem(e:any){
        const renderName = e.target.getAttribute('name')
        setJsonData(JSON.parse(await invoke("delete_time_json", {renderName})))
        console.log(renderName)

        // Set render time
        setRenderTime(await invoke("calculate_time"))

        // Set end time
        setEndTime(await invoke("calculate_end_time"))
    }

    // Check if is text pressed in the text field
    const handleKeyDown = (event:any) => {
        // Verifica se a tecla pressionada não é um número ou a tecla "Backspace"
        if (
          (event.keyCode < 48 || event.keyCode > 57) && // Teclas de números do teclado principal
          (event.keyCode < 96 || event.keyCode > 105) && // Teclas de números do teclado numérico
          event.keyCode !== 8 // Tecla "Backspace"
        ) {
          event.preventDefault(); // Impede a entrada de texto
        }
    };

    useEffect(() => {
        // FORM VALIDATIONS
        var regex = new RegExp("^[a-zA-Z ]+$");
        // Hours Validations
        const hours = inputHours.current;
        if(hours){
            hours.onkeydown = function(e) { 
                if((e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E')
                || (e.ctrlKey && e.key === 'v')) { return false}
                handleKeyDown(e)                
            }
            hours.onkeyup = () => {
                let valor = parseInt(hours.value, 10);
                if (valor > 99) setInputMinutesValue('9')
            }
        }
        // Minutes Validations
        const minutes = inputMinutes.current;
        if(minutes){
            minutes.onkeydown = function(e) {
                if((e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E')
                || (e.ctrlKey && e.key === 'v')) { return false; }
                handleKeyDown(e)  
            }
            minutes.onkeyup = () => {
                let valor = parseInt(minutes.value, 10);
                if (valor > 59) setInputMinutesValue('59')
            }
        }
        // Seconds Validations
        const seconds = inputSeconds.current;
        if(seconds){
            seconds.onkeydown = function(e) { 
                if((e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E')
                || (e.ctrlKey && e.key === 'v')) { return false; }
                handleKeyDown(e)
            }
            seconds.onkeyup = () => {
                let valor = parseInt(seconds.value, 10);
                if (valor > 59) setInputSecondsValue('59')
            }
        }
        // Frames Validations
        const frames = inputFrames.current;
        if(frames){
            frames.onkeydown = function(e) {
                if((e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E')
                || (e.ctrlKey && e.key === 'v')) { return false; }
                handleKeyDown(e)
            }
            frames.onkeyup = () => {
                let valor = parseInt(frames.value, 10);
                if (isNaN(valor) || valor < 1) setInputFramesValue('1')
            }
        }
        // Machines Validations
        const machines = inputMachines.current;
        if(machines){
            machines.onkeydown = function(e) {
                if((e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E')
                || (e.ctrlKey && e.key === 'v')) { return false; }
                handleKeyDown(e)
            }
            machines.onkeyup = () => {
                let valor = parseInt(machines.value, 10);
                if (isNaN(valor) || valor < 1) setInputMachinesValue('1')
            }
        }

        // Fill Table
        fillTable()

        const timer = setInterval(()=>{        
            calculate()
        }, 500)
        return () => clearInterval(timer)

    }, [inputHours,
        inputMinutes,
        inputSeconds,
        inputFrames,
        inputMachines,
        jsonData
    ])
    
    return(
        <Container className={`app-container-column ${visible ? "" : "hide-page"}`}>
            <section className="app-section">
                <div className="content flex-column">
                    <div className="row text-center big-number">
                        <p>{renderTime}</p>
                    </div>
                    <div className="row text-center description">
                        <p>ESTIMATED RENDER TIME</p>
                    </div>
                    <div className="row text-center extra-info">
                        <p>{endTime}</p>
                    </div>
                </div>
            </section>
            
            <section className="app-section flex-1">
                <div className="title">
                    <span className='left'>RENDER LIST</span>
                    <span className='right'>list of all rendering times for each project</span>
                </div>
                <div className="content flex-column flex-1">
                    <div className="scroll-box">
                        <table ref={myTable}>
                            <thead>
                                <tr>
                                    <th className='size-50 no-resize text-left'>Name</th>
                                    <th className='size-50 no-resize text-left'>Time</th>
                                    <th className='size-5 no-resize delete-column'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                            <path fill="#FFFFFF80" d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46L13.46 12Z"/>
                                        </svg>
                                    </th>
                                </tr>
                            </thead>                            
                            <tbody ref={myTableBody}>
                                {/* <tr>
                                    <td>Wanderson</td>
                                    <td>0d 0h 0m 0s</td>
                                    <td><button><SvgIconClose size='14' color='#f5f5f5'/></button></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            
            <section className="app-section">
                <div className="title">
                    <span className='left'>TIME PER FRAME:</span>
                    <div className='reset-button'>
                        <IconRoundedButton
                            highlightIcon={true}
                            size='18px'
                            radius='6px'
                            svgIcon={reloadIcon}
                            colorDefault='transparent'
                            title='Reset all fields to default'
                            onClick={()=>{ resetFields(true) }}
                        />
                    </div>
                    <span className='right flex-1 text-align-right'>add how long each project takes to render</span>
                </div>
                <div className="content flex-column">
                    <div className='row'>
                        <div className="input-time-container">
                            <div className='input-box'>
                                <InputText
                                    ref={inputHours}
                                    type="number"
                                    value={inputHoursValue}
                                    setValue={setInputHoursValue}
                                    placeHolder="00" 
                                    maxLength={2}
                                    max={99}
                                    min={0}
                                />
                                <span>hours</span>
                            </div>
                            <div className='input-box'>
                                <InputText
                                    ref={inputMinutes}
                                    type="number"
                                    value={inputMinutesValue}
                                    setValue={setInputMinutesValue}
                                    placeHolder="00" 
                                    maxLength={2}
                                    max={59}
                                    min={0}
                                />
                                <span>minutes</span>
                            </div>
                            <div className='input-box'>
                                <InputText
                                    ref={inputSeconds}
                                    type="number"
                                    value={inputSecondsValue}
                                    setValue={setInputSecondsValue}
                                    placeHolder="00" 
                                    maxLength={2}
                                    max={59}
                                    min={0}
                                />
                                <span>seconds</span>
                            </div>
                            <div className='input-box'>
                                <InputText
                                    ref={inputFrames}
                                    type="number"
                                    value={inputFramesValue}
                                    setValue={setInputFramesValue}
                                    placeHolder="1" 
                                    maxLength={5}
                                    max={99999}
                                    min={1}
                                    required
                                />
                                <span>frames</span>
                            </div>
                            <div className='input-box'>
                                <InputText
                                    ref={inputMachines}
                                    type="number"
                                    value={inputMachinesValue}
                                    setValue={setInputMachinesValue}
                                    placeHolder="1" 
                                    maxLength={4}
                                    max={9999}
                                    min={1}
                                    required
                                />
                                <span>machines</span>
                            </div>
                        </div>
                    </div>
                    <div className='hide-app-div row alert-box' ref={alertBoxEmptyFields}>
                        <span><b>ALERT</b>: fill in the "<b>hours</b>", "<b>minutes</b>" or "<b>seconds</b>" fields before submitting!</span>
                    </div>
                    <div className='hide-app-div row alert-box' ref={alertBoxExists}>
                        <span><b>ALERT</b>: A render with the name "<b>{rendeNameValue}</b>" already exists. Add a different one!</span>
                    </div>
                    <div className='row'>
                        <div className="row box-write-name">
                            <form onSubmit={sendForm} className='form-add-render'>
                                <InputText
                                    ref={inputName}
                                    value={rendeNameValue}
                                    setValue={setRendeNameValue}
                                    placeHolder="Add a name for this render" 
                                    enableClearTextBtn={true}
                                    enableLeftIcon={true}
                                    leftIcon={plusIcon}
                                    maxLength={30}
                                    required
                                />
                                
                                <IconRoundedButton
                                    type='submit'
                                    highlightIcon={true}
                                    size='30px'
                                    svgIcon={plusIcon}
                                    title='Add new render time'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default HomePage

