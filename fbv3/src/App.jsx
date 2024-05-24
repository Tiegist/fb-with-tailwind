
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Vediopage from './components/vediopage';
import Grouppage from './components/grouppage';
import Cshoppage from './components/cshoppage';

import Topnav from './components/topnav';



function App() {
  return (
    <Router>
      <Topnav />
    <Routes>
       
       <Route  path="/" element={<Home />} />
       <Route  path="/components/Vediopage" element={<Vediopage />} />
       <Route  path="/components/grouppage" element={<Grouppage />} />
       <Route  path="/components/cshoppage" element={<Cshoppage />} />
       
    </Routes>
    </Router>
  );
}

export default App;
