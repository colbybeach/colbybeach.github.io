import React from 'react';
import NavBar from './Components/Sections/NavBar/NavBar';
import MainBanner from './Components/Sections/MainBanner/MainBanner';

function App() {
  return (
    <>
      <div style={{height:'500px', backgroundColor:'var(--main-bg-color-1)'}}>
        <>
          <NavBar />
          <MainBanner />
        </>
      </div>

    </>
  );
}

export default App;
