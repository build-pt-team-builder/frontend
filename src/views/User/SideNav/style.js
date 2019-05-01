import Styled from 'styled-components'
import {color, size, flex} from '../../../components/DesignComponents/theme'

export default Styled.div`
    background-color: ${color.bg00};
    border: 1px solid ${color.bg03};
    border-width: 0 2px;
    height: 100%;
    font-size: ${size.s06};
    grid-row: 1 / span 2;
    min-width: 200px;
    .logo {
        ${flex('row','center','center')};
        height: 50px;
        h3 {
            font-size: ${size.s08};
            &::first-letter {
                color: ${color.accent0};
            }
        }
    }
    .links {
        ${flex('column','flex-start','center')};
        width: 100%;
        a {
            ${flex('row','center','flex-start')};
            height: 4rem;
            padding: 0 1rem;
            width: 100%;
            img {
                //haven't made any icons yet
            }
            pre {
                text-align: left;
            }
            &.selected {
                border: 2px solid ${color.accent0};
                border-width: 0 2px;
                transform: translateX(-2px);
                width: calc(100% + 4px);
            }
            &:hover {
                background-color: ${color.accent0};
            }
        }
    }
`