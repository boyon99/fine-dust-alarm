import React, { useEffect, useState } from 'react';
import '../styles/Card.scss'
import Pm25Grade from '../data/Pm25Grade'
import { useSelector, useDispatch } from 'react-redux';
import { setAdd, setDelete } from '../store/selectFavorites';


const Card = ({ data }) => {
  let pm25grade = Pm25Grade
  // store에 저장된 selectFavorites 데이터 가져오기
  let like = useSelector((state) => { return state.selectFavorites })
  // 가져온 데이터가 즐겨찾기에 포함된 데이터가 있는지 여부 확인
  let likeFilter = like.filter((arr) => {
    return arr === data.stationName
  })
  // 즐겨찾기 데이터를 업데이트하기 위한 state
  let [star, setStar] = useState(0)

  // 즐겨찾기 항목이 업데이트 될 경우 즐겨찾기 데이터의 길이값을 업데이트
  useEffect(() => {
    setStar(likeFilter.length)
  }
    , [likeFilter])

  // pm10Grade과 pm25Grade
  let pm10 = data.pm10Grade === null ? "0" : data.pm10Grade;
  let pm25 = data.pm25Grade === null ? "0" : data.pm25Grade;

  // useDispatch() 
  let dispatch = useDispatch();

  return (
    <div className="card">
      {/* 즐겨찾기 */}
      <button className="img-container" onClick={() => {
        // 즐겨찾기 아이콘 클릭시 즐겨찾기 state 업데이트
        setStar(star === 0 ? 1 : 0)
        if (star === 0) {
          // store에 즐겨찾기 항목 추가하기
          dispatch(setAdd(data.stationName))
        } else {
          // store에 즐겨찾기 항목 제거하기
          dispatch(setDelete(data.stationName))
        }
      }}>
        {/* 즐겨찾기 여부에 따라 다른 이미지 보여주기 */}
        {star === 1 ? <img src="./after.png" /> : <img src="./before.png" />}
      </button>
      <div className="card-text">
        {/* 클래스명에 따라 색상 다르게 보여주기 */}
        <div className={"pm10 " + pm25grade[pm25]}>
          <p className='pm10-grade'><span>{pm25grade[pm25]}</span></p>
          <p className='pm10-value'>{data.pm10Value}</p>
        </div>
        <div className="title-total">
          <div className="title">{data.stationName + " "}<span>{data.sidoName}</span></div>
          <div className='all'>미세먼지 <span className={pm25grade[pm10]}> {pm25grade[pm10]}</span> <br />초미세먼지 <span className={pm25grade[pm25]}>{pm25grade[pm25]}</span></div>
          <div className="dataTime">&#40; {data.dataTime} 기준 &#41;</div>
        </div>

      </div>
    </div>
  );
};

export default Card;