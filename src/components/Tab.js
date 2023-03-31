import React, { } from 'react';
import '../styles/Tab.scss'
import { useNavigate } from 'react-router-dom'

const tabName = [
  {
    title: "내 지역보기",
    src: "https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/null/external-house-location-xnimrodx-lineal-gradient-xnimrodx.png",
    width: "30px",
    navi: '/'
  }, {
    title: "전체지도보기",
    src: "https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/null/external-map-location-xnimrodx-lineal-gradient-xnimrodx-2.png",
    width: "32px",
    navi: '/fullmap'
  }, {
    title: "즐겨찾기",
    src: "https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/null/external-favorite-location-xnimrodx-lineal-gradient-xnimrodx.png",
    width: "32px",
    navi: '/favorites'
  }]

const Tab = ({ inner }) => {

  let navigator = useNavigate()
  return (
    <div className={inner}>
      {
        tabName.map((arr, i) => {
          return (
            <button key={i} className={"tab tab-" + i} onClick={() => { navigator(arr.navi) }}>
              <img src={arr.src} width={arr.width} />
              <p>{arr.title}</p>
            </button>
          )
        })
      }
    </div>
  );
};

// inner 값에 따라 탭 에니메이션 구현
Tab.defaultProps = {
  inner: 'none'
}

export default Tab;