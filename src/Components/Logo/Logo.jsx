import React from 'react';
import logo from '../Assets/logo.png';

const LogoComponent = () => {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0
    };
  
    const logoStyle = {
      width: '45px',
      height: '45px'
    };
  
    const titleStyle = {
      fontSize: '25px',
      fontWeight: 'bold',
      marginLeft: '10px',
      color: 'white',
    
      
    };
  
    return (
      <div style={containerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <span style={titleStyle}>ArtWork</span>
      </div>
    );
  };
  
  export default LogoComponent;