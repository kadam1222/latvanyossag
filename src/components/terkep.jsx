import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import "../components/terkep.css"
import { popup } from "leaflet"
import L from "leaflet"

const icon = L.icon({
    iconUrl : "https://static.thenounproject.com/png/335079-200.png",
    iconSize: [38, 94],
    iconAnchor: [22, 94],
    popupAnchor:  [-3, -76],
    
})

export default function MyMap() {
    const pontok =[
        { id :1, hely : [55.676, 12.568] , popupText: "Copenhagen"},
        { id :2, hely : [52.52, 13.405] , popupText: "Berlin"},
        { id :3, hely : [59.3293, 18.0686] , popupText: "Stockholm"},
        { id :4, hely : [59.9139, 10.7522] , popupText: "Oslo"},
        { id :5, hely : [52.2298, 21.0118] , popupText: "Warsaw"},
        { id :6, hely : [50.0755, 14.4378] , popupText: "Prague"},
        { id :7, hely : [48.2082, 16.3738] , popupText: "Vienna"}
    ]
    return (
        <MapContainer 
            id="map" 
            center={[55.676, 12.568]} 
            zoom={13} 
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {pontok.map((pont) =>(
                <Marker key={pont.id} position={pont.hely} icon={icon}>
                    <Popup>
                        {pont.popupText}
                    </Popup>
                    </Marker>
            ))}
        </MapContainer>
    );
}
