import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./LeftMenu4.module.css";

export type LeftMenu4Type = {
  className?: string;
  logo?: string;

  /** Style props */
  leftMenuPosition?: CSSProperties["position"];
  leftMenuTop?: CSSProperties["top"];
  leftMenuLeft?: CSSProperties["left"];
  leftMenuHeight?: CSSProperties["height"];
  menuContentFlex?: CSSProperties["flex"];
  pageContentAlignSelf?: CSSProperties["alignSelf"];
  mainContentFlex?: CSSProperties["flex"];
  frameBoxFlex?: CSSProperties["flex"];
};

const LeftMenu4: FunctionComponent<LeftMenu4Type> = ({
  className = "",
  leftMenuPosition,
  leftMenuTop,
  leftMenuLeft,
  leftMenuHeight,
  logo,
  menuContentFlex,
  pageContentAlignSelf,
  mainContentFlex,
  frameBoxFlex,
}) => {
  const leftMenuStyle: CSSProperties = useMemo(() => {
    return {
      position: leftMenuPosition,
      top: leftMenuTop,
      left: leftMenuLeft,
      height: leftMenuHeight,
    };
  }, [leftMenuPosition, leftMenuTop, leftMenuLeft, leftMenuHeight]);

  const menuContentStyle: CSSProperties = useMemo(() => {
    return {
      flex: menuContentFlex,
    };
  }, [menuContentFlex]);

  const pageContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: pageContentAlignSelf,
    };
  }, [pageContentAlignSelf]);

  const mainContentStyle: CSSProperties = useMemo(() => {
    return {
      flex: mainContentFlex,
    };
  }, [mainContentFlex]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      flex: frameBoxFlex,
    };
  }, [frameBoxFlex]);

  return (
    <div
      className={[styles.leftMenu, className].join(" ")}
      style={leftMenuStyle}
    >
      <div className={styles.leftMenuChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
      <div className={styles.menuContent} style={menuContentStyle}>
        <div className={styles.userProfileParent}>
          <div className={styles.userProfile}>
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
              className={styles.userProfileChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <div className={styles.userDropdown}>
              <img
                className={styles.userDropdownChild}
                loading="lazy"
                alt=""
                src="/group-1112.svg"
              />
              <div className={styles.layer1} />
            </div>
          </div>
          <div className={styles.navigation}>
            <img
              className={styles.navigationChild}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.navigationChild}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.navItemIcon}
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
        <div className={styles.pageContent} style={pageContentStyle}>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.mainContent} style={mainContentStyle}>
            <div className={styles.subNavigationParent} style={frameDiv5Style}>
              <div className={styles.subNavigation}>
                <div className={styles.events}>Events</div>
                <div className={styles.logistics}>Logistics</div>
                <div className={styles.pageOptions}>
                  <div className={styles.inventory}>Inventory</div>
                  <div className={styles.inventoryList}>Inventory List</div>
                </div>
              </div>
              <div className={styles.contentActions}>
                <div className={styles.actionButtons}>
                  <img
                    className={styles.buttonContainerIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-2@2x.png"
                  />
                  <div className={styles.buttonContainer}>
                    <div className={styles.buttonContainerChild} />
                    <img
                      className={styles.buttonContainerItem}
                      loading="lazy"
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </div>
                  <div className={styles.buttonContainer}>
                    <div className={styles.buttonContainerChild} />
                    <img
                      className={styles.arrowIcon}
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.alertsNotifications}
            >{`Alerts & Notifications`}</div>
          </div>
          <div className={styles.pageFooter}>
            <div className={styles.footerNavigation}>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
              <div className={styles.settings}>Settings</div>
            </div>
            <div className={styles.footerActions}>
              <div className={styles.buttonContainer}>
                <div className={styles.buttonContainerChild} />
                <img
                  className={styles.buttonContainerItem}
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

export default LeftMenu4;
