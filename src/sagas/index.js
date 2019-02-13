import { put, takeLatest, all, call } from 'redux-saga/effects';
import { FETCH_USERS, GET_USERS, FETCH_ERROR, DELETE_USER, UPDATE_USER, CREATE_USER, GET_USER, FETCH_USER } from '../actions/type';
import axios from 'axios';

const hostname = window && window.location && window.location.hostname;
const API_URL = (hostname === 'localhost') ? 'http://localhost:8080' : '';

function getRequest(data) {
  return axios.request({
    method: 'get',
    url: data.url,
  });
}

function postRequest(data) {
  return axios.request({
    method: 'post',
    url: data.url,
    data: data.body
  });
}

function deleteRequest(data) {
  return axios.request({
    method: 'delete', 
    url: data.url
  })
}

function* deleteUser(params){
  try {
    const response = yield call(deleteRequest, { 'url': `${API_URL}/api/users/${params.id}` });
    if (response.status === 200) {
      
      yield put({ type: GET_USERS  });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function* getUsers() {
  try {
    const response = yield call(getRequest, { 'url': `${API_URL}/api/users` });
    if (response.status === 200) {
      yield put({ type: FETCH_USERS, payload: response.data.result });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function* updateUser(params){
  console.log(params);
  try {
    const { _id } = params.update;

    const payload = {
      url: `${API_URL}/api/users/${_id}`,
      body: params.update
    }
    const response = yield call(postRequest, payload );
    
    if (response.status === 200) {
      yield put({ type: GET_USER, id: response.data.result._id });
    } else {
      throw response;
    }
    
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function* createUser(params){
  try {
    const payload = {
      url: `${API_URL}/api/users`,
      body: params.create
    }

    const response = yield call(postRequest, payload);
    if (response.status === 200) {
      yield put({ type: GET_USERS });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function* getUser(params){
  try {
    const response = yield call(getRequest, { 'url': `${API_URL}/api/user/${params.id}` });
    if (response.status === 200) {
      yield put({ type: FETCH_USER, payload: response.data.result });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function* actionDeleteUser() {
  yield takeLatest(DELETE_USER, deleteUser);
}

function* actionGetUsers() {
  yield takeLatest(GET_USERS, getUsers);
}

function* actionUpdateUser() {
  yield takeLatest(UPDATE_USER, updateUser);
} 

function* actionCreateUser() {
  yield takeLatest(CREATE_USER, createUser);
} 

function* actionGetUser() {
  yield takeLatest(GET_USER, getUser);
}


export default function* rootSaga() {
  yield all([
    actionGetUsers(),
    actionDeleteUser(),
    actionUpdateUser(),
    actionCreateUser(),
    actionGetUser()
  ]);
}