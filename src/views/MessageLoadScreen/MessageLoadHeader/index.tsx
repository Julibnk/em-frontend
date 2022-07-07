import styles from './styles.module.css';
import { Button, TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudArrowUp,
  faFilter,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from '@store/store';
import { setModalOpenend } from '@store/layout-slice';
import SecondaryButton from '@components/MantineOverwrite/SecondaryButton';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const MessageLoadHeader = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnCreateMessage = () => {
    dispatch(
      setModalOpenend({ modal: 'message', opened: true, mode: 'create' })
    );
  };
  const handleOnMessageLoad = () => {
    navigate('../load');
  };

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <TextInput
          type='search'
          placeholder={t('search')}
          icon={<FontAwesomeIcon icon={faSearch} />}
        />
        <SecondaryButton leftIcon={<FontAwesomeIcon icon={faFilter} />}>
          {t('filter', { count: 0 })}
        </SecondaryButton>
      </div>

      <div className={styles.right}>
        <SecondaryButton
          onClick={handleOnCreateMessage}
          leftIcon={<FontAwesomeIcon icon={faPaperPlane} />}
        >
          {t('create_message')}
        </SecondaryButton>
        <Button
          onClick={handleOnMessageLoad}
          variant='filled'
          leftIcon={<FontAwesomeIcon icon={faCloudArrowUp} />}
        >
          {t('message_load')}
        </Button>
      </div>
    </div>
  );
};

export default MessageLoadHeader;
