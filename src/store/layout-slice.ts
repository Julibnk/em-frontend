import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  opened: boolean;
  loading: boolean;
};

export type AllModals = 'category' | 'template';

type Modals = {
  [modal in AllModals]: ModalState;
};

export type LayoutState = {
  fullPageLoading: boolean;
  navbarCollapsed: boolean;
  modals: Modals;
};

const initialState: LayoutState = {
  navbarCollapsed: false,
  fullPageLoading: false,
  modals: {
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

    setModalOpenend: (
      state,
      { payload }: PayloadAction<{ modal: AllModals; opened: boolean }>
    ) => {
      state.modals[payload.modal].opened = payload.opened;
    },

    setModalLoading: (
      state,
      { payload }: PayloadAction<{ modal: AllModals; loading: boolean }>
    ) => {
      state.modals[payload.modal].loading = payload.loading;
    },
  },
});

export const {
  setNavbarCollapsed,
  fullPageLoading,
  setModalOpenend,
  setModalLoading,
} = layoutSlice.actions;

export default layoutSlice.reducer;
