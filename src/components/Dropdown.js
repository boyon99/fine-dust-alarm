import React, { } from 'react';
import '../styles/Dropdown.scss'
import { setSelectLocation1, setSelectLocation2 } from '../store/selectLocation';
import { useDispatch, useSelector } from 'react-redux';

const Dropdown = ({ list, num }) => {
  let title = useSelector((state) => { return state.selectLocation })
  let dispatch = useDispatch();
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
                    } else {
                      dispatch(setSelectLocation2(arr))
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