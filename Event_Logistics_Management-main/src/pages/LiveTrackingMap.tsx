import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import LeftMenu6 from "../components/LeftMenu6";
import UserContainer from "../components/UserContainer";
import Map1 from "../components/Map1";
import styles from "./LiveTrackingMap.module.css";

const LiveTrackingMap: FunctionComponent = () => {
  return (
    <div className={styles.liveTrackingMap}>
      <LeftMenu6 logo="/logo1.svg" />
      <main className={styles.brandCardSixteen}>
        <section className={styles.mainPanel}>
          <div className={styles.header}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>
                <div
                  className={styles.dashboardDelivery}
                >{`Dashboard > Delivery > Live Tracking Map`}</div>
                <h3 className={styles.deliveryTracking}>Delivery Tracking</h3>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.button}>
                <div className={styles.buttonChild} />
                <div className={styles.filterIcon}>
                  <img
                    className={styles.acneIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
                <div className={styles.filterMap}>Filter Map</div>
              </div>
              <div className={styles.userDropdown}>
                <UserContainer />
                <div className={styles.mapActions}>
                  <div className={styles.button1}>
                    <div className={styles.buttonItem} />
                    <div className={styles.buttonIcons}>
                      <img
                        className={styles.brandwomenIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <div className={styles.refreshMap}>Refresh Map</div>
                  </div>
                  <div className={styles.button2}>
                    <div className={styles.buttonChild} />
                    <div className={styles.outWrapper}>
                      <img
                        className={styles.outIcon}
                        loading="lazy"
                        alt=""
                        src="/out.svg"
                      />
                    </div>
                    <div className={styles.legends}>Legends</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Map1 />
        </section>
      </main>
    </div>
  );
};

export default LiveTrackingMap;
