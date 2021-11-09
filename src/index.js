import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import store from './app/store';
import './index.css';
import './css/app.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
