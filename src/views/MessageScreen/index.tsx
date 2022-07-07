import MessageListScreen from '@views/MessageListScreen';
import MessageLoadScreen from '@views/MessageLoadScreen';
import { Route, Routes } from 'react-router-dom';

const MessageScreen = () => {
  return (
    <Routes>
      <Route index element={<MessageListScreen />} />
      <Route path='load' element={<MessageLoadScreen />} />
    </Routes>
  );
};

export default MessageScreen;
