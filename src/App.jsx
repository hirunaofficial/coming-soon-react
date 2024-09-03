import React from 'react';
import Timer from './components/Countdown/Timer';  
import Preloader from './components/Preloader/Preloader'; ;
import Socialmedia from './components/Socialmedia/Socialmedia';
 ;

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer/>
        <Preloader/>
        <Socialmedia/>
      </div>
    </div>
  );
}

export default App;
