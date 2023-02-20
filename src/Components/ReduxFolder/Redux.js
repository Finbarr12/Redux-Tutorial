// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   current: null,
// };

// const Redux = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     loginusers: (state, actions) => {
//       state.current = actions.payload;
//     },
//     logoutusers: (state) => {
//       state.current = null;
//     },
//   },
// });

// export const { loginusers, logoutusers } = Redux.actions;

// export default Redux.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const Redux = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginusers: (state, actions) => {
      state.current = actions.payload;
    },
    logoutusers: (state) => {
      state.current = null;
    },
  },
});

export const {} = Redux.actions;

export default Redux.reducer;
