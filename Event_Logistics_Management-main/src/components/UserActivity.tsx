import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./UserActivity.module.css";

export type UserActivityType = {
  className?: string;
};

const UserActivity: FunctionComponent<UserActivityType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.userActivity, className].join(" ")}>
      <div className={styles.userActivityChild} />
      <h2 className={styles.userActivity1}>User Activity</h2>
      <div className={styles.userActivityItem} />
      <div className={styles.userLogins}>User Logins</div>
      <div className={styles.activeUsers}>Active Users</div>
      <div className={styles.div}>24</div>
      <div className={styles.div1}>3</div>
      <div className={styles.recentUserActivities}>Recent User Activities</div>
      <div className={styles.div2}>7</div>
    </div>
  );
};

export default UserActivity;
