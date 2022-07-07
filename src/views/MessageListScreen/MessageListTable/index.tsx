import { Table, Th } from '@components/MantineOverwrite/Table';
import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from '@store/store';
import { useSelector } from '@store/store';
// import { selectAllTemplates } from '@store/template-selector';
// import { init } from '@store/template-slice';
// import { useEffect } from 'react';
import MessageTableRow from './row';
import { selectAllMessages } from '@store/message-selector';

const MessageListTable = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(init());
  // }, [dispatch]);

  const messages = useSelector((state) => selectAllMessages(state));

  const { t } = useTranslation();

  return (
    <Table>
      <thead>
        <tr>
          <Th>{t('name')}</Th>
          <Th>{t('preview')}</Th>
          <Th textAlign='center'>{t('variable', { count: 0 })}</Th>
          <Th textAlign='center'>{t('category', { count: 0 })}</Th>
          <Th textAlign='center'>{t('actions')}</Th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message) => (
          <MessageTableRow key={message.id} message={message} />
        ))}
      </tbody>
    </Table>
  );
};

export default MessageListTable;
