import React from 'react'
import "leaflet/dist/leaflet.css"
import redMarker from"./asset/images/red_marker.png"
import cutlery from"./asset/images/cutlery.png"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"


function Map() {

  const position = [51.505, -0.09]

  const customIcon = new Icon({
    iconUrl: cutlery,
    iconSize: [40, 40]
  })


  return (
    <div className="my-10 flex items-center justify-center">
    <MapContainer className="h-80 w-4/5" center={position} zoom={13}>      
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  )
}

export default Map