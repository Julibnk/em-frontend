import { templateAdapter } from './template-slice';
import { RootState } from './store';
import { SelectItem } from '@mantine/core';

// Selector que localiza las templates en el state
export const selectTemplates = (state: RootState) => state.template;

// Selector que localiza el id de la plantilla seleccionada
export const selectSelectedTemplateId = (state: RootState) =>
  state.template.selectedId;

// Selector que localiza la plantilla seleccionada
export const selectSelectedTemplate = (state: RootState) => {
  if (!state.template.selectedId) return undefined;
  return selectTemplateById(state, state.template.selectedId);
};

// Selector para transformar el listado de plantillas para un componente Select o Combo
export const selectTemplatesForCombo = (state: RootState): SelectItem[] => {
  return selectAllTemplates(state).map((template) => {
    return { value: template.id as string, label: template.name };
  });
};

// Selectores del getEntityAdapter
export const { selectAll: selectAllTemplates, selectById: selectTemplateById } =
  templateAdapter.getSelectors((state: RootState) => selectTemplates(state));
