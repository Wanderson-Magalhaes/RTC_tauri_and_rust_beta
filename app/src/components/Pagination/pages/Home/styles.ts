import styled from 'styled-components'

export interface Props {
    pageName?: string
    visible?: boolean
}

export const Container = styled.div`
    &{
        display: flex;
        flex: 1;
        overflow-y: auto;
        user-select: none;
        min-width: 400px;
    }
    .big-number {
        font-size: 3em;
        font-weight: 100;
    }
    .big-number p {
        padding-top: 10px !important;
        color: ${props => props.theme.colors.accentColor_dark};
    }
    .description {    
        line-height: 0%;
    }
    .description p {
        position: relative;
        line-height: 0%;
        position: relative;
        text-transform: uppercase;
        font-size: 0.7em;
        height: 5px;
        top: -5px;
        color: ${props => props.theme.colors.color_2}
    }
    .extra-info {
        margin: auto;
        width: 80%;
        border-radius: 12px;
        font-size: 0.9em;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.secundary};
    }
    .box-write-name {
        background-color: ${props => props.theme.colors.background_3};
        padding: 10px !important;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 8px;
    }
    .box-write-name span {
        white-space: nowrap;
    }
    .box-write-name b {
        font-size: 1.2em;
        color: ${props => props.theme.colors.appColorPink};
    }
    .box-write-name i {
        font-size: 1.2em;
        color: ${props => props.theme.colors.accentColor};
    }
    .form-add-render {
        display: flex;
        flex-direction: row;
        flex: 1;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
    }
    // Inputs time box
    .input-time-container {
        position: relative;
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: row;
        gap: 4px;
        background-color: ${props => props.theme.colors.background_5};
    }
    // Reset button
    .reset-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        margin-left: 4px;
    }
    .input-box {
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 20%;
        gap: 2px;
        background-color: ${props => props.theme.colors.background_6};
    }
    .input-box input {
        text-align: center;
    }
    .input-box input::-webkit-outer-spin-button,
    .input-box input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -webkit-touch-callout: none;
        margin: 0;
    }
    .input-box span {
        color: ${props => props.theme.colors.color_1};
        opacity: 0.5;
    }
    // Alert box
    .alert-box {
        font-size: 0.8em;
        padding: 5px !important;
        border-radius: 8px;
        color: ${props => props.theme.colors.color};
        border: 2px solid ${props => props.theme.colors.appColorRed};
        background-color: ${props => props.theme.colors.background};
    }
    .alert-box b {
        color: ${props => props.theme.colors.appColorRed};
    }
`