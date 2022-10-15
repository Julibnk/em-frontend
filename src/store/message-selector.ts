import { RootState } from './store';
import { messageAdapter } from './message-slice';

// Selector que localiza las templates en el state
export const selectMessages = (state: RootState) => state.message;

// Selector que localiza el id del mensaje seleccionado
export const selectSelectedMessageId = (state: RootState) =>
  state.message.selectedId;

// Selector que localiza el mensaje seleccionado
export const selectSelectedMessage = (state: RootState) => {
  if (!state.message.selectedId) return undefined;
  return selectMessageById(state, state.message.selectedId);
};

// Selectores del getEntityAdapter
export const { selectAll: selectAllMessages, selectById: selectMessageById } =
  messageAdapter.getSelectors((state: RootState) => selectMessages(state));
