import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Modal2.module.css";

export type Modal2Type = {
  className?: string;
};

const Modal2: FunctionComponent<Modal2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.modal, className].join(" ")}>
      <div className={styles.modalChild} />
      <div className={styles.vehicleDetailsPanelParent}>
        <div className={styles.vehicleDetailsPanel}>Vehicle Details Panel</div>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-2091.svg"
          />
        </div>
      </div>
      <div className={styles.modalInner}>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.vehicleIdParent}>
          <div className={styles.vehicleId}>Vehicle ID:</div>
          <div className={styles.driverName}>Driver Name:</div>
          <div className={styles.currentSpeed}>Current Speed:</div>
          <div className={styles.eta}>(ETA):</div>
          <div className={styles.status}>Status:</div>
        </div>
        <div className={styles.vehicleIdParent}>
          <div className={styles.kmperHour}>1D7HA18D44J218509</div>
          <div className={styles.ronaldGrey}>Ronald Grey</div>
          <div className={styles.kmperHour}>80KM/Per Hour</div>
          <div className={styles.minutes}>15 Minutes</div>
          <div className={styles.enRoute}>En Route</div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
