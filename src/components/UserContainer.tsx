import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./UserContainer.module.css";

export type UserContainerType = {
  className?: string;
};

const UserContainer: FunctionComponent<UserContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.userContainer, className].join(" ")}>
      <div className={styles.userIcon}>
        <img
          className={styles.profilePictureIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div className={styles.user}>
        <div className={styles.userChild} />
        <img
          className={styles.profileBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className={styles.userName}>
          <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;