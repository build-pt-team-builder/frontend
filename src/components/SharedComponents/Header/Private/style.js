import Styled from 'styled-components'
import {color, flex, size} from '../../../DesignComponents/theme'

export default Styled.div`
    display: grid;
    grid-column-gap: ${size.s08};
    grid-template-columns: repeat(4, auto);
    margin-bottom: ${size.s02};
    width: 100%;
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
`