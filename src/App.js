import React, { Component } from 'react';
import Navbar from "./Components/Navbar.js";
import './App.css';
import Landing from './Pages/Landing.js';

// If the user is not logged in, will display the landing page
// If the user is logged in (Which means Dima is logged in), it will show the admin version of the site


class App extends Component{
  state = {
    isLoggedIn: false
  }

  render() {

    if (!this.state.isLoggedIn) {
      return (
        <div>
          <Landing />
        </div>
      );
    }
    else {
      return (
        <div>
          <Navbar />
        </div>
      );
    }
  }
}

export default App;
