import styles from './styles.module.css';

import { Tabs, TabsProps } from '@mantine/core';

import { ScreenContent } from '@components/Layout/ScreenContent';
import { CategoryTableHeader } from '../CategoryTableHeader/index';
import CategoryTable from '../CategoryTable';
import TemplateTableHeader from '../TemplateTableHeader';
import TemplateTable from '../TemplateTable';

const TemplateTabs = () => {
  const tabsProps: TabsProps = {
    variant: 'pills',
    children: <></>,
    classNames: { tabActive: styles.tabActive, body: styles.body },
  };

  return (
    <Tabs {...tabsProps}>
      <Tabs.Tab label='Plantillas'>
        <ScreenContent>
          <>
            <TemplateTableHeader />
            <TemplateTable />
          </>
        </ScreenContent>
      </Tabs.Tab>
      <Tabs.Tab label='Categorias'>
        <>
          <CategoryTableHeader />
          <CategoryTable />
        </>
      </Tabs.Tab>
    </Tabs>
  );
};

export default TemplateTabs;
