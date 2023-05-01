import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "hooks/useAuth";

export const Title = () => {
  const { logout } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: "50px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontSize: "50px", fontWeight: "bolder", color: "#333333" }}
      >
        Human Resource Management System
      </Typography>
      <Button
        onClick={logout}
        color="inherit"
        size="large"
        startIcon={<LogoutIcon />}
        sx={{ marginTop: "20px" }}
      >
        Log Out
      </Button>
    </Box>
  );
};