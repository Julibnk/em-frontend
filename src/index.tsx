import './index.css';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './config/i18n';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
process.env.REACT_APP_REPORT_WEB_VITALS && reportWebVitals(console.log);
