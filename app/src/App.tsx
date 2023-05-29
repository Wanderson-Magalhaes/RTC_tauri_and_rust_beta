import React, { useEffect, useState } from 'react'
import GlobalStyle from './styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/userPersistedState'
import { appWindow } from '@tauri-apps/api/window'
import AppBorders from './components/AppBorders'
import Pagination from './components/Pagination'
import Header from './components/Header'
import LeftMenuBar from './components/LeftMenuBar'
import { Settings } from './Settings'
import { invoke } from '@tauri-apps/api'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { type } from '@tauri-apps/api/os';
const osType = await type()

// Set DropShadow
if (osType == "Windows_NT") invoke('set_window_shadow')

function App() {
  // Set useContext
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', Settings.appDefaultTheme)

  // UseState
  const [isAppMaximized, setAppBorderRadius] = useState<boolean>(false)
  const [appName, setAppName] = useState(Settings.appName)
  const [pageName, setPageName] = useState(Settings.appDefaultPage)
  const [focus, setFocus] = useState<boolean>(true)
  const [appLeftMenuLogo, setAppLeftMenuLogo] = useState(Settings.appLogo)

  useEffect(() => {
    setMaximized()
    updateAppName()
    changeLogo()
  }, [
    isAppMaximized,
    appName,
    pageName,
    theme
  ])

  // Check if window is Maximized or Restored
  appWindow.onResized(async () => {
    if (await appWindow.isMaximized()) {
      setAppBorderRadius(true)
    } else {
      setAppBorderRadius(false)
    }
  })

  // OnFocus
  appWindow.onFocusChanged(async ({ payload: focus }) => {
    if (focus) {
      setFocus(true)
    } else {
      setFocus(false)
    }
  })

  // Check if is Maximized when open
  async function setMaximized() {
    if (await appWindow.isMaximized()) {
      setAppBorderRadius(true)
    }
  }

  // Set appName on taskbar
  async function updateAppName() {
    await appWindow.setTitle(`${appName}: ${pageName}`)
  }

  // Update theme when user changes in OS
  appWindow.onThemeChanged(() => {
    appWindow.theme().then(theme => {
      theme == 'dark' ? setTheme(dark) : setTheme(light)
    })
  })
  // Change logo when change theme and load
  function changeLogo() {
    theme.title == dark.title ?
      setAppLeftMenuLogo(Settings.appLogo) :
      setAppLeftMenuLogo(Settings.appLogoDark)
  }

  // Prevent context menu and shortcuts
  function disable_web_functions() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function (e) {
      // Reload F5
      if ((e.ctrlKey && e.key === 'F5') || (e.key === 'F5')) {
        e.preventDefault()
        // Reload Ctrl + R
      } else if ((e.ctrlKey && e.key === 'r') || (e.ctrlKey && e.key === 'R')) {
        e.preventDefault()
        // Print
      } else if ((e.ctrlKey && e.key === 'p') || (e.ctrlKey && e.key === 'P')) {
        e.preventDefault()
        // Search
      } else if ((e.ctrlKey && e.key === 'f') || (e.ctrlKey && e.key === 'F') || (e.key === 'F3')) {
        e.preventDefault()
        // F7
      } else if ((e.key === 'F7')) {
        e.preventDefault()
      }
    }
  }
  if (window.location.hostname !== 'localhost') {
    disable_web_functions()
  } else if ((osType == "Linux") || (osType == "Darwin")) {
    disable_web_functions()
  }

  return (
    <ThemeProvider theme={theme}>
      {/* Global Styles */}
      <GlobalStyle />

      <AppBorders
        isMaximized={isAppMaximized}
        focus={focus}
        margin={osType == "Linux" ? (isAppMaximized ? "0" : theme.settings.appBorderMargin) : "0"}
        borderRadius={osType == "Linux" ? (isAppMaximized ? "0" : theme.settings.appBorderRadius) : "0"}
        borderColor={theme.colors.appBorderColor}
        className='app'
        isVisible={true}
      >
        {/* Left Menu */}
        <LeftMenuBar
          appLogo={appLeftMenuLogo}
          setPageName={setPageName}
          widthClosed={Settings.leftMenuWidthClosed}
          widthOpened={Settings.leftMenuWidthOpened}
          iconLeftPadding={Settings.leftMenuIconLeftPadding}
          textLeftPadding={Settings.leftMenuTextLeftPadding}
          defaultPage={Settings.appDefaultPage}
          toggleIconSize={Settings.leftMenuToggleIconSize}
          buttonsIconSize={Settings.leftMenuButtonsIconSize}
        />

        {/* Content */}
        <section className='right-column'>
          {/* Header */}
          <Header
            isAppMaximized={isAppMaximized}
            titleBarIcon={Settings.appTitleBarIcon}
            setTheme={setTheme}
            appName={appName}
            leftInformation={Settings.appTitleBarDescription}
            actualPageName={pageName}
            focus={focus}
          />

          {/* App Pages */}
          <Pagination
            setPage={pageName}
          />

          {/* Footer */}
          <footer className='footer'>
            <div className='left'>{Settings.appDeveloperCredits}</div>
            <div className='right'>{Settings.appVersion}</div>
          </footer>
        </section>
      </AppBorders>

    </ThemeProvider>

  );
}

export default App;
