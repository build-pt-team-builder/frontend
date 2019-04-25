import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
// import PrivateRoute from './PrivateRoute'
class Routes extends Component {
//   componentDidMount() {
//     this.props.getData()
//   }

  render() {
    console.log(`Routes render this.props is: `)
    return (
      <div>
        {/* Assign routes */}
        <Route />
      </div>
    )
  }
}

// const mapStateToProps = ({  }) => ({
 
// })

export default withRouter(
  connect(null, {})(Routes)
)