import { createSlice } from "@reduxjs/toolkit";

export const FOOTER_CONFIG = {
  SECTION_1: 1,
};

export interface IFooterSectionState {
  section_1: boolean;
}

export interface ILayoutState {
  footerSections: IFooterSectionState;
  fullPageLoading: false;
}

const initialFooterSections: IFooterSectionState = {
  section_1: false,
};

const initialState: ILayoutState = {
  footerSections: initialFooterSections,
  fullPageLoading: false,
};

export const layoutSlice = createSlice({
  name: "[LAYOUT]",
  initialState,
  reducers: {
    fullPageLoading: (state, { payload }) => {
      state.fullPageLoading = payload;
    },

    changeFooterConfig: (state, { payload }) => {
      switch (payload) {
        case FOOTER_CONFIG.SECTION_1:
          state.footerSections = {
            ...initialFooterSections,
            section_1: true,
          };
          break;
        default:
          break;
      }
    },
  },
});

export const { changeFooterConfig, fullPageLoading } = layoutSlice.actions;

export default layoutSlice.reducer;
