import { ScreenContent } from '@components/Layout/ScreenContent';
import MessageTable from './MessageTable';
import MessageTableHeader from './MessageTableHeader';

const MessageListScreen = () => {
  return (
    <ScreenContent>
      <MessageTableHeader />
      <MessageTable />
    </ScreenContent>
  );
};

export default MessageListScreen;
