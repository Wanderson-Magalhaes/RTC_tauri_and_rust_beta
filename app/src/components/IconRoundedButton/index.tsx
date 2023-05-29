import React from 'react'
import { Button, Props } from './styles'

const IconRoundedButton: React.FC<Props> = ({
    id,
    ref,
    type,
    onClick,
    isActive,
    svgIcon,
    highlightIcon,
    size,
    colorDefault,
    colorHover,
    colorPressed,
    colorActive,
    radius,
    title
})=>{

    return(
        <Button
            id={id}
            ref={ref}
            type={type}
            onClick={onClick}
            isActive={isActive}
            size={size}
            colorDefault={colorDefault}
            colorHover={colorHover}
            colorPressed={colorPressed}
            colorActive={colorActive}
            radius={radius}
            title={title}
            highlightIcon={highlightIcon}
        >
            {svgIcon}
        </Button>
    )
}

export default IconRoundedButton