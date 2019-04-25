import Styled from 'styled-components'
import {color, fontSizing, flex} from '../../DesignComponents/theme'

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
                font-size: ${fontSizing.xxxl};
                font-weight: 700;
                &::first-letter {
                    color: ${color.primaryColor};
                }
            }
            .description {
                ${flex('column','normal','space-between')}
                height: 35px;
                p {
                    color: ${color.accent};
                    font-size: ${fontSizing.xs}; 
                }
            }
            .buttons {
                button {
                    background-color: transparent;
                    border: 2px solid transparent;
                    color: #ccc;
                    font-size: ${fontSizing.m};
                    margin: 0 ${fontSizing.xxxs};
                    padding: 0.75rem;
                    width: 12rem;
                    &.blue {
                        border-color: ${color.secondaryColor};
                        &:hover {
                            background-color: ${color.secondaryColor};
                            color: ${color.darkText};
                        }
                    }
                    &.red {
                        border-color: ${color.primaryColor};
                        &:hover {
                            background-color: ${color.primaryColor};
                            color: ${color.darkText};
                        }
                    }
                }
            }
        }
        .arrow {
            align-self: center;
            border: 5px solid ${color.secondaryColor};
            border-width: 0 0 5px 5px;
            cursor: pointer;
            height: 75px;
            transform: translateY(-5rem) rotateZ(-45deg);
            width: 75px;
        }
    }
`