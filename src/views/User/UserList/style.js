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
            grid-template-columns: 40px repeat(6, 150px);
            grid-column-gap: 1rem;
            background-color: ${color.bg00};
            border-radius: 5px;
            padding: 0.5rem 1rem;
            align-items: center;
            border: 2px solid transparent;
            width: fit-content;

            .info {
                text-align: center;
                height: 100%;
                img {
                    height: 40px;
                    width: 40px;
                    border-radius: 5px;
                }
                pre {height: 50%}
                .role {
                    color: ${color.txt03};
                    font-size: ${size.s06};
                }
                .title {
                    color: ${color.txt03};
                    font-size: ${size.s04};
                }
                .value, .name {
                    color: ${color.txt05};
                    font-size: ${size.s06};
                }
            }
            .actions {
                display: grid;
                grid-template-columns: auto auto;
                grid-column-gap: 1px;
                button {
                    background-color: ${color.bg01};
                    color: ${color.txt04};
                    height: 40px;
                    width: 100%;
                    min-width: 40px;
                    border: 2px solid transparent;
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