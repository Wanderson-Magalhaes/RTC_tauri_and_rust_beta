import styled from 'styled-components';

export interface Props {
    setPage?: string
}

export const Content = styled.section<Props>`
    &{
        width: auto;
        display: flex;
        flex: 1;
        flex-basis: 100px;
        border-radius: 0 0 10px 10px;
        margin-right: 2px;
        background-color: ${props => props.theme.colors.background_5};
        overflow: hidden;
    }

    & .scrollable {
        flex: 1;
        display: flex;
        margin: 1px;
        overflow: auto;
        padding: 8px;
    }
    & .hide-page {
        display: none;
    }
`