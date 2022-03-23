import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, withRouter } from 'react-router';
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Refer from './Pages/Refer';
import Nav from "./Components/Nav";
import Reset from "./Pages/Reset";
import Register from "./Pages/Register";
import Media from './Pages/Media';
import MediaPage from './Pages/MediaPage';
import NotFound from './Pages/NotFound';
import Training from './Pages/Training';
import SideProfile from './Components/SideProfile';

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
        <Route path="/refer">
          <Refer title="Refer" />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/reset">
          <Reset />
        </Route>
        <Route exact path="/media">
          <Media title="Media" />
        </Route>
        <Route exact path="/media-page">
          <MediaPage title="Media Page" />
        </Route>
        <Route exact path="/training">
          <Training title="Training Page" />
        </Route>
        <Route exact path="/404">
          <NotFound title="Error Page" />
        </Route>
      </Switch>

      {location.pathname !== '/' && location.pathname !== '/register' && location.pathname !== '/reset' && <Nav />}
      {location.pathname !== '/' && location.pathname !== '/dashboard' && location.pathname !== '/register' && location.pathname !== '/reset' && location.pathname !== '/profile' && <SideProfile />}
    </div>
  );
});

export default App;
