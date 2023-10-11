import React from 'react'
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import Services from '../components/services/services';
import Cases from '../components/cases/cases';
import Industries from '../components/industries/industries';
import Contact from '../components/contact/contact';

const LandingPage = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Services/>
        <Cases/>
        <Industries/>
        <Contact/>
    </>
  )
}
 export default LandingPage;

