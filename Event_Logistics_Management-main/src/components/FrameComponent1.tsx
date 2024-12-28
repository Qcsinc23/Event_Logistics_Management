import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  dashboardLogisticsVehicleMan?: string;

  /** Style props */
  dashboardLogisticsDisplay?: CSSProperties["display"];
  dashboardLogisticsMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  dashboardLogisticsVehicleMan,
  dashboardLogisticsDisplay,
  dashboardLogisticsMinWidth,
}) => {
  const dashboardLogisticsStyle: CSSProperties = useMemo(() => {
    return {
      display: dashboardLogisticsDisplay,
      minWidth: dashboardLogisticsMinWidth,
    };
  }, [dashboardLogisticsDisplay, dashboardLogisticsMinWidth]);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.dashboardLogisticsVehiclWrapper}>
        <div
          className={styles.dashboardLogistics}
          style={dashboardLogisticsStyle}
        >
          {dashboardLogisticsVehicleMan}
        </div>
      </div>
      <div className={styles.userIconParent}>
        <div className={styles.userIcon}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className={styles.user}>
          <div className={styles.userChild} />
          <img
            className={styles.userImageIcon}
            loading="lazy"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <div className={styles.userName}>
            <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;