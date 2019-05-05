import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../../components/DesignComponents/theme'

export const FormContainer = styled.div`
  width: 600px;
  ${flex('column', 'center', 'center')};
  margin: 70px 0;
  border-radius: 5px;
  box-shadow:  10px 10px 5px 0px rgba(0,0,0,0.75);
  color: ${color.darkText};
  background: white;
  font-size: ${fontSizing.sm};

  @media ${breakpoints[0]} {
    width: 100%;
    font-size ${fontSizing.sm};
  }

  .windowFrame {
    width: 100%;
    margin: 0;
    padding: 10px;
    border-radius: 5px 5px 0 0;
    background: linear-gradient(to top, #cccccc 0%, #d6d6d6 1px, #ebebeb 100%);

    @media ${breakpoints[0]} {
      padding: 5px;
    }
  }  

  form {
    width: 90%;
    ${flex('column', 'center')};
    padding: 20px;


    @media ${breakpoints[0]} {
      width: 100%;
    }

    & *  {
      margin: 5px 0;
    }

    label {
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 2px 10px;
      border: 1px solid ${colorScheme.defaultBorderColor};
         
      line-height: 1.5rem;
    }

    button {
      width: 150px;
    }
  }
`

export const FormGroup = styled.div`
  width: 100%;
  ${flex('row','center','space-between')}
  
  input, textarea {
    flex: 0 0 80%;
  }

  textarea {
    height: 100px;
  }
`

export const CheckBoxGroup = styled.div`
  align-self: flex-start;
  width: 105px;
  ${flex('row', 'center', 'space-between')}
  margin: 10px 0;
  font-size: ${fontSizing.s};
`



export default FormContainer