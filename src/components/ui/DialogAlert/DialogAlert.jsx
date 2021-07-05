import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const DialogAlert = ({
                       title,
                       description,
                       buttonNegativeText,
                       buttonPositiveText,
                       open,
                       handleClose,
                       handleOK
                     }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {buttonNegativeText}
        </Button>
        <Button onClick={handleOK} color="primary" autoFocus>
          {buttonPositiveText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAlert;