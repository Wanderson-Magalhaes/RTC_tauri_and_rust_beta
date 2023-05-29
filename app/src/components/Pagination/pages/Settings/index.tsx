import React from 'react'
import { Container, Props } from './styles'

const SettingsPage: React.FC<Props> = ({pageName, visible})=>{
    return(
        <Container className={`app-container-column ${visible ? "" : "hide-page"}`}>            
            <section className="app-section flex-1">
                <div className="title">
                    <span className='left'>LEFT BOX TITLE</span>
                    <span className='right'>Add some information on the right side here</span>
                </div>
                <div className="content box-time flex-column">
                    <h1>SETTINGS PAGE</h1>
                </div>
            </section>
        </Container>
    )
}

export default SettingsPage