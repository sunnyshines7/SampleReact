import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../actions'


const Landing = (props) => {
  console.log(props)
  return (
    <div>
      Landing Page
      <Link to="/dashboard">dashboard</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todolist: state.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeToDo: id => dispatch(deleteUser(id))
  };
};

export default connect(mapStateToProps)(Landing);