import React, { useEffect, useState } from 'react';

import locations from './location';

window.mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const Markingmap = ({ onLocationClick }) => {
  const [map, setMap] = useState(null);

useEffect(() => {
    const initializeMap = () => {
      const map = new window.mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [78.96, 20.59], //used india center
        zoom: 4
});

locations.forEach(location => {
    const marker = new window.mapboxgl.Marker({ color: getColor(location.status) })
        .setLngLat([location.longitude, location.latitude])
         .addTo(map);

    marker.getElement().addEventListener('click', () => {
        onLocationClick(location);
    });
    });

      setMap(map);
    };

    if (!map) initializeMap();
  },[map, onLocationClick]);



  const getColor = (status) => {
    const statusColors = {
      critical: 'red',
      moderate: 'yellow',
      allgood: 'green'
    };
  
    return statusColors[status] || 'blue';
  };

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default Markingmap;
