import { Portfolio } from './components/Portfolio';
import NavBar from './components/NavBar';
import './components/Global.css';
import  {
    BrowserRouter as Router, 
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router basename="/"> {/* Keeps URL Link in Sync */}
            <div className="NavBar">
            <NavBar/>
            </div>

            <div>
                <Routes> {/* Renders Component specified by Path */}
                    <Route path="/Interests" element={<Interests/>} /> 
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}


function Home() {
    return <div className="App">
    <Portfolio />
    </div>
  }
  
  function Interests() {
    return <h2>Here are some of my interests</h2>;
  }


export default App;
