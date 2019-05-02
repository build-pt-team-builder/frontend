import styled from 'styled-components'
import { flex } from '../components/DesignComponents/theme'

const AppContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  ${flex('column','center')};
  margin: 0 auto;
  border: 1px solid purple;
`

export default AppContainer