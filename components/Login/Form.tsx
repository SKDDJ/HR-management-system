import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { loginHelper } from "helpers/loginHelper";
import { LoginInput } from "interfaces/form/login";
import Cookies from "js-cookie";
import Router from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit } = useForm<LoginInput>();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<LoginInput> = async data => {
    const { success, message, data: token } = await loginHelper(data);
    if (!success) {
      setErrorMessage(message);
      return;
    }
    Cookies.set("token", token as string);
    Router.push("/");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <TextField
        type="text"
        label="Staff ID"
        {...register("staffId")}
        required
        variant="outlined"
        margin="normal"
        fullWidth
        autoComplete="id"
        autoFocus
        sx={{ mb: 2 }}
      />
      <TextField
        type="password"
        label="Password"
        {...register("password")}
        required
        variant="outlined"
        margin="normal"
        fullWidth
        autoComplete="password"
        sx={{ mb: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mb: 2, bgcolor: "#1976d2", color: "#fff" }}
      >
        LOG IN
      </Button>
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}
    </Box>
  );
};