import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Liberty } from './Liberty';
import  store from './store/store';

import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';

const theme = unstable_createMuiStrictModeTheme();
let persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Liberty/>
    </ThemeProvider>
    <GlobalStyle/>
    </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
