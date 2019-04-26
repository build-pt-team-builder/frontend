import Styled from 'styled-components'
import {color, size, flex} from '../../components/DesignComponents/theme'

export default Styled.div`
    ${flex('row', 'center', 'center')}
    height: 100%;
    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: center;
        max-width: 800px;

        .logo {
            ${flex('row','center','center')}
            border-right: 2px solid ${color.bg05};
            font-size: ${size.s13};
            width: 100%;
            height: 100%;
            text-align: center;
            h1 {
                &::first-letter {
                    color: ${color.accent0};
                }
            }
        }
        .form {
            ${flex('column','normal','normal')}
            width: 100%;
            min-width: 400px;
            padding: 0 ${size.s04};
            & > * {
                margin: ${size.s02} 0;
            }
            input, button {
                border: 2px solid ${color.bg05};
                border-radius: 0.5rem;
                font-size: ${size.s05};
                padding: ${size.s05} ${size.s02};
            }
            input {
                background-color: transparent;
                color: ${color.bg05};
                &:focus {
                    border-color: ${color.accent1};
                    color: ${color.txt04};
                }
            }
            button {
                background-color: ${color.accent1};
                border-color: ${color.accent1};
                color: ${color.txt01};
                cursor: pointer;
                font-weight: 700;
                &:hover {
                    color: ${color.txt05};
                }
            }
            .links {
                ${flex('row','normal','space-between')}
                font-size: ${size.s05};
                a {
                    &:hover {
                        color: ${color.txt05};
                    }
                }
            }
        }
    }
`