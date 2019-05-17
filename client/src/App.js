import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Views
import SignInView from './views/SignInView'
import HomeView from './views/HomeView'
import ProfileView from './views/ProfileView'
import VizTestView from './views/VizTestView'

// Style related imports
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SignInView} />
          <Route path='/home' component={HomeView} />
          <Route path='/profile' component={ProfileView} />
          <Route path='/viz' component = {VizTestView} />
          <Redirect to='/' component={SignInView} />
        </Switch>
      </Router>
    )
  }
}

export default App
