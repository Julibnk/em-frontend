import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { ModalProps } from '@mantine/core';

import Modal from '@components/MantineOverwrite/Modal';
import CategoryForm from './form';
import { setModalOpenend } from '@store/layout-slice';
import { useSelector, useDispatch } from '@store/store';
import { selectModal } from '@store/layout-selector';

const CategoryModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => selectModal(state, 'category'));
  const { t } = useTranslation();

  const { opened } = modalState;

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
      <CategoryForm handleOnClose={handleOnClose} />
    </Modal>
  );
};

export default CategoryModal;
