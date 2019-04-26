import Styled from 'styled-components'
import {color, fontSizing, flex} from '../../../components/DesignComponents/theme'

export default Styled.div`
    border-right: 1px solid ${color.accent};
    height: 100%;
    font-size: ${fontSizing.sm};
    width: 200px;
    .user {
        border-bottom: 1px solid ${color.accent};
        color: ${color.accent};
        ${flex('column','center','center')};
        font-size: ${fontSizing.xs};
        height: 200px;
        text-align: center;
        & > * {
            margin: 0.25rem;
        }
        .avatar {
            ${flex('row','center','center')};
            img {
                border: 4px solid ${color.primaryColor};
                border-radius: 50%;
                height: 100px;
                width: 100px;
            }
        }
    }
    .links {
        ${flex('column','flex-start','center')};
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
                background-color: ${color.accent2};
                border-left: 2px solid ${color.primaryColor};
            }
            &:hover {
                background-color: ${color.primaryColor};
            }
        }
    }
`