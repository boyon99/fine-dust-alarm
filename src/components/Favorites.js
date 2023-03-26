import React, { useState } from 'react';
import '../styles/Favorites.scss'
import Card from './Card';
import Data from '../data/data.json'
import { useSelector } from 'react-redux';

const Favorites = () => {

  let select = useSelector((state) => { return state.selectFavorites })
  let [data] = useState(Data.response.body.items)

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