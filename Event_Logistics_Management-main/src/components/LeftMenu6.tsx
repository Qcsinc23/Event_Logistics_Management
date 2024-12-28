import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu6.module.css";

export type LeftMenu6Type = {
  className?: string;
  logo?: string;

  /** Style props */
  leftMenuPosition?: CSSProperties["position"];
  leftMenuTop?: CSSProperties["top"];
  leftMenuLeft?: CSSProperties["left"];
};

const LeftMenu6: FunctionComponent<LeftMenu6Type> = ({
  className = "",
  leftMenuPosition,
  leftMenuTop,
  leftMenuLeft,
  logo,
}) => {
  const leftMenu1Style: CSSProperties = useMemo(() => {
    return {
      position: leftMenuPosition,
      top: leftMenuTop,
      left: leftMenuLeft,
    };
  }, [leftMenuPosition, leftMenuTop, leftMenuLeft]);

  return (
    <div
      className={[styles.leftMenu, className].join(" ")}
      style={leftMenu1Style}
    >
      <div className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
      <div className={styles.menu}>
        <div className={styles.brandwomenParent}>
          <img
            className={styles.brandwomenIcon}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <div className={styles.abel}>
            <div className={styles.abelChild} />
            <img className={styles.abelItem} alt="" src="/arrow-4.svg" />
          </div>
          <img
            className={styles.brandwomenIcon}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
          <img
            className={styles.brandwomenIcon}
            loading="lazy"
            alt=""
            src="/placeholder@2x.png"
          />
        </div>
        <div className={styles.menuItemContainer}>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.events}>Events</div>
          <div className={styles.logistics}>Logistics</div>
          <div className={styles.inventory}>Inventory</div>
          <div className={styles.submenuContainer}>
            <div className={styles.deliveries}>Deliveries</div>
            <div className={styles.trackingItems}>
              <div className={styles.liveTrackingMap}>Live Tracking Map</div>
              <div className={styles.statusUpdates}>Status Updates</div>
              <div className={styles.statusUpdates}>Proof of Delivery</div>
            </div>
            <div className={styles.accountItems}>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
            </div>
            <div className={styles.settings}>Settings</div>
          </div>
        </div>
        <div className={styles.layerPanel}>
          <div className={styles.layerItems}>
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
              src="/layer-1-13.svg"
            />
            <img
              className={styles.layerItemsChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-111.svg"
              />
              <div className={styles.layer1} />
            </div>
            <img
              className={styles.layerItemsItem}
              loading="lazy"
              alt=""
              src="/group-1132.svg"
            />
          </div>
          <div className={styles.frameGroup}>
            <img
              className={styles.layerItemsItem}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.brandwomenIcon2}
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
        </div>
      </div>
    </div>
  );
};

export default LeftMenu6;
