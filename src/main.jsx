import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginSignup from './Components/LoginSignupPage/LoginSignup.jsx'
import Logo from './Components/Logo/Logo.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo/>
    <LoginSignup/>
  </React.StrictMode>,
  
)
