import { shade } from 'polished';

export default {
    title: 'light',

    colors: {
        // Default Colors
        primary: '#1B1D23',
        secundary: '#454545',
        accentColor: '#62AEEF',
        accentColor_dark: shade(0.2, '#62AEEF'),
        transparent: 'transparent',
        // Background Levels
        background: '#c1c1c1',
        background_1: '#c8c8c8',
        background_2: '#cfcfcf',
        background_3: '#d6d6d6',
        background_4: '#dddddd',
        background_5: '#e3e3e3',
        background_6: '#f8f8f8',
        // Buttons Colors
        buttonColor: '#d7dce4',
        buttonBgColor: shade(0.35, '#62AEEF'),
        buttonBgHover: shade(0, '#62AEEF'),
        buttonBgPressed: '#E06B74',
        // Input Colors
        inputColor: '#333',
        inputColorFocus: '#F5F5F5',
        inputBgColor: '#c1c1c1',
        inputBgHover: '#cfcfcf',
        inputBgFocus: '#707070',
        inputBorder: '#c1c1c1',
        inputErrorBg: '#24273050',
        inputErrorBorder: '#E06B74',
        inputCorrectBorder: '#98C379',
        // Link Colors
        linkColor: shade(0.35, '#62AEEF'),
        linkHover: shade(0, '#62AEEF'),
        linkActive: '#E06B74',
        // Text Colors
        color: '#333',
        color_1: '#454545',
        color_2: '#808080',
        // App Colors
        appColorGreen: '#98C379',
        appColorRed: '#E06B74',
        appColorYellow: '#E5C07B',
        appColorOrange: '#d88d19',
        appColorPink: '#ff008c',
        appColorPink_1: '#C678DD',
        appBorderColor: '#D6D6D6',
        // Icon Color
        appIconColor: '#333',
    },

    settings: {
        // Setings - Just for Linux
        appBorderMargin: '5px',
        appBorderRadius: '10px',
    }
}