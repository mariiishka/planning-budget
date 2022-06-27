import React, { createContext, ReactNode, useState } from 'react';
import { Snackbar, SnackbarOrigin } from '@mui/material';
import MuiAlert, {
  AlertColor,
  AlertProps as UIAlertProps,
} from '@mui/lab/Alert';

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

interface UIContextProps {
  setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
  handleClose: () => void;
}

interface AlertProps {
  show: boolean;
  haveIcon?: boolean;
  severity?: AlertColor;
  message?: string;
  variant?: UIAlertProps['variant'];
  ancorOrigin?: SnackbarOrigin;
}

type Props = {
  children: ReactNode;
};

const UIContextProvider: React.FC<Props> = ({ children }) => {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    haveIcon: true,
    severity: 'warning',
    variant: 'outlined',
    ancorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    message: 'Error',
  });

  const handleClose = () =>
    setAlert((prevState) => ({
      ...prevState,
      show: false,
    }));

  return (
    <UIContext.Provider value={{ setAlert, handleClose }}>
      {children}
      <Snackbar
        anchorOrigin={alert.ancorOrigin}
        open={alert.show}
        autoHideDuration={null}
        onClose={handleClose}
      >
        <MuiAlert
          icon={alert.haveIcon}
          elevation={6}
          variant={alert.variant}
          severity={alert.severity}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </UIContext.Provider>
  );
};

export default UIContextProvider;
