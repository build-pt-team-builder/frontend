import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../DesignComponents/theme'

export const SignUpBoardContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid ${color.tx03};
  border-radius: 5px;

  h2 {
      margin: 20px 0;
      text-align: center;
      color: ${color.txt03};
      font-size: ${fontSizing.s};
  }
`


export const SignUpFormContainer = styled.div`
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
  font-size: ${fontSizing.xs};
`

export const FormGroup = styled.div`
  width: 100%;
  ${flex('row', 'center', 'space-between')}
  
  input {
    width: 42%;
    height: 40px
    padding: 5px;
    font-size: ${fontSizing.xs};
    background: ${color.bg00};
    color: ${color.txt04};
  }

  button {
    width: 10%;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 5px;
    background: ${color.bg00};
  }

  button:hover {
    border: 1px solid ${color.accent0};
  }
`

export const SignUpListContainer = styled.div`
    width: 90%;
    max-width: 600px;
    ${flex('column','flex-start')};

    ul {
      width: 100%;
      padding: 0;
      list-style-type: none;
    }
`

export const SignUpContainer = styled.div`
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
      font-size: ${fontSizing.xs};
    }

    div:last-child {
      justify-self: 'flex-end';
      flex: 0 0 14%;
    }

    i {
      justify-self: 'flex-end';
      font-size: ${fontSizing.xs};
    }
`

export const SignUpNameList = styled.div`
    ${flex('row')};
    width: 100%;
    
    @media ${breakpoints[0]} {
      ${flex('column','center')};
    }

`

export const SignUpName = styled.div`
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