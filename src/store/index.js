import { configureStore } from '@reduxjs/toolkit'
import selectLocation from './selectLocation';
import selectFavorites from './selectFavorites';

export default configureStore({
  reducer: {
    selectLocation: selectLocation.reducer,
    selectFavorites: selectFavorites.reducer
  }
}) 
