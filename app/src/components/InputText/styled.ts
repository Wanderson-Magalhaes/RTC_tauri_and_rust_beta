import { shade } from 'polished'
import { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components'

export interface Props {
    value?: string
    type?: HTMLInputTypeAttribute | undefined;
    setValue?: React.Dispatch<any>
    ref?: React.Ref<HTMLInputElement>
    placeHolder?: string
    required?: boolean | undefined
    onKeyDown?(): void
    onKeyUp?(): void
    onFocus?(): void
    onScroll?(): void
    onWheel?(): void
    onWheelCapture?(): void
    borderRadius?: string
    enableClearTextBtn?: boolean
    enableLeftIcon?: boolean
    leftIcon?: any
    maxLength?: number | undefined
    max?: number | string | undefined;
    min?: number | string | undefined;
}

export const Container = styled.div<Props>`
    --border-radius: ${props => 
        props.borderRadius ?
            props.borderRadius : 
            props.theme.settings.appBorderRadius
    };
    --border-radius_btn: ${props => 
        props.borderRadius ?
            (parseInt(props.borderRadius) - 2).toString()+'px' : 
            (parseInt(props.theme.settings.appBorderRadius) - 2).toString()+'px'
    };
    & {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        flex: 1;
    }
    & .alert {
        border: 2px solid ${props => props.theme.colors.appColorOrange} !important;
    }
    & .error {
        border: 2px solid ${props => props.theme.colors.appColorRed} !important;
    }
`

export const ClearText = styled.div<Props>`
    & {
        position: absolute;
        right: 3px;
        top: 4px;
        width: 22px;
        height: 22px;
        border-radius: var(--border-radius_btn);
        -webkit-border-radius: var(--border-radius_btn);
        -moz-border-radius: var(--border-radius_btn);
        background-color: ${props => props.theme.colors.background_3};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
    }
    &:hover {
        background-color: ${props => props.theme.colors.accentColor};
    }
    &:active {
        background-color: ${props => props.theme.colors.appColorGreen};
    }
    & svg {
        pointer-events: none;
    }
    &:hover svg {
        filter: brightness(500%);
    }
    &:active svg {
        filter: brightness(500%);
    }
`

export const InputIcon = styled.div<Props>`
    & {
        position: absolute;
        left: 4px;
        top: 4px;
        height: 22px;
        width: 22px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
`

export const Input = styled.input<Props>`
    & {
        width: 100%;
        padding: 5px 12px;
        height: 30px;
        line-height: 30px;
        padding-right: ${props => props.enableClearTextBtn? '30px' : ''};
        padding-left: ${props => props.enableLeftIcon? '30px' : ''};
        border-radius: var(--border-radius);
        -webkit-border-radius: var(--border-radius);
        -moz-border-radius: var(--border-radius);
        outline: none;
        border: 2px solid ${props => props.theme.colors.inputBorder};
        background-color: ${props => props.theme.colors.inputBgColor};
        color: ${props => props.theme.colors.inputColor};
    }
    &:hover {
        background-color: ${props => props.theme.colors.inputBgHover};
        border: 2px solid ${props => shade(0.5, props.theme.colors.accentColor)};
    }
    &:focus {
        background-color: ${props => props.theme.colors.inputBgFocus};
        border: 2px solid ${props => props.theme.colors.accentColor};
        color: ${props => props.theme.colors.inputColorFocus};
    }
    &:focus::placeholder {
        color: ${props => props.theme.colors.inputColorFocus};
        opacity: 0.5;
    }
    &:required:focus:invalid {
        border: 2px solid ${props => props.theme.colors.appColorRed};
    }
    &:required:focus:valid {
        border: 2px solid ${props => props.theme.colors.accentColor};
    }
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        opacity: 0.75;
    }
    & .green-border {
        border: 2px solid ${props => props.theme.colors.appColorGreen} !important;
    }
`