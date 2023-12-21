import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePostPage from './PostCreatePage/CreatePostPage.jsx';
import NextPage from './PostCreatePage/NextPage.jsx';
import CreateProjectButton from './PostCreatePage/CreateProjectButton.jsx';

const App = () => {
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


export default App;
