import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User1 from './User1.js';

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
      const newMsg = {username : name, text : msg}
    	this.setstate((currState) => ({messages : [...currState, newMsg]}))
    }

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
         <User1 username={this.users[0].username} messages={this.state.messages} disabled={this.isDisabled} updateMessage={this.updateMessage}/>
    	 <User1 username={this.users[1].username} messages={this.state.messages} disabled={this.isDisabled} updateMessage={this.updateMessage} />  
        </div>
      </div>
    );
  }
}

export default App;
