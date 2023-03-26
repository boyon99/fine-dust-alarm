import React, { useEffect, useState } from 'react';
import Dropdowm from './Dropdown'
import '../styles/MyLocation.scss'
import Card from './Card';
import SidoName from '../data/SidoName';
import TemporaryData from '../data/data.json'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectLocation1, setSelectLocation2 } from '../store/selectLocation';


const MyLocation = ({ Data }) => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectLocation1(localStorage.getItem('sidoData')))
    dispatch(setSelectLocation2(localStorage.getItem('stationData')))
  }, [])

  let select = useSelector((state) => { return state.selectLocation })
  let [data] = useState(TemporaryData.response.body.items)
  useEffect(() => {
    Data === null ? TemporaryData.response.body.items : Data.response.body.items
  }, [Data])
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
        <Card data={cardData[0]} />
      </div>
    </div>
  );
};

export default MyLocation;