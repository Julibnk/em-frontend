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
import {
  faFloppyDisk,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from '@store/store';
import { selectCategoriesForCombo } from '@store/category-selector';
import { selectSelectedTemplate } from '@store/template-selector';
import { selectModal } from '@store/layout-selector';

type TemplateFormState = {
  name: string;
  description: string;
  preview: string;
  variable1: string;
  variable2: string;
  variable3: string;
  categoryIds: string[];
};

type Props = {
  handleOnClose: () => void;
};

const MessageForm = ({ handleOnClose }: Props) => {
  const { t } = useTranslation();

  const template = useSelector((state) => selectSelectedTemplate(state));
  const categories = useSelector((state) => selectCategoriesForCombo(state));
  const { mode } = useSelector((state) => selectModal(state, 'template'));

  const initialValues: TemplateFormState = {
    name: template?.name || '',
    description: template?.description || '',
    preview: template?.preview || '',
    variable1: template?.variable1 || '',
    variable2: template?.variable2 || '',
    variable3: template?.variable3 || '',
    categoryIds: template?.categoryIds as string[],
  };

  const form = useForm({ initialValues });

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  const mainButtonIcon = mode === 'create' ? faFile : faFloppyDisk;
  const mainButtonText = mode === 'create' ? t('create') : t('save');

  return (
    <form className='modal_form' onSubmit={form.onSubmit(handleOnSubmit)}>
      {/* <Alert
        icon={<FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>}
        title={t('template_warning_title')}
        color='yellow'
        className={styles.alert}
      >
        <p>{t('template_warning_content')}</p>
        <a
          href='https://business.facebook.com/home/accounts?business_id=3104150219846655&global_scope_id=3104150219846655'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('go_to_waba_console')} &#8594;
        </a>
      </Alert>

      <TextInput required label={t('name')} {...form.getInputProps('name')} />

      <TextInput
        label={t('description')}
        {...form.getInputProps('description')}
      />

      <Textarea
        autosize
        minRows={4}
        label={t('preview')}
        placeholder={t('template_preview_placeholder')}
        {...form.getInputProps('preview')}
      />

      <div className={styles.variableInputs}>
        <TextInput
          label={t('variable_number', { number: 1 })}
          placeholder={'{{1}}'}
          {...form.getInputProps('variable1')}
        />
        <TextInput
          label={t('variable_number', { number: 2 })}
          placeholder={'{{2}}'}
          {...form.getInputProps('variable2')}
        />
        <TextInput
          label={t('variable_number', { number: 3 })}
          placeholder={'{{3}}'}
          {...form.getInputProps('variable3')}
        />
      </div>

      <MultiSelect
        data={categories}
        label={t('category', { count: 0 })}
        {...form.getInputProps('categoryIds')}
      /> */}

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

export default MessageForm;
