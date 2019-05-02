import styled from 'styled-components'
import theme from './theme'

export const DeleteContainer = styled.div`
  ${theme.flex('column', 'flex-end')};

  .fa-ellipsis-v, .fa-edit {
    margin: 5px;
  }

  .fa-ellipsis-v, .fa-trash, .fa-edit {
    padding-right: 5px;
    cursor: pointer;
  }  
`

export default DeleteContainer