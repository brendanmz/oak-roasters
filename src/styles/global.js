import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }



  body {
    font-family: 'Poppins', sans-serif;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    margin: 0;

    @media print {
      transform: scale(0.8);
      transform-origin: 0 0;
      width: 125%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
