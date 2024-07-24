import React from 'react';
import Euro from './Components/Euro/Euro';
import Hero from './Components/Hero/Hero';
import Topnews from './Components/Topnews/Topnews';
import Navbar from './Components/Navbar/Navbar';
import Copa from './Components/Copa/Copa'
import Transfer from './Components/Transfer/Transfer';
import Premier from './Components/Premier/Premier';
import Fpl from './Components/Fpl/Fpl';
import Laliga from './Components/Laliga/Laliga';
import Saudipro from './Components/Saudipro/Saudipro';
import End from './Components/End/End';
import Mobilemenu from './Components/Mobilemenu/Mobilemenu';
import Filters from './Components/Filters/Filters';

const App = () => {
  return (
    <div>
      <Mobilemenu/>
      <Navbar/>
      <Hero/>
      <Filters/>
      <Topnews/>
      <Euro/>
      <Copa/>
      <Transfer/>
      <Laliga/>
      <Saudipro/>
      <Premier/>
      <Fpl/>
      <End/>
    </div>
  );
};

export default App;