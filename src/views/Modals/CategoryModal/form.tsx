import { useForm } from '@mantine/hooks';
import {
  Button,
  Group,
  MultiSelect,
  SelectItem,
  TextInput,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SecondaryButton from '@components/MantineOverwrite/SecondaryButton/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';

type CategoryFormState = {
  name: string | null;
  description: string | null;
  templateIdList: string[];
};

type Props = {
  // initialValues: CategoryFormState;
  handleOnClose: () => void;
};

const initialValues: CategoryFormState = {
  name: null,
  description: null,
  templateIdList: [],
};

//TODO - Mock
const templates: SelectItem[] = [
  { value: '1', label: 'Cita barrancos' },
  { value: '2', label: 'Otra' },
  { value: '3', label: 'Otra x2' },
];

const CategoryForm = ({ handleOnClose }: Props) => {
  const { t } = useTranslation();
  const form = useForm({ initialValues });

  const handleOnSubmit = () => {
    form.onSubmit((values) => console.log(values));
  };

  return (
    <form className='modal_form' onSubmit={handleOnSubmit}>
      <TextInput required label={t('name')}></TextInput>
      <TextInput label={t('description')}></TextInput>
      <MultiSelect
        data={templates}
        label={t('template', { count: 0 })}
      ></MultiSelect>
      <Group position='right' mt='md'>
        <SecondaryButton onClick={handleOnClose}>{t('cancel')}</SecondaryButton>
        <Button type='submit' leftIcon={<FontAwesomeIcon icon={faFile} />}>
          {t('create')}
        </Button>
      </Group>
    </form>
  );
};

export default CategoryForm;
