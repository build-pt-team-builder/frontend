import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import PrivateRoute from './PrivateRoute'
<<<<<<< HEAD

//public
import LandingPage from '../../components/LandingPage'
import Login from '../../views/Login'
//private
import Home from '../../views/User'

const Routes = () =>
  <>
    {/* PUBLIC */}
    <Route exact path='/' component={LandingPage}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/lostandfound' component={Login}/>
    <Route exact path='/createaccount' component={Login}/>
    {/* PRIVATE */}
    <Route exact path='/home' component={Home}/>
  </>

export default withRouter(
  connect(null, {})(Routes)
)
=======

import { fetchProjectData } from '../../actions/projects'
import ProjectList from '../../views/Projects/ProjectList'
import ProjectDetails from '../../views/Projects/ProjectDetails'


class Routes extends Component {
  // componentDidMount() {
  //   this.props.fetchData()
  // }

  render() {
    console.log(`Routes render this.props is: `)
    return (
      <div>
        {/* Assign routes */}
        <Route path="/" exact component={ProjectList} />
        <Route path="/projects" exact component={ProjectList} />
        {this.props.projects.map(project => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            render={props => (
              <ProjectDetails {...props} project={project} />
            )}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.projects)
  return {
    projects: state.projects.projects
  }
}

export default withRouter(
  connect(mapStateToProps, { fetchData: fetchProjectData })(Routes)
)
>>>>>>> dev
