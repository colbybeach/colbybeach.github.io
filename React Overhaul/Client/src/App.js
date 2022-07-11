import React from 'react';
import NavBar from './Components/Sections/NavBar/NavBar';
import MainBanner from './Components/Sections/MainBanner/MainBanner';
import Section from './Components/Sections/Section';

function App() {
  return (
    <>
      <Section height={'500px'} color={'var(--main-bg-color-1)'} content ={
        <>
          <NavBar />
          <MainBanner />
        </>}
      />




    </>
  );
}

export default App;
