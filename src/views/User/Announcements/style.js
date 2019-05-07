import Styled from 'styled-components'
import {color, flex, size} from '../../../components/DesignComponents/theme'

export default Styled.div`
    ${flex('column', 'normal', 'normal')};
    height: 100%;
    max-width: 1200px;
    padding: ${size.s08};
    position: relative;
    width: fit-content;
    & > * { margin-bottom: ${size.s02}}
    .announcement-list {
        display: grid;
        grid-auto-flow: row;
        grid-row-gap: ${size.s02};
        width: fit-content;
        .announcement {
            background-color: ${color.txt01};
            border: 1px solid ${color.secondaryBgColor};
            border-radius: 5px;
            ${flex('column', 'normal', 'normal')};
            max-width: 1200px;
            min-width: 800px;
            padding: ${size.s02};
            width: 100%;
            .title {
                color: ${color.accent1};
                font-size: ${size.s08};
                text-align: center;
            }
            .content {
                text-align: justify;
                text-indent: 2rem;
                font-size: ${size.s06};
            }
            .author {
                ${flex('row','normal','center')}
                font-size: ${size.s04};
                padding: 1rem 0;
            }
        }
    }
`