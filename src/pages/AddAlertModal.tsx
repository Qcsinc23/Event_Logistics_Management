import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import LeftMenu4 from "../components/LeftMenu4";
import Card3 from "../components/Card3";
import Card2 from "../components/Card2";
import Modal1 from "../components/Modal1";
import styles from "./AddAlertModal.module.css";

const AddAlertModal: FunctionComponent = () => {
  return (
    <div className={styles.addAlertModal}>
      <main className={styles.bg}>
        <LeftMenu4
          leftMenuPosition="absolute"
          leftMenuTop="0px"
          leftMenuLeft="0px"
          leftMenuHeight="1080px"
          logo="/logo1.svg"
          menuContentFlex="1"
          pageContentAlignSelf="stretch"
          mainContentFlex="1"
          frameBoxFlex="1"
        />
        <div
          className={styles.dashboardInventory}
        >{`Dashboard > Inventory > Alerts & Notifications`}</div>
        <div className={styles.user}>
          <div className={styles.userChild} />
          <img
            className={styles.userAvatarIcon}
            loading="lazy"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <div className={styles.userName}>
            <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
          </div>
        </div>
        <img
          className={styles.notificationIcon}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <h2
          className={styles.inventoryAlerts}
        >{`Inventory Alerts & Notifications`}</h2>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.manageAlerts}>Manage Alerts</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.addIcon}>
            <img
              className={styles.editAddPlus}
              loading="lazy"
              alt=""
              src="/edit--add-plus.svg"
            />
          </div>
          <div className={styles.createAlert}>Create Alert</div>
        </div>
        <Card3 />
        <Card2 push="Push" />
        <div className={styles.card4}>
          <div className={styles.card4Child} />
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-21.svg"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameItem} />
            </div>
          </div>
          <div className={styles.alertNameWrapper}>
            <div className={styles.alertName}>Alert Name</div>
          </div>
          <div className={styles.card4Inner}>
            <div className={styles.triggerTypeLowStock10Parent}>
              <div className={styles.triggerTypeLowContainer}>
                <span className={styles.triggerType}>{`Trigger Type: `}</span>
                <span className={styles.lowStock}>{`"Low Stock < 10"`}</span>
              </div>
              <div className={styles.triggerTypeLowContainer}>
                <span
                  className={styles.triggerType}
                >{`Notification Channels: `}</span>
                <span className={styles.lowStock}>In-App</span>
              </div>
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button2}>
              <div className={styles.buttonInner} />
              <div className={styles.emailEditButtons}>
                <img
                  className={styles.emailEditButtonsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1373.svg"
                />
              </div>
              <div className={styles.edit}>Edit</div>
            </div>
            <div className={styles.button3}>
              <div className={styles.rectangleDiv} />
              <div className={styles.emailDeleteIcons}>
                <img
                  className={styles.emailDeleteIconsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1392.svg"
                />
              </div>
              <div className={styles.delete}>Delete</div>
            </div>
          </div>
        </div>
        <Card2 card3Top="591px" card3Left="897px" push="SMS" />
        <div className={styles.card2}>
          <div className={styles.card2Child} />
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-21.svg"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.ellipseDiv} />
            </div>
          </div>
          <div className={styles.alertNameWrapper}>
            <div className={styles.alertName}>Alert Name</div>
          </div>
          <div className={styles.card4Inner}>
            <div className={styles.triggerTypeLowStock10Parent}>
              <div className={styles.triggerTypeLowContainer}>
                <span className={styles.triggerType}>{`Trigger Type: `}</span>
                <span className={styles.lowStock}>{`"Low Stock < 10"`}</span>
              </div>
              <div className={styles.triggerTypeLowContainer}>
                <span
                  className={styles.triggerType}
                >{`Notification Channels: `}</span>
                <span className={styles.lowStock}>In-App</span>
              </div>
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button2}>
              <div className={styles.buttonInner} />
              <div className={styles.emailEditButtons}>
                <img
                  className={styles.emailEditButtonsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1373.svg"
                />
              </div>
              <div className={styles.edit}>Edit</div>
            </div>
            <div className={styles.button3}>
              <div className={styles.rectangleDiv} />
              <div className={styles.emailDeleteIcons}>
                <img
                  className={styles.emailDeleteIconsChild}
                  loading="lazy"
                  alt=""
                  src="/group-1392.svg"
                />
              </div>
              <div className={styles.delete}>Delete</div>
            </div>
          </div>
        </div>
        <section className={styles.modalBackground} />
      </main>
      <Modal1 />
    </div>
  );
};

export default AddAlertModal;
