import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200;0,300;1,400;1,500;0,600;0,900;1,700&display=swap');

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
