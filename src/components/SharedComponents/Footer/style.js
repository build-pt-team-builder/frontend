import Styled from 'styled-components'
import {color, flex, size} from '../../DesignComponents/theme'

export default Styled.footer`
    ${flex('row','center','center')}
    // position: absolute;
    // bottom: 0;
    align-self: end;
    height: 50px;
    width: 100%;
    .links {
        ${flex('row','normal','space-between')}
        width: 450px;
        .link {
            color: ${color.txt02};
            font-size: ${size.s04};
            padding: ${size.s02};
            &:hover {color: ${color.txt04}}
        }
    }
`