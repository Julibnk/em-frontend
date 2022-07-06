import { ScreenContent } from '@components/Layout/ScreenContent';
import TemplateTable from '@views/ConfigurationScreen/TemplateTable';
import TemplateTableHeader from '@views/ConfigurationScreen/TemplateTableHeader';

const MessageScreen = () => {
  return (
    <ScreenContent>
      <TemplateTableHeader />
      <TemplateTable />
    </ScreenContent>
    // <div>
    //   <h1>MessageScreen</h1>
    // </div>
  );
};

export default MessageScreen;
