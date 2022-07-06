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
  name: 'message',
  initialState,
  reducers: {
    // init: (state) => {
    //   //   categoryAdapter.addMany(state, {
    //   //     ['1231']: { name: '1231', templateIds: [] },
    //   //   });
    //   messageAdapter.addMany(state, [
    //     {
    //       id: '100',
    //       status: 'ERROR',
    //       destinationPrefix: '+34',
    //       destinationPhone: '6776712631',
    //       templateId: '100',
    //       phoneId: '5123142',
    //     },
    //   ]);
    // },
    setSelectedId: helperSetSelectedId,
  },
});

export const { setSelectedId } = templateSlice.actions;

export default templateSlice.reducer;
