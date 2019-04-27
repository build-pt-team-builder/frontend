import Styled from 'styled-components'
import {color, flex, size} from '../../components/DesignComponents/theme'

export default Styled.div`
    display: grid;
    grid-row-gap: 1rem;
    width: 100%;
    height: fit-content;
    padding: ${size.s08};
    header {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-column-gap: ${size.s08};
        width: 100%;
        max-width: 1000px;
        margin-bottom: 1rem;
        .stat {
            background-color: ${color.accent1};
            border-radius: 5px;
            color: ${color.txt01};
            cursor: pointer;
            ${flex('column','flex-start','center')};
            height: 66px;
            min-width: 150px;
            padding: 0 ${size.s02};
            width: 100%;
            .name {font-size: ${size.s04}}
            .value {
                font-size: ${size.s06};
                font-weight: 700;
            }
        }
    }
    .project-list {
        display: grid;
        grid-row-gap: 1rem;
    }
    .project-options {
        display: flex;
        justify-content: space-between;
        background-color: ${color.bg00};
        height: 50px;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        width: 100%;
        max-width: 1000px;
        .options {
            display: grid;
            align-items: center;
            grid-auto-flow: column;
            grid-column-gap: 1px;
            height: 100%;
            button {
                background-color: ${color.accent0};
                border: none;
                height: 100%;
                border-radius: 5px;
            }
            .title {
                font-size: 1.4rem;
                margin-right: 1rem;
            }
            label {
                background-color: ${color.bg01};
                height: 100%;
                width: fit-content;
                min-width: 50px;
                line-height: 36px;
                font-size: 1.2rem;
                padding: 0 1rem;
                text-align: center;
                cursor: pointer;
                border: 2px solid transparent;
                &:first-of-type {
                    border-radius: 5px 0 0 5px;
                    &:hover:not(.active) {border-color: ${color.accent1} transparent ${color.accent1} ${color.accent1}}
                }
                &:last-of-type {
                    border-radius: 0 5px 5px 0;
                    &:hover:not(.active) {border-color: ${color.accent1} ${color.accent1} ${color.accent1} transparent}
                }
                &:hover:not(.active) {
                    border-color: ${color.accent1} transparent;
                }
                &.active {
                    background-color: ${color.accent1};
                    color: ${color.txt00};
                }
            }
        }
    }
    .project {
        ${flex('column','normal','normal')};
        width: 100%;
        max-width: 1000px;
        background-color: ${color.bg00};
        border: 2px solid transparent;
        border-radius: 5px;
        height: fit-content;
        border: 2px solid transparent;
        cursor: pointer;
        overflow: hidden;
        .description {
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-row-gap: 1rem;
            grid-column-gap: 1rem;
            height: 0px;
            overflow: none;
            font-size: 1.6rem;
            &.active {
                height: fit-content;
                padding: 0.5rem 1rem;
            }
            .title {
                color: ${color.txt03};
            }
        }
        .summary {
            ${flex('row', 'center', 'space-between')};
            font-size: 1.6rem;
            height: 50px;
            padding: 0.5rem 1rem;
            .identity {
                ${flex('row','flex-start','flex-start')};
                .name {
                    font-size: 2rem;
                    color: ${color.accent1};
                }
            }
            .positions {
                display: grid;
                grid-auto-flow: column;
                grid-column-gap: 1px;
                height: 100%;
                .position {
                    ${flex('column','normal','space-around')};
                    background-color: ${color.bg01};
                    padding: 0 1rem;
                    text-align: center;
                    min-width: 100px;
                    border: 2px solid transparent;
                    cursor: grab;
                    &:first-of-type {border-radius: 5px 0 0 5px}
                    &:last-of-type {border-radius: 0 5px 5px 0}
                    &:hover {border-color: transparent ${color.accent1}}
                    .role {
                        color: ${color.txt02};
                        font-size: 1.4rem;
                        height: 18px;
                    }
                    .member {
                        font-size: 1.4rem;
                        height: 18px;
                    }
                }
            }
        }
        &:hover {
            border-color: transparent ${color.accent1};
        }
    }
`