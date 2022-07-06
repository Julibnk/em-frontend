import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { ModalProps } from '@mantine/core';

import Modal from '@components/MantineOverwrite/Modal';
import { setModalOpenend } from '@store/layout-slice';
import { useSelector, useDispatch } from '@store/store';
import TemplateForm from './form';
import { selectModal } from '@store/layout-selector';

const TemplateModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => selectModal(state, 'template'));
  const { t } = useTranslation();

  const { opened } = modalState;

  const handleOnClose = useCallback(() => {
    dispatch(setModalOpenend({ modal: 'template', opened: false }));
  }, [dispatch]);

  const modalProps: ModalProps = {
    opened: opened,
    onClose: handleOnClose,
    title: t('create_subject', { subject: t('template', { count: 1 }) }),
  };

  return (
    <Modal {...modalProps}>
      <TemplateForm handleOnClose={handleOnClose} />
    </Modal>
  );
};

export default TemplateModal;
