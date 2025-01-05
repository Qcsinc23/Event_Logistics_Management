import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./User1.module.css";

export type User1Type = {
  className?: string;
};

const User1: FunctionComponent<User1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.user, className].join(" ")}>
      <div className={styles.userChild} />
      <img
        className={styles.userIcon}
        loading="lazy"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className={styles.sherwynGrahamWrapper}>
        <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
      </div>
    </div>
  );
};

export default User1;
