import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../DesignComponents/theme'


export const RoleFormContainer = styled.div`
width: 100%;

  ${flex('row', 'center', 'space-between')}

  form {
    width: 80%;
    input {

    }
  }

`

export const FormContainer = styled.form`
  width: 90%;
  max-width: 600px;
`

export const FormGroup = styled.div`
  width: 100%;
  ${flex('row', 'center', 'space-between')}
  
  input {
    width: 42%;
  }

  button {
    width: 10%;
  }

`