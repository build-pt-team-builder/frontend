import Styled from 'styled-components'
import {color, fontSizing, flex} from '../../components/DesignComponents/theme'

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
            border-right: 2px solid ${color.accent};
            font-size: ${fontSizing.xxxl};
            width: 100%;
            height: 100%;
            text-align: center;
            h1 {
                &::first-letter {
                    color: ${color.primaryColor};
                }
            }
        }
        .form {
            ${flex('column','normal','normal')}
            width: 100%;
            min-width: 400px;
            padding: 0 ${fontSizing.xl};
            & > * {
                margin: ${fontSizing.xxxs} 0;
            }
            input, button {
                border: 2px solid ${color.accent};
                border-radius: 0.5rem;
                font-size: ${fontSizing.s};
                padding: ${fontSizing.s} ${fontSizing.xxxs};
            }
            input {
                background-color: transparent;
                color: ${color.accent};
                &:focus {
                    border-color: ${color.secondaryColor};
                    color: ${color.lightText};
                }
            }
            button {
                background-color: ${color.secondaryColor};
                border-color: ${color.secondaryColor};
                color: ${color.darkText};
                cursor: pointer;
                font-weight: 700;
                &:hover {
                    color: ${color.lightText};
                }
            }
            .links {
                ${flex('row','normal','space-between')}
                font-size: ${fontSizing.s};
                a {
                    &:hover {
                        color: ${color.lightTextEmphasis};
                    }
                }
            }
        }
    }
`