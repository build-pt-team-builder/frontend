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
        width: 200
      },
      {
        Header: "Pitch",
        accessor: "pitch",
        width: 300
      },
      {
        Header: "Category",
        accessor: "category"
      }
    ]
    return (
      <TableContainer>
        <ReactTable 
          columns={columns}
          data={projects}
          defaultPageSize={10}
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