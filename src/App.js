import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import './main.scss';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
