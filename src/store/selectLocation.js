import { createSlice } from '@reduxjs/toolkit'

let sido = localStorage.getItem('sidoData')
let station = localStorage.getItem('stationData')


let selectLocation = createSlice({
  name: 'selectLocation',
  initialState: [
    sido, station
  ],
  reducers: {
    setSelectLocation1(state, action) {
      state[0] = action.payload
    },
    setSelectLocation2(state, action) {
      state[1] = action.payload
    }
  }
})

export let { setSelectLocation1, setSelectLocation2 } = selectLocation.actions
export default selectLocation