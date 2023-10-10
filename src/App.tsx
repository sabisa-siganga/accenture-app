import React from 'react';
import './App.scss';
import Header from './components/header/header';
import {Routes, Route} from 'react-router-dom';
import Services from './components/services/services';
import Industries from './components/industries/industries';
import Cases from './components/cases/cases';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
    {/* Displaying the header on evry page of the website */}
    <Header />

    {/* Creating routes */}
    <Routes>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Industries" element={<Industries/>}/>
      <Route path="/Cases" element={<Cases/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
     
    </>
  );
}

export default App;
