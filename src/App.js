import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PublicNavBar from './components/PublicNavBar';
import PrivateNavBar from './components/PrivateNavBar';

import SingleGradebook from './components/SingleGradebook';

import AddGradebook from './pages/AddGradebook';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Teachers from './pages/Teachers';

import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';

import { useSelector } from "react-redux";
import { selectIsAuthenticated } from './store/activeUser/selectors';

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  return (
    <Router>
      {isAuthenticated ? <PrivateNavBar /> : <PublicNavBar />}

      <Switch >
        <PrivateRoute exact path='/'>
          <Home />
        </PrivateRoute>
        <PublicRoute exact path='/login'>
          <Login />
        </PublicRoute>
        <PublicRoute exact path='/register'>
          <Register />
        </PublicRoute>
        <PrivateRoute exact path='/teachers'>
          <Teachers />
        </PrivateRoute>
        <PrivateRoute exact path='/my-gradebook'>
          <SingleGradebook />
        </PrivateRoute>
        <PrivateRoute exact path='/gradebooks/create'>
          <AddGradebook />
        </PrivateRoute>
      </Switch >
    </Router>

  );
}

export default App;

