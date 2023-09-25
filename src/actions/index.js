export const createUser = ({ fname, lname, email, age }) => {
  return {
    type: 'CREATE_USER',
    payload: {
      fname, lname, email, age
    }
  }
}

export const deleteUser = ({ fname }) => {
  return {
    type: 'DELETE_USER',
    payload: { fname }
  }
}

export const findUser = ({ name }) => {
  return {
    type: 'FIND_USER',
    payload: { name }
  }
}