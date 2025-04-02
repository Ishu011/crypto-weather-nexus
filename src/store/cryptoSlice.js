import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: { data: [], loading: false },
  reducers: {
    setCryptoData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
