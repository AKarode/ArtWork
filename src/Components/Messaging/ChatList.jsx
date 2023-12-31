import React from 'react';
import './ChatList.css';
import searchIcon from '../Assets/search-icon.png';
import composeIcon from '../Assets/compose-message.png';

const mockChats = [
  { id: 1, name: 'User 1', messages: [{ content: 'Hello', timestamp: '12:45 PM', sender: 'them' }] },
  { id: 2, name: 'User 2', messages: [{ content: 'Hey there', timestamp: '11:15 AM', sender: 'them' }] },
  { id: 3, name: 'User 3', messages: [{ content: 'Wassup', timestamp: '10:30 AM', sender: 'them' }] },
];

function ChatList({ openChat }) {
  return (
    <div className="chatlist-container">
      <div className="chatlist-header">
        <h1>Messages</h1>
        <div>
          <button><img src={searchIcon} alt="Search" className="header-icon" /></button>
          <button><img src={composeIcon} alt="Compose" className="header-icon" /></button>
        </div>
      </div>
      {mockChats.map((chat) => (
        <div key={chat.id} className="chatlist-item" onClick={() => openChat(chat)}>
          <p className="chatlist-name">{chat.name}</p>
          <button className="chatlist-last-message">{chat.messages[chat.messages.length - 1].content}
            <span className="Chatlist-timestamp">{chat.messages[chat.messages.length - 1].timestamp}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
