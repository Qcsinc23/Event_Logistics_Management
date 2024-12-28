import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./TopNav.module.css";

export type TopNavType = {
  className?: string;
};

const TopNav: FunctionComponent<TopNavType> = ({ className = "" }) => {
  return (
    <div className={[styles.topNav, className].join(" ")}>
      <div className={styles.breadcrumbs}>
        <div
          className={styles.dashboardInventory}
        >{`Dashboard > Inventory > Inventory List`}</div>
      </div>
      <div className={styles.user}>
        <div className={styles.userChild} />
        <img
          className={styles.userItem}
          loading="lazy"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
      </div>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
    </div>
  );
};

export default TopNav;
