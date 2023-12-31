import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "../NavBar/NavBar.jsx"
import Messaging from "../Messaging/Messaging.jsx";
import LoginSignup from "../LoginSignupPage/LoginSignup.jsx";
import UserPage from "../UserPage/UserPage.jsx";
import PostCreate from "../PostCreatePage/CreatePost.jsx";



function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        {/*Add paths to components in NavBar here*/}
        <Route path="/" element={<LoginSignup />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/post" element={<PostCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
