import { SVGProps } from 'react'
import styled from 'styled-components'

export interface Props {
    /** Set the initial value, by default the endValue is "100",
     * then going from 0% to 100% */
    value: number
    /** The default value is 100, ranging from 0 to 100 */
    endValue?: number
    /** Set the useRef */
    ref?: any
    /** Default value is "-90deg" */
    rotate?: string
    /** "round" is used by default, if you want you can change it to "butt" or "square" */
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit' | undefined
    /** Example: "0 0 5px #00000080". Remember to increase the viewBoxSize value as you increase the size of the shadows. */
    dropShadow?: string
    /** Default value is 210, If you add drop-shadow, remember if you
     * increase this value according to the Stroke Width, this value will work as a padding */
    viewBoxSize?: number
    /** Default value is 6 */
    strokeWidth?: number
    /** Default color is "deepskyblue" */
    strokeColor?: string
    /** Add a width for the background circle */
    bgStrokeWidth?: number
    /** Default color is "#f0f0f0" */
    bgStrokeColor?: string
    /** Add text to the center of the preloader */
    text?: string
    /** Center text color */
    textColor?: string
    /** Add a size for the text to the center */
    textSize?: string
    /** Add a prefix to the text */
    textPrefix?: string
    /** Add a suffix to the text */
    textSuffix?: string
    /** Default value is "0.1s" */
    transitionTime?: string
    /** Add child content to the component */
    children?: any
}

export const Content = styled.div<Props>`
    &{
        width: 100%;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        pointer-events: none;
        overflow: hidden;
    }
    & .text-inside{
        position: absolute;
        margin: auto auto;
        color: ${props => props.textColor ? props.textColor : '#333'};
        font-size: ${props => props.textSize ? props.textSize : '2em'};
    }
    & svg {
        aspect-ratio: 1/1;
        transform: rotate(${props => props.rotate ? props.rotate : '-90deg'});
        filter: drop-shadow(${props => props.dropShadow ? props.dropShadow : ''});
    }
    & circle {
        padding: 10px;
        fill: none;
        filter: none;
        stroke-dashoffset: (625 - (625 * 1) / 100);
        transition: stroke-dashoffset ${props => props.value > 5 ? (props.transitionTime ? props.transitionTime : '0.1s') : '0'};
    }
    & .children {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
`