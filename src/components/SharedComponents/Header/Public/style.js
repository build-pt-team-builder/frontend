import Styled from 'styled-components'
import {color, size, flex} from '../../../DesignComponents/theme'

export default Styled.div`
    ${flex('row','center','normal')}
    border-bottom: 2px solid ${color.bg05};
    height: ${size.s11};
    padding: 0 ${size.s07};
    position: fixed;
    top: 0;
    width: 100%;
    div {
        ${flex('row','center','normal')}
        border-bottom: 2px solid ${color.bg05};
        font-size: ${size.s06};
        height: 100%;
        margin: 0 ${size.s02};
        transform: translateY(2px);
        &:hover:not(.logo):not(.login) {
            border-color: ${color.txt05};
            a {
                color: ${color.txt05};
            }
        }
    }
    .logo {
        margin-right: auto;
        a {
            font-size: ${size.s08};
            &::first-letter {
                color: ${color.accent0};
            }
        }
    }
    .login {
        a {
            border: 2px solid ${color.accent1};
            border-radius: ${size.s08};
            padding: ${size.s00};
        }
        &:hover {
            color: ${color.txt05};
        }
    }
`