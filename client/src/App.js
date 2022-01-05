import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NavBar from './containers/NavBar';
import CardsContainer from "./containers/CardsContainer";

function App() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cards/*" element={<CardsContainer/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App;
