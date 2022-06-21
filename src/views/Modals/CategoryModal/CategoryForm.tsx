import { useForm } from '@mantine/hooks';
import { TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';

type CategoryFormState = {
  name: string;
  description: string;
  templateIdList: string[];
};

const initialValues: CategoryFormState = {
  name: '',
  description: '',
  templateIdList: [],
};

const CategoryForm = () => {
  const { t } = useTranslation();
  const form = useForm({ initialValues });

  return (
    <form className='modal_form'>
      <TextInput label={t('name')}></TextInput>
      <TextInput label={t('description')}></TextInput>
    </form>
  );
};

export default CategoryForm;
