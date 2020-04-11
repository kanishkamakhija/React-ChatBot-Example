import React, { Component } from 'react'; 
import Form from './Form.js';


class User1 extends Component {
  
  	
  
  render() {
  return (
		<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <Form username={this.props.username} disabled={this.props.isDisabled} updateMessage={this.props.updateMessage}/>
            </div>
          </div>
)};
}

export default User1;