import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu4 from "../components/LeftMenu4";
import UserContainer from "../components/UserContainer";
import AlertCardContainer from "../components/AlertCardContainer";
import Card from "../components/Card";
import styles from "./InventoryAlertsNotificatio.module.css";

const InventoryAlertsNotificatio: FunctionComponent = () => {
  return (
    <div className={styles.inventoryAlertsNotificatio}>
      <LeftMenu4 logo="/logo1.svg" />
      <div className={styles.pageHeader}>
        <section className={styles.headerContent}>
          <div className={styles.breadcrumb}>
            <div className={styles.breadcrumbItems}>
              <div
                className={styles.dashboardInventory}
              >{`Dashboard > Inventory > Alerts & Notifications`}</div>
            </div>
            <UserContainer
              userContainerWidth="289px"
              userContainerAlignSelf="unset"
              userContainerHeight="unset"
              userIconHeight="unset"
              userIconWidth="unset"
              profilePicture="/vector-1.svg"
              userFlex="1"
              userHeight="unset"
              userWidth="unset"
              userNameHeight="unset"
              userNameWidth="unset"
              sherwynGrahamWidth="unset"
              sherwynGrahamHeight="unset"
              sherwynGrahamDisplay="unset"
            />
          </div>
          <div className={styles.pageActions}>
            <div className={styles.pageActionItems}>
              <h3
                className={styles.inventoryAlerts}
              >{`Inventory Alerts & Notifications`}</h3>
            </div>
            <div className={styles.alertActions}>
              <Button
                className={styles.button}
                startIcon={
                  <img width="17px" height="17px" src="/edit--add-plus.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#ff6f3c",
                  borderRadius: "10px",
                  "&:hover": { background: "#ff6f3c" },
                  width: 180,
                  height: 50,
                }}
              >
                Create Alert
              </Button>
              <Button
                className={styles.button1}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#1a3e59",
                  fontSize: "18",
                  borderColor: "#1a3e59",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#1a3e59" },
                  height: 50,
                }}
              >
                Manage Alerts
              </Button>
            </div>
          </div>
          <AlertCardContainer />
          <div className={styles.alertListContainer}>
            <Card immediate="Immediate" />
            <Card immediate="Digest" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default InventoryAlertsNotificatio;