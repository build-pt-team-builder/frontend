import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { TableContainer } from './ProjectStyleComponents'
import { color, fontSizing } from '../../components/DesignComponents/theme'
import { categories } from '../../dummyData'

class ProjectList extends Component {
  render() {
    const { projects } = this.props
    const columns = [
    { 
      Header: () => (
        <h1>Build Week Projects</h1>
      ),
      columns: [{   
        Header: 'Name',
        id: "name",
        accessor: d => (
          <div
           style={{
             fontSize: `${fontSizing.s}`
           }}
           >
            {d.name}
           </div>
        ),
        width: 160
      },
      {
        Header: "Description",
        accessor: "pitch",
        filterable: false,
        width: 350
        
      },
      {
        Header: "Roles",
        id: "roleAssignments",
        filterable: false,
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
      },
      {
        Header: "Status",
        id: "projectComplete",
        width: 105,
        accessor: d => d.projectComplete ? 'Complete' : 'Open',
        Cell: row => (
          <div
            style={{
              textAlign: 'center',
              color: row.value === 'Complete' ? `${color.danger}` : `dodgerblue`,
              fontWeight: 'bold'
            }}

          >
          {row.value}
          </div>
        ),
        filterMethod: (filter, row) => {
          if (filter.value === 'all') {
            return true
          }
          if (filter.value === 'Open') {
            return row[filter.id] === 'Open'
          } else {
            return row[filter.id] === 'Complete'
          }
        },
        Filter: ({ filter, onChange }) =>
          <select
            onChange={e => onChange(e.target.value)}
            value={filter ? filter.value : 'all'}
          >
            <option value='all'>All</option>
            <option value='Open'>Open</option>
            <option value='Complete'>Complete</option>
          </select>
      },
      {
        Header: "Category",
        id: 'category',
        accessor: d => d.category,
        Cell: row => (
          <div
            style={{
              textAlign: 'center',
              width: '100%'
            }}

          >
            {row.value}
          </div>
        ),
        filterMethod: (filter, row) => {
          if (filter.value === 'all') {
            return true
          }
          if (filter.value === row.category) {
            return row[filter.id] === filter.value
          }
        },
        Filter: ({ filter, onChange }) =>
          <select
            onChange={e => onChange(e.target.value)}
            value={filter ? filter.value : 'all'}
          >
            <option value='all'>All</option>
            {
              categories.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))
            }
            <option value='end'>End</option>
          </select>
      }
    ]
    },

    ]
    return (
      <TableContainer>
        <ReactTable
          getTheadThProps={() => {
            return {
              style: {
                margin: `4px 0`,
                cursor: 'pointer',
                background: `${color.bg00}`,
                fontSize: `${fontSizing.s}`
              } 
            }
          }} 
          columns={columns}
          data={projects}
          filterable
          defaultPageSize={5}
          getTrProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e) => {
                // console.log("Row - onClick: ", {
                //   state,
                //   rowInfo,
                //   column,
                //   instance,
                //   event: e
                // })
                this.props.history.push(`/projects/${rowInfo.original.id}`)
              },
              style: {
                margin: `4px 0`,
                cursor: 'pointer',
                background: `${color.bg00}`
              }
            }
          }}

        />
      </TableContainer>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.projects)
  return {
    projects: state.projects.projects,
    fetchingData: state.projects.fetchingData
  }
}

export default connect(mapStateToProps,{})(ProjectList)