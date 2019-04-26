import { createGlobalStyle } from 'styled-components'
// import { normalize } from 'styled-normalize'
import {reset} from 'styled-reset'
import {color, fontStyles} from './theme'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Bangers');
  @import url('https://fonts.googleapis.com/css?family=Fresca');
  @import url('https://fonts.googleapis.com/css?family=Lato');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,900|Roboto:400,500,700');
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
    font-family: ${fontStyles.defaultFont};
  }
  body {
    color: ${color.lightText};
    background: ${color.primaryBgShading};
    font-family: ${fontStyles.defaultFont};
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