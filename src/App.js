import React, { useState } from 'react';
import './App.css';

import Markingmap from './components/markingmap';
import Placedetails from './components/placedetail';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);


  return (
    <div className="App">
      <div className="map-container">
        <Markingmap onLocationClick={setSelectedLocation} />
      </div>
      <div className="details-container">
        <Placedetails location={selectedLocation} />
      </div>
    </div>
  );
}

export default App;
