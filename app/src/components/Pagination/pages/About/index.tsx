import React from 'react'
import { Container, Props } from './styles'
import { Settings } from '../../../../Settings'

const AboutPage: React.FC<Props> = ({pageName, visible})=>{
    return(
        <Container className={`app-container-column ${visible ? "" : "hide-page"}`}>            
            <section className="app-section flex-1">
                <div className="title">
                    <span className='left'>ABOUT BRC</span>
                    <span className='right'>information page</span>
                </div>
                <div className="content box-time flex-column">
                    <div className='row app-image'>
                        <img src={Settings.appLogoAbout} height="120" />
                    </div>
                    <div className='row app-info-box'>
                        <div className='left'>name:</div>
                        <div className='right'><b>{Settings.appName}</b></div>
                    </div>
                    <div className='row app-info-box'>
                        <div className='left'>version:</div>
                        <div className='right'>{Settings.appVersion}</div>
                    </div>
                    <div className='row app-info-box'>
                        <div className='left'>development credits:</div>
                        <div className='right'>{Settings.appDeveloperCredits}</div>
                    </div>
                    <div className='row app-info-box'>
                        <div className='left'>email:</div>
                        <div className='right user_selection'>{Settings.appDeveloperEmail}</div>
                    </div>
                    <div className='row app-info-box'>
                        <div className='left'>framework:</div>
                        <div className='right'>Tauri 1.3 with React</div>
                    </div>
                    <div className='row app-info-box'>
                        <div className='left'>languages:</div>
                        <div className='right'>TypeScript (frontend) and Rust (backend)</div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default AboutPage