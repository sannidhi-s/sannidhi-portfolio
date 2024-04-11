
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './pages/home/Navbar';
import Home from './pages/home/homescreen';




function App() {
  return (
    <div className="App"> 
      <Router>
        <div>
          <Navbar />
         
          <Routes>
      
            <Route path="/" element={<Home />}/>

     
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
