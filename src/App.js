import React from 'react';
import data from './traveldata.js';
import Navbar from './components/Navbar';
import TravelComponent from './components/TravelComponent';

function App() {
  const traveldata=data.map(item =>{ 
    return <TravelComponent item={item}  />
  });
  return (
    <div className="App">
     <Navbar />
     <section>{ traveldata }</section>
    </div>
  );
}

export default App;
