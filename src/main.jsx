import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginSignup from './Pages/loginsignup/LoginSignup.jsx';
import Logo from './components/logo/Logo.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo/>
    <LoginSignup/>
  </React.StrictMode>,
  
)
