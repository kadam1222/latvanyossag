import './App.css';
import "./components/fooldal.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
//import Latvanyossag from "../src/components/latvanyossag"
import Galeria from "../src/components/galeria"
/*import Programok from "../components/programok"
import Terkep from "../components/terkep"
import Tippek from "../components/tippek"
*/
import Gasztronomia from "../src/components/gasztronomia"
import Kapcsolat from "../src/components/kapcsolat"
import Fooldal from './components/fooldal';




function App() {
  return(
    <Router>
            <header>
            <h1>Koppenhága</h1>
            <nav id="navigation">
              <Link to="/">Főoldal</Link>
              <Link to={"/latvanyossag"}>Látványosságok</Link>
              <Link to={"/galeria"}>Galléria</Link>
              <Link to={"/gasztronomia"}>Gasztronómia</Link>
              <Link to={"/kapcsolat"}>Kapcsolat</Link>
            </nav>
            </header>
            <Routes>
              <Route path='/' element={<Fooldal />}/>
              <Route path='/galeria' element={<Galeria />}/>
              <Route path='/gasztronomia' element={<Gasztronomia />}/>
              <Route path='/kapcsolat' element={<Kapcsolat />}/>
            </Routes>
        </Router>
  )
}

export default App;
