import React from 'react';
import { Error } from '@material-ui/icons';
import { SnackbarContent, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const handleClose = () => {
  window.location.reload();
};

const ErrorNotification = () => {
  const classes = useStyles();

  return (
    <SnackbarContent
      className={classes.error}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Error className={classes.icon} />
          Something went wrong :/
        </span>
      }
      action={[
        <Button key="undo" size="small" onClick={handleClose}>
          Reload
        </Button>,
      ]} />
  );
};

export default ErrorNotification;
