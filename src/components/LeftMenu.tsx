import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu.module.css";

export type LeftMenuType = {
  className?: string;
};

const LeftMenu: FunctionComponent<LeftMenuType> = ({ className = "" }) => {
  return (
    <div className={[styles.leftMenu, className].join(" ")}>
      <div className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <div className={styles.leftContent}>
        <div className={styles.menuTop}>
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
              src="/layer-1-11.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
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
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.digiboxxIcon}
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
        <div className={styles.menuBottom}>
          <div className={styles.menuOptions}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.eventMenu}>
              <div className={styles.events}>Events</div>
              <div className={styles.calendarOptions}>
                <div className={styles.eventList}>Event List</div>
                <div className={styles.eventList}>Event Calendar</div>
              </div>
            </div>
            <div className={styles.eventList}>Logistics</div>
            <div className={styles.inventory}>Inventory</div>
            <div className={styles.deliveries}>Deliveries</div>
            <div className={styles.reports}>Reports</div>
            <div className={styles.users}>Users</div>
            <div className={styles.settings}>Settings</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            <img
              className={styles.placeholderIcon}
              alt=""
              src="/placeholder@2x.png"
            />
            <div className={styles.ravishankarkumarcdpngParent}>
              <div className={styles.ravishankarkumarcdpng}>
                <div className={styles.ravishankarkumarcdpngChild} />
                <img
                  className={styles.ravishankarkumarcdpngItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
              <div className={styles.ravishankarkumarcdpng}>
                <div className={styles.ravishankarkumarcdpngChild} />
                <img
                  className={styles.ravishankarkumarcdpngItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
              <div className={styles.ravishankarkumarcdpng}>
                <div className={styles.ravishankarkumarcdpngChild} />
                <img
                  className={styles.ravishankarkumarcdpngItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
