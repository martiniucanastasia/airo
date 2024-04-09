import ReactDOM from 'react-dom/client';
import App from './App';

import 'normalize.css';
import { Global } from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Global />
    <App />
  </>
);
