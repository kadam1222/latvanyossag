import adatok from "../data/latvanyossag.json"
import { useState } from "react"
import "../components/galeria.css"
export default function Galeria(){
        const [aktual, setAktual] = useState(0)
        var aktualis = adatok[aktual]
function novel(){
    if (aktual < adatok.length-1){
        setAktual(aktual+1)
    }
}
function csokken(){
    if (aktual > 0){
        setAktual(aktual-1)
    }
}
    return (
        <>
        <h2>Gallery</h2>
        <h2>{aktualis.név}</h2>
        <div id="gallery">
        <button onClick={csokken}>&larr;</button>
        <img src={aktualis.url} alt={aktualis.alt} className="kepekgal"></img>
        <button onClick={novel}>&rarr;</button>
        </div><br/>
        <span>{aktualis.desc}</span>
        </>
    )
    
    
}