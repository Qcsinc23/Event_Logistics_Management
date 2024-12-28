import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu2.module.css";

export type LeftMenu2Type = {
  className?: string;
};

const LeftMenu2: FunctionComponent<LeftMenu2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.leftMenu, className].join(" ")}>
      <div className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <div className={styles.navigation}>
        <div className={styles.primaryNavigation}>
          <div className={styles.subNavigation}>
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-1.svg"
            />
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-1-1.svg"
            />
            <img
              className={styles.subNavigationChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <div className={styles.layer1}>
              <img
                className={styles.layer1Child}
                loading="lazy"
                alt=""
                src="/group-111.svg"
              />
            </div>
            <img
              className={styles.subNavigationItem}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.subNavigationItem}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className={styles.layer1Icon2}
              loading="lazy"
              alt=""
              src="/layer-1-2.svg"
            />
          </div>
          <div className={styles.dashboardLinks}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.events}>Events</div>
            <div className={styles.logistics}>Logistics</div>
            <div className={styles.inventory}>Inventory</div>
            <div className={styles.deliveries}>Deliveries</div>
            <div className={styles.reports}>Reports</div>
            <div className={styles.users}>Users</div>
            <div className={styles.settings}>Settings</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default LeftMenu2;
