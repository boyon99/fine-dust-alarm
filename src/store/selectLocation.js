import { createSlice } from '@reduxjs/toolkit'

let station = localStorage.getItem('stationData')


let selectLocation = createSlice({
  name: 'selectLocation',
  initialState: [
    "서울", station, "서울"
  ],
  reducers: {
    setSelectLocation1(state, action) {
      state[0] = action.payload
    },
    setSelectLocation2(state, action) {
      state[1] = action.payload
    },
    setSelectLocation3(state, action) {
      state[2] = action.payload
    }
  }
})

export let { setSelectLocation1, setSelectLocation2, setSelectLocation3 } = selectLocation.actions
export default selectLocation