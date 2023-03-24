import React, { useState } from 'react';
import '../styles/Dropdown.scss'

const Dropdown = () => {
  let [title, setTitle] = useState("강남구")
  return (
    <div>
      <ul className="menu cleafix">
        <li className="parent">
          <div>{title}</div>
          <ul className="children">
            <li><button onClick={() => { setTitle(() => "변환") }}>강남</button></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;