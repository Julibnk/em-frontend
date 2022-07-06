import { ScreenContent } from '@components/Layout/ScreenContent';
import MessageTable from './MessageTable';
import MessageTableHeader from './MessageTableHeader/index';

const MessageScreen = () => {
  return (
    <ScreenContent>
      <MessageTableHeader />
      <MessageTable />
    </ScreenContent>
  );
};

export default MessageScreen;
