import './styles/App.scss';
import React, { } from 'react';
import { Reset } from 'styled-reset';
import Tab from './components/Tab';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <div className="App">
        <div className='container'>
          <Tab />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
