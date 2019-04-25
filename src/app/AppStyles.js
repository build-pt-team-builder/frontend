import styled from 'styled-components'
import {flex} from '../components/designComponents/theme'

const AppContainer = styled.div`
  max-width: 1400px;
  height: 100%;
  ${flex('column','center','center')};
  margin: 0 auto;
  width: 100%;
`

export default AppContainer