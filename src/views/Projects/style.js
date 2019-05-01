import Styled from 'styled-components'
import {color, flex, size} from '../../components/DesignComponents/theme'

export default Styled.div`
    display: grid;
    grid-row-gap: 1rem;
    height: fit-content;
    max-width: 1200px;
    padding: ${size.s08};
    width: 100%;
    .project-list {
        display: grid;
        grid-row-gap: 1rem;
    }
    .project-options {
        background-color: ${color.bg00};
        border-radius: 5px;
        display: flex;
        height: 50px;
        justify-content: flex-start;
        padding: 0.5rem 1rem;
        width: 100%;
        .action {margin-left: auto}
        .options {
            align-items: center;
            display: grid;
            grid-auto-flow: column;
            grid-column-gap: 1px;
            height: 100%;
            &:not(:last-of-type) {padding-right: 1rem}
            .highlight {
                background-color: ${color.accent0};
                border: none;
                border-radius: 5px;
                height: 100%;
            }
            .title {
                font-size: 1.4rem;
                margin-right: 1rem;
            }
            .option {
                background-color: ${color.bg01};
                border: 2px solid transparent;
                color: ${color.txt05};
                cursor: pointer;
                font-size: 1.2rem;
                height: 100%;
                line-height: 36px;
                min-width: 50px;
                outline: none;
                padding: 0 1rem;
                text-align: center;
                width: fit-content;
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
        background-color: ${color.bg00};
        border: 2px solid transparent;
        border-radius: 5px;
        cursor: pointer;
        ${flex('column','normal','normal')};
        height: fit-content;
        overflow: hidden;
        padding: 0 1rem;
        width: 100%;
        .description {
            display: grid;
            font-size: 1.6rem;
            grid-column-gap: 1rem;
            grid-row-gap: 1rem;
            grid-template-columns: repeat(2, auto);
            height: fit-content;
            max-height: 0px;
            overflow: none;
            transition: all 1s ease-in-out;
            &.active {
                max-height: 300px;
                padding-bottom: 1rem;
            }
            .title {color: ${color.txt03}}
            .options {
                grid-column: 1 / span 2;
                display: grid;
                grid-column-gap: 1px;
                grid-auto-flow: column;
                justify-self: end;
                button {
                    background-color: ${color.bg01};
                    border: 2px solid transparent;
                    color: ${color.txt05}
                    height: 40px;
                    min-width: 50px;
                    &:first-of-type {
                        border-radius: 5px 0 0 5px;
                        &:hover {border-left-color: ${color.accent0}}
                    }
                    &:last-of-type {
                        border-radius: 0 5px 5px 0;
                        &:hover {border-right-color: ${color.accent0}}
                    }
                    &:hover {border-color: ${color.accent0} transparent}
                }
            }
        }
        .summary {
            ${flex('row', 'center', 'space-between')};
            font-size: 1.6rem;
            height: 50px;
            padding: 0.5rem 0;
            .identity {
                ${flex('row','flex-start','flex-start')};
                .name {
                    color: ${color.accent1};
                    font-size: 2rem;
                }
            }
            .positions {
                display: grid;
                grid-auto-flow: column;
                grid-column-gap: 1px;
                height: 100%;
                .position {
                    background-color: ${color.bg01};
                    border: 2px solid transparent;
                    cursor: grab;
                    ${flex('column','normal','space-around')};
                    min-width: 100px;
                    padding: 0 1rem;
                    text-align: center;
                    &:first-of-type {
                        border-radius: 5px 0 0 5px;
                        &:hover {border-left-color: ${color.accent1}}
                    }
                    &:last-of-type {
                        border-radius: 0 5px 5px 0;
                        &:hover {border-right-color: ${color.accent1}}
                    }
                    &:hover {border-color: ${color.accent1} transparent}
                    &.action {
                        cursor: pointer;
                        &:first-of-type:hover {border-left-color: ${color.accent0}}
                        &:last-of-type:hover {border-right-color: ${color.accent0}}
                        &:hover {border-color: ${color.accent0} transparent}
                    }
                    .add {font-size: 1.4rem}
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
        &:hover {border-color: transparent ${color.accent1}}
    }
`