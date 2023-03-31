import React, { useEffect, useState } from 'react';
import Dropdowm from '../components/Dropdown'
import '../styles/MyLocation.scss'
import Card from '../components/Card';
import SidoName from '../data/SidoName';
import { useSelector } from 'react-redux';

const MyLocation = ({ Data }) => {
  // store에 저장된 마지막으로 선택한 시도 및 지역 이름 가져오기
  let select = useSelector((state) => { return state.selectLocation })

  // 미세먼지 데이터
  let [data, setData] = useState(Data.response.body.items)
  useEffect(() => {
    setData(Data.response.body.items)
  }, [Data])

  // 선택한 시도명과 일치하는 드롭다운 데이터 가져오기
  let dropdownData = data.filter((arr) => {
    if (arr.sidoName === select[0]) {
      return true
    }
  }).map((arr) => { return arr.stationName })

  // 선택한 지역명과 일치하는 카드 데이터 가져오기
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
        {/* 카드 데이터가 없는 경우 에외 처리 */}
        {cardData.length === 0 ? <div className='frist'>지역을 설정해주세요.</div> : <Card data={cardData[0]} />}
      </div>
    </div>
  );
};

export default MyLocation;