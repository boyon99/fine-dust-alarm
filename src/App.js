import './styles/App.scss';
import React, { useEffect, useState } from 'react';
import { Reset } from 'styled-reset';
import Tab from './components/Tab';
import MyLocation from './pages/MyLocation'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import FullMap from './pages/FullMap'
import axios from 'axios';
import TemporaryData from './data/data.json'
import { useSelector } from 'react-redux';

function App() {

  // store에 저장된 마지막으로 사용된 지역 및 도시 이름 가져오기
  let title = useSelector((state) => { return state.selectLocation })

  // 탭 드롭다운 애니메이션 구현을 위한 state
  let [inner, setInner] = useState("none")

  // axois 오류를 위한 기본 데이터를 초기값으로 설정
  // 미세먼지를 위한 데이터
  const [data, setData] = useState(TemporaryData)

  const getParameters = {
    serviceKey: process.env.REACT_APP_SERVICEKEY,
    returnType: 'json',
    numOfRows: '10',
    pageNo: '1',
    sidoName: title[2],
    ver: '1.0',
  }

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
          {/* 탭 메뉴 안에 마우스가 위치하는지 여부에 따라 탭 이벤트 구현 */}
          <div className='tab-container' onMouseEnter={() => { setInner(() => "true") }} onMouseLeave={() => { setInner(() => "false") }}>
            <Tab inner={inner} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
