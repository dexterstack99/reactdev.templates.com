import React from 'react';
import logo from './logo.png';
import User from './components/user';
import './App.css';
import UserSignIn from './components/googleSign';


class App extends React.Component {

  render() {
  return (
    <div className="app">
      <div className="nav">
        <nav className="nav-header">
        
            <img src={logo} alt="DexDev" className="header-image"></img>
            <ul className="types">
              <li>Business</li>
              <li>Social</li>
              <li>Financial</li>
              <li>Chatting Apps</li>
              <li>E-commerce</li>
            </ul>
            <User
            className="g-user"
            user={this.googleUser}
            googleProfile={this.handleGoogleProfile}
            />

        </nav>
      </div>
    </div>
  );
  }
}

export default App;
