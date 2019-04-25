import Styled from 'styled-components'
import {color, fontSizing, flex} from '../../DesignComponents/theme'

export default Styled.div`
    ${flex('row','center','normal')}
    border-bottom: 2px solid ${color.accent};
    height: ${fontSizing.xl};
    padding: 0 ${fontSizing.m};
    position: fixed;
    top: 0;
    width: 100%;
    div {
        ${flex('row','center','normal')}
        border-bottom: 2px solid ${color.accent};
        font-size: ${fontSizing.sm};
        height: 100%;
        margin: 0 ${fontSizing.xxxs};
        transform: translateY(2px);
        &:hover:not(.logo):not(.login) {
            border-color: ${color.lightTextEmphasis};
            a {
                color: ${color.lightTextEmphasis};
            }
        }
    }
    .logo {
        margin-right: auto;
        a {
            font-size: ${fontSizing.ml};
            &::first-letter {
                color: ${color.primaryColor};
            }
        }
    }
    .login {
        a {
            border: 2px solid ${color.secondaryColor};
            border-radius: ${fontSizing.ml};
            padding: ${fontSizing.xxxxs};
        }
        &:hover {
            color: ${color.lightTextEmphasis};
        }
    }
`