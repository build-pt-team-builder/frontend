import { createGlobalStyle } from 'styled-components'
// import { normalize } from 'styled-normalize'
import {reset} from 'styled-reset'
import {color, font} from './theme'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Lato');
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import url('https://use.fontawesome.com/releases/v5.0.13/css/all.css');

  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    height: 100%;
    width: 100%;
  }
  body * {
    font-family: ${font.f00};
  }
  body {
    background-color: ${color.bg01};
    color: ${color.txt04};
    font-family: ${font.f00};
    height: 100%;
    width: 100%;
  }
  #root {
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
export default GlobalStyle