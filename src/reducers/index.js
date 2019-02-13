import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './users';

const  rootReducer = combineReducers({
  router: routerReducer,
  users: userReducer
});

export default rootReducer;