import React from 'react';

const Placedetails = ({ location }) => {
  if (!location){
    return <div>click location for more details</div>;
  } 

return (
    <div className="placedetails">
        <h2>{location.name}</h2>
        <p>Latitude: {location.latitude}</p>
        <p>Longitude: {location.longitude}</p>
        <p>Status: {location.status}</p>
    </div>
  );
};

export default Placedetails;
