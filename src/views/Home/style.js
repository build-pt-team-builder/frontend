import Styled from 'styled-components'
import {color} from '../../components/DesignComponents/theme'

export default Styled.div`
    background-color: ${color.bg01};
    display: grid;
    grid-template-columns: 200px auto;
    width: 100%;
    border: 1px solid red;
`