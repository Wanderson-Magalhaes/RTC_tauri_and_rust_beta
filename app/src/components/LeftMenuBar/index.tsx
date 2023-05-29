import React, { useContext, useRef, useState } from 'react'
import IconRoundedButton from '../IconRoundedButton'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Content, Props } from './styles'
import { 
    SvgIconMenuClosed, 
    SvgIconMenuOpened,
    SvgIconHome,
    SvgIconInfo,
    SvgIconSettings
} from '../SvgIcon'
import { Settings } from '../../Settings'

const LeftMenuBar: React.FC<Props> = ({
    appLogo,
    setPageName,
    widthClosed,
    widthOpened,
    iconLeftPadding,
    textLeftPadding,
    defaultPage,
    toggleIconSize,
    buttonsIconSize
})=>{
    // SvgIcons
    const svgIconMenuClosed = <SvgIconMenuClosed size={toggleIconSize ? toggleIconSize : '24'} />
    const svgIconMenuOpened = <SvgIconMenuOpened size={toggleIconSize ? toggleIconSize : '24'} />

    // useRef
    const menu = useRef<HTMLElement>(null)
    const logoImg = useRef<HTMLImageElement>(null)

    // Set useContext
    const theme = useContext(ThemeContext)

    // UseState
    const [ isOpened, setIsOpened ] = useState<boolean>(false)

    // Toggle Open/Close menu bar
    function toggleMenu(){
        if(isOpened){
            if(menu.current) menu.current.style.width = widthClosed ? widthClosed : '56px'
            if(logoImg.current) logoImg.current.style.cssText = `
                opacity: 0;
                left: -${widthOpened ? widthOpened : '240px'};
                transition: 0.75s;
            `
            setIsOpened(false)
        } else {
            if(menu.current) menu.current.style.width = '240px'
            if(logoImg.current) logoImg.current.style.cssText = `
                opacity: 1;
                left: 0;
                transition: 1.2s;
            `
            setIsOpened(true)
        }
    }

    // Change Page
    function changePage(event: any){
        
        var page = event.target.getAttribute('page-name')
        var isActivated = event.target.getAttribute('is-ctivated')

        // Remove selection
        if(menu.current && isActivated === 'true') {
            var btns = menu.current.querySelectorAll('a')
            btns.forEach(btn => {
                btn.classList.remove('menu-active')
            });
        }

        // Select clicked btn
        if(isActivated === 'true'){
            event.target.setAttribute('class','menu-active')
        }

        // Close menu if opened
        if(isOpened) toggleMenu()

        // Open page
        if(page){
            setPageName(page)
        }
    }

    return(
        <Content
            setPageName={setPageName}
            widthClosed={widthClosed}
            widthOpened={widthOpened}
            iconLeftPadding={iconLeftPadding}
            textLeftPadding={textLeftPadding}
            ref={menu}
            data-tauri-drag-region>
            <div className='toogle-menu'>
                <IconRoundedButton
                    onClick={toggleMenu}
                    title={isOpened ? 'Close menu' : 'Open menu'}
                    isActive={isOpened}
                    size='52px'
                    svgIcon={isOpened ? svgIconMenuOpened : svgIconMenuClosed}
                    colorDefault={theme.colors.background}
                    colorHover={theme.colors.buttonBgHover}
                    colorPressed={theme.colors.buttonBgPressed}
                    colorActive={shade(0.2, theme.colors.accentColor)}
                    highlightIcon={true}
                    radius='8px'
                />
                <div data-tauri-drag-region>
                    <img data-tauri-drag-region ref={logoImg} src={appLogo} height={Settings.appLogoHeight} />
                </div>
            </div>
            <nav  className='nav-menus'>
                <div className='div-line'></div>
                <ul className='flex-1'>
                    <li>
                        <a className={defaultPage == 'home' ? 'menu-active' : ''}  is-ctivated='true' href="#" onClick={changePage} title='Home page' page-name='home'>
                            <SvgIconHome size={buttonsIconSize ? buttonsIconSize : '24'} />
                            <span>Home</span>
                        </a> 
                    </li>
                    <li className='hide-app-div'>
                        <a className={defaultPage == 'about' ? 'menu-active' : ''} href="#" onClick={changePage} is-ctivated='true' title='Calculator' page-name='about'>
                            <SvgIconSettings size={buttonsIconSize ? buttonsIconSize : '24'} />
                            <span>About</span>
                        </a>
                    </li>
                </ul>
                <ul className='bottom-menus'>
                    <li>
                        <a className={defaultPage == 'about' ? 'menu-active' : ''} href="#" onClick={changePage} is-ctivated='true' title='About RTC' page-name='about'>
                            <SvgIconInfo size={buttonsIconSize ? buttonsIconSize : '24'} />
                            <span>About</span>
                        </a>
                    </li>
                </ul>
                <div className='div-line'></div>
            </nav>
        </Content>
    )
}

export default LeftMenuBar