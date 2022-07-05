import { templateAdapter } from './template-slice';
import { RootState } from './store';

// Selector que localiza las templates en el state
export const selectTemplates = (state: RootState) => state.template;

// Selectores del getEntityAdapter
export const { selectAll: selectAllTemplates, selectById: selectTemplateById } =
  templateAdapter.getSelectors((state: RootState) => selectTemplates(state));
