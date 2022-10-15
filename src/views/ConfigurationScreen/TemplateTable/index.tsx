import styles from './styles.module.css';
import { Table, Th } from '@components/MantineOverwrite/Table';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '@store/store';
import { selectAllTemplates } from '@store/template-selector';
import { init } from '@store/template-slice';
import { useEffect } from 'react';
import TemplateTableRow from './row';

const TemplateTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  const templates = useSelector((state) => selectAllTemplates(state));

  const { t } = useTranslation();

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <Th>{t('name')}</Th>
          <Th>{t('preview')}</Th>
          <Th textAlign='center'>{t('variable', { count: 0 })}</Th>
          <Th textAlign='center'>{t('category', { count: 0 })}</Th>
          <Th textAlign='center'>{t('actions')}</Th>
        </tr>
      </thead>
      <tbody>
        {templates.map((template) => (
          <TemplateTableRow key={template.id} template={template} />
        ))}
      </tbody>
    </Table>
  );
};

export default TemplateTable;
