import { SubmitHandler, useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Router from "next/router";
import { useState } from "react";
import { addPlaceHelper } from "helpers/addPlaceHelper";
import { AddPlaceInput } from "interfaces/form/addPlace";

const useStyles = makeStyles({
  dialogTitle: {
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  textField: {
    marginBottom: "1rem",
  },
  cancelButton: {
    color: "#f44336",
  },
  addButton: {
    backgroundColor: "#4caf50",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
});

export const AddPlaceAction = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const { register, handleSubmit } = useForm<AddPlaceInput>();
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit: SubmitHandler<AddPlaceInput> = async (data) => {
    const updated = await addPlaceHelper(data);
    if (!updated) {
      setErrorMessage("Try again later");
      return;
    }
    closeDialog();
    Router.reload();
  };

  const classes = useStyles();

  return (
    <>
      <Button variant="contained" onClick={openDialog}>
        Add Working Place
      </Button>
      {open && (
        <Dialog open={open} onClose={closeDialog}>
          <DialogTitle className={classes.dialogTitle}>
            New working place information
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <TextField
              type="text"
              label="Section ID"
              {...register("placeId")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="section-id"
              autoFocus
              className={classes.textField}
            />
            <TextField
              type="text"
              label="Street"
              {...register("street")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="street"
              className={classes.textField}
            />
            <TextField
              type="text"
              label="Postal code"
              {...register("postalCode")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="postal-code"
              className={classes.textField}
            />
            <TextField
              type="text"
              label="city"
              {...register("city")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="city"
              className={classes.textField}
            />
            <TextField
              type="text"
              label="Province"
              {...register("province")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="province"
              className={classes.textField}
            />
            <TextField
              type="text"
              label="State ID"
              {...register("stateId")}
              required
              variant="standard"
              margin="normal"
              fullWidth
              autoComplete="state-id"
              className={classes.textField}
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </DialogContent>
          <DialogActions>
            <Button className={classes.cancelButton} onClick={closeDialog}>
              Cancel
            </Button>
            <Button className={classes.addButton} onClick={handleSubmit(onSubmit)}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};