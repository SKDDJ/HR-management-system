import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { HrContext } from "contexts/HrContext";
import { useContext } from "react";

const columns: GridColDef[] = [
  {
    field: "staffId",
    headerName: "Employee ID",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "fullName",
    headerName: "Employee Name",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "endDate",
    headerName: "End Date",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "employmentTitle",
    headerName: "Title",
    headerAlign: "center",
    align: "center",
    width: 200,
  },
  {
    field: "sectionName",
    headerName: "Section",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
];

export const EmploymentHistory = () => {
  const { employmentHistories } = useContext(HrContext);
  return (
    <Box component="section" sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={employmentHistories}
        columns={columns}
        getRowId={(row) => row.staffId + row.employmentId}
        autoPageSize
      />
    </Box>
  );
};