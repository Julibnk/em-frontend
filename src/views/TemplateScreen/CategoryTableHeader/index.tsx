import styles from './styles.module.css';
import { Button, TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const CategoryTableHeader = () => {
  return (
    <div className={styles.root}>
      <TextInput
        placeholder='Search'
        icon={<FontAwesomeIcon icon={faSearch} />}
      />

      <Button variant='filled' />
    </div>
  );
};
