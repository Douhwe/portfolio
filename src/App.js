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
                    <Route path="/future-goals" element={<FutureGoals />} /> 
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
  
  function FutureGoals() {
    return <h2>Future Goals</h2>;
  }


export default App;
