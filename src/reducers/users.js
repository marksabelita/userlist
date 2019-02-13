import { GET_USERS, FETCH_USERS, FETCH_ERROR, DELETE_USER, UPDATE_USER, CREATE_USER, GET_USER, FETCH_USER } from '../actions/type'

const initialState = {
  loading: false,
  list: [],
  error: {},
  user: {
    fist_name: '',
    last_name: '',
    contact_number: '',
    _id: ''
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state }
    case FETCH_USERS:
      return { ...state, list: action.payload,  }
    case FETCH_ERROR: 
      return { ...state, error: action.error }
    case CREATE_USER:
      return { ...state, create: action.create }
    case DELETE_USER:
      return { ...state, id: action.id };
    case UPDATE_USER:
      return { ...state, update: action.payload }
    case GET_USER: 
      return { ...state, id: action.payload }
    case FETCH_USER:
      return { ...state, user: action.payload }
    default:
      return state;
  }
}