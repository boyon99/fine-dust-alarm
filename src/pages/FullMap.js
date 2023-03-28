import React, { useState, useEffect } from 'react';
import Dropdowm from '../components/Dropdown'
import '../styles/FullMap.scss'
import Card from '../components/Card';
import SidoName from '../data/SidoName';
import { useSelector } from 'react-redux';

const FullMap = ({ Data }) => {


  let select = useSelector((state) => { return state.selectLocation })
  let [data, setData] = useState(Data.response.body.items)

  useEffect(() => {
    setData(Data.response.body.items)
  }, [Data])

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