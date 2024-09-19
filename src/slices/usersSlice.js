import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE;

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const token = auth?.token;  

    try {
      const response = await axios.get(`${baseUrl}/users`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching users");
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;