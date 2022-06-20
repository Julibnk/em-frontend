import styles from './styles.module.css';

import { Tabs, TabsProps } from '@mantine/core';

import { ScreenContent } from '@components/Layout/ScreenContent';
import CategoryTableHeader from '../CategoryTableHeader/index';
import CategoryTable from '../CategoryTable';
import TemplateTableHeader from '../TemplateTableHeader';
import TemplateTable from '../TemplateTable';
import { useTranslation } from 'react-i18next';

const TemplateTabs = () => {
  const { t } = useTranslation();

  const tabsProps: TabsProps = {
    variant: 'pills',
    children: <></>,
    classNames: { tabActive: styles.tabActive, body: styles.body },
  };

  return (
    <Tabs {...tabsProps}>
      <Tabs.Tab label={t('template', { count: 0 })}>
        <ScreenContent>
          <>
            <TemplateTableHeader />
            <TemplateTable />
          </>
        </ScreenContent>
      </Tabs.Tab>
      <Tabs.Tab label={t('category', { count: 0 })}>
        <ScreenContent>
          <>
            <CategoryTableHeader />
            <CategoryTable />
          </>
        </ScreenContent>
      </Tabs.Tab>
    </Tabs>
  );
};

export default TemplateTabs;
