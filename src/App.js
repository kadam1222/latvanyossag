import './App.css';
import "./components/fooldal.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
//import Latvanyossag from "../src/components/latvanyossag"
import Galeria from "../src/components/galeria"
/*import Programok from "../components/programok"
import Terkep from "../components/terkep"
import Tippek from "../components/tippek"
import "../components/fooldal.css""
import Gasztronomia from "../components/gasztronomia"
import Kapcsolat from "../components/kapcsolat"*/


function Fooldal(){
  return(
    <>
    <header>
        <h1>Koppenhága</h1>
        <nav id="navigation">
              <Link to="/">Főoldal</Link>
              <Link to={"/galeria"}>Galléria</Link>
            </nav>
    </header>
    <main>
        <div id='felso'>
        <span>Koppenhága Dánia fővárosa és legnagyobb városa, amely Skandinávia egyik kulturálisan gazdag központja. </span><br/>
        <span>A város híres történelmi látnivalóiról, mint például a **Tivoli kert**, a **Nyhavn** csatorna és a **Királyi Palota**. </span><br/>
       <span> A város egyben fontos gazdasági és tudományos központ is. </span><br/>
       <span> A modern városképben keveredik a régi épületek és a kortárs építészet, miközben hangsúlyos szerepet kapnak a fenntarthatóság és a környezetvédelem.</span><br/>
        </div>
        <div>
        Koppenhága a híres <a href="https://csamborgo.hu/2019/05/15/a-kis-hableany-szobra/">Bébi Bálna</a> szobráról (The Little Mermaid) is ismert, amely Hans Christian Andersen meséje alapján készült. Emellett a város pezsgő étkezési kultúrája és a biciklizésre való fókuszálás is a látogatók körében vonzóvá teszi.
        </div>
        <div id='tortenelem'>
          <div>
          <h2>Történelme</h2>
          Koppenhága, Dánia fővárosa, hosszú és gazdag történelmi múltra tekint vissza. <br/>
          Az első település a város területén már a 10. században létezett, és a vikingek idejére datálható. <br/>
          1167-ben egyértelműen városként kezdett fejlődni, amikor IV. Valdemar dán király alapította meg. <br />
          A 15. és 16. században Koppenhága jelentős kereskedelmi központtá vált, és 1417-ben Dániát és Norvégiát egyesítő Kalmar Unió központja lett. <br/>
          A 17. században, I. Keresztély uralkodása alatt a város fejlődése felgyorsult, és ekkor épült fel a híres Christiansborg palota is. <br/>
          Az 1800-as évek elején, a napóleoni háborúk idején Koppenhága több ostromot is szenvedett, de sikeresen megőrizte függetlenségét. <br/>
          A 20. században a város modern ipari és kulturális központtá vált, a dán állam politikai és gazdasági szívévé. <br/>
          Ma Koppenhága Európa egyik legélhetőbb és leginnovatívabb városa, híres a fenntarthatóság iránti elkötelezettségéről és kulturális örökségéről.<br/>
          </div>
          <div>
            <img src='https://hamlettours.com/wp-content/uploads/Christiansborg/christiansborg_palace.jpg' className='kep'></img>
          </div>
        </div>
        <div id='erdekessegek'>
          <h2>Érdekességek</h2>
          A dánok a világ legboldogabb emberei: A híres „Boldogság Index” szerint a dánok évről évre a világ legboldogabb népei közé tartoznak, és Koppenhága is nagy szerepet játszik ebben a város kedvező életminőségével és zöld környezetével.<br/>
          A világ egyik legjobb éttermét találod itt: A "Noma" étterem, amely a világ legjobb éttermei között szerepel, Koppenhágában található. A séf, René Redzepi, híres a skandináv konyha újragondolásáról. <br/>
          Dánia biciklis paradicsom: Koppenhágában több mint 390 km kerékpárút van, és a város lakóinak több mint 40%-a mindennap biciklivel közlekedik. <br/>
          Koppenhága a design fővárosa: A város híres a minimalista dán dizájnról, és sok híres bútorgyártó, például a „Georg Jensen” és a „Bang & Olufsen” itt működik.

        </div>
    </main>
    <footer>
        <span id="dfsfd">&copy;SigmangOhio</span>
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
              <Route path='/galeria' element={<Galeria />}/>
            </Routes>
        </Router>
  )
}

export default App;
