import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { Props, Content } from './styles'
import { shade } from 'polished'
import IconRoundedButton from '../IconRoundedButton'
import { appWindow } from '@tauri-apps/api/window'
import { type } from '@tauri-apps/api/os';
const osType = await type()

// Themes
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

// SVG Icons
import {
    SvgIconClose,
    SvgIconMaximize, 
    SvgIconMinimize, 
    SvgIconRestore 
} from '../SvgIcon'


const Header: React.FC<Props> = ({
    focus,
    titleBarIcon,
    isAppMaximized, 
    setTheme, 
    appName,
    leftInformation,
    actualPageName
})=>{
    // Set useContext
    const theme = useContext(ThemeContext)

    // SvgIcons
    const svgIconMinimize = <SvgIconMinimize size='14' />
    const svgIconMaximize = <SvgIconMaximize size='14' />
    const svgIconRestore = <SvgIconRestore size='14' />
    const svgIconClose = <SvgIconClose size='14' />

    // Toggle theme
    const toggleTheme = ()=>{
        setTheme(theme.title == 'dark' ? light : dark)
    }

    // Title Bar Buttons - Check OS
    // Title Bar for Windows and Linux only
    var titleBarButtons: any
    if(osType != "Darwin") {
      titleBarButtons = 
        <div className='buttons-box'>
          <div id="titlebar-minimize">
            <IconRoundedButton
              onClick={() => { appWindow.minimize() }}
              title='Minimize'
              size='30px'
              svgIcon={svgIconMinimize}
              colorDefault={theme.colors.background}
              colorHover={theme.colors.buttonBgHover}
              colorPressed={theme.colors.appColorYellow}
              highlightIcon={true}
              radius='8px'
            />
          </div>
          <div id="titlebar-maximize">
            <IconRoundedButton
              onClick={() => { appWindow.toggleMaximize() }}
              title={isAppMaximized ? "Restore" : "Maximize"}
              size='30px'
              svgIcon={isAppMaximized ? svgIconRestore : svgIconMaximize}
              colorDefault={theme.colors.background}
              colorHover={theme.colors.buttonBgHover}
              colorPressed={theme.colors.appColorGreen}
              highlightIcon={true}
              radius='8px'
            />
          </div>
          <div id="titlebar-close">
            <IconRoundedButton
              onClick={() => { appWindow.close() }}
              title='Close'
              size='30px'
              svgIcon={svgIconClose}
              colorDefault={theme.colors.background}
              colorHover={theme.colors.buttonBgHover}
              colorPressed={theme.colors.appColorRed}
              highlightIcon={true}
              radius='8px'
            />
          </div>
        </div>
    }
    
    return(
        <Content
          focus={focus}
          titleBarIcon={titleBarIcon} 
          data-tauri-drag-region
          className='header'
        >
          <div className='title-bar'>
            <div data-tauri-drag-region className='icon-title'>
              {titleBarIcon}
              <h1 data-tauri-drag-region>{appName?.toUpperCase()}</h1>
            </div>
            <div className='buttons'>
              <div title='Toggle theme' className='switch'>
                <Switch
                  onChange={toggleTheme}
                  checked={theme.title == 'dark'}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  width={30}
                  height={16}
                  handleDiameter={12}
                  offColor={shade(0.6, theme.colors.accentColor)}
                  onColor={theme.colors.accentColor}
                />
              </div>
              
              {titleBarButtons}
            </div>
          </div>
          <div className='info-bar'>
            <span>{leftInformation}</span>
            <span>| <b>{actualPageName?.toUpperCase()}</b></span>
          </div>
        </Content>
    )
}

export default Header