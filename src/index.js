import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { MainStyle } from './common/styles/MainStyles';
import { theme } from './common/styles/theme';
import { configureStore } from './redux/configStore';
import Spinner from './components/Spinner/Spinner';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

const { store, persistor } = configureStore()
export const { dispatch } = store
export const select = s => s(store.getState())



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate loading={<Spinner size='small' />} persistor={persistor}>
        <Provider store={store}>
          <MainStyle />
          <BrowserRouter>
            <App />
            <ToastContainer rtl />
          </BrowserRouter>
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
