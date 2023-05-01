import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { StaffContext } from "contexts/StaffContext";
import { useContext } from "react";

const columns: GridColDef[] = [
  {
    field: "staffId",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 100,
    headerClassName: "header",
    cellClassName: "cell",
  },
  {
    field: "fullName",
    headerName: "Full Name",
    headerAlign: "center",
    align: "center",
    width: 150,
    headerClassName: "header",
    cellClassName: "cell",
  },
  {
    field: "email",
    headerName: "E-mail",
    headerAlign: "center",
    align: "center",
    width: 100,
    headerClassName: "header",
    cellClassName: "cell",
  },
  {
    field: "phone",
    headerName: "Phone",
    headerAlign: "center",
    align: "center",
    width: 150,
    headerClassName: "header",
    cellClassName: "cell",
  },
  {
    field: "sectionName",
    headerName: "Section",
    headerAlign: "center",
    align: "center",
    width: 150,
    headerClassName: "header",
    cellClassName: "cell",
  },
  {
    field: "employmentTitle",
    headerName: "Title",
    headerAlign: "center",
    align: "center",
    width: 200,
    headerClassName: "header",
    cellClassName: "cell",
  },
  {
    field: "hireDate",
    headerName: "Hire date",
    headerAlign: "center",
    align: "center",
    width: 100,
    headerClassName: "header",
    cellClassName: "cell",
  },
  {
    field: "salary",
    headerName: "Salary",
    headerAlign: "center",
    align: "center",
    width: 100,
    headerClassName: "header",
    cellClassName: "cell",
  },
];

export const Branches = () => {
  const { branches } = useContext(StaffContext);
  return (
    <Box component="section" sx={{ height: "500px", width: "100%" }}>
      <DataGrid
        rows={branches}
        columns={columns}
        getRowId={row => row.staffId}
        autoPageSize
      />
    </Box>
  );
};