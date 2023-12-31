import React from 'react';
import './CreateProjectButton.css';
import { useNavigate } from 'react-router-dom';

const CreateProjectButton = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/post/create-project'); // Make sure the route matches your Router setup
  };

  return (
    <button className="create-project-button" onClick={handleClick}>
      Create a New Project
    </button>
  );
};

export default CreateProjectButton;
