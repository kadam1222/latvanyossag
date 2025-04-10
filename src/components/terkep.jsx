import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import "../components/terkep.css"
import { popup } from "leaflet"
import L from "leaflet"

const icon = L.icon({
    iconUrl : "https://static.thenounproject.com/png/335079-200.png",
    iconSize: [55, 60],
    iconAnchor: [27.5, 60],    // középre és alulra horgonyozva
    popupAnchor: [0, -60]      // középen, ikon fölött
    
})

export default function MyMap() {
    const pontok =[
        { id :1, hely : [55.676, 12.568] , popupText: "Copenhagen"},
        { id :2, hely : [52.52, 13.405] , popupText: "Berlin"},
        { id :3, hely : [59.3293, 18.0686] , popupText: "Stockholm"},
        { id :4, hely : [59.9139, 10.7522] , popupText: "Oslo"},
        { id :5, hely : [52.2298, 21.0118] , popupText: "Warsaw"},
        { id :6, hely : [50.0755, 14.4378] , popupText: "Prague"},
        { id :7, hely : [48.2082, 16.3738] , popupText: "Vienna"},
        { id :8, hely : [55.6733, 12.5674] , popupText: "Tivoli Kertek"},
        { id :9, hely : [55.6929, 12.6007] , popupText: "A Kis Hableány Szobor"},  
        { id :10, hely : [55.6763, 12.5794] , popupText: "Rosenborg Kastély"},
        { id :11, hely : [55.6759, 12.5794] , popupText: "Christiansborg Palota"},
        { id :12, hely : [55.684052, 12.592923] , popupText: "Amalienborg Palota"},
        { id :13, hely : [55.6759, 12.5744] , popupText: "Kerek Torony (Rundetaarn)"},
        { id :14, hely : [55.6763, 12.5877] , popupText: "Dán Nemzeti Múzeum"},
        { id :15, hely : [55.9342, 12.3006] , popupText: "Frederiksborg Kastély"},
        { id :16, hely : [55.6763, 12.5877] , popupText: "Nyhavn"}
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
