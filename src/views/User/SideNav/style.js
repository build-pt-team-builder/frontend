import Styled from 'styled-components'
import {color, size, flex} from '../../../components/DesignComponents/theme'

export default Styled.div`
    background-color: ${color.bg0};
    border: 1px solid ${color.bg3};
    border-width: 0 2px;
    height: 100%;
    font-size: ${size.s06};
    width: 200px;
    .user {
        border-bottom: 1px solid ${color.bg3};
        color: ${color.txt3};
        ${flex('column','center','center')};
        font-size: ${size.s04};
        height: 200px;
        text-align: center;
        & > * {
            margin: 0.25rem;
        }
        .avatar {
            ${flex('row','center','center')};
            img {
                border: 4px solid ${color.accent0};
                border-radius: 50%;
                height: 100px;
                width: 100px;
            }
        }
    }
    .links {
        ${flex('column','flex-start','center')};
        transform: translateX(-2px);
        a {
            ${flex('row','center','flex-start')};
            height: 4rem;
            padding: 0 1rem;
            width: calc(100% + 4px);
            border-left: 2px solid transparent;
            img {
                //haven't made any icons yet
            }
            pre {
                text-align: left;
            }
            &.selected {
                border-color: ${color.accent0};
            }
            &:hover {
                background-color: ${color.accent0};
            }
        }
    }
`