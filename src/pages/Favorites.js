import React, { useState, useEffect } from 'react';
import '../styles/Favorites.scss'
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import Dropdowm from '../components/Dropdown'
import SidoName from '../data/SidoName';


const Favorites = ({ Data }) => {

  // store에 저장된 좋아요 항목 가져오기
  let select = useSelector((state) => { return state.selectFavorites })

  // 미세먼지 데이터
  let [data, setData] = useState(Data.response.body.items)
  useEffect(() => {
    setData(Data.response.body.items)
  }, [Data])

  // 좋아요에 표시된 항목의 지역이 포함된 데이터만 가져오기
  let cardData = data.filter((arr) => {
    if (select.includes(arr.stationName)) return true
  })

  return (
    <div className='favorites'>
      <div className='dropdown-container'>
        <h1>즐겨찾기</h1>
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

export default Favorites;