import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Galeria from "../components/galeria"
import Gasztronomia from "../components/gasztronomia"
import Kapcsolat from "../components/kapcsolat"
import Latvanyossag from "../components/latvanyossag"
import Programok from "../components/programok"
import Terkep from "../components/terkep"
import Tippek from "../components/tippek"
import "../components/fooldal.css"

export default function Fooldal(){
    return(
        <>
        <header>
            <h1>Koppenhága</h1>
            <Router>
                <nav id="navigation">
                    <Link to={"/galeria"}>Galléria</Link>
                    <Link to={"/gasztronomia"}>Gasztronómia</Link>
                    <Link to={"/kapcsolat"}>Kapcsolat</Link>
                    <Link to={"/latvanyossag"}>Látványosságok</Link>
                    <Link to={"/programok"}>Programok</Link>
                    <Link to={"/terkep"}>Térkép</Link>
                    <Link to={"/tippek"}>Tippek</Link>
                </nav>
                <Routes>
                    <Route path='/galeria' element={<Galeria/>}/>
                    <Route path="/gasztronomia" element={<Gasztronomia/>}/>
                    <Route path="/kapcsolat" element={<Kapcsolat/>}/>
                    <Route path="/latvanyossag" element={<Latvanyossag/>}/>
                    <Route path="/programok" element={<Programok/>}/>
                    <Route path="/terkep" element={<Terkep/>}/>
                    <Route path="/tippek" element={<Tippek/>}/>
                </Routes>
            </Router>
        </header>
        <main>
            <div>
            Koppenhága Dánia fővárosa és legnagyobb városa, amely Skandinávia egyik kulturálisan gazdag központja. A város híres történelmi látnivalóiról, mint például a **Tivoli kert**, a **Nyhavn** csatorna és a **Királyi Palota**. A város egyben fontos gazdasági és tudományos központ is. A modern városképben keveredik a régi épületek és a kortárs építészet, miközben hangsúlyos szerepet kapnak a fenntarthatóság és a környezetvédelem.
            </div>
            <div>
            Koppenhága a híres <a href="https://csamborgo.hu/2019/05/15/a-kis-hableany-szobra/">Bébi Bálna</a> szobráról (The Little Mermaid) is ismert, amely Hans Christian Andersen meséje alapján készült. Emellett a város pezsgő étkezési kultúrája és a biciklizésre való fókuszálás is a látogatók körében vonzóvá teszi.
            </div>
        </main>
        <footer>
            <span id="dfsfd">&copy;Sigmango</span>
            <span><a href="https://www.instagram.com/visitcopenhagen/?hl=en" target="_blank"> Instagram</a></span>
        </footer>
        </>
    )
}