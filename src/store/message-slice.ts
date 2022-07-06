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
    setSelectedId: helperSetSelectedId,
  },
});

export const { setSelectedId } = templateSlice.actions;

export default templateSlice.reducer;
