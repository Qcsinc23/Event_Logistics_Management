import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import LeftMenu6 from "../components/LeftMenu6";
import User1 from "../components/User1";
import Map1 from "../components/Map1";
import Modal2 from "../components/Modal2";
import styles from "./VehicleDetailsModal.module.css";

const VehicleDetailsModal: FunctionComponent = () => {
  return (
    <div className={styles.vehicleDetailsModal}>
      <main className={styles.bg}>
        <LeftMenu6
          leftMenuPosition="absolute"
          leftMenuTop="0px"
          leftMenuLeft="0px"
          logo="/logo1.svg"
        />
        <div
          className={styles.dashboardDelivery}
        >{`Dashboard > Delivery > Live Tracking Map`}</div>
        <User1 />
        <img
          className={styles.deliveryIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <h3 className={styles.deliveryTracking}>Delivery Tracking</h3>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.vectorWrapper}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-13.svg"
            />
          </div>
          <div className={styles.filterMap}>Filter Map</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.vectorContainer}>
            <img
              className={styles.vectorIcon1}
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
        <Map1 />
        <section className={styles.modalBackground} />
      </main>
      <Modal2 />
    </div>
  );
};

export default VehicleDetailsModal;
