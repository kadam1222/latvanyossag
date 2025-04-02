import  kapcs  from "./kapcs.json"

export default function Kapcsolat(){
    return(
        <>
    <h1>Utazási irodák amelyeket ajánlunk:</h1>
    <div id="fodiv">
            {kapcs.map(kapcs =>(
                    <div className="etel">
                    <img className="utazaskep" src={kapcs.img}></img>
                        <h2>{kapcs.név}</h2>
                        <span className="utazasszov">{kapcs.leírás}</span>
                        <span><a href={kapcs.url} target="blank_">Link</a></span>
                    </div>
                ))}
    </div>

    <span></span>
    </>
    )
    
}