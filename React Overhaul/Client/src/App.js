import React from 'react';
import NavBar from './Components/Sections/NavBar/NavBar';
import MainBanner from './Components/Sections/MainBanner/MainBanner';
import Section from './Components/Section';
import ProjectPreviewBanner from './Components/Sections/ProjectPreviewBanner/ProjectPreviewBanner';

function App() {
  return (
    <>
      <Section height={'600px'} background={'var(--main-bg-color-1)'} id={"#"} content= {
        <>
          <NavBar />
          <MainBanner />
        </>
      }/>
       <Section height={'300px'} background={'white'} content= {
        <>
          <ProjectPreviewBanner />
        </>
      }/>

    </>
  );
}

export default App;
