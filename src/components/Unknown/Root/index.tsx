import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useUser } from 'reactfire';

const Root: React.FC = () => {
  const { data: user, firstValuePromise } = useUser();
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const isLogged = !!user;

  useEffect(() => {
    firstValuePromise.then(() => setIsUserLoaded(true));
  }, [firstValuePromise, setIsUserLoaded]);
  // doesn't always work, but suddenly works when subscribing to `firstValuePromise`
  // thus we use `isUserLoaded` below
  // if (!hasEmitted) {
  //   return null;
  // }
  if (!isUserLoaded) {
    return null;
  }

  if (isLogged) {
    return <Typography variant="h1">Log out</Typography>;
  }

  return (
    <>
      <Typography variant="h1">Login</Typography>
    </>
  );
};

export default Root;
