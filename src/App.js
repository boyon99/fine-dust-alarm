import './styles/App.scss';
import React, { useState } from 'react';
import { Reset } from 'styled-reset';
import Tab from './components/Tab';
import MyLocation from './components/MyLocation'
import { Routes, Route } from 'react-router-dom'
import Favorites from './components/Favorites'
import FullMap from './components/FullMap'
import Dropdown from './components/Dropdown';

function App() {
  let [inner, setInner] = useState("none")
  return (
    <React.Fragment>
      <Reset />
      <div className="App">
        <div className='container'>
          <Dropdown />
          <div className='content'>
            <Routes>
              <Route path="/" element={<MyLocation />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/fullmap" element={<FullMap />} />
            </Routes>
          </div>
          <div className='tab-container' onMouseEnter={() => { setInner(() => "true") }} onMouseLeave={() => { setInner(() => "false") }}>
            <Tab inner={inner} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
