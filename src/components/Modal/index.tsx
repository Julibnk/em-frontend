import { Modal, ModalProps } from '@mantine/core';
import styles from './styles.module.css';

const CustomModal = (props: ModalProps) => {
  const customProps: ModalProps = {
    classNames: {
      modal: styles.modal,
      header: styles.header,
      title: styles.title,
      body: styles.body,
    },
    centered: true,
    ...props,
  };

  return <Modal {...customProps} />;
};

export default CustomModal;
