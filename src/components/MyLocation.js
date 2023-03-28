import React, { useState } from 'react';
import Dropdowm from './Dropdown'
import '../styles/MyLocation.scss'
import Card from './Card';
import SidoName from '../data/SidoName';
import { useSelector } from 'react-redux';


const MyLocation = ({ Data }) => {
  let select = useSelector((state) => { return state.selectLocation })
  let [data] = useState(Data.response.body.items)


  let dropdownData = data.filter((arr) => {
    if (arr.sidoName === select[0]) {
      return true
    }
  }).map((arr) => { return arr.stationName })

  let cardData = data.filter((arr) => {
    if (arr.stationName === select[1]) return true
  })

  return (
    <div className='mylocation'>
      <div className='dropdown-container'>
        <h1>내 지역보기</h1>
        <div className='dropdown-1'><Dropdowm list={SidoName} num={0} change={true} /></div>
        <div className='dropdown-2'>
          {dropdownData.length === 0 ? <Dropdowm list={null} num={1} />
            : <Dropdowm list={dropdownData} num={1} change={true} />
          }
        </div>
      </div>

      <div className='cards'>
        {cardData.length === 0 ? <div className='frist'>지역을 설정해주세요.</div> : <Card data={cardData[0]} />}
      </div>
    </div>
  );
};

export default MyLocation;