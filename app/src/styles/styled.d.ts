import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            // Default Colors
            primary: string,
            secundary: string,
            accentColor: string,
            accentColor_dark: string,
            transparent: string,
            // Background Levels
            background: string,
            background_1: string,
            background_2: string,
            background_3: string,
            background_4: string,
            background_5: string,
            background_6: string,
            // Buttons Colors
            buttonColor: string,
            buttonBgColor: string,
            buttonBgHover: string,
            buttonBgPressed: string,
            // Input Colors
            inputColor: string,
            inputColorFocus: string,
            inputBgColor: string,
            inputBgHover: string,
            inputBgFocus: string,
            inputBorder: string,
            inputErrorBg: string,
            inputErrorBorder: string,
            inputCorrectBorder: string,
            // Link Colors
            linkColor: string,
            linkHover: string,
            linkActive: string,
            // Text Colors
            color: string,
            color_1: string,
            color_2: string,
            // App Colors
            appColorGreen: string,
            appColorRed: string,
            appColorYellow: string,
            appColorOrange: string,
            appColorPink: string,
            appColorPink_1: string,
            appBorderColor: string,
            // Icon Color
            appIconColor: string,
        },

        settings: {
            // Setings - Just for Linux
            appBorderMargin: string,
            appBorderRadius: string,
        }
    }
}