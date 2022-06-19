import { Tabs } from '@mantine/core';
import CategoryTab from '../CategoryTab';
import TemplateTab from '../TemplateTab';

const TemplateTabs = () => {
  return (
    <Tabs variant='pills'>
      <Tabs.Tab label='Plantillas'>
        <TemplateTab />
      </Tabs.Tab>
      <Tabs.Tab label='Categorias'>
        <CategoryTab />
      </Tabs.Tab>
    </Tabs>
  );
};

export default TemplateTabs;
