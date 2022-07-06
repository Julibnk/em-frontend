import styles from './styles.module.css';
import { Button, TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from '@store/store';
import { setModalOpenend } from '@store/layout-slice';
import { setSelectedId } from '@store/template-slice';

const TemplateTableHeader = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleOnAdd = () => {
    dispatch(setSelectedId());
    dispatch(
      setModalOpenend({ modal: 'template', opened: true, mode: 'create' })
    );
  };

  return (
    <div className={styles.root}>
      <TextInput
        type='search'
        placeholder={t('search')}
        icon={<FontAwesomeIcon icon={faSearch} />}
      />

      <Button
        onClick={handleOnAdd}
        variant='filled'
        leftIcon={<FontAwesomeIcon icon={faAdd} />}
      >
        {t('add')}
      </Button>
    </div>
  );
};

export default TemplateTableHeader;
