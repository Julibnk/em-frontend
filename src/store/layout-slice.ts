import { createSlice } from '@reduxjs/toolkit';

export interface ILayoutState {
  fullPageLoading: false;
  navbarCollapsed: boolean;
}

const initialState: ILayoutState = {
  navbarCollapsed: true,
  fullPageLoading: false,
};

export const layoutSlice = createSlice({
  name: '[LAYOUT]',
  initialState,
  reducers: {
    fullPageLoading: (state, { payload }) => {
      state.fullPageLoading = payload;
    },

    setNavbarCollapsed: (state, { payload }) => {
      state.navbarCollapsed = payload;
    },
  },
});

export const { setNavbarCollapsed, fullPageLoading } = layoutSlice.actions;

export default layoutSlice.reducer;
