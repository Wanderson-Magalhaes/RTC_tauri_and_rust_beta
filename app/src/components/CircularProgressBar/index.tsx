import React from 'react'
import { Content, Props } from './styles'

const CircularProgressBar: React.FC<Props> = ({
    value,
    endValue,
    ref,
    rotate,
    strokeLinecap,
    dropShadow,
    viewBoxSize,
    strokeWidth,
    strokeColor,
    bgStrokeWidth,
    bgStrokeColor,
    text,
    textSize,
    textColor,
    textPrefix,
    textSuffix,
    transitionTime,
    children
})=>{
    return(
        <Content 
            value={value}
            endValue={endValue}
            ref={ref}
            rotate={rotate}
            strokeLinecap={strokeLinecap}
            dropShadow={dropShadow}
            viewBoxSize={viewBoxSize}
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            bgStrokeWidth={bgStrokeWidth}
            bgStrokeColor={bgStrokeColor}
            text={text}
            textSize={textSize}
            textColor={textColor}
            textPrefix={textPrefix}
            textSuffix={textSuffix}
            transitionTime={transitionTime}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={viewBoxSize ? `0 0 ${viewBoxSize} ${viewBoxSize}` : '0 0 210 210'}>
                <circle 
                    cx="50%" 
                    cy="50%" 
                    r="100"
                    stroke={bgStrokeColor ? bgStrokeColor : '#f0f0f0'} 
                    strokeWidth={bgStrokeWidth ? bgStrokeWidth : 10}
                />
                <circle 
                    cx="50%" 
                    cy="50%" 
                    r="100"
                    stroke={value ? (strokeColor ? strokeColor : 'deepskyblue') : 'transparent'} 
                    strokeLinecap={strokeLinecap ? strokeLinecap : 'round'} 
                    strokeWidth={strokeWidth ? strokeWidth : 6}
                    strokeDasharray={625}
                    strokeDashoffset={625 - (625 * (value ? value : 50)) / (endValue ? endValue : 100)}
                />
            </svg>
            <div className='children'>{children}</div>
            {text ? <div className='text-inside'>{textPrefix}{text}{textSuffix}</div> : ''}
        </Content>
    )
}

export default CircularProgressBar