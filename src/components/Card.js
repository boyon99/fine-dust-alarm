import React, { useState } from 'react';
import '../styles/Card.scss'
import Data from '../data/data.json'
import SidoName from '../data/SidoName'
import Pm25Grade from '../data/Pm25Grade'

const Card = () => {
  let [data] = useState(Data.response.body.items)
  let sidoname = SidoName[1]
  let pm25grade = Pm25Grade
  let filterData = data.filter((arr) => {
    if (arr.sidoName === sidoname) {
      return true
    }
  })
  return (
    <>
      {
        filterData.map((arr, i) => {
          return (
            <div className="card" key={i}>
              <div className="img-container">
                <img src="./after.png" />
              </div>
              <div className="card-text">
                <div className={"pm10 " + pm25grade[+arr.pm25Grade]}>
                  <p className='pm10-grade'><span>{pm25grade[+arr.pm25Grade]}</span></p>
                  <p className='pm10-value'>{arr.pm10Value}</p>
                </div>
                <div className="title-total">
                  <div className="title">{arr.stationName + " "}<span>{arr.sidoName}</span></div>
                  <div className='all'>미세먼지 <span className={pm25grade[+arr.pm10Grade]}> {pm25grade[+arr.pm10Grade]}</span> <br />초미세먼지 <span className={pm25grade[+arr.pm25Grade]}>{pm25grade[+arr.pm25Grade]}</span></div>
                  <div className="dataTime">&#40; {arr.dataTime} 기준 &#41;</div>
                </div>

              </div>
            </div>
          )
        })
      }
    </>
  );
};

export default Card;