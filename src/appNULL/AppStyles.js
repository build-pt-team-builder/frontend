import styled from 'styled-components'
import { flex } from '../components/DesignComponents/theme'

const AppContainer = styled.div`
  max-width: 1400px;
  height: 100%;
  ${flex('column','normal','normal')};
  margin: 0 auto;
  width: 100%;
`

export default AppContainer