import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu1.module.css";

export type LeftMenu1Type = {
  className?: string;
};

const LeftMenu1: FunctionComponent<LeftMenu1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.leftMenu, className].join(" ")}>
      <div className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo1.svg" />
      <div className={styles.menuContent}>
        <div className={styles.layerMenuParent}>
          <div className={styles.layerMenu}>
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
              src="/layer-1-1.svg"
            />
            <img
              className={styles.layerMenuChild}
              loading="lazy"
              alt=""
              src="/group-1071.svg"
            />
          </div>
          <div className={styles.layer1Parent}>
            <div className={styles.layer1}>
              <img
                className={styles.layer1Child}
                loading="lazy"
                alt=""
                src="/group-111.svg"
              />
            </div>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.frameChild}
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
        </div>
        <div className={styles.content}>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.tabs}>
            <div className={styles.tabs}>
              <div className={styles.tabContainer}>
                <div className={styles.tabContent}>
                  <div className={styles.events}>Events</div>
                  <div className={styles.moreTabs}>
                    <div className={styles.logistics}>Logistics</div>
                    <div className={styles.overviewAssignmentTab}>
                      <div className={styles.overview}>Overview</div>
                      <div className={styles.overview}>Task Assignment</div>
                    </div>
                  </div>
                </div>
                <div className={styles.planningTab}>
                  <div className={styles.frameParent}>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/frame-2@2x.png"
                    />
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <img
                        className={styles.arrowIcon}
                        loading="lazy"
                        alt=""
                        src="/arrow-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.routePlanning}>Route Planning</div>
            </div>
            <div className={styles.overview}>Vehicle Management</div>
          </div>
          <div className={styles.bottomMenu}>
            <div className={styles.settingsMenu}>
              <div className={styles.inventory}>Inventory</div>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
              <div className={styles.settings}>Settings</div>
            </div>
            <div className={styles.bottomMenuInner}>
              <div className={styles.frameParent}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.frameChild2}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu1;