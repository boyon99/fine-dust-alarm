import React, { useEffect, useState } from 'react';
import '../styles/Card.scss'
import Pm25Grade from '../data/Pm25Grade'
import { useSelector, useDispatch } from 'react-redux';
import { setAdd, setDelete } from '../store/selectFavorites';


const Card = ({ data }) => {
  let pm25grade = Pm25Grade
  let like = useSelector((state) => { return state.selectFavorites })
  let likeFilter = like.filter((arr) => {
    return arr === data.stationName
  })
  let [star, setStar] = useState(0)

  useEffect(() => {
    setStar(likeFilter.length)
  }
    , [likeFilter])
  let dispatch = useDispatch();

  return (
    <div className="card">
      <button className="img-container" onClick={() => {
        setStar(star === 0 ? 1 : 0)
        if (star === 0) {
          dispatch(setAdd(data.stationName))
        } else {
          dispatch(setDelete(data.stationName))
        }
      }}>
        {star === 1 ? <img src="./after.png" /> : <img src="./before.png" />}
      </button>
      <div className="card-text">
        <div className={"pm10 " + pm25grade[Number(data.pm25Grade)]}>
          <p className='pm10-grade'><span>{pm25grade[+data.pm25Grade]}</span></p>
          <p className='pm10-value'>{data.pm10Value}</p>
        </div>
        <div className="title-total">
          <div className="title">{data.stationName + " "}<span>{data.sidoName}</span></div>
          <div className='all'>미세먼지 <span className={pm25grade[Number(data.pm10Grade)]}> {pm25grade[+data.pm10Grade]}</span> <br />초미세먼지 <span className={pm25grade[+data.pm25Grade]}>{pm25grade[+data.pm25Grade]}</span></div>
          <div className="dataTime">&#40; {data.dataTime} 기준 &#41;</div>
        </div>

      </div>
    </div>
  );
};

export default Card;