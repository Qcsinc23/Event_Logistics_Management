import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu3.module.css";

export type LeftMenu3Type = {
  className?: string;
  logo?: string;

  /** Style props */
  frameBoxFlex?: CSSProperties["flex"];
  navigationAlignSelf?: CSSProperties["alignSelf"];
  tabsAlignSelf?: CSSProperties["alignSelf"];
  inventoryTabFlex?: CSSProperties["flex"];
};

const LeftMenu3: FunctionComponent<LeftMenu3Type> = ({
  className = "",
  logo,
  frameBoxFlex,
  navigationAlignSelf,
  tabsAlignSelf,
  inventoryTabFlex,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      flex: frameBoxFlex,
    };
  }, [frameBoxFlex]);

  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: navigationAlignSelf,
    };
  }, [navigationAlignSelf]);

  const tabsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: tabsAlignSelf,
    };
  }, [tabsAlignSelf]);

  const inventoryTabStyle: CSSProperties = useMemo(() => {
    return {
      flex: inventoryTabFlex,
    };
  }, [inventoryTabFlex]);

  return (
    <div className={[styles.leftMenu, className].join(" ")}>
      <div className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
      <div className={styles.frameParent} style={frameDiv4Style}>
        <div className={styles.frameGroup}>
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
              src="/layer-1-13.svg"
            />
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <div className={styles.frameContainer}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1112.svg"
              />
              <div className={styles.layer1} />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.frameInner}
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
        <div className={styles.navigation} style={navigationStyle}>
          <div className={styles.tabs} style={tabsStyle}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.events}>Events</div>
            <div className={styles.logistics}>Logistics</div>
            <div className={styles.inventoryTab} style={inventoryTabStyle}>
              <div className={styles.inventory}>Inventory</div>
              <div className={styles.notifications}>
                <div className={styles.inventoryList}>Inventory List</div>
                <div
                  className={styles.inventoryList}
                >{`Alerts & Notifications`}</div>
              </div>
            </div>
            <div className={styles.deliveries}>Deliveries</div>
            <div className={styles.reports}>Reports</div>
            <div className={styles.users}>Users</div>
            <div className={styles.settings}>Settings</div>
          </div>
          <div className={styles.paginationWrapper}>
            <div className={styles.pagination}>
              <div className={styles.frameParent1}>
                <img
                  className={styles.frameIcon}
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
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.frameChild2}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default LeftMenu3;
