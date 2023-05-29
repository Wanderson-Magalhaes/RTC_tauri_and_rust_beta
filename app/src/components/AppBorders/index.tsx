import React from 'react'
import { Border, Props } from './styles'
import { type } from '@tauri-apps/api/os';
const osType = await type()

const AppBorders: React.FC<Props> = ({
    ref,
    children, 
    borderRadius, 
    borderColor, 
    margin, 
    isMaximized ,
    focus,
    className,
    isVisible
}) => {

    // Add Top Bar For MacOS
    var topBarMacOS: any
    if(osType == "Darwin") {
        topBarMacOS = <div data-tauri-drag-region className='mac-os-bar'></div>
    }
    return(
        <Border
            borderRadius={borderRadius}
            borderColor={borderColor}
            margin={margin}
            isMaximized={isMaximized}
            focus={focus}
            className={`${className} ${isVisible ? "" : "hide-app-window"}`}
            isVisible={isVisible}
        >
            {topBarMacOS}
            <div className='childrens'>
                {children}
            </div>            
        </Border>
    )
}

export default AppBorders