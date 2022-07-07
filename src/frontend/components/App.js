import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from './Home.js';
import Signup from './Signup.js';
import Login from './Login.js';
import Events from './Events.js';
import Profile from './Profile.js';
import Routes_Marketplace from './Routes_Marketplace.js';
import Protected  from './Protected ';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/*" element={<Login />} />

        
        {/* if You Want to Make Any Page Password Protacted with Login Then Do Routing Like This */}
        <Route path="/marketplace/*" element={<Routes_Marketplace/>} />
        <Route path="/events" element={<Protected  cmp={Events} pagename={"events"} /> } />
        <Route path="/profile" element={<Protected  cmp={Profile}  /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
