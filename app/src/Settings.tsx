// Import Assets
import Logo from './assets/app_logo.png'
import LogoDark from './assets/app_logo_dark.png'
import LogoAbout from './assets/app_logo_about.png'
import { SvgIconRTC } from './components/SvgIcon'

// Default Theme
import dark from './styles/themes/dark'

// App Settings
export class Settings {
    // General
    /** Default app name */
    static appName: string = 'Render Time Calculator'
    /** Default version */
    static appVersion: string = 'v3.0.0 Alpha'
    /** Choose the application's default theme before it is modified by the user */
    static appDefaultTheme: any = dark
    /** Choose your app's home page when running */
    static appDefaultPage: string = 'home'
    /** Information on the lower left side of the title bar */
    static appTitleBarDescription: string = 'App to calculate estimated rendering time'
    /** Developer credits that will be at the bottom of the application on the left side */
    static appDeveloperCredits: string = 'by: Wanderson M. Pimenta'
    /** Add an email if you want to use it at some other time. Not set by default anywhere! */
    static appDeveloperEmail: string = 'wanderson.m.pimenta@gmail.com'
    /** Add a logo to your application, PNG or SVG. */
    static appLogo: string = Logo
    /** Add a dark logo to your application, PNG or SVG. */
    static appLogoDark: string = LogoDark
    /** Add a logo page about */
    static appLogoAbout: string = LogoAbout
    /** Set logo size based on height */
    static appLogoHeight: string = '32'
    /** Set title bar icon size */
    static appTitleBarIconSize: string = '22'
    /** Add a title bar icon */
    static appTitleBarIcon: any = <SvgIconRTC size={this.appTitleBarIconSize}/>

    // Left Menu
    /** Left menu toggle button icon size */
    static leftMenuToggleIconSize: string = '24'
    /** Left menu buttons icon size */
    static leftMenuButtonsIconSize: string = '24'
    /** Initial width of the left menu bar */
    static leftMenuWidthClosed: string = '56px'
    /** Width of the left menu after being expanded */
    static leftMenuWidthOpened: string = '240px'
    /** Adjust the left padding of the menu button icons as you define the initial width */
    static leftMenuIconLeftPadding: string = '13px'
    /** Adjust the left padding of menu button texts as you define the initial width */
    static leftMenuTextLeftPadding: string = '16px'

    // Splash Screen
    /** Text that appears when the application is loading on the Splash Screen */
    static splashScreenLoadingText: string = 'loading...'
    /** Add a width for the Splash Screen preloader */
    static splashScreenStrokeWidth: number = 8
    /** Add a width for the background circle */
    static splashScreenBgStrokeWidth: number = 3
    /** Add a type to the preloader's Stroke Line Cap, there is: round: adds a radius
     * that smooths out the start and end points, which is controlled by the stroke-width,
     * butt (default): ends the stroke with a sharp 90-degree angle and square: similar to
     * butt except that it extends the stroke beyond the length of the path 
    */
    static splashScreenStrokeLinecap: any = 'round'
    /** Time in milliseconds that will update the Splash Screen loading */
    static splashScreenUpdateMilliseconds: number = 40
    /** How many percents will Splash Screen update per update */
    static splashScreenUpdateSteps: number = 2
}