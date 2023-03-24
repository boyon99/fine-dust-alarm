import './styles/App.scss';
import React, { } from 'react';
import { Reset } from 'styled-reset';
import Tab from './components/Tab';
import MyLocation from './components/MyLocation'
import { Routes, Route } from 'react-router-dom'
import Favorites from './components/Favorites'
import FullMap from './components/FullMap'


function App() {
  return (
    <React.Fragment>
      <Reset />
      <div className="App">
        <div className='container'>
          <div className='content'>
            <Routes>
              <Route path="/" element={<MyLocation />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/fullmap" element={<FullMap />} />
            </Routes>
          </div>
          <Tab />
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
