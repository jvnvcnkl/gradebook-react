import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import SingleGradebook from './components/SingleGradebook';

import AddGradebook from './pages/AddGradebook';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Teachers from './pages/Teachers';

import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
  return (
    <Router>
      <NavBar />

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

