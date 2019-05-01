import styled from 'styled-components'
import { colorScheme, fontSizing, flex } from '../DesignComponents/theme'


export const RoleFormContainer = styled.div`
  width: 100%;
   ${flex('column')}
  
  form {
    width: 80%;
    input {

    }
  }

`

export const FormContainer = styled.form`
  width: 90%;
  max-width: 600px;
  font-size: ${fontSizing.s};
`

export const FormGroup = styled.div`
  width: 100%;
  ${flex('row', 'center', 'space-between')}
  
  input {
    width: 42%;
    padding: 5px;
    font-size: ${fontSizing.s};
  }

  button {
    width: 10%;
  }
`

export const RoleListContainer = styled.div`
    width: 90%;
    max-width: 600px;
    ${flex('column','flex-start')};

    ul {
      width: 100%;
      padding: 0;
      list-style-type: none;
    }
`

export const RoleContainer = styled.div`
    width: 100%;
    ${flex('row', 'center', 'flex-start')}
    margin: 5px 0;
    padding-left: 10px;
    border: 1px solid ${colorScheme.defaultBorderColor};
    border-radius: 5px;

    div {
      flex: 0 0 43%;
      padding: 5px 0;
      font-size: ${fontSizing.s};
    }

    div:last-child {
      justify-self: 'flex-end';
      flex: 0 0 14%;
    }

    i {
      justify-self: 'flex-end';
      font-size: ${fontSizing.s};
    }
`

export const DeleteContainer = styled.div`
  ${flex('column','flex-end')};

  .fa-ellipsis-v, .fa-edit {
    margin: 5px;
  }

  .fa-ellipsis-v, .fa-trash, .fa-edit {
    cursor: pointer;
  }  
`