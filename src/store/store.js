import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./cryptoSlice";
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    weather: weatherReducer,
  },
});

export default store;
