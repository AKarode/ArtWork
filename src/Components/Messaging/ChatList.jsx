import React from 'react';
import './ChatList.css';
import searchIcon from '../Assets/search-icon.png';
// import composeIcon from './Components/Assets/compose-message.png';

const mockChats = [
  { id: 1, name: 'User 1', lastMessage: 'Hello', timestamp: '10:30 AM' },
  { id: 2, name: 'User 2', lastMessage: 'Hey there', timestamp: '11:15 AM' },
  { id: 3, name: 'User 3', lastMessage: 'Wassup', timestamp: '12:45 PM' },
];

function ChatList() {
  return (
    <div className="chatlist-container">
      <div className="chatlist-header">
        <h1>Messages</h1>
        <div>
          <button><img src={searchIcon} alt="Search" className="header-icon" /></button>
          {/* <button><img src={composeIcon} alt="Compose" className="header-icon" /></button> */}
        </div>
      </div>
      {mockChats.map((chat) => (
        <div key={chat.id} className="chatlist-item">
          <p className="chatlist-name">{chat.name}</p>
          <button className="chatlist-last-message">{chat.lastMessage}
          <span classname = "Chatlist-timestamp">{chat.timestamp}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChatList;