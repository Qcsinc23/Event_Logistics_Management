import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.dashboardLogisticsVehiclWrapper}>
        <div
          className={styles.dashboardLogistics}
        >{`Dashboard > Logistics > Vehicle Management`}</div>
      </div>
      <div className={styles.userIconParent}>
        <div className={styles.userIcon}>
          <img className={styles.icon} loading="lazy" alt="" />
        </div>
        <div className={styles.user}>
          <div className={styles.userChild} />
          <img className={styles.userImageIcon} loading="lazy" alt="" />
          <div className={styles.userName}>
            <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
