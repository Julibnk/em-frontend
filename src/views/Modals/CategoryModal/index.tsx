import { Button, Group, ModalProps } from '@mantine/core';
import { setModalOpenend } from '@store/layout-slice';
import { useSelector, useDispatch } from '@store/store';
import CategoryForm from './CategoryForm';
import Modal from '@components/MantineOverwrite/Modal';
import { useTranslation } from 'react-i18next';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SecondaryButton from '../../../components/MantineOverwrite/SecondaryButton/index';
import { useCallback } from 'react';

const CategoryModal = () => {
  const dispatch = useDispatch();
  const { modals } = useSelector((state) => state.layout);
  const { t } = useTranslation();

  const { opened } = modals.category;

  const handleOnClose = useCallback(() => {
    dispatch(setModalOpenend({ modal: 'category', opened: false }));
  }, [dispatch]);

  const modalProps: ModalProps = {
    opened: opened,
    onClose: handleOnClose,
    title: t('create_subject', { subject: t('category', { count: 1 }) }),
  };

  return (
    <Modal {...modalProps}>
      <CategoryForm />
      <Group position='right'>
        <SecondaryButton onClick={handleOnClose}>{t('cancel')}</SecondaryButton>
        <Button
          // onClick={handleOnClose}
          leftIcon={<FontAwesomeIcon icon={faFile} />}
        >
          {t('create')}
        </Button>
      </Group>
    </Modal>
  );
};

export default CategoryModal;
