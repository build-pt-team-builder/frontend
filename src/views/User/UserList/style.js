import Styled from 'styled-components'
import {color, size} from '../../../components/DesignComponents/theme'

export default Styled.div`
    height: fit-content;
    max-width: 1200px;
    width: 100%;
    padding: ${size.s08};

    .user-list {
        display: grid;
        grid-auto-flow: row;
        grid-row-gap: 1rem;

        .user {
            display: grid;
            grid-template-columns: 40px 200px repeat(5, 150px);
            grid-column-gap: 1rem;
            background-color: ${color.bg00};
            border-radius: 5px;
            padding: 0.5rem 1rem;
            align-items: center;
            border: 2px solid transparent;
            width: fit-content;

            .info {
                display: grid;
                grid-template-columns: 1fr 1fr;
                height: 48px;
                input {
                    font-size: 1.8rem;
                    width: 100%;
                    border: 0;
                    &:hover, &:focus {border-color: ${color.accent1} transparent}
                }
                img {
                    height: 40px;
                    width: 40px;
                    border-radius: 5px;
                }
                pre {height: 50%}
                .role {
                    grid-column: 1 / span 2;
                    color: ${color.txt03};
                    font-size: ${size.s05};
                }
                .title {
                    color: ${color.txt03};
                    font-size: ${size.s04};
                    height: 100%;
                }
                .value, .name {
                    grid-column: 1 / span 2;
                    color: ${color.txt05};
                    font-size: ${size.s06};
                    height: 100%;
                    border: 0;
                }
            }
            .actions {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 1px;
                button {
                    background-color: ${color.bg01};
                    color: ${color.txt04};
                    height: 40px;
                    width: 100%;
                    min-width: 40px;
                    border: 2px solid transparent;
                    &.active {background-color: ${color.accent0}}
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
            
            &:hover {
                border-color: transparent ${color.accent1};
            }
        }
    }
    
`