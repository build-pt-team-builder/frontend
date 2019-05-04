import Styled from 'styled-components'
import {color, flex, size} from '../../../components/DesignComponents/theme'

export default Styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 1200px;
    padding: ${size.s08};
    position: relative;
    width: fit-content;
    & > * { margin-bottom: 1rem}
    .options {
        border-radius: 5px;
        ${flex('row','normal','normal')};
        background-color: ${color.bg00};
        height: fit-content;
        padding: 1rem;
        width: 100%;
        .option {
            align-items: center;
            display: grid;
            grid-auto-flow: column;
            grid-column-gap: 1rem;
            height: 40px;
            margin-right: 1rem;
            select {
                background-color: ${color.bg01};
                border: 2px solid transparent;
                border-radius: 5px;
                color: #ccc;
                font-size: 1.6rem;
                height: 100%;
                outline: none;
                width: fit-content;
                & > * {background-color: ${color.bg00}}
            }
            .title {font-size: 1.6rem;}
        }
    }
    .user-list {
        display: grid;
        grid-row-gap: 1rem;
        grid-template-columns: 50px repeat(5, auto);
        width: fit-content;
        min-width: 100%;
        .avatar {
            border-radius: 5px 0 0 5px;
            img {
                border-radius: 5px;
                height: 40px;
                width: 40px;
            }
        }
        .info, .actions {
            background-color: ${color.bg00};
            height: 100%;
            padding: 1rem;
            pre {height: 50%}
            width: 100%;
            & * {height: 20px}
            .role {
                color: ${color.txt03};
                font-size: ${size.s05};
            }
            .title {
                color: ${color.txt03};
                font-size: ${size.s04};
            }
            .value, .name {
                border: 0;
                color: ${color.txt05};
                font-size: ${size.s06};
            }
        }
        .info {
            input {
                font-size: 1.8rem;
                max-width: 100px;
                padding: 0;
                width: 100%;
            }
            select {width: 100%}
        }
        .actions {
            border-radius: 0 5px 5px 0;
            display: grid;
            grid-auto-flow: column;
            grid-column-gap: 1px;
            button {
                background-color: ${color.bg01}
                height: 40px;
                width: 100%;
                min-width: 85px;
                padding: 0;
                &.active {background-color: ${color.accent0}}
                &:hover {border-color: ${color.accent0} transparent}
                &:first-of-type { &:hover {border-left-color: ${color.accent0}}}
                &:last-of-type { &:hover {border-right-color: ${color.accent0}}}
            }
        }
    }
`