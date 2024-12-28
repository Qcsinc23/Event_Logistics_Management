import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu5.module.css";

export type LeftMenu5Type = {
  className?: string;
};

const LeftMenu5: FunctionComponent<LeftMenu5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.leftMenu, className].join(" ")}>
      <div className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <div className={styles.links}>
        <div className={styles.dashboard}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-11.svg"
          />
          <div className={styles.dashboard1}>Dashboard</div>
        </div>
        <div className={styles.events}>
          <img
            className={styles.layer1Icon}
            loading="lazy"
            alt=""
            src="/layer-1-13.svg"
          />
          <div className={styles.events1}>Events</div>
          <img
            className={styles.eventsChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
        </div>
        <div className={styles.logistics}>
          <div className={styles.logistics1}>Logistics</div>
          <img
            className={styles.logisticsChild}
            loading="lazy"
            alt=""
            src="/group-107.svg"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </div>
        </div>
        <div className={styles.inventory}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
          </div>
          <div className={styles.inventory1}>Inventory</div>
          <img
            className={styles.inventoryChild}
            loading="lazy"
            alt=""
            src="/group-1112.svg"
          />
          <div className={styles.layer1} />
          <div className={styles.inventoryList}>Inventory List</div>
          <div
            className={styles.alertsNotifications}
          >{`Alerts & Notifications`}</div>
        </div>
        <div className={styles.deliveries}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </div>
          <div className={styles.deliveries1}>Deliveries</div>
          <img
            className={styles.logisticsChild}
            loading="lazy"
            alt=""
            src="/group-113.svg"
          />
        </div>
        <div className={styles.reports}>
          <div className={styles.reports1}>Reports</div>
          <img
            className={styles.reportsChild}
            loading="lazy"
            alt=""
            src="/group-114.svg"
          />
        </div>
        <div className={styles.users}>
          <div className={styles.users1}>Users</div>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className={styles.settings}>
          <div className={styles.settings1}>Settings</div>
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

export default LeftMenu5;
