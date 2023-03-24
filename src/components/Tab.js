import React from 'react';
import '../styles/Tab.scss'
import { useNavigate } from 'react-router-dom'

const tabName = [
  {
    title: "내 지역보기",
    src: "https://img.icons8.com/cotton/64/null/romantic-place--v1.png",
    width: "30px",
    navi: '/'
  }, {
    title: "전체지도보기",
    src: "https://img.icons8.com/cotton/64/null/map.png",
    width: "32px",
    navi: '/fullmap'
  }, {
    title: "즐겨찾기",
    src: "https://img.icons8.com/cotton/64/null/favorite-heart--v1.png",
    width: "32px",
    navi: '/favorites'
  }]

const Tab = () => {
  let navigator = useNavigate()
  return (
    <div className='tabs'>
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

export default Tab;