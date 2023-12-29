import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './Components/Logo/Logo.jsx';
import App from './Components/App/App.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/*All Routes have been moved to App.jsx keep this file clean*/}
   
   <App/>
  </React.StrictMode>,
)
