import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <main>
        <div id='home'>
          <Home></Home>
        </div>

        <div id='about'>
          <About></About>
        </div>

        <div id='courses'>
          <Courses></Courses>
        </div>

        <div>
          
        </div>
      </main>
    </div>
  );
};

export default App;