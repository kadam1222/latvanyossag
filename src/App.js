import './App.css';
import "./components/fooldal.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Latvanyossag from "../src/components/latvanyossag"
/*import Programok from "../components/programok"
import Terkep from "../components/terkep"
import Tippek from "../components/tippek"
import "../components/fooldal.css"
import Galeria from "../components/galeria"
import Gasztronomia from "../components/gasztronomia"
import Kapcsolat from "../components/kapcsolat"*/


function Fooldal(){
  return(
    <>
    <header>
        <h1>Koppenhága</h1>
        <nav id="navigation">
              <Link to="/">Főoldal</Link>
              <Link to={"/latvanyossag"}>Látványosságok</Link>
            </nav>
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
function App() {
  return(
    <Router>
            <Routes>
              <Route path='/' element={<Fooldal />}/>
              <Route path="/latvanyossag" element={<Latvanyossag />}/>
            </Routes>
        </Router>
  )
}

export default App;
