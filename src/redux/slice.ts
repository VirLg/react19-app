import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  products: [],
  error: "",
  loading: false,
};

export const allMySlice = createSlice({
  name: "mySlise",
  initialState,
  reducers: {},
});
