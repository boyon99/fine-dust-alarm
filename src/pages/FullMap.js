import React, { useState, useEffect } from 'react';
import Dropdowm from '../components/Dropdown'
import '../styles/FullMap.scss'
import Card from '../components/Card';
import SidoName from '../data/SidoName';
import { useSelector } from 'react-redux';

const FullMap = ({ Data }) => {

  // store에 저장된 마지막으로 선택한 시도 및 지역 이름 가져오기
  let select = useSelector((state) => { return state.selectLocation })

  // 미세먼지 데이터
  let [data, setData] = useState(Data.response.body.items)

  useEffect(() => {
    setData(Data.response.body.items)
  }, [Data])

  // 선택한 시도명과 일치하는 데이터 가져오기
  let cardData = data.filter((arr) => {
    if (select[0] === "전국") return true
    else if (arr.sidoName === select[0]) return true
  })

  return (
    <div className='fullmap'>
      <div className='dropdown-container'>
        <h1>전체지역 보기</h1>
        <div className='dropdown-1'><Dropdowm list={SidoName} num={0} /></div>
      </div>

      <div className='cards'>
        {cardData.map((arr, i) => {
          return (
            <Card data={arr} key={"card-" + i} />
          )
        })}
      </div>
    </div>
  );
};

export default FullMap;