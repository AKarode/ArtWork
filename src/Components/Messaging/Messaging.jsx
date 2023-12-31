import React, { useState } from 'react';
import './Messaging.css';
import ChatList from './ChatList'; 

function Chat() {
  const [input, setInput] = useState('');
  const [currentChat, setCurrentChat] = useState(null);

  const openChat = (chat) => {
    setCurrentChat(chat);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (currentChat) {
      const newChat = { ...currentChat };
      newChat.messages.push({ 
        content: input, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: 'me'
      });
      setCurrentChat(newChat);
    }
    setInput('');
  };

  return (
    <div className="app-container">
      <ChatList openChat={openChat} />
      <div className="chat-container">
        <h1 className="chat-title">Chat {currentChat && `with ${currentChat.name}`}</h1>
        <form className="chat-form">
          <input className="chat-input" value={input} onChange={event => setInput(event.target.value)} />
          <button className="chat-button" type="submit" onClick={sendMessage}>Send Message</button>
        </form>
        <div className="messages-container">
          {currentChat && currentChat.messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chat;
