import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatePostPage from './CreatePostPage.jsx';
import NextPage from './NextPage.jsx';
import CreateProjectButton from './CreateProjectButton.jsx';

const PostCreateContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateProjectButton />} />
      <Route path="/create-button" element={<CreateProjectButton />} />
      <Route path="/create-project" element={<CreatePostPage />} />
      <Route path="/next-page" element={<NextPage />} />
    </Routes>
  );
};

export default PostCreateContainer;
