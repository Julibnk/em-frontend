import { useForm } from '@mantine/hooks';
import {
  Button,
  Group,
  MultiSelect,
  TextInput,
  Textarea,
  Alert,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SecondaryButton from '@components/MantineOverwrite/SecondaryButton/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faAllergies } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from '@store/store';
import { selectCategoriesForCombo } from '@store/category-selector';
import { selectSelectedTemplate } from '@store/template-selector';

type TemplateFormState = {
  name: string;
  description: string;
  preview: string;
  categoryIds: string[];
};

type Props = {
  handleOnClose: () => void;
};

const TemplateForm = ({ handleOnClose }: Props) => {
  const { t } = useTranslation();

  const template = useSelector((state) => selectSelectedTemplate(state));
  const categories = useSelector((state) => selectCategoriesForCombo(state));

  const initialValues: TemplateFormState = {
    name: template?.name || '',
    description: template?.description || '',
    preview: template?.preview || '',
    categoryIds: template?.categoryIds as string[],
  };

  const form = useForm({ initialValues });

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  return (
    <form className='modal_form' onSubmit={form.onSubmit(handleOnSubmit)}>
      <Alert
        icon={<FontAwesomeIcon icon={faAllergies}></FontAwesomeIcon>}
        title='Bummer!'
        color='red'
      >
        Something terrible happened! You made a mistake and there is no going
        back, your data was lost forever!
      </Alert>
      <TextInput required label={t('name')} {...form.getInputProps('name')} />
      <TextInput
        label={t('description')}
        {...form.getInputProps('description')}
      />
      <Textarea label={t('preview')} {...form.getInputProps('preview')} />
      <MultiSelect
        data={categories}
        label={t('category', { count: 0 })}
        {...form.getInputProps('categoryIds')}
      />
      <Textarea label={t('variable', { count: 0 })} />
      <Group position='right' mt='md'>
        <SecondaryButton onClick={handleOnClose}>{t('cancel')}</SecondaryButton>
        <Button type='submit' leftIcon={<FontAwesomeIcon icon={faFile} />}>
          {t('create')}
        </Button>
      </Group>
    </form>
  );
};

export default TemplateForm;
