import React, { useState } from 'react';
import './CreatePostPage.css';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
    const [projectTitle, setProjectTitle] = useState('');
    const [description, setDescription] = useState('');
    const [positions, setPositions] = useState('');
    const navigate = useNavigate();

    //Cancel button should bring back to the home page
    const handleCancel = () => {
        navigate('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleNext = () => {
        navigate('/post/next-page');
    }

    const autoExpand = (e) => {
        const textarea = e.target;
        textarea.style.height = 'inherit'; // Reset the height so the scrollHeight includes only the content
        const computed = window.getComputedStyle(textarea); // Get the computed styles for the element

        // Calculate the height
        const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                     + parseInt(computed.getPropertyValue('padding-top'), 10)
                     + textarea.scrollHeight
                     + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                     + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

        textarea.style.height = `${height}px`;
    };

    return (
        <div className='create-post-page'>
            <h2>Tell Us About Your Project!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className='input-field'
                    type='text'
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder='Title'
                />
                <textarea
                    className='input-field'
                    value={positions}
                    type='text'
                    onChange={(e) => setPositions(e.target.value)}
                    onInput={autoExpand}
                    placeholder='Add Positions!'
                />
                <textarea
                    className='input-field'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onInput={autoExpand}
                    placeholder='Give a Brief Description!'
                />
                <div className='buttons-container'>
                    <button className='cancel-button' onClick={handleCancel}>Cancel</button>
                    <button className="next-button" onClick={handleNext}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostPage;