import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Map1.module.css";

export type Map1Type = {
  className?: string;
};

const Map1: FunctionComponent<Map1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.map, className].join(" ")}>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group3@2x.png" />
      <div className={styles.mapElements}>
        <img
          className={styles.mapElementsChild}
          loading="lazy"
          alt=""
          src="/group-191.svg"
        />
      </div>
      <img
        className={styles.mapChild}
        loading="lazy"
        alt=""
        src="/group-187.svg"
      />
      <div className={styles.locations}>
        <div className={styles.pickup}>
          <div className={styles.pickupPin}>
            <div className={styles.pickupMarker}>
              <div className={styles.pickupIconContainer}>
                <img
                  className={styles.pickupIcon}
                  alt=""
                  src="/vector-11.svg"
                />
                <div className={styles.pickupLabel}>
                  <img
                    className={styles.pickupLabelChild}
                    loading="lazy"
                    alt=""
                    src="/group-187.svg"
                  />
                  <div className={styles.pickupLocation}>Pickup Location</div>
                </div>
                <div className={styles.sauerLock}>
                  859 Sauer Lock , Janismouth, Kansas, USA
                </div>
              </div>
              <div className={styles.dropoff}>
                <img
                  className={styles.dropoffChild}
                  loading="lazy"
                  alt=""
                  src="/group-187.svg"
                />
              </div>
            </div>
            <img
              className={styles.pickupPinChild}
              alt=""
              src="/group-187.svg"
            />
            <img
              className={styles.pickupPinItem}
              loading="lazy"
              alt=""
              src="/group-191.svg"
            />
            <div className={styles.dropoffMarker}>
              <div className={styles.dropoffIconContainer}>
                <img
                  className={styles.brandwomenIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-11.svg"
                />
                <div className={styles.dropOffLocation}>Drop-off Location</div>
                <div className={styles.dropoffLabel}>
                  <div className={styles.sauerLock1}>
                    859 Sauer Lock , Janismouth, Kansas, USA
                  </div>
                  <div className={styles.dropoffLocation}>
                    <img
                      className={styles.dropoffLocationChild}
                      loading="lazy"
                      alt=""
                      src="/group-191.svg"
                    />
                    <img
                      className={styles.dropoffLocationItem}
                      alt=""
                      src="/group-219.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.routeDetails}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-191.svg"
            />
            <div className={styles.routeProgress}>
              <img
                className={styles.routeProgressChild}
                loading="lazy"
                alt=""
                src="/group-214.svg"
              />
            </div>
          </div>
          <div className={styles.routeEnd}>
            <img
              className={styles.routeEndChild}
              loading="lazy"
              alt=""
              src="/group-187.svg"
            />
            <div className={styles.destination}>
              <img
                className={styles.routeProgressChild}
                loading="lazy"
                alt=""
                src="/group-215.svg"
              />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <img
              className={styles.brandwomenIcon1}
              loading="lazy"
              alt=""
              src="/vector-6.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map1;
