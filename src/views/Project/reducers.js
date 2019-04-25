import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_DATA_START,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE,
  UPDATE_DATA_START,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAILURE,
  DELETE_DATA_START,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE,
} from '../actions'

const initialState = {
  projects: [
    {
      id: 1,
      name: 'Team Builder App',
      description: {
        pitch:
          'Managing hundreds of student projects week in and week out for Build weeks gets a bit daunting! I need an app that helps me with product ideation and project curation.',
        mvp: '',
        stretch: 'Allow me to submit a CSV with the proper fields.',
      },
      roles: [1, 2, 3],
    },
    {
      id: 2,
      name: 'Better Professor App',
      description: {
        pitch: `As a professor, I have a lot of grad students I mentor. I’d like to help keep them on track, but I can never remember their project deadlines, or when my feedback to them is due. I need an app that allows me to enter in all the important dates by category (ie student project deadline, feedback deadline, letter of recommendation deadline, etc.) and automatically remind me or the student before the deadline. Never miss an opportunity to member ever again!`,
        mpv:
          'As a user I want to login and see a list of students I mentor so I can add to or remove from the list. I also want to click on a student and see a list of their important projects or research papers I am mentoring on.  As a user I want to be able to create an automated messages to be sent to myself or a student I’m mentoring. A message should include a send date and time and a long text field that enables the message curator the ability to send a custom message.',
        stretch: `(Mobile App) - Allow reminders to be pushed through the app. 
        (Web App) - Allow for a social media sharing aspect that allows you to advertise the app to professors on linkedin.
        To enable screen reader support, press ⌘+Option+Z To learn about keyboard shortcuts, press ⌘slash`,
      },
      roles: [1, 2, 3],
    },
    {
      id: 3,
      name: 'Bubl',
      description: {
        pitch:
          'Imagine a social platform that helps students transition from elementary school to middle school. Bubl is a school specific social network and friendship connection tool.',
        mvp:
          'User can create an account, join an existing school account, and search for existing bubls to join. They can explore interests through hashtag searches. They can connect with others and share experiences.',
        stretch: '',
      },
      roles: [1, 2, 3],
    },
  ],
  fetchingProjects: false,
  addingProject: false,
  updatingProject: false,
  deletingProject: false,
  error: null,
  errorStatusCode: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingProjects: true,
        error: null,
        errorStatusCode: null,
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        fetchingProjects: false,
        error: null,
        errorStatusCode: null,
      }

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        projects: [],
        fetchingProjects: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
      }

    case ADD_DATA_START:
      return {
        ...state,
        addingProject: true,
        error: null,
        errorStatusCode: null,
      }

    case ADD_DATA_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        addingProject: false,
        error: null,
        errorStatusCode: null,
      }

    case ADD_DATA_FAILURE:
      return {
        ...state,
        projects: [],
        addingProject: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
      }

    case UPDATE_DATA_START:
      return {
        ...state,
        updatingProject: true,
        error: null,
        errorStatusCode: null,
      }

    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        updatingProject: false,
        error: null,
        errorStatusCode: null,
      }

    case UPDATE_DATA_FAILURE:
      return {
        ...state,
        projects: [],
        updatingProject: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
      }

    case DELETE_DATA_START:
      return {
        ...state,
        deletingProject: true,
        error: null,
        errorStatusCode: null,
      }

    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        deletingProject: false,
        error: null,
        errorStatusCode: null,
      }

    case DELETE_DATA_FAILURE:
      return {
        ...state,
        projects: [],
        deletingProject: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status,
      }

    default:
      return state
  }
}

export default reducer
