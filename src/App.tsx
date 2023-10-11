import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <>
    {/* Creating routes */}
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
     
    </>
  );
}

export default App;
