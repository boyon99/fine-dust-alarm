import { createSlice } from '@reduxjs/toolkit'



let selectFavorites = createSlice({
  name: 'selectFavorites',
  initialState: [],
  reducers: {
    setAdd(state, action) {
      state = state.push(action.payload)
    },
    setDelete(state, action) {
      state = state.filter((arr) => {
        return arr !== action.payload
      })
    }
  }
})

export let { setAdd, setDelete } = selectFavorites.actions
export default selectFavorites