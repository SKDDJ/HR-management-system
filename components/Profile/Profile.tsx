import Grid from "@mui/material/Grid";
import { Email } from "./Email";
import { ListInfo } from "./ListInfo";
import { Name } from "./Name";
import { Phone } from "./Phone";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} className={styles.personalInfo}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Name />
          </Grid>
          <Grid item xs={12}>
            <Phone />
          </Grid>
          <Grid item xs={12}>
            <Email />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} className={styles.listInfo}>
        <ListInfo />
      </Grid>
    </Grid>
  );
};