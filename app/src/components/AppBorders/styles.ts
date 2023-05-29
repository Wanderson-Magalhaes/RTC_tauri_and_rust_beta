import styled from 'styled-components'
import { type } from '@tauri-apps/api/os';
const osType = await type()

export interface Props {
    ref?: any
    children?: any
    borderRadius?: string
    borderColor?: string
    isMaximized?: boolean
    focus?: boolean
    margin?: string
    className?: any
    isVisible: boolean
}

export const Border = styled.div<Props>`
    &{
        position: absolute;
        left: ${props => props.margin};
        right: ${props => props.margin};
        top: ${props => props.margin};
        bottom: ${props => props.margin};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: wrap;
        text-align: center;
        border-radius: ${props => props.borderRadius};
        -webkit-border-radius: ${props => props.borderRadius};
        -moz-border-radius: ${props => props.borderRadius};
        overflow: hidden;
        box-shadow: 0 0 ${osType != "Darwin" ? props => props.margin : "0"} ${props => props.focus ? '#000000E6' : '#00000066'};
        border: ${osType != "Darwin" ? props => props.isMaximized ? "0px" : "1px" : "0"} solid ${props => props.focus ? props => props.theme.colors.appBorderColor : props.theme.colors.background};
        background-color: ${props => props.theme.colors.background};
    }
    & .mac-os-bar {
        background-color: ${props => props.theme.colors.background};
        width: 100%;
        height: 25px;
        min-height: 25px;
        border: 1px solid ${props => props.theme.colors.background_1};
        flex: 0;
    }
    & .childrens {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
`