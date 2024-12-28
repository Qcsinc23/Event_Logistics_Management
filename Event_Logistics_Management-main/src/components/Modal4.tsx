import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./Modal4.module.css";

export type Modal4Type = {
  className?: string;
};

const Modal4: FunctionComponent<Modal4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.modal, className].join(" ")}>
      <div className={styles.modalChild} />
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3 className={styles.proofDetails}>Proof Details</h3>
          <div className={styles.closeIcon}>
            <img
              className={styles.closeIconChild}
              loading="lazy"
              alt=""
              src="/group-2092.svg"
            />
          </div>
        </div>
        <div className={styles.headerSeparator}>
          <div className={styles.headerSeparatorChild} />
        </div>
        <div className={styles.deliveryInformation}>
          <div className={styles.digitalSignature}>Delivery Information:</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.locationItems}>
            <div className={styles.pickupLocation}>Pickup Location:</div>
            <div className={styles.sauerLock}>
              859 Sauer Lock , Janismouth, Kansas, USA
            </div>
          </div>
          <div className={styles.locationItems1}>
            <div className={styles.pickupLocation}>Dropoff Location:</div>
            <div className={styles.sauerLock}>
              859 Sauer Lock , Janismouth, Kansas, USA
            </div>
          </div>
        </div>
      </div>
      <div className={styles.signaturePhotos}>
        <div className={styles.signaturePhoto}>
          <div className={styles.signature}>
            <div className={styles.signatureData}>
              <div className={styles.digitalSignature}>Digital Signature:</div>
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className={styles.proofPhotos}>
              <div className={styles.photos}>Photos:</div>
              <div className={styles.photoGallery}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.proofActions}>
            <Button
              className={styles.button}
              startIcon={
                <img width="26px" height="26px" src="/group-221.png" />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#1a3e59",
                borderRadius: "10px",
                "&:hover": { background: "#1a3e59" },
                width: 140,
                height: 50,
              }}
            >
              Reject
            </Button>
            <Button
              className={styles.button1}
              startIcon={
                <img width="26px" height="26px" src="/group-221-1.png" />
              }
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#ff6f3c",
                borderRadius: "10px",
                "&:hover": { background: "#ff6f3c" },
                height: 50,
              }}
            >{`Approve `}</Button>
          </div>
        </div>
        <div className={styles.recipientInfoContainer}>
          <div className={styles.recipientInfoWrapper}>
            <div className={styles.recipientIdentity}>
              <div className={styles.digitalSignature}>
                Recipient Information:
              </div>
              <div className={styles.marshallSalzarIdContainer}>
                <p className={styles.marshallSalzar}>Marshall Salzar</p>
                <p className={styles.id284772}>ID: 284772</p>
              </div>
            </div>
          </div>
          <div className={styles.proofPhotos}>
            <div className={styles.commentInputWrapper}>
              <div className={styles.comment}>Comment:</div>
            </div>
            <textarea
              className={styles.description}
              placeholder="* Description"
              rows={6}
              cols={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal4;
