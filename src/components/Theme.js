import { createGlobalStyle } from "styled-components"
export const darkTheme = {
    body: 'white',
    text: 'black'
}

export const lightTheme = {
    body: '#0000',
    text: '#fff'
}

export const GlobalStyle = createGlobalStyle`
    body{
        /* background-color: ${props => props.theme.body}!important; */
    }


`