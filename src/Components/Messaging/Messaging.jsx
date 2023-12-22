import React, { useState } from 'react';
import './Messaging.css';
import ChatList from './ChatList'; 

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="app-container">
      <ChatList /> {}
      <div className="chat-container">
        <h1 className="chat-title">Chat</h1>
        <form className="chat-form">
          <input className="chat-input" value={input} onChange={event => setInput(event.target.value)} />
          <button className="chat-button" type="submit" onClick={sendMessage}>Send Message</button>
        </form>
        {messages.map((message, index) => (
          <p key={index} className="chat-message">{message}</p>
        ))}
      </div>
    </div>
  );
}

export default Chat;