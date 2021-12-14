import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import SingleGradebook from './components/SingleGradebook';
import AddGradebook from './pages/AddGradebook';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Teachers from './pages/Teachers';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/teachers'>
          <Teachers />
        </Route>
        <Route path='/my-gradebook'>
          <SingleGradebook />
        </Route>
        <Route path='/gradebooks/create'>
          <AddGradebook />
        </Route>
      </Switch >
    </Router>

  );
}

export default App;

