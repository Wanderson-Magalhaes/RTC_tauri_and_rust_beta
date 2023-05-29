import { shade } from 'polished'
import { createGlobalStyle } from 'styled-components'
import { type } from '@tauri-apps/api/os';
const osType = await type()

export default createGlobalStyle`
    * {
        --app-border-radius: ${props => props.theme.settings.appBorderRadius};

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body{
        font-size: 0.84em;
        background-color: transparent;
        color: ${props => props.theme.colors.color};
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
        overflow: hidden;
        -webkit-overflow-scrolling: unset;
        text-rendering: optimizeLegibility !important;
        font-weight: 500;
    }
    body:not(input){
        user-select: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
    }
    // Set Abel font
    h1, h2, h3, input,
    .big-number,
    .percentage {
        font-family: 'Abel', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji' !important;
    }
    // Set Hx size
    h1, h2, h3 {
        font-size: 1em !important;
        letter-spacing: 0.04em !important;
        font-weight: bolder !important;
    }
    button {
        border-style: none;
        padding: 8px;
        border-radius: var(--app-border-radius);
        background-color: ${props => props.theme.colors.buttonBgColor};
        color: ${props => props.theme.colors.buttonColor};
    }
    button:hover {
        background-color: ${props => props.theme.colors.buttonBgHover};
    }
    button:active {
        background-color: ${props => props.theme.colors.buttonBgPressed};
    }
    input {
        border: none;
        padding: 7px 12px;
        border-radius: var(--app-border-radius);
        outline: none;
        border: 2px solid ${props => props.theme.colors.inputBorder};
        background-color: ${props => props.theme.colors.inputBgColor};
        color: ${props => props.theme.colors.inputColor};
    }
    input:hover {
        background-color: ${props => props.theme.colors.inputBgHover};
    }
    input:focus {
        background-color: ${props => props.theme.colors.inputBgFocus};
    }
    .app {
        transition: inherit;
    }
    #root {
        width: 100vw;
        height: 100vh;
        display: flex;
        text-rendering: geometricPrecision !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
        cursor: default !important;
    }
    img {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        pointer-events: none;
    }
    svg {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        pointer-events: none;
    }
    .preloader-app {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        width: 280px;
        aspect-ratio: 1/1;
        overflow: hidden;
    }
    .preloader-app .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.background}E6;
        filter: drop-shadow(0px 0px 6px rgb(0 0 0 / 0.3));
    }
    .preloader-app .content .app-name{
        font-weight: 500;
        color: ${props => props.theme.colors.color};
    }
    .preloader-app .content .percentage{
        font-size: 4.5em;
        font-weight: lighter;
    }
    .preloader-app .content .version{
        height: 20px;
        line-height: 20px;
        padding: 0 25px;
        border-radius: 10px;
        font-size: 0.8em;
        color: ${props => props.theme.colors.color_2};
        background-color: ${props => props.theme.colors.background_4};
    }
    .preloader-app .content .loading-text{
        margin-top: 5px;
        color: ${props => props.theme.colors.color_1};
    }

    /* Right Column */
    .right-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    /* Main Content */
    .main-content {
        display: flex;
        flex: 1;
        border-radius: 0 0 10px 10px;
        margin-right: 2px;
        background-color: ${props => props.theme.colors.background_5};
    }

    /* Footer */
    .footer {
        height: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 0.8em;
        color: ${props => props.theme.colors.color_2};
    }
    .footer .left {
        display: flex;
        padding-left: 10px;
    }
    .footer .right {
        display: flex;
        padding-right: 10px;
    }

    /* App Section */
    .app-container-column {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        padding-right: 1px;
        gap: 10px;
    }
    .app-section {
        margin: auto;
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-color: ${props => props.theme.colors.background_6};
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        box-shadow: inset 0 3px 0 ${props => props.theme.colors.accentColor_dark};
        padding-top: 3px;
        border-bottom: 0 solid transparent;
        overflow: hidden;
    }
    .app-section .title {    
        width: 100%;
        height: 26px;
        line-height: 26px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.85em;
        padding-left: 10px;
        padding-right: 10px;
    }
    .app-section .title .left {
        font-weight: 500;
        padding: 0;
        margin: 0;
        color: ${props => props.theme.colors.color_1};
    }
    .app-section .title .right {
        padding: 0;
        margin: 0;
        color: ${props => props.theme.colors.color_2};
    }
    .app-section .content {
        display: flex;
        flex-direction: column;
        padding: 10px;
        padding-top: 0;
        overflow: hidden;
        max-width: 100%;
        gap: 5px;
    }
    .app-section .content .scroll-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        overflow-y: auto;
        overflow-x: auto;
        background-color: ${props => props.theme.colors.background_5};
        border: 2px solid ${props => props.theme.colors.background_5};
        border-radius: 8px;
        padding: 8px;
    }
    .app-section .content .row{
        width: 100%;
        height: auto;
        line-height: 100%;
        padding: 0;
        margin: 0;
    }
    .app-section .content .row p{
        padding: 3px;
        margin: 3px;
    }
    .flex-column{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
    }
    .text-center {
        text-align: center;
    }
    .flex-1 {
        flex: 1;
    }
    .text-align-right{
        text-align: right;
    }
    .text-align-left{
        text-align: left;
    }

    // Custom Scrollbar
    /* width */
    ::-webkit-scrollbar {
        width: 7px;
        height: 8px;
        background: transparent;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.background};
        border-radius: 5px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => shade(0.3, props.theme.colors.accentColor)};
        border-radius: 4px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors.accentColor};
    }
    ::-webkit-scrollbar-thumb:active {
        background: ${props => props.theme.colors.appColorGreen};
    }
    ::-webkit-scrollbar-corner { 
        background: transparent;
    }

    // Hide app window
    .hide-app-window {
        display: none !important;
    }

    // Hide div
    .hide-app-div {
        display: none !important;
    }

    // Format Table
    // Set border-radius on the top-left and bottom-left of the first table data on the table row
    table {
        width: 100%;
        padding-bottom: 5px;
        border-spacing: 0px 2px;
    }
    table td{
        white-space:nowrap;
        font-size: 0.8em;
    }
    tr{
        border-radius: var(--app-border-radius);
    }
    thead tr {
        background-color: ${props => props.theme.colors.background_3};
        height: 28px;
    }
    thead tr th {
        white-space: nowrap;
        resize: horizontal;
        overflow: auto;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 0.9em;
        color: ${props => props.theme.colors.color_2};
    }
    thead tr th:hover {
        background-color: ${props => shade(0.2,props.theme.colors.background_6)};
    }
    thead tr .delete-column{
        padding-right: 8px;
    }
    thead tr .delete-column svg{
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.75;
    }
    table .size-min {
        width: 1%;
        max-width: min-content;
    }
    table .size-5 {
        width: 5%;
        max-width: 5%;
    }
    table .size-10 {
        width: 10%;
        max-width: 10%;
    }
    table .size-50 {
        width: 50%;
    }
    table .no-resize {
        resize: none;
        overflow: hidden;
    }
    table .hide {
        display: none;
    }
    table .text-left {
        text-align: left;
        padding-left: 12px;
    }
    table .text-right {
        text-align: right;
        padding-right: 12px;
    }
    table .button-left {
        display: flex;
        align-items: center;
        justify-content: right;
    }
    table .button-left svg {
        pointer-events: none !important;
    }
    tbody tr {
        background-color: ${props => props.theme.colors.background_6};
        color: ${props => props.theme.colors.color_1};
    }
    tbody tr:hover {
        background-color: ${props => shade(0.5,props.theme.colors.accentColor)}80;
        color: ${props => props.theme.colors.color};
    }
    tbody tr td .button-cell {
        height: 24px;
        width: 24px;
        padding: 0;
        display: flex;
        justify-content: flex-end;
    }
    table .button-left {
        float: right;
        height: 24px;
        width: 24px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        margin: 2px;;
    }
    table tr td span {
        color: ${props => props.theme.colors.accentColor};
    }
    
    td:first-child,
    th:first-child {
        border-radius: 10px 0 0 10px;
    }

    // Set border-radius on the top-right and bottom-right of the last table data on the table row
    td:last-child,
    th:last-child {
        border-radius: 0 var(--app-border-radius) var(--app-border-radius) 0;
    }

    // Selection Color
    ::-moz-selection { /* Code for Firefox */
        color: white;
        background: ${props => props.theme.colors.accentColor};
    }

    ::selection {
        color: white;
        background: ${props => props.theme.colors.accentColor};
    }
    
`;