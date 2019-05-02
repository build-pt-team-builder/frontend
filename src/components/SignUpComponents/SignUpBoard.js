import React from 'react'

import { SignUpBoardContainer } from './SignUpStyleComponents'
import SignUpList from './SignUpList'
import ProjectSignUpForm from './ProjectSignUpForm'

const SignUpBoard = (props) => {
  return (
    <SignUpBoardContainer>
      <h2>User Sign Up Board:</h2>
      <ProjectSignUpForm {...props} />
      <SignUpList {...props} />
    </SignUpBoardContainer>
  )
}

export default SignUpBoard