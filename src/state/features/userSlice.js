import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  fullName: "", 
  email: "", 
  password: "", 
  loggedIn: false, 
}; 

export const userSlice = createSlice({
  name: "user", 
  //initialState: initialState, 
  initialState, 
  reducers: {
    logIn: (state, action) => {
      //This takes the keys from the response in the log in 
      //api and sets them to our user state. 
      console.log("This is the current state", state); 
      for(const key in action.payload) {
        state[key] = action.payload[key]; 
      }

      state.loggedIn = true; 
      console.log("The user has been logged in!", state); 
    }, 



    logOut: (state) => {
      for(const key in state) {
        state.user[key] = ""; 
      }

      state.user.loggedIn = false; 
    }
  }
})

export const {logIn, logOut} = userSlice.actions; 

export default userSlice.reducer; 