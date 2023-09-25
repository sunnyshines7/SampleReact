import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      Page not found
      <p>
        Back to <Link to="/">landing</Link>
      </p>
    </div>
  )
}

export default Error;