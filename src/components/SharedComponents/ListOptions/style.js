import Styled from 'styled-components'
import {color} from '../../DesignComponents/theme'

export default Styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
    width: fit-content;
    background-color: ${color.bg00};
    height: 50px;
    border-radius: 5px;
    padding: 0.5rem 1rem;

    .option {
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: 1rem;
        align-items: center;
        
        select {
            background-color: ${color.bg01};
            border: 2px solid transparent;
            color: #ccc;
            outline: none;
            width: fit-content;
            height: 100%;
            border-radius: 5px;
            font-size: 1.6rem;
            & > * {background-color: ${color.bg00}}
            &:hover {border-color: ${color.accent1}}
        }
        .title {
            font-size: 1.6rem;
        }
    }
`