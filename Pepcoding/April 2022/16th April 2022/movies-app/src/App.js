import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import New from './components/New';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new' element={<New />} />
        {/* the index route is defined for the / route */}
        <Route index element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;