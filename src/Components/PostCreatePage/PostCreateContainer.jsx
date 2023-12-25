import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePostPage from './CreatePostPage.jsx';
import NextPage from './NextPage.jsx';
import CreateProjectButton from './CreateProjectButton.jsx';

const PostCreateContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateProjectButton />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
};


export default PostCreateContainer;
