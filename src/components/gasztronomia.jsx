import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom"
import { useState } from "react";
import  gasztro  from "./gasztro.json"
import Fooldal from "./fooldal.jsx"


export default function Gasztronomia(){

    const [index, setIndex] = useState(0);

    function handlenextClick(){
        if( index < gasztro.length-1){
            setIndex(index+1)
        }
        
    }
    function handlebackClick(){
        if(index>0){
            setIndex(index-1)
        }
        
    }

    let etel = gasztro[index]
    return(
        <>
            <h2>Gasztronómia - {gasztro.length} / {index+1}. elem</h2>
            
            
            
            <div id="etel">
                <button onClick={handlebackClick}>&larr;</button>
                <img src={etel.url} alt={etel.leírás}></img>
                <button onClick={handlenextClick}>&rarr;</button>
            </div>
            <div id="cimleiras">
                <h2>{etel.név}</h2>
                <span>{etel.leírás}</span>
            </div>
            
        </>
    );
}