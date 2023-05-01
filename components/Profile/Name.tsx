import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StaffContext } from "contexts/StaffContext";
import { useContext } from "react";

export const Name = () => {
  const {
    staff: { staffId, fullName },
  } = useContext(StaffContext);
  return (
    <Box
      component="section"
      sx={{
        py: 2,
        backgroundColor: "#F5F5F5",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Typography
        component="p"
        align="center"
        gutterBottom
        sx={{ color: "GrayText", fontSize: "30px" }}
      >
        {staffId}
      </Typography>
      <Typography
        component="h3"
        align="center"
        sx={{ fontSize: "50px", fontWeight: "bolder" }}
      >
        {fullName}
      </Typography>
    </Box>
  );
};