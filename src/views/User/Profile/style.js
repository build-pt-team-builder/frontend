import Styled from 'styled-components'
import {color, size, flex} from '../../../components/DesignComponents/theme'

export default Styled.div`
    border-bottom: 1px solid ${color.bg03};
    color: ${color.txt03};
    ${flex('column','center','center')};
    font-size: ${size.s04};
    height: fit-content;
    padding: ${size.s02} 1rem;
    text-align: center;
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 1rem;
    & > * {
        margin: 0.25rem;
    }
    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        &.actions {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .title {
            font-size: 1.4rem;
            height: 20px;
        }
        input, select, button {
            background-color: ${color.bg01};
            border: 2px solid transparent;
            border-radius: 5px;
            height: 40px;
            text-align: center;
            outline: none;
            color: ${color.txt05};
            &:hover {border-color: ${color.accent1}}
        }
        button {
            background-color: ${color.accent0}
            &:hover {border-color: transparent}
        }

    }

    .avatar {
        ${flex('row','center','center')};
        width: 100px;
        height: 100px;
        border: 4px solid ${color.accent0};
        border-radius: 50%;
        overflow: hidden;
        z-index: 3;
        img {
            height: 100%;
            width: 100%;
            z-index: 1;
        }
        pre {
            position: absolute;
            transform: translateY(30px);
            display: none;
            z-index: 2;
        }
        &:hover {
            cursor: pointer;
            pre {
                display: block;
                background-color: ${color.bg00};
                color: ${color.txt05};
                opacity: 0.72;
                width: 100px;
                height: 20px;
                line-height: 20px;
            }
        }
    }
`