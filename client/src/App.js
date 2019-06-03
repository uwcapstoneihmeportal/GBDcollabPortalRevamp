import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Views
import SignInView from './views/SignInView'
import HomeView from './views/HomeView'
import ProfileView from './views/ProfileView'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SignInView} />
          <Route path='/home' component={HomeView} />
          <Route path='/profile' component={ProfileView} />
          <Redirect to='/' component={SignInView} />
        </Switch>
      </Router>
    )
  }
}

export default App
