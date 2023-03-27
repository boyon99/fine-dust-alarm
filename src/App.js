import './styles/App.scss';
import React, { useEffect, useState } from 'react';
import { Reset } from 'styled-reset';
import Tab from './components/Tab';
import MyLocation from './components/MyLocation'
import { Routes, Route } from 'react-router-dom'
import Favorites from './components/Favorites'
import FullMap from './components/FullMap'
import axios from 'axios';
import TemporaryData from './data/data.json'

const getParameters = {
  serviceKey: 'Kr/oZVHBBoGbx2tj2VIEb91xWXHevtNNotfWYj0ZZSiZlaNDLZ6H607o6DUepfIZH7Y+ORcVESi2AsIxH8KUVA==',
  returnType: 'json',
  numOfRows: '10',
  pageNo: '1',
  sidoName: '서울',
  ver: '1.0',
}

function App() {
  let [inner, setInner] = useState("none")
  const [data, setData] = useState(TemporaryData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', { params: getParameters }
        )
        setData(res.data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])
  console.log(data)
  return (
    <React.Fragment>
      <Reset />
      <div className="App">
        <div className='container'>
          <div className='content'>
            <Routes>
              <Route path="/" element={<MyLocation Data={data} />} />
              <Route path="/favorites" element={<Favorites Data={data} />} />
              <Route path="/fullmap" element={<FullMap Data={data} inner={inner} />} />
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
