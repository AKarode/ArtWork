import React from 'react'
import ReactDOM from 'react-dom/client'
import UserPage from './Components/UserPage/UserPage.jsx';
// import Messaging from './Components/Messaging/Messaging.jsx';
// import ChatList from './Components/Messaging/ChatList.jsx';
import PostCreateContainer from './Components/PostCreatePage/PostCreateContainer.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Messaging/>
    <ChatList/> */}
    {/* <UserPage/> */}
    <PostCreateContainer/>
  </React.StrictMode>,
)
