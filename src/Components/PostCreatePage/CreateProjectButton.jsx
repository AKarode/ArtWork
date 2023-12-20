import React from 'react';
import './CreateProjectButton.css';
import { useNavigate } from 'react-router-dom';

const CreateProjectButton = () => {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/create'); // Make sure the route matches your Router setup
  };

  return (
    <button className="create-project-button" onClick={handleClick}>
      Create a New Project
    </button>
  );
};

export default CreateProjectButton;
