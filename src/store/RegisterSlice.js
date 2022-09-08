import { createSlice } from "@reduxjs/toolkit";

const regState = {
  
  login : false,
  shw : false,
  adm : false,
  data : {},
  newData : [],
  aData : [],
  appData : [],
  auth : false

};

const RegisterSlice = createSlice({
  name: "register",
  initialState: regState,
  reducers: {
    updateState(state) {
      state.login = !state.login;
    },

    shwAdm(state,action){
        state.shw = action.payload;
    },

    shwAuthData(state){
        state.adm = !state.adm
    },
    getData(state, action){
        state.data = action.payload;
        state.newData = [...state.newData,state.data];
    },
    updateDetails(state, action) {
        state.newData = action.payload;
      },

      approvedData(state, action) {
        state.aData = action.payload;
        state.appData = [...state.appData,...state.aData];
  },

  authUserLogIn(state,action){
    state.auth = action.payload;
  }
}
});

export const RegisterActions = RegisterSlice.actions;
export default RegisterSlice.reducer;