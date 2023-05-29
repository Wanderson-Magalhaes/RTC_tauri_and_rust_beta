
// Import SVG
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';

export interface Props {
    size?: string;
    color?: string
}



export const SvgIconMenuOpened: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10Z"/></svg>
    )
}

export const SvgIconMenuClosed: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    )
}

export const SvgIconTimer: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M12 21q-1.85 0-3.488-.713T5.65 18.35q-1.225-1.225-1.938-2.863T3 12q0-1.1.25-2.138t.725-1.95Q4.45 7 5.112 6.213T6.6 4.8l6.8 6.8L12 13L6.6 7.6q-.75.9-1.175 2.013T5 12q0 2.9 2.05 4.95T12 19q2.9 0 4.95-2.05T19 12q0-2.675-1.713-4.612T13 5.1V7h-2V3h1q1.85 0 3.488.713T18.35 5.65q1.225 1.225 1.938 2.863T21 12q0 1.85-.713 3.488T18.35 18.35q-1.225 1.225-2.863 1.938T12 21Zm0-3q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm5-5q-.425 0-.713-.288T16 12q0-.425.288-.713T17 11q.425 0 .713.288T18 12q0 .425-.288.713T17 13ZM7 13q-.425 0-.713-.288T6 12q0-.425.288-.713T7 11q.425 0 .713.288T8 12q0 .425-.288.713T7 13Z"/></svg>
    )
}

export const SvgIconInfo: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256"><path fill={iconColor} d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm16-40a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8Zm-32-92a12 12 0 1 1 12 12a12 12 0 0 1-12-12Z"/></svg>
    )
}

export const SvgIconMinimize: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill={iconColor} d="M48 448h416v32H48z"/></svg>
    )
}

export const SvgIconMaximize: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill={iconColor} d="M472 48H40.335a24.027 24.027 0 0 0-24 24v384a24.027 24.027 0 0 0 24 24H472a24.027 24.027 0 0 0 24-24V72a24.027 24.027 0 0 0-24-24Zm-8 32v71.981l-415.665-.491V80ZM48.335 448V183.49l415.665.491V448Z"/></svg>
    )
}

export const SvgIconRestore: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill={iconColor} d="M352 153H40.247a24.028 24.028 0 0 0-24 24v281a24.028 24.028 0 0 0 24 24H352a24.028 24.028 0 0 0 24-24V177a24.028 24.028 0 0 0-24-24Zm-8 32v45.22H48.247V185ZM48.247 450V262.22H344V450Z"/><path fill={iconColor} d="M472 32H152a24.028 24.028 0 0 0-24 24v65h32V64h304v275.143h-56v32h64a24.028 24.028 0 0 0 24-24V56a24.028 24.028 0 0 0-24-24Z"/></svg>
    )
}

export const SvgIconClose: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46L13.46 12Z"/></svg>
    )
}

export const SvgIconApp: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg data-tauri-drag-region xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M4.5 21q-.625 0-1.063-.438T3 19.5v-1.9l4-3.55V21H4.5ZM8 21v-4h8v4H8Zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.438 1.063T19.5 21H17ZM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525q.275 0 .537.088T13 3.9l2 1.775L3 16.25Z"/></svg>
    )
}

export const SvgIconHome: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.489a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79v10.51Zm-2-1V9.978l-7-5.445l-7 5.445V19h14Z"/></svg>
    )
}

export const SvgIconSettings: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M19.43 12.98c.04-.32.07-.64.07-.98c0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73c0 .21-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7l.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/></svg>
    )
}

export const SvgIconSend: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32"><path fill={iconColor} d="m27.45 15.11l-22-11a1 1 0 0 0-1.08.12a1 1 0 0 0-.33 1L7 16L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78Zm-20.9 10L8.76 17H18v-2H8.76L6.55 6.89L24.76 16Z"/></svg>
    )
}

export const SvgIconSearch: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
    )
}

export const SvgIconRTC: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg width={size} height={size} version="1.1" viewBox="0 0 135.47 135.47" xmlns="http://www.w3.org/2000/svg">
            <path d="m12.849 19.6c-3.6078 0-6.5241 2.8949-6.5241 6.5459l-0.021704 82.245c0 3.4997 2.2469 6.3733 5.8978 6.719l0.64802 0.04289h110.26c3.7158 0 6.7407-3.0461 6.7407-6.7619v-82.05c0-3.6942-3.0249-6.7407-6.7407-6.7407h-110.26zm2.6355 7.4967h1.0806c1.9987 0 3.6075 1.6088 3.6075 3.6075v1.0806c0 1.9987-1.6088 3.6075-3.6075 3.6075h-1.0806c-1.9987 0-3.6075-1.6088-3.6075-3.6075v-1.0806c0-1.9987 1.6088-3.6075 3.6075-3.6075zm72.696 0h1.08c1.9987 0 3.608 1.6088 3.608 3.6075v1.0806c0 1.9987-1.6093 3.6075-3.608 3.6075h-1.08c-1.9987 0-3.608-1.6088-3.608-3.6075v-1.0806c0-1.9987 1.6093-3.6075 3.608-3.6075zm14.733 0h1.0806c1.9987 0 3.6075 1.6088 3.6075 3.6075v1.0806c0 1.9987-1.6088 3.6075-3.6075 3.6075h-1.0806c-1.9987 0-3.6075-1.6088-3.6075-3.6075v-1.0806c0-1.9987 1.6088-3.6075 3.6075-3.6075zm14.734 0h1.08c1.9987 0 3.6075 1.6088 3.6075 3.6075v1.0806c0 1.9987-1.6088 3.6075-3.6075 3.6075h-1.08c-1.9987 0-3.608-1.6088-3.608-3.6075v-1.0806c0-1.9987 1.6093-3.6075 3.608-3.6075zm-101.99 13.351h0.71262c1.3165 0 2.3766 1.0596 2.3766 2.3761v0.71314c0 1.3165-1.0601 2.3761-2.3766 2.3761h-0.71262c-1.3165 0-2.3766-1.0596-2.3766-2.3761v-0.71314c0-1.3165 1.0601-2.3761 2.3766-2.3761zm21.755 0.82062h80.754c2.3116 0 4.1692 1.8581 4.1692 4.1481v56.039c0 2.29-1.8577 4.1481-4.1692 4.1481h-80.754c-2.3116 0-4.1698-1.8581-4.1698-4.1481v-56.039c0-2.29 1.8582-4.1481 4.1698-4.1481zm-21.755 9.9596h0.71262c1.3165 0 2.3766 1.0596 2.3766 2.3761v0.71314c0 1.3165-1.0601 2.3761-2.3766 2.3761h-0.71262c-1.3165 0-2.3766-1.0596-2.3766-2.3761v-0.71314c0-1.3165 1.0601-2.3761 2.3766-2.3761zm87.552 6.9412c-8.1809 0-15.122 6.1981-15.122 15.329s6.776 15.205 15.205 15.205c7.5179 0 11.475-4.2393 13.156-7.9964 0.5364-1.1986-0.25755-2.5425-1.5224-2.9027l-1.6583-0.47232c-1.2648-0.36019-2.553 0.4119-3.2727 1.5064-1.1202 1.7036-3.1748 3.3367-6.703 3.3367-4.3796 0-8.4284-3.1812-8.4284-8.6765 0-6.1563 4.4206-8.9664 8.3457-8.9664 3.5326 0 5.519 1.6046 6.567 3.2665 0.69818 1.1071 1.9285 1.8668 3.1828 1.4712l1.6139-0.50901c1.2542-0.39555 2.052-1.7717 1.5162-2.9704-1.6678-3.7313-5.5847-7.6212-12.88-7.6212zm-62.487 0.62012a2.3812 2.3812 0 0 0-2.3812 2.3812v24.532a2.3812 2.3812 0 0 0 2.3812 2.3812h1.7658a2.3812 2.3812 0 0 0 2.3812-2.3812v-7.7329a0.79375 0.79375 0 0 1 0.79375-0.79375h0.72605a1.2627 1.2627 0 0 1 1.1379 0.7152l3.8711 8.0471a3.7881 3.7881 0 0 0 3.4137 2.1456h2.4267a1.4694 1.4694 0 0 0 1.3131-2.1286l-4.8819-9.7296c3.5946-1.2808 5.7847-4.2971 5.7847-8.2636 0-5.206-3.7188-9.1726-9.5033-9.1726h-9.2289zm23.551 0a2.3812 2.3812 0 0 0-2.3812 2.3812v1.4764a2.3812 2.3812 0 0 0 2.3812 2.3812h4.2447a2.3812 2.3812 0 0 1 2.3812 2.3812v18.293a2.3812 2.3812 0 0 0 2.3812 2.3812h1.7658a2.3812 2.3812 0 0 0 2.3812-2.3812v-18.293a2.3812 2.3812 0 0 1 2.3812-2.3812h4.286a2.3812 2.3812 0 0 0 2.3812-2.3812v-1.4764a2.3812 2.3812 0 0 0-2.3812-2.3812h-19.822zm-48.616 3.1972h0.71262c1.3165 0 2.3766 1.0596 2.3766 2.3761v0.71314c0 1.3165-1.0601 2.3766-2.3766 2.3766h-0.71262c-1.3165 0-2.3766-1.0601-2.3766-2.3766v-0.71314c0-1.3165 1.0601-2.3761 2.3766-2.3761zm31.593 2.4634h1.4614c2.6856 0 4.1315 1.3634 4.1315 3.5533 0 2.0659-1.4459 3.5533-4.1315 3.5533h-1.4614a2.3812 2.3812 0 0 1-2.3812-2.3812v-2.344a2.3812 2.3812 0 0 1 2.3812-2.3812zm-31.593 35.688h0.71262c1.3165 0 2.3766 1.0601 2.3766 2.3766v0.71262c0 1.3165-1.0601 2.3766-2.3766 2.3766h-0.71262c-1.3165 0-2.3766-1.0601-2.3766-2.3766v-0.71262c0-1.3165 1.0601-2.3766 2.3766-2.3766z" fill={iconColor} />
        </svg>
    )
}

export const SvgIconPlus: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
    )
}

export const SvgIconReload: React.FC<Props> = ({size, color})=>{
    const { colors } = useContext(ThemeContext)
    var iconColor = colors.appIconColor
    if(color) iconColor = color

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={iconColor} d="M12 21q-3.45 0-6.013-2.288T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.038T19 12q0-2.925-2.038-4.963T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924q1.212 1.213 1.925 2.85T21 12q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 21Zm2.8-4.8L11 12.4V7h2v4.6l3.2 3.2l-1.4 1.4Z"/></svg>
    )
}


export default {
    components: {
        SvgIconMenuOpened,
        SvgIconMenuClosed,
        SvgIconTimer,
        SvgIconInfo,
        SvgIconMinimize,
        SvgIconMaximize,
        SvgIconRestore,
        SvgIconClose,
        SvgIconApp,
        SvgIconHome,
        SvgIconSettings,
        SvgIconSend,
        SvgIconSearch,
        SvgIconRTC,
        SvgIconPlus,
        SvgIconReload
    }
}