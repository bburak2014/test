import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const loginValidate = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      // const response = await axios.post('/api/login', credentials); // API POST işlemi
      // const { token } = response.data;
      const token = true;

      sessionStorage.setItem("token", token);
      return token;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      sessionStorage.clear();
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginValidate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginValidate.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loading = false;
      })
      .addCase(loginValidate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
