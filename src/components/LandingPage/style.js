import Styled from 'styled-components'
import {color, size, flex} from '../DesignComponents/theme'

export default Styled.div`
    ${flex('column','center','center')}
    height: 100%;
    .main {
        ${flex('column','normal','space-between')}
        height: 100%;
        .words {
            ${flex('column','normal','space-between')}
            height: 200px;
            text-align: center;
            .title {
                font-size: ${size.s13};
                font-weight: 700;
                &::first-letter {
                    color: ${color.accent0};
                }
            }
            .description {
                ${flex('column','normal','space-between')}
                height: 35px;
                p {
                    color: ${color.bg05};
                    font-size: ${size.s04}; 
                }
            }
            .buttons {
                button {
                    background-color: transparent;
                    border: 2px solid transparent;
                    color: #ccc;
                    font-size: ${size.s07};
                    margin: 0 ${size.s02};
                    padding: 0.75rem;
                    width: 12rem;
                    &.blue {
                        border-color: ${color.accent1};
                        &:hover {
                            background-color: ${color.accent1};
                            color: ${color.txt01};
                        }
                    }
                    &.red {
                        border-color: ${color.accent0};
                        &:hover {
                            background-color: ${color.accent0};
                            color: ${color.txt01};
                        }
                    }
                }
            }
        }
        .arrow {
            align-self: center;
            border: 5px solid ${color.accent1};
            border-width: 0 0 5px 5px;
            cursor: pointer;
            height: 75px;
            transform: translateY(-5rem) rotateZ(-45deg);
            width: 75px;
        }
    }
`