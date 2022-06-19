import styles from './styles.module.css';

import { Tabs, TabsProps } from '@mantine/core';
import CategoryTab from '../CategoryTab';
import TemplateTab from '../TemplateTab';

const TemplateTabs = () => {
  const tabsProps: TabsProps = {
    variant: 'pills',
    children: <></>,
    classNames: { tabActive: styles.tabActive },
  };

  return (
    <Tabs {...tabsProps}>
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
