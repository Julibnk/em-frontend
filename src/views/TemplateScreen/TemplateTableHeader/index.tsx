import styles from './styles.module.css';
import { Button, TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const TemplateTableHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <TextInput
        placeholder={t('search')}
        icon={<FontAwesomeIcon icon={faSearch} />}
      />

      <Button variant='filled' leftIcon={<FontAwesomeIcon icon={faAdd} />}>
        {t('create')}
      </Button>
    </div>
  );
};

export default TemplateTableHeader;
