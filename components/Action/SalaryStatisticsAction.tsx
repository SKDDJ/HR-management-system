import { DialogActions } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { StaffContext } from "contexts/StaffContext";
import { calcSalaryStatisticsHelper } from "helpers/calcSalaryStatisticsHelper";
import { SalaryStatistics } from "interfaces/salaryStatistics";
import { useContext, useEffect, useState } from "react";

export const SalaryStatisticsAction = () => {
  const { branches } = useContext(StaffContext);
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  const [{ maxSalary, minSalary, averageSalary }, setStatistics] = useState(
    {} as SalaryStatistics
  );

  useEffect(() => setStatistics(calcSalaryStatisticsHelper(branches)), [branches]);

  return (
    <>
      <Button variant="outlined" onClick={openDialog} className="salary-statistics-button">
        Salary Statistics
      </Button>
      {open && (
        <Dialog open={open} onClose={closeDialog}>
          <DialogTitle>Salary Statistics</DialogTitle>
          <DialogContent>
            <DialogContentText className="salary-statistics-text">Max: {maxSalary}</DialogContentText>
            <DialogContentText className="salary-statistics-text">Min: {minSalary}</DialogContentText>
            <DialogContentText className="salary-statistics-text">Average: {averageSalary}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>OK</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};