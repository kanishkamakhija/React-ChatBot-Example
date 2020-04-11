import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js';

class App extends Component {
  
  
  users = [{ username: 'Amy' }, { username: 'John' }];
  
  state = {
           messages : [
                        { username: 'Amy', text: 'Hi, Jon!' },
                        { username: 'Amy', text: 'How are you?' },
                        { username: 'John', text: 'Hi, Amy! Good, you?' },
                      ]

  		}

	updateMessage = (name, msg) => {
    	this.setState((currState) => ({messages : [...currState.messages, {username : name, text : msg}]}))
    };

  isDisabled = (event) => {
    return false;
  };

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    		{this.users.map((user) => (
            	<User username={user.username} messages={this.state.messages} disabled={this.isDisabled} updateMessage={this.updateMessage}/>
            ))}
  
        </div>
      </div>
    );
  }
}

export default App;
