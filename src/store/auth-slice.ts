import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  masterdata: string[] | null;
};

type AuthUser = {
  username: string;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: true,
  masterdata: null,
};

export const getUserAuth = createAsyncThunk(
  'auth/getUserAuth',
  async (userData: FormData, { rejectWithValue }) => {}
);

export const initApp = createAsyncThunk(
  'auth/initApp',
  async (username: string, { dispatch, rejectWithValue }) => {
    return { masterdata: [], user: {} };
  }
);

export const authSlice = createSlice({
  name: 'auth',
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
      state.isAuthenticated = true;
      state.user = { username: action.payload.user } as AuthUser;
    });
    builder.addCase(initApp.rejected, (state) => {});
  },
});

export const { logout, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
