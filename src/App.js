import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import './styles/fresh-patterns.scss';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
