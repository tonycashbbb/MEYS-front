import React from 'react';

import {
  Button,
  Dialog as MaterialDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import {APP_TEXT} from "@app/i18n";

const Dialog = ({
                  open,
                  confirmation,
                  handleClose,
                  handleConfirm,
                  cancelButtonText,
                  confirmButtonText,
                }) => {
  return (
    <MaterialDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {confirmation.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {confirmation.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {cancelButtonText || APP_TEXT.general.cancel}
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          {confirmButtonText || APP_TEXT.general.confirm}
        </Button>
      </DialogActions>
    </MaterialDialog>
  );
};

export default Dialog;