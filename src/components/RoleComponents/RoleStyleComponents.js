import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../DesignComponents/theme'

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
  margin-top: 10px;
  font-size: ${fontSizing.s};
`

export const FormGroup = styled.div`
  width: 100%;
  ${flex('row', 'center', 'space-between')}
  
  input {
    width: 42%;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    font-size: ${fontSizing.s};
    background: ${color.bg00};
    color: ${color.txt04};
  }

  button {
    width: 10%;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 5px;
    background: ${color.bg00};
    color: ${color.txt04};
    font-size: ${fontSizing.m};
  }

  button:hover {
    border: 1px solid ${color.accent0};
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
    background: ${color.bg00};

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

export const RoleAssignmentList = styled.div`
    ${flex('row')};
    width: 100%;
    
    @media ${breakpoints[0]} {
      ${flex('column','center')};
    }

`

export const RoleAssignment = styled.div`
    width: 100%;
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