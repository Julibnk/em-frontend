// import React from 'react';

// export const TemplateForm = () => {
//   return <div>TemplateForm</div>;
// };

import { useForm } from '@mantine/hooks';
import {
  Button,
  Group,
  MultiSelect,
  SelectItem,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SecondaryButton from '@components/MantineOverwrite/SecondaryButton/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';

type TemplateFormState = {
  name: string | null;
  description: string | null;
  templateIdList: string[];
};

type Props = {
  handleOnClose: () => void;
};

const initialValues: TemplateFormState = {
  name: null,
  description: null,
  templateIdList: [],
};

const templates: SelectItem[] = [
  { value: '1', label: 'Barrancos' },
  { value: '2', label: 'Sella' },
  { value: '3', label: 'Otro' },
];

const TemplateForm = ({ handleOnClose }: Props) => {
  const { t } = useTranslation();
  const form = useForm({ initialValues });

  const handleOnSubmit = () => {
    form.onSubmit((values) => console.log(values));
  };

  return (
    <form className='modal_form' onSubmit={handleOnSubmit}>
      <TextInput required label={t('name')} />
      <TextInput label={t('description')} />
      <Textarea label={t('preview')} />
      <MultiSelect data={templates} label={t('category', { count: 0 })} />
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
