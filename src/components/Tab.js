import React from 'react';
import '../styles/Tab.scss'

const tabName = [
  {
    title: "내 지역보기",
    src: "https://img.icons8.com/cotton/64/null/romantic-place--v1.png"
  }, {
    title: "전체지도보기",
    src: "https://img.icons8.com/cotton/64/null/map.png"
  }, {
    title: "즐겨찾기",
    src: "https://img.icons8.com/cotton/64/null/favorite-heart--v1.png"
  }]

const Tab = () => {
  return (
    <div className='tab'>
      {
        tabName.map((arr, i) => {
          return (
            <div key={i} className={"tab-" + i}>
              <img src={arr.src} width="32px" />
              <p>{arr.title}</p>
            </div>
          )
        })
      }
    </div>
  );
};

export default Tab;