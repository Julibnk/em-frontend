import { Button, ButtonProps } from '@mantine/core';
import styles from './styles.module.css';

const SecondaryButton = (props) => {
  const buttonProps: ButtonProps<'button'> = {
    classNames: {
      outline: styles.outline,
    },
    color: 'gray',
    variant: 'outline',
    ...props,
  };
  return <Button {...buttonProps}></Button>;
};

export default SecondaryButton;
