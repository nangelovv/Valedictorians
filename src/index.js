import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line
  <HashRouter>
    <App />
  </HashRouter>
);