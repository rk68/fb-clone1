import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Funds from "./Funds";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, 
  Route, Redirect,} from "react-router-dom";


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Router>
    <div className="App">
      { !user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            
            
            
              
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/Funds" element={<Funds />} />
            </Routes>

            
              
            
            
            
          </div>
        </>
      )}
    </div>
    </Router>
  );
}

export default App;
