import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from "./pages/profile";
import Login from "./pages/login";

export default function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      {/* </Router> */}
      
    </div>
  );
}