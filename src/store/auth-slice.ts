import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IAuthState {
  user: IAuthUser | null;
  isAuthenticated: boolean;
  masterdata: string[] | null;
}

interface IAuthUser {
  username: string;
}

const initialState: IAuthState = {
  user: null,
  isAuthenticated: true,
  masterdata: null,
};

export const getUserAuth = createAsyncThunk(
  "[AUTH]/getUserAuth",
  async (userData: FormData, { rejectWithValue }) => {}
);

export const initApp = createAsyncThunk(
  "[AUTH]/initApp",
  async (username: string, { dispatch, rejectWithValue }) => {
    return { masterdata: [], user: {} };
  }
);

export const authSlice = createSlice({
  name: "[AUTH]",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    //Get auth
    builder.addCase(getUserAuth.fulfilled, (state, action) => {
      state.isAuthenticated = false;
    });
    builder.addCase(getUserAuth.rejected, (state) => {
      state.isAuthenticated = false;
    });

    //get user data
    builder.addCase(initApp.fulfilled, (state, action) => {
      state.masterdata = action.payload.masterdata;
      state.isAuthenticated = false;
      state.user = { username: action.payload.user } as IAuthUser;
    });
    builder.addCase(initApp.rejected, (state) => {});
  },
});

export const { logout, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
