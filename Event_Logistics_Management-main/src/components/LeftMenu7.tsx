import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu7.module.css";

export type LeftMenu7Type = {
  className?: string;
};

const LeftMenu7: FunctionComponent<LeftMenu7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.leftMenu, className].join(" ")}>
      <div className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <div className={styles.menu}>
        <div className={styles.menuIcons}>
          <img
            className={styles.menuIconsChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
          </div>
          <img
            className={styles.menuIconsChild}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <img
            className={styles.menuIconsChild}
            loading="lazy"
            alt=""
            src="/placeholder@2x.png"
          />
        </div>
        <div className={styles.menuItems}>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.events}>Events</div>
          <div className={styles.logistics}>Logistics</div>
          <div className={styles.inventory}>Inventory</div>
          <div className={styles.deliveriesMenu}>
            <div className={styles.deliveries}>Deliveries</div>
            <div className={styles.trackingMenu}>
              <div className={styles.liveTrackingMap}>Live Tracking Map</div>
              <div className={styles.liveTrackingMap}>Status Updates</div>
              <div className={styles.proofOfDelivery}>Proof of Delivery</div>
            </div>
            <div className={styles.reportsMenu}>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
            </div>
            <div className={styles.settings}>Settings</div>
          </div>
        </div>
        <div className={styles.layersMenu}>
          <div className={styles.layer1Parent}>
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-11.svg"
            />
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-1-14.svg"
            />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-1073.svg"
            />
            <div className={styles.frameParent}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1113.svg"
              />
              <div className={styles.layer1} />
            </div>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-1133.svg"
            />
          </div>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-1142.svg"
            />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector2.svg"
            />
            <img
              className={styles.layer1Icon2}
              loading="lazy"
              alt=""
              src="/layer-1-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu7;
