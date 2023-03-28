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
import { useSelector } from 'react-redux';



function App() {
  let title = useSelector((state) => { return state.selectLocation })

  const getParameters = {
    serviceKey: process.env.REACT_APP_SERVICEKEY,
    returnType: 'json',
    numOfRows: '10',
    pageNo: '1',
    sidoName: title[2],
    ver: '1.0',
  }

  let [inner, setInner] = useState("none")
  const [data, setData] = useState(TemporaryData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', { params: getParameters }
        )
        setData(res.data)
        console.log("success", res.data)
      } catch (e) {
        console.log("fail: ", e)
      }
    }
    fetchData()
  }, [title])
  return (
    <React.Fragment>
      <Reset />
      <div className="App">
        <div className='container'>
          <div className='content'>
            <Routes>
              <Route path="/" element={<MyLocation Data={data} />} />
              <Route path="/favorites" element={<Favorites Data={data} />} />
              <Route path="/fullmap" element={<FullMap Data={data} />} />
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
