import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./LeftMenu9.module.css";

export type LeftMenu9Type = {
  className?: string;
};

const LeftMenu9: FunctionComponent<LeftMenu9Type> = ({ className = "" }) => {
  return (
    <div className={[styles.leftMenu, className].join(" ")}>
      <div className={styles.menuBackground} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <div className={styles.links}>
        <div className={styles.dashboard}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-11.svg"
          />
          <h2 className={styles.dashboard1}>Dashboard</h2>
        </div>
        <div className={styles.events}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-1-14.svg"
          />
          <h2 className={styles.events1}>Events</h2>
          <img
            className={styles.eventsChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
        </div>
        <div className={styles.logistics}>
          <h2 className={styles.logistics1}>Logistics</h2>
          <img
            className={styles.logisticsChild}
            loading="lazy"
            alt=""
            src="/group-1074.svg"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4.svg"
            />
          </div>
        </div>
        <div className={styles.inventory}>
          <img
            className={styles.inventoryChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <h2 className={styles.inventory1}>Inventory</h2>
          <img
            className={styles.inventoryItem}
            loading="lazy"
            alt=""
            src="/group-1114.svg"
          />
          <div className={styles.layer1} />
        </div>
        <div className={styles.deliveries}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/arrow-4.svg"
            />
          </div>
          <h2 className={styles.deliveries1}>Deliveries</h2>
          <img
            className={styles.logisticsChild}
            loading="lazy"
            alt=""
            src="/group-1135.svg"
          />
        </div>
        <div className={styles.reports}>
          <h2 className={styles.reports1}>Reports</h2>
          <img
            className={styles.reportsChild}
            loading="lazy"
            alt=""
            src="/group-1144.svg"
          />
        </div>
        <div className={styles.users}>
          <h2 className={styles.users1}>Users</h2>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
        <div className={styles.settings}>
          <h2 className={styles.settings1}>Settings</h2>
          <img
            className={styles.layer1Icon2}
            loading="lazy"
            alt=""
            src="/layer-1-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftMenu9;
