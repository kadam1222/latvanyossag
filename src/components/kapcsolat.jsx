import  kapcs  from "./kapcs.json"

export default function Kapcsolat(){
    return(
        <>
    <h1>Utazási irodák amelyeket ajánlunk:</h1>
    <div id="fodiviroda">
            {kapcs.map(kapcs =>(
                    <div className="utazasdiv">
                    <img className="utazaskep" src={kapcs.img}></img>
                        <h2>{kapcs.név}</h2>
                        <span className="utazasszov">{kapcs.leírás}</span>
                        <span className="link"><a href={kapcs.url} target="blank_">A {kapcs.név} linkje!</a></span>
                    </div>
                ))}
    </div>

    <span></span>
    </>
    )
    
}