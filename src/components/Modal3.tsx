import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./Modal3.module.css";

export type Modal3Type = {
  className?: string;
};

const Modal3: FunctionComponent<Modal3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.modal, className].join(" ")}>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.updateStatus}>Update Status</div>
      </div>
      <div className={styles.modalChild} />
      <div className={styles.modalHeader}>
        <h3 className={styles.deliveryDetails}>Delivery Details</h3>
        <div className={styles.modalCloseIcon}>
          <img
            className={styles.modalCloseIconChild}
            alt=""
            src="/group-2092.svg"
          />
        </div>
      </div>
      <div className={styles.modalContentSeparator}>
        <div className={styles.firstSeparator} />
      </div>
      <div className={styles.deliveryInformationParent}>
        <div className={styles.deliveryInformation}>Delivery Information:</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className={styles.secondSeparator} />
      <div className={styles.locationContainerParent}>
        <div className={styles.locationContainer}>
          <div className={styles.locationDetails}>
            <div className={styles.pickupLocation}>Pickup Location:</div>
            <div className={styles.pickupLocation}>Dropoff Location:</div>
          </div>
          <div className={styles.statusHistory}>Status History:</div>
        </div>
        <div className={styles.locationView}>
          <div className={styles.locationDetails}>
            <div className={styles.sauerLock}>
              859 Sauer Lock , Janismouth, Kansas, USA
            </div>
            <div className={styles.sauerLock}>
              859 Sauer Lock , Janismouth, Kansas, USA
            </div>
          </div>
          <div className={styles.mapViewButton}>
            <div className={styles.mapView}>Map View:</div>
          </div>
        </div>
      </div>
      <div className={styles.orderStatusContainerParent}>
        <div className={styles.orderStatusContainer}>
          <div className={styles.orderStatusListParent}>
            <div className={styles.orderStatusList}>
              <div className={styles.orderStatusDate}>
                <div className={styles.nov14}>
                  <p className={styles.p}>12:20</p>
                  <p className={styles.p}>Nov 14</p>
                </div>
              </div>
              <div className={styles.orderStatusIcons}>
                <div className={styles.statusCircle} />
              </div>
              <div className={styles.orderReceived}>Order Received</div>
            </div>
            <div className={styles.orderStatusList}>
              <div className={styles.orderStatusDate}>
                <div className={styles.nov14}>
                  <p className={styles.p}>12:20</p>
                  <p className={styles.p}>Nov 14</p>
                </div>
              </div>
              <div className={styles.orderStatusIcons}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.shipped}>Shipped</div>
            </div>
            <div className={styles.orderStatusList}>
              <div className={styles.orderStatusDate}>
                <div className={styles.nov14}>
                  <p className={styles.p}>12:20</p>
                  <p className={styles.p}>Nov 14</p>
                </div>
              </div>
              <div className={styles.orderStatusIcons}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.arrivingNov18}>Arriving Nov 18 - 22</div>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group31.svg"
          />
          <Button
            className={styles.button1}
            startIcon={<img width="24px" height="20px" src="/vector-4.svg" />}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#ff6f3c",
              borderRadius: "10px",
              "&:hover": { background: "#ff6f3c" },
              width: 220,
              height: 50,
            }}
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal3;