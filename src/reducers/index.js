import { combineReducers } from 'redux';

const reducers = (users = [], action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return [...users, action.payload]
    case 'DELETE_USER':
      return [...users].filter((user) => user.fname !== action.payload)
    case 'FIND_USER':
      return [...users].filter((user) => user.fname == action.payload)
    default:
      return users;
  }
}

export default combineReducers({ userList: reducers })