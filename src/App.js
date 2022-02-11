import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, withRouter } from 'react-router';
import Login from './Pages/Login.js'
import Dashboard from './Pages/Dashboard.js';
import Profile from './Pages/Profile.js';
import Nav from "./Components/Nav.js";

const App = withRouter(({ location }) => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login title="Login" />
        </Route>
        <Route path="/dashboard">
          <Dashboard title="Dashboard" />
        </Route>
        <Route path="/profile">
          <Profile title="Profile" />
        </Route>
      </Switch>

      {location.pathname !== '/' && <Nav />}
    </div>
  );
});

export default App;
