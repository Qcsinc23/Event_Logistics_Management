import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import User1 from "../components/User1";
import Filter from "../components/Filter";
import Header from "../components/Header";
import TableRow from "../components/TableRow";
import Modal3 from "../components/Modal3";
import styles from "./DeliveryDetailsModal.module.css";

const DeliveryDetailsModal: FunctionComponent = () => {
  return (
    <div className={styles.deliveryDetailsModal}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.menuContent}>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/frame-2@2x.png" />
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </div>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/placeholder@2x.png"
            />
          </div>
          <div className={styles.navigation}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.events}>Events</div>
            <div className={styles.logistics}>Logistics</div>
            <div className={styles.inventory}>Inventory</div>
            <div className={styles.pageNav}>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.liveTracking}>
                <div className={styles.liveTrackingMap}>Live Tracking Map</div>
                <div className={styles.statusUpdates}>Status Updates</div>
                <div className={styles.liveTrackingMap}>Proof of Delivery</div>
              </div>
              <div className={styles.reportsUsers}>
                <div className={styles.reports}>Reports</div>
                <div className={styles.users}>Users</div>
              </div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.submenu}>
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
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group-1073.svg"
              />
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/group-1113.svg"
                />
                <div className={styles.layer1} />
              </div>
              <img
                className={styles.frameChild3}
                loading="lazy"
                alt=""
                src="/group-1133.svg"
              />
            </div>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameChild3}
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
      <div
        className={styles.dashboardDelivery}
      >{`Dashboard > Delivery > Status Updates`}</div>
      <User1 />
      <img
        className={styles.vectorIcon1}
        loading="lazy"
        alt=""
        src="/vector-14.svg"
      />
      <h2 className={styles.deliveryStatusUpdates}>Delivery Status Updates</h2>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon2} alt="" src="/vector-22.svg" />
        </div>
        <div className={styles.filter}>Filter</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.buttonChild} />
        <img
          className={styles.buttonInner}
          loading="lazy"
          alt=""
          src="/group-220.svg"
        />
        <div className={styles.export}>Export</div>
      </div>
      <section className={styles.metrics}>
        <div className={styles.inTransit}>
          <div className={styles.inTransitChild} />
          <div className={styles.metricValuesParent}>
            <div className={styles.metricValues}>20</div>
            <div className={styles.inTransit1}>In Transit</div>
          </div>
          <img
            className={styles.layer1Icon3}
            loading="lazy"
            alt=""
            src="/layer-1-3.svg"
          />
        </div>
        <div className={styles.delivered}>
          <div className={styles.inTransitChild} />
          <div className={styles.parent}>
            <div className={styles.metricValues}>88</div>
            <div className={styles.delivered1}>Delivered</div>
          </div>
          <img
            className={styles.layer1Icon4}
            loading="lazy"
            alt=""
            src="/layer-1-4.svg"
          />
        </div>
        <div className={styles.delayed}>
          <div className={styles.inTransitChild} />
          <div className={styles.group}>
            <div className={styles.metricValues}>12</div>
            <div className={styles.delayed1}>Delayed</div>
          </div>
          <img
            className={styles.layer1Icon4}
            loading="lazy"
            alt=""
            src="/layer-1-5.svg"
          />
        </div>
        <div className={styles.totalDeliveries}>
          <div className={styles.inTransitChild} />
          <div className={styles.group}>
            <div className={styles.metricValues}>120</div>
            <div className={styles.totalDeliveries1}>Total Deliveries</div>
          </div>
          <img
            className={styles.layer1Icon6}
            loading="lazy"
            alt=""
            src="/layer-1-6.svg"
          />
        </div>
      </section>
      <Filter />
      <h2 className={styles.deliveriesList}>Deliveries List</h2>
      <div className={styles.button2}>
        <div className={styles.rectangleDiv} />
        <div className={styles.assignDriver}>Assign Driver</div>
      </div>
      <div className={styles.button3}>
        <div className={styles.buttonChild1} />
        <div className={styles.export}>Send Group Communication</div>
      </div>
      <section className={styles.table}>
        <div className={styles.tableChild} />
        <Header />
        <div className={styles.tableBody}>
          <TableRow />
        </div>
      </section>
      <section className={styles.modalBackground} />
      <Modal3 />
    </div>
  );
};

export default DeliveryDetailsModal;
