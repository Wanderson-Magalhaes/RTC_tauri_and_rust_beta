import styled from 'styled-components'

export interface Props {
    pageName?: string
    visible?: boolean
}

export const Container = styled.div`
    &{
        overflow: auto;
    }
`