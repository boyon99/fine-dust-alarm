import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Box = styled.div`
width: 100px;
height: 100px;
background-color: #666;
`;

const getParameters = {
  serviceKey: 'Kr/oZVHBBoGbx2tj2VIEb91xWXHevtNNotfWYj0ZZSiZlaNDLZ6H607o6DUepfIZH7Y+ORcVESi2AsIxH8KUVA==',
  returnType: 'json',
  numOfRows: '10',
  pageNo: '1',
  sidoName: '서울',
  ver: '1.0',
}

const data = () => {
  const [data, setData] = useState(null)
  const fetchData = async () => {
    try {
      const res = await axios.get(
        'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', { params: getParameters }
      )
      setData(res.data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <button onClick={fetchData}>불러오기</button>
      <Box />
      {console.log(data)}
    </div>
  );
};

export default data;