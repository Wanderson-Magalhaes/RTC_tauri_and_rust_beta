import styled from 'styled-components'
import { type } from '@tauri-apps/api/os';
const osType = await type()

export interface Props {
    isOpened?: boolean
    appLogo?: string
    setPageName: React.Dispatch<any>
    widthClosed?: string
    widthOpened?: string
    iconLeftPadding?: string
    textLeftPadding?: string
    defaultPage?: string
    toggleIconSize?: string
    buttonsIconSize?: string
}

export const Content = styled.aside<Props>`
    /* Left Column */
    & {
        display: flex;
        flex-direction: column;
        width: ${props => props.widthClosed ? props.widthClosed : '56px'};
        min-width: ${props => props.widthClosed ? props.widthClosed : '56px'};
        height: 100%;
        overflow: hidden;
        background-color: ${props => props.theme.colors.background};
        transition: 0.5s;
        transition-timing-function: ease-in-out;
        transition-property: width;
    }
    & .toogle-menu {
        padding: 2px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    & .toogle-menu div {
        position: relative;
        z-index: 1;
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;
        padding-right: 12px;
        border-left: 2px solid ${props => props.theme.colors.background};
        overflow: hidden;
    }
    & .toogle-menu div img {
        position: relative;
        left: -200px;
        margin: auto;
        -webkit-user-drag: none;
        opacity: 0;
        transition: 1s;
        transition-timing-function: ease-in-out;
    }
    // Nav box
    & nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-bottom: 19px;
        overflow: hidden;
    }
    /* Nav Menu */
    .nav-menus .div-line {
        flex: 1;
        max-height: 1px;
        height: 1px;
        background-color: ${props => props.theme.colors.background_2};
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 8px;
        margin-right: 8px;
    }
    .nav-menus ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }
    & nav .bottom-menus {
        padding-bottom: 10px;
    }
    .nav-menus ul li a {
        position: relative;
        display: flex;
        height: 50px;
        padding-left: ${props => props.iconLeftPadding ? props.iconLeftPadding : '13px'};
        margin-left: 2px;
        margin-right: 2px;
        text-decoration: none;
        transition-property: background-color;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        color: ${props => props.theme.colors.color_1};
        margin-bottom: 2px;
        font-size: 0.9em;
        border-left: 2px solid transparent;
        outline: none;
        -webkit-tap-highlight-color: transparent !important;
        -webkit-user-select: none; /* Chrome/Safari */
        -webkit-user-drag: none;
        -moz-window-dragging: none;
    }
    .nav-menus ul li a:hover {
        background-color: ${props => props.theme.colors.background_2};
    }
    .nav-menus ul li a:active {
        background-color: ${props => props.theme.colors.background_5};
    }
    .nav-menus ul li a span {
        padding-left: ${props => props.textLeftPadding ? props.textLeftPadding : '16px'};
        pointer-events: none;
        margin: auto 0;
    }
    .nav-menus ul li a svg {
        pointer-events: none;
        margin: auto 0;
        min-width: 24px;
        min-width: 24px;
    }
    .nav-menus .menu-active {
        border-left: 2px solid ${props => props.theme.colors.accentColor};
        border-radius: 8px 0 0 8px;
        -webkit-border-radius: 8px 0 0 8px;
        -moz-border-radius: 8px 0 0 8px;
        background-color: ${props => props.theme.colors.background_5};
        margin-right: 0;
        outline: none;
        pointer-events: none;
        -webkit-tap-highlight-color: transparent !important;
        box-shadow: none !important;
        -webkit-user-select: none; /* Chrome/Safari */
        user-select: none;
    }
    .nav-menus .menu-active:hover,.menu-active:active {
        border-left: 2px solid ${props => props.theme.colors.accentColor};
        border-radius: 8px 0 0 8px;
        -webkit-border-radius: 8px 0 0 8px;
        -moz-border-radius: 8px 0 0 8px;
        background-color: ${props => props.theme.colors.background_5};
        margin-right: 0;
        outline: none;
        pointer-events: none;
        box-shadow: none !important;
        -webkit-tap-highlight-color: transparent !important;
        -webkit-user-select: none; /* Chrome/Safari */
        user-select: none;
    }
    .nav-menus .menu-active::after {
        content: "";
        position: absolute;
        top: -10px;
        right: 0;
        width: 30px;
        height: 10px;
        background-color: transparent;
        border-bottom-right-radius: 10px;
        -webkit-border-bottom-right-radius: 10px;
        box-shadow: 20px 0 0 0 ${props => props.theme.colors.background_5};
        z-index: 999;
    }
    .nav-menus .menu-active::before {
        content: "";
        position: absolute;
        bottom: -10px;
        right: 0;
        width: 30px;
        height: 10px;
        background-color: transparent;
        border-top-right-radius: 10px;
        -webkit-border-top-right-radius: 10px;
        box-shadow: 20px 0 0 0 ${props => props.theme.colors.background_5};
        z-index: 999;
    }
    a, a:visited { outline: none; }
    a:hover,
    a:active,
    a:focus {
        -webkit-tap-highlight-color: transparent !important;
        -webkit-user-select: none; /* Chrome/Safari */
        outline: none;
        text-decoration: none;
    }
`