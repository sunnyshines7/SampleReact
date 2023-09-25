import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../actions'

const Dashboard = () => {
  const inital = { fname: '', lname: '', age: '', email: '' }
  const [user, setUser] = useState(inital)
  const users = useSelector(state => state.userList);
  const dispatch = useDispatch();

  let fullname = useMemo(() => user.fname + ' ' + user.lname, [user])

  const changeUser = (e) => {
    setUser({ ...user, [e.name]: e.value })
  }

  const saveUser = (e) => {
    e.preventDefault();
    dispatch(createUser(user))
    setUser(inital)
  }

  return (
    <div>
      Dashboard
      <Link to="/">landing</Link>
      <div>
        <form onSubmit={saveUser}>
          <div>
            <label>First Name:</label>
            <input type="text" name="fname" value={user.fname} onChange={e => changeUser(e.target)} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lname" value={user.lname} onChange={e => changeUser(e.target)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" name="email" value={user.email} onChange={e => changeUser(e.target)} />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" name="age" value={user.age} onChange={e => changeUser(e.target)} />
          </div>
          <div>
            <button>send</button>
          </div>
        </form>
        Saved Name:{fullname}
      </div>

      <div>
        <p>User List</p>
        <table>
          {users.length > 0 &&
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
              </tr>
            </thead>}
          <tbody>
            {users && users.map((u, i) => {
              return (
                <tr key={i}>
                  <td>{u.fname + ' ' + u.lname}</td>
                  <td>{u.email}</td>
                  <td>{u.age}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Dashboard;