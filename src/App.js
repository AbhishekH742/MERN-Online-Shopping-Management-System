
import './App.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './features/pages/Home';
import SignupPage from './features/pages/SignupPage';
import LoginPage from './features/pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element:<SignupPage></SignupPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;