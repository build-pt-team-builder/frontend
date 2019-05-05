import styled from 'styled-components'
import { color, fontSizing, flex, breakpoints } from '../../components/DesignComponents/theme'

export const FormContainer = styled.div`
  width: 100%;
  max-width: 950px;
  ${flex('column', 'center', 'center')};
  border-radius: 5px;
  color: ${color.txt04};
  background: ${color.bg00};
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
  
  h1 {
    font-size: ${fontSizing.ml};
    letter-spacing: 0.25rem;
    color: ${color.tx04};
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
      color: ${color.txt03};
    }

    input {
      width: 100%;
      height: 40px;
      color: ${color.darkText};
      background: ${color.lightText};   
    }

    input, textarea {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: ${fontSizing.s};
      line-height: 1.5rem;
    }

    button {
      width: 150px;
      border-radius: 5px;
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