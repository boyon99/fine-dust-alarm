import React, { } from 'react';
import '../styles/Card.scss'
import Pm25Grade from '../data/Pm25Grade'

const Card = ({ data }) => {
  let pm25grade = Pm25Grade

  return (
    <div className="card">
      <div className="img-container">
        <img src="./before.png" />
      </div>
      <div className="card-text">
        <div className={"pm10 " + pm25grade[+data.pm25Grade]}>
          <p className='pm10-grade'><span>{pm25grade[+data.pm25Grade]}</span></p>
          <p className='pm10-value'>{data.pm10Value}</p>
        </div>
        <div className="title-total">
          <div className="title">{data.stationName + " "}<span>{data.sidoName}</span></div>
          <div className='all'>미세먼지 <span className={pm25grade[+data.pm10Grade]}> {pm25grade[+data.pm10Grade]}</span> <br />초미세먼지 <span className={pm25grade[+data.pm25Grade]}>{pm25grade[+data.pm25Grade]}</span></div>
          <div className="dataTime">&#40; {data.dataTime} 기준 &#41;</div>
        </div>

      </div>
    </div>
  );
};

export default Card;