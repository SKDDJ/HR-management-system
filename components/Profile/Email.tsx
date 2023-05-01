import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { StaffContext } from "contexts/StaffContext";
import { updateInfoHelper } from "helpers/updateInfoHelper";
import { UpdateEmailInput } from "interfaces/form/updateEmail";
import Router from "next/router";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const Email = () => {
  const {
    staff: { email },
  } = useContext(StaffContext);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm<UpdateEmailInput>();

  const onSubmit: SubmitHandler<UpdateEmailInput> = async data => {
    setIsEditing(false);
    const { success, message } = await updateInfoHelper(data);
    if (!success) {
      console.error(message);
      return;
    }
    Router.reload();
  };
  return (
    <Box
      component="section"
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        width: "50%",
        margin: "auto",
        padding: "20px",
      }}
    >
      <Typography
        component="h3"
        sx={{ fontSize: "35px", fontWeight: "bolder", marginBottom: "20px" }}
      >
        E-mail
      </Typography>
      {!isEditing && (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setIsEditing(true)}
            sx={{ marginBottom: "10px" }}
          >
            Edit
          </Button>
          <Typography component="p" sx={{ fontSize: "25px" }}>
            {email}
          </Typography>
        </>
      )}
      {isEditing && (
        <>
          <Box sx={{ display: "flex", marginBottom: "10px" }}>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => setIsEditing(false)}
              sx={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </Button>
          </Box>
          <Box component="form">
            <TextField
              type="tel"
              {...register("email")}
              required
              variant="standard"
              fullWidth
              autoComplete="email"
              inputProps={{ style: { textAlign: "center" } }}
              placeholder={email}
            />
          </Box>
        </>
      )}
    </Box>
  );
};