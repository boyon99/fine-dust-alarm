import React, { } from 'react';
import '../styles/Dropdown.scss'
import { setSelectLocation1, setSelectLocation2 } from '../store/selectLocation';
import { useDispatch, useSelector } from 'react-redux';

const Dropdown = ({ list, num, change }) => {
  let dispatch = useDispatch();
  let title = useSelector((state) => { return state.selectLocation })

  if (list) {
    return (
      <div>
        <ul className="menu cleafix">
          <li className="parent">
            <div>{title[num]}</div>
            <ul className="children">
              {list.map((arr, i) => {
                return (
                  <li key={i}><button onClick={() => {
                    if (num === 0) {
                      dispatch(setSelectLocation1(arr))
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