import { EntityId, PayloadAction } from '@reduxjs/toolkit';

// Reducers compartidos entre diferentes slices

// Guarda el id de un elemento seleccionado
export const setSelectedId = (
  state,
  action: PayloadAction<EntityId | undefined>
) => {
  typeof action.payload === 'undefined'
    ? (state.selectedId = null)
    : (state.selectedId = action.payload);
};
