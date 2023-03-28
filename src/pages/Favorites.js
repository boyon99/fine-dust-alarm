import React, { useState, useEffect } from 'react';
import '../styles/Favorites.scss'
import Card from '../components/Card';
import { useSelector } from 'react-redux';

const Favorites = ({ Data }) => {

  let select = useSelector((state) => { return state.selectFavorites })
  let [data, setData] = useState(Data.response.body.items)

  useEffect(() => {
    setData(Data.response.body.items)
  }, [Data])

  let cardData = data.filter((arr) => {
    if (select.includes(arr.stationName)) return true
  })
  return (
    <div className='favorites'>
      <div className='dropdown-container'>
        <h1>즐겨찾기</h1>
      </div>

      <div className='cards'>
        {cardData.map((arr, i) => {
          return (
            <Card data={arr} key={i} />
          )
        })}
      </div>
    </div>
  );
};

export default Favorites;