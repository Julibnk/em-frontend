import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DialogState = {
  opened: boolean;
  loading: boolean;
};

type AllDialogs = 'category' | 'template';

type Dialogs = {
  [dialog in AllDialogs]: DialogState;
};

export type LayoutState = {
  fullPageLoading: boolean;
  navbarCollapsed: boolean;
  dialogs: Dialogs;
};

const initialState: LayoutState = {
  navbarCollapsed: true,
  fullPageLoading: false,
  dialogs: {
    category: {
      loading: false,
      opened: false,
    },
    template: {
      loading: false,
      opened: false,
    },
  },
};

export const layoutSlice = createSlice({
  name: '[LAYOUT]',
  initialState,
  reducers: {
    fullPageLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.fullPageLoading = payload;
    },

    setNavbarCollapsed: (state, { payload }: PayloadAction<boolean>) => {
      state.navbarCollapsed = payload;
    },

    setDialogOpenend: (
      state,
      { payload }: PayloadAction<{ dialog: string; opened: boolean }>
    ) => {
      state.dialogs[payload.dialog].opened = payload.opened;
    },

    setDialogLoading: (
      state,
      { payload }: PayloadAction<{ dialog: string; loading: boolean }>
    ) => {
      state.dialogs[payload.dialog].loading = payload.loading;
    },
  },
});

export const { setNavbarCollapsed, fullPageLoading } = layoutSlice.actions;

export default layoutSlice.reducer;
