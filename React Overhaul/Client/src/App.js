import React from 'react';
import NavBar from './Components/Sections/NavBar/NavBar';
import MainBanner from './Components/Sections/MainBanner/MainBanner';
import Section from './Components/Section';
import ProjectPreviewBanner from './Components/Sections/ProjectPreviewBanner/ProjectPreviewBanner';
import SkillsSection from './Components/Sections/SkillsSection/SkillsSection';
import GithubSection from './Components/Sections/GithubSection/GithubSection';
import ProjectSection from './Components/Sections/ProjectSection/ProjectSection';

function App() {
  return (
    <>
      <Section height={'600px'} background={'var(--main-bg-color-1)'} content= {
        <>
          <NavBar />
          <MainBanner />
        </>
      }/>
       <Section height={'300px'} background={'white'} content= {
          <ProjectPreviewBanner />
      }/>

      <Section height={'700px'} background={'white'} id={"skills"} content= {
          <SkillsSection />
      }/>
      <Section height={'800px'} background={'var(--main-bg-color-1)'} id={"experience"} content= {
        <>
        </>
      }/>
      <Section height={'700px'} background={'white'} content= {
          <ProjectSection/>
      }/>
      <Section height={'600px'} background={'white'} content= {
          <GithubSection />
      }/>
      <Section height={'600px'} background={'white'} id={"contact"} content= {
        <>
        </>
      }/>
       <Section height={'100px'} background={'grey'} id={""} content= {
        <>
        </>
      }/>
    </>
  );
}

export default App;
