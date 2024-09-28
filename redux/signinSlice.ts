import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
     name:'sign',
     initialState:{
          isAuth:false
     }
     ,reducers:{
         setAuth:(state,action)=>{
          state.isAuth=action.payload
         }
     }
})

export const {setAuth} = signInSlice.actions
export default signInSlice.reducer