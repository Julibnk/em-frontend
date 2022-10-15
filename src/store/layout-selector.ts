import { RootState } from './store';
import { AllModals } from './layout-slice';

export const selectModal = (state: RootState, modal: AllModals) => {
  return state.layout.modals[modal];
};
