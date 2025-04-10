
import  gasztro  from "./gasztro.json"
export default function Gasztronomia(){

    return(
        <>
            <h1>Étel ajánlataink</h1>
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