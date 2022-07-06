import { createSlice, createEntityAdapter, EntityId } from '@reduxjs/toolkit';

import { setSelectedId as helperSetSelectedId } from '@helpers/reducers';

import { Message } from '../types/store';

export const messageAdapter = createEntityAdapter<Message>();

type InitialState = {
  selectedId: EntityId | undefined;
};

const initialState = messageAdapter.getInitialState({
  selectedId: undefined,
} as InitialState);

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    init: (state) => {
      //   categoryAdapter.addMany(state, {
      //     ['1231']: { name: '1231', templateIds: [] },
      //   });
      messageAdapter.addMany(state, [
        {
          id: '100',
        },
        {
          id: '200',
        },
        {
          id: '300',
        },
        {
          id: '400',
        },
        {
          id: '500',
        },
        {
          id: '600',
        },
      ]);
    },
    setSelectedId: helperSetSelectedId,
  },
});

export const { init, setSelectedId } = templateSlice.actions;

export default templateSlice.reducer;
