import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './components/aboutPage';
import HomePage from './components/homePage';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
