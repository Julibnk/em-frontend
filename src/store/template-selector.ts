import { templateAdapter } from './template-slice';
import { RootState } from './store';

export const { selectAll: selectAllTemplates } = templateAdapter.getSelectors(
  (state: RootState) => state.template
);

export const selectTemplates = (state: RootState) => state.template;
