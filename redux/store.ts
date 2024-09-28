import { configureStore } from '@reduxjs/toolkit'
import signReducer from './signinSlice'

export default configureStore({
  reducer: {
     isAuth:signReducer
  }
})