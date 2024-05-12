import Portfolio from './components/Portfolio';
import Interests from './components/Interests';
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
                    <Route path="/portfolio" element={<Home/>}/>
                    <Route path="/interests" element={<InterestsPage/>} /> 
                </Routes>
            </div>
        </Router>
    );
}

// Functional Component that Encapsulates another Component
function Home() { 
    return <div className="App">
        <Portfolio />
    </div>
  }
  
function InterestsPage() {
    return <div className="Interests">
        <Interests/>
    </div>
}


export default App;
