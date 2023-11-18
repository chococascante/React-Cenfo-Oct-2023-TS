import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

interface UserState {
  users: User[];
  loadingUsers: boolean;
}

const initialState: UserState = {
  users: [],
  loadingUsers: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // object payload
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoadingUsers: (state, action) => {
      state.loadingUsers = action.payload;
    },
  },
});

export const { setUsers, setLoadingUsers } = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
