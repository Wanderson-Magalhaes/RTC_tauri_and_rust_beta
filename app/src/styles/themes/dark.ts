import { shade } from 'polished';

export default {
    title: 'dark',

    colors: {
        // Default Colors
        primary: '#1B1D23',
        secundary: '#98C379',
        accentColor: '#62AEEF',
        accentColor_dark: shade(0.1, '#62AEEF'),
        transparent: 'transparent',
        // Background Levels
        background: '#1B1D23',
        background_1: '#1E2027',
        background_2: '#282C33',
        background_3: '#272C36',
        background_4: '#292E39',
        background_5: '#2C313C',
        background_6: '#343B48',
        // Buttons Colors
        buttonColor: '#d7dce4',
        buttonBgColor: shade(0.35, '#62AEEF'),
        buttonBgHover: shade(0, '#62AEEF'),
        buttonBgPressed: '#98C379',
        // Input Colors
        inputColor: '#B1B7C3',
        inputColorFocus: '#B1B7C3',
        inputBgColor: '#1B1D23',
        inputBgHover: '#1E2027',
        inputBgFocus: '#1B1D23',
        inputBorder: '#1B1D23',
        inputErrorBg: '#1E2027',
        inputErrorBorder: '#E06B74',
        inputCorrectBorder: '#98C379',
        // Link Colors
        linkColor: shade(0.35, '#62AEEF'),
        linkHover: shade(0, '#62AEEF'),
        linkActive: '#E06B74',
        // Text Colors
        color: '#B1B7C3',
        color_1: '#969DAB',
        color_2: '#727B8C',
        // App Colors
        appColorGreen: '#98C379',
        appColorRed: '#E06B74',
        appColorYellow: '#E5C07B',
        appColorOrange: '#D48100',
        appColorPink: '#ff008c',
        appColorPink_1: '#C678DD',
        appBorderColor: '#282C33',
        // Icon Color
        appIconColor: '#B1B7C3',
    },

    settings: {
        // Setings - Just for Linux
        appBorderMargin: '5px',
        appBorderRadius: '10px',
    }
}