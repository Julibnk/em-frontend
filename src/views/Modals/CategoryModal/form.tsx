import { useForm } from '@mantine/form';
import { Button, Group, MultiSelect, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SecondaryButton from '@components/MantineOverwrite/SecondaryButton/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from '@store/store';
import { selectSelectedCategory } from '@store/category-selector';
import { selectTemplatesForCombo } from '@store/template-selector';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { selectModal } from '@store/layout-selector';

type CategoryFormState = {
  name: string;
  description: string;
  templateIds: string[];
};

type Props = {
  handleOnClose: () => void;
};

const CategoryForm = ({ handleOnClose }: Props) => {
  const { t } = useTranslation();

  const category = useSelector((state) => selectSelectedCategory(state));
  const templates = useSelector((state) => selectTemplatesForCombo(state));
  const { mode } = useSelector((state) => selectModal(state, 'category'));

  const initialValues: CategoryFormState = {
    name: category?.name || '',
    description: category?.description || '',
    templateIds: category?.templateIds as string[],
  };

  const form = useForm({ initialValues });

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  const mainButtonIcon = mode === 'create' ? faFile : faFloppyDisk;
  const mainButtonText = mode === 'create' ? t('create') : t('save');

  return (
    <form className='modal_form' onSubmit={form.onSubmit(handleOnSubmit)}>
      <TextInput required label={t('name')} {...form.getInputProps('name')} />
      <TextInput
        label={t('description')}
        {...form.getInputProps('description')}
      />
      <MultiSelect
        data={templates}
        label={t('template', { count: 0 })}
        {...form.getInputProps('templateIds')}
      />
      <Group position='right' mt='md'>
        <SecondaryButton onClick={handleOnClose}>{t('cancel')}</SecondaryButton>
        <Button
          type='submit'
          leftIcon={<FontAwesomeIcon icon={mainButtonIcon} />}
        >
          {mainButtonText}
        </Button>
      </Group>
    </form>
  );
};

export default CategoryForm;
