import React from 'react';
import NavBar from './Components/Sections/NavBar/NavBar';
import MainBanner from './Components/Sections/MainBanner/MainBanner';
import Section from './Components/Section';
import ProjectPreviewBanner from './Components/Sections/ProjectPreviewBanner/ProjectPreviewBanner';
import SkillsSection from './Components/Sections/SkillsSection/SkillsSection';
import GithubSection from './Components/Sections/GithubSection/GithubSection';
import ProjectSection from './Components/Sections/ProjectSection/ProjectSection';
import ContactSection from './Components/Sections/ContactSection/ContactSection';
import ExperienceSection from './Components/Sections/ExperienceSection/ExperienceSection';
import FooterSection from './Components/Sections/FooterSection/FooterSection';

function App() {
  
  return (
    <>

        <Section height={'600px'} background={'var(--main-bg-color-1)'} content= {
          <>
            <NavBar />
            <MainBanner />
          </>
        }/>

        <Section height={'300px'} background={'linear-gradient(to left, rgb(212, 171, 241, 0.5) , rgb(248, 102, 4, 0.3), white, white, white, white)'} content= {
            <ProjectPreviewBanner />
        }/>

      <Section height={'700px'} background={'white'} id={"skills"} content= {
          <SkillsSection />
      }/>

      <Section height={'600px'} background={'var(--main-bg-color-1)'} id={"experience"} content= {
        <ExperienceSection />
      }/>

      <Section height={'700px'} background={'white'} content= {
          <ProjectSection/>
      }/>

      <Section height={'600px'} background={'white'} content= {
          <GithubSection />
      }/>


      
      <Section height={'600px'} background={'linear-gradient(to left, rgb(212, 171, 241,0.5) , rgb(248, 102, 4,0.3), white, white, white, white)'} id={"contact"} content= {
        <ContactSection />
      }/>


       <Section height={'200px'} background={'grey'} id={""} content= {
        <FooterSection />
      }/>



    </>
  );
}

export default App;
