import { GET_USERS, DELETE_USER, UPDATE_USER, CREATE_USER, GET_USER } from './type';

export const getUsers = () => ({
  type: GET_USERS
});

export const getUser = (id) => ({
  type: GET_USER,
  id: id
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id: id
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  update: payload
});

export const createUser = (payload) => ({
  type: CREATE_USER,
  create: payload
});