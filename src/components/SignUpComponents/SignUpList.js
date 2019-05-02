import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignUp from './SignUp'
import { SignUpListContainer } from './SignUpStyleComponents'

class SignUpList extends Component {

  render() {
    const { signUpList } = this.props.project
    return (
      <SignUpListContainer>
        {signUpList.length > 0 && (signUpList.map((slot, index) => (
          <SignUp 
            key={index}
            {...this.props} 
            slot={slot} 
            index={index}
          />
        )))}
      </SignUpListContainer>
    )
  }

}

const mapStateToProps = state => {
  console.log(state.projects)
  return {
    projects: state.projects.projects,
    fetchingData: state.projects.fetchingData
  }
}

export default connect(mapStateToProps, {})(SignUpList)