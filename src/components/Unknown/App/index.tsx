import { CssBaseline, ThemeProvider } from '@mui/material';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import theme from '../../../common/theme';
import UIContextProvider from '../../UIContext';
import Root from '../Root';

const App: React.FC = () => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);

  return (
    <AuthProvider sdk={auth}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UIContextProvider>
          <Root />
        </UIContextProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
