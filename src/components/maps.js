// src/components/MapPage.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLocation, useParams } from 'react-router-dom';

const MapPage = () => {
  const location = useLocation();
  const { state } = useParams();
  const data = location.state.data;

  const filteredData = Object.values(data)
    .flat()
    .filter(item => item.country.split(', ')[1] === state);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Restaurants in {state}</h1>
      <MapContainer center={[37.8, -96.9]} zoom={4} className="h-96">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredData.map(item => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>
              <strong>{item.name}</strong><br />
              {item.dsc}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
