import styles from './styles.module.css';

import { useTranslation } from 'react-i18next';
import { Button, TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from '@store/store';
import { setModalOpenend } from '@store/layout-slice';

const CategoryTableHeader = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    dispatch(setModalOpenend({ modal: 'category', opened: true }));
  };

  return (
    <div className={styles.header}>
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

export default CategoryTableHeader;
