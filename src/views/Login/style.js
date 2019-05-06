import Styled from 'styled-components'
import {color, size, flex} from '../../components/DesignComponents/theme'

export default Styled.div`
    ${flex('column', 'center', 'center')}
    height: 100%;
    min-height: 100vh;
    .header {
        height: 50px;
        width: 100%;
        background-color: #fff;
        position: fixed;
        top: 0;
        display: flex;
        padding: 0 1rem;
        justify-content: space-between;
        align-items: center;
        .logo {
            color: #55596d;
            font-size: 3.2rem;
            &::first-letter {color: #bb1333}
        }
        nav {
            color: #000;
            display: flex;
            font-size: 1.6rem;
            justify-content: space-around;
            align-items: center;
            max-width: 1200px;
            width: 80%;
            margin-left: 40px;
            a {&:hover {color: #bb1333}}
        }
        .buttons {
            display: flex;
            a {
                font-size: 1.6rem;
                line-height: 35px;
                height: 35px;
                width: 100px;
                text-align: center;
                &:first-of-type {
                    background-color: #bb1333;
                    border-radius: 20px 0 0 20px;
                    &:hover {background-color: #002070}
                }
                &:last-of-type {
                    color: #bb1333;
                    border: 1px solid #bb1333;
                    border-radius: 0 20px 20px 0;
                    &:hover {
                        background-color: #002070;
                        color: #fff;
                    }
                }
            }
        }
    }
    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: center;
        max-width: 800px;
        height: fit-content;

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
            input, button, select {
                border: 2px solid ${color.bg05};
                border-radius: 0.5rem;
                font-size: ${size.s05};
                padding: ${size.s05} ${size.s02};
                &.placeholder {color: ${color.txt03}}
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