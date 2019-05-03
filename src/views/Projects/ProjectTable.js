import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { TableContainer } from './ProjectStyleComponents'

class ProjectTable extends Component {
  render() {
    const { projects } = this.props
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
      },
      {
        Header: "Roles",
        id: "roleAssignments",
        width: 300,
        accessor: d => {
          return (
            <ReactTable
              NoDataComponent={() => null}
              TheadComponent={() => null}
              defaultPageSize={3}
              showPagination={false}
              data={d.roleAssignments}
              columns={[
                {
                  Header: "Role",
                  id: "role",
                  accessor: d => d.role
                },
                {
                  Header: "Assigned",
                  accessor: "assignedTo",
                }
              ]}
            />
          )
        }
      }
    ]
    return (
      <TableContainer>
        <ReactTable 
          columns={columns}
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