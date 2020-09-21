import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import GlobalStyles from './components/theme/GlobalStyles';
import Theme from './components/theme/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);