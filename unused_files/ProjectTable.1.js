import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { TableContainer } from './ProjectStyleComponents'

class ProjectTable extends Component {
  render() {
    const { projects } = this.props
    const projectRoles = (array) => array.map(project => (
      project.roles.map(role => (
        {
         Header: 'Roles',
         columns: [
           {
            Header: `${role.role}`
          }
        ]
       }
      ))
    ))

    console.log(`projectRoles: `, projectRoles(projects))
    const columns = [
      {
        Header: "Project Name",
        accessor: "name",
        width: 150
      },
      {
        Header: "Pitch",
        accessor: "pitch",
        width: 350
      }
    ]

  
    const flatten = (arr) => {
      return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    }
    console.log(`flatten`, flatten([columns, projectRoles(projects)]))
    // const combinedColumns = [...columns, ...columnObject]
    // console.log(`combinedColumns: `, combinedColumns)

    return (
      <TableContainer>
        <ReactTable 
          columns={flatten([columns, projectRoles(projects)])}
          data={projects}
          defaultPageSize={5}
          className="-striped -highlight"
          getTrProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e) => {
                console.log("Row - onClick: ", {
                  state,
                  rowInfo,
                  column,
                  instance,
                  event: e
                })
                this.props.history.push(`/projects/${rowInfo.original.id}`)
              },
              style: {
                cursor: 'pointer'
              }
            }
          }}

        />
      </TableContainer>
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

export default connect(mapStateToProps,{})(ProjectTable)