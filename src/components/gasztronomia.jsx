import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom"
import { useState } from "react";
import  gasztro  from "./gasztro.json"
import Fooldal from "./fooldal.jsx"


export default function Gasztronomia(){

    return(
        <>
            <h2>Gasztronómia</h2>
            <div>

            </div>
            <div id="fodiv">
                {gasztro.map(etel =>(
                    <div className="etel">
                    <img className="kajakep" src={etel.url} alt={etel.leírás}></img>
                        
                        <h2>{etel.név}</h2>
                        <span className="kajalabel">{etel.leírás}</span>
                        
                    </div>
                ))}
                
            </div>
            
            
        </>
    );
}