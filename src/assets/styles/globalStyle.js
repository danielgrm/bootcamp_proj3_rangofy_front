import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        -webkit-font-smoothing: antialiased;
        background: #e8ecfd;
        font-family: 'Questrial', sans-serif;
    }
    
    `

    export default GlobalStyle 
    