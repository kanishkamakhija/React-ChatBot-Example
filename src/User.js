import React from 'react'; 
import Form from './Form.js';


function User(props) {
  return (
		<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.username}</div>

            <ul className="message-list">
              {props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === props.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <Form username={props.username} disabled={props.isDisabled} updateMessage={props.updateMessage}/>
            </div>
          </div>
);
}

export default User;