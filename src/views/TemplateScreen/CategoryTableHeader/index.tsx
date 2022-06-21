import styles from './styles.module.css';
import { Button, TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from '../../../store/store';
import { setModalOpenend } from '@store/layout-slice';

const CategoryTableHeader = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setModalOpenend({ modal: 'category', opened: true }));
  };

  return (
    <div className={styles.root}>
      <TextInput
        placeholder={t('search')}
        icon={<FontAwesomeIcon icon={faSearch} />}
      />
      <Button
        onClick={handleOnClick}
        variant='filled'
        leftIcon={<FontAwesomeIcon icon={faAdd} />}
      >
        {t('add')}
      </Button>
    </div>
  );
};

export default CategoryTableHeader;
