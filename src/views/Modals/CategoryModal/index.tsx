import { useCallback } from 'react';
import { ModalProps } from '@mantine/core';

import Modal from '@components/MantineOverwrite/Modal';
import CategoryForm from './form';
import { setModalOpenend } from '@store/layout-slice';
import { useSelector, useDispatch } from '@store/store';
import { selectModal } from '@store/layout-selector';
import { t } from 'i18next';
import { selectSelectedCategory } from '@store/category-selector';

import { ModalMode } from '../../../store/layout-slice';

const CategoryModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => selectModal(state, 'category'));
  const category = useSelector((state) => selectSelectedCategory(state));

  console.log(category);

  const { opened, mode } = modalState;

  const handleOnClose = useCallback(() => {
    dispatch(setModalOpenend({ modal: 'category', opened: false }));
  }, [dispatch]);

  const modalProps: ModalProps = {
    opened: opened,
    onClose: handleOnClose,
    title: getModalTitle(mode, category?.name || ''),
  };

  return (
    <Modal {...modalProps}>
      <CategoryForm handleOnClose={handleOnClose} />
    </Modal>
  );
};

function getModalTitle(mode: ModalMode, categoryName: string): string {
  if (mode === 'edit') {
    return t('edit_subject', { subject: categoryName });
  }

  return t('create_subject', { subject: t('category', { count: 1 }) });
}

export default CategoryModal;
