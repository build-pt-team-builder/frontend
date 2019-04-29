import Styled from 'styled-components'
import {color, size} from '../../../components/DesignComponents/theme'

export default Styled.div`
    align-items: center;
    display: grid;
    height: fit-content;
    padding: ${size.s07};
    grid-auto-rows: 50px;
    grid-column-gap: ${size.s08};
    grid-row-gap: ${size.s02};
    grid-template-columns: auto 1fr;
    width: fit-content;
    .title {
        color: ${color.txt02};
        font-size: ${size.s07};
        grid-column: 1 / -1;
        height: fit-content;
        line-height: 50px;
        &:not(:first-of-type) {border-top: 2px solid ${color.bg03}}
    }
    .setting-name {font-size: ${size.s05}}
    .setting-options {
        align-items: center;
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: 1px;
        height: ${size.s10};
        width: fit-content;
        button {
            background-color: ${color.bg00};
            border: 2px solid transparent;
            color: ${color.txt04};
            height: 100%;
            min-width: 75px;
            outline: none;
            padding: 0 ${size.s02};
            &:first-of-type{
                border-radius: 5px 0 0 5px;
                &:hover {border-left-color: ${color.accent1}}
            }
            &:last-of-type{
                border-radius: 0 5px 5px 0;
                &:hover {border-right-color: ${color.accent1}}
            }
            &:hover {border-color: ${color.accent1} transparent}
            &.active {
                background-color: ${color.accent1};
                color: ${color.txt00};
            }
        }
        input {
            background-color: ${color.bg00};
            border: 2px solid transparent;
            border-radius: 5px;
            color: ${color.txt04};
            height: 100%;
            outline: none;
            padding: 0 ${size.s02};
            text-align: right;
            width: 75px;
            &:hover {border-color: ${color.accent1}}
            &::-webkit-inner-spin-button {display: none} 
        }
    }
`