import { getAuth } from 'firebase/auth';
import React from 'react';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import Root from '../Root';

const App: React.FC = () => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);

  return (
    <AuthProvider sdk={auth}>
      <Root />
    </AuthProvider>
  );
};

export default App;
