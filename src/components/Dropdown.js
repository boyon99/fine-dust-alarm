import React, { } from 'react';
import '../styles/Dropdown.scss'
import { setSelectLocation1, setSelectLocation2, setSelectLocation3 } from '../store/selectLocation';
import { useDispatch, useSelector } from 'react-redux';

const Dropdown = ({ list, num, change }) => {
  let dispatch = useDispatch();

  // store에 저장된 마지막으로 사용된 드롭다운 상단 메뉴 가져오기
  let title = useSelector((state) => { return state.selectLocation })

  // 리스트 아이템을 제대로 전송받을 경우 
  if (list) {
    return (
      <div>
        <ul className="menu cleafix">
          <li className="parent">
            {/* 도시 드롭다운(num=0)인지, 지역 드롭다운(num=1)인지 값 */}
            <div>{title[num]}</div>
            <ul className="children">
              {list.map((arr, i) => {
                return (
                  <li key={i}><button onClick={() => {
                    if (num === 0) {
                      // 마지막으로 선택한 드롭다운 값으로 store 값 업데이트
                      dispatch(setSelectLocation1(arr))
                      dispatch(setSelectLocation3(arr))
                      // 만일 내 지역보기에서 선택했다면 localStoreage의 값 변경
                      if (change) {
                        localStorage.setItem('sidoData', arr)
                      }
                    }
                    if (num === 1) {
                      dispatch(setSelectLocation2(arr))
                      if (change) {
                        localStorage.setItem('stationData', arr)
                      }
                    }
                  }}>{arr}</button></li>
                )
              })}
            </ul>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="menu cleafix">
          <li className="parent">
            <div>없음</div>
          </li>
        </ul>
      </div>
    );
  }
};

export default Dropdown;