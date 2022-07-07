import { ScreenContent } from '@components/Layout/ScreenContent';
import MessageListTable from './MessageListTable';
import MessageListHeader from './MessageListHeader';

const MessageListScreen = () => {
  return (
    <ScreenContent>
      <MessageListHeader />
      <MessageListTable />
    </ScreenContent>
  );
};

export default MessageListScreen;
