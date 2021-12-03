import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { MainStyle } from './common/styles/MainStyles';
import { theme } from './common/styles/theme';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './redux/configStore';

import 'react-confirm-alert/src/react-confirm-alert.css';


const { store, persistor } = configureStore()
export const { dispatch } = store
export const select = s => s(store.getState())



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
      <MainStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </PersistGate>
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
