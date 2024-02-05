import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "John",
  },
  {
    id: "2",
    name: "Jane",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUser = (state) => state.user;
export default userSlice.reducer;
