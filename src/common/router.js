import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Landing from '../components/landing';
import Dashboard from '../components/dashboard';
import Error from '../components/error';

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterComponent;