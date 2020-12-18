import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import './main.scss';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/logowanie' component={Login} />
      <Route path='/rejestracja' component={Register} />
      <Route path='/wylogowano' component={Logout} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
