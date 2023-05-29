import React from 'react'
import { ClearText, Container, Input, InputIcon, Props } from './styled'
import { SvgIconClose } from '../SvgIcon'

const InputText: React.FC<Props> = React.forwardRef((props ,ref)=> {
    // Clear InputText
    const clearText = ()=>{
        if(props.setValue) props.setValue('')
    }

    // Left Icon
    let leftIcon: any
    if(props.enableLeftIcon){
        leftIcon = <InputIcon>{props.leftIcon}</InputIcon>
    }
    
    // Clear Button
    let clearBtn: any
    if(props.enableClearTextBtn){
        clearBtn = <ClearText onClick={clearText}><SvgIconClose size='16' /></ClearText>
    }

    return(
        <Container 
            id="input-text-container"
            value={props.value}
            borderRadius={props.borderRadius}
        >
            <Input
                ref={ref}
                type={props.type}
                value={props.value}
                placeholder={props.placeHolder}
                onKeyDown={props.onKeyDown}
                onKeyUp={props.onKeyUp}
                onFocus={props.onFocus}
                onScroll={props.onScroll}
                onWheel={props.onWheel}
                onWheelCapture={props.onWheelCapture}
                onChange={e => {
                    const { value, maxLength } = e.target;
                    const message = value.slice(0, maxLength);
                    maxLength > 0 ? (props.setValue ? props.setValue(message) : null) :
                    (props.setValue ? props.setValue(e.target.value) : null)
                }}
                required={props.required}
                enableClearTextBtn={props.enableClearTextBtn}
                enableLeftIcon={props.enableLeftIcon}
                autoComplete="none"
                max={props.max}
                min={props.min}
                maxLength={props.maxLength}
            />
            {clearBtn}
            {leftIcon}
        </Container>
    )    
})

export default InputText