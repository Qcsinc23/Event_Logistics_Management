import { FunctionComponent } from "react";
import { Typography, Box, Button } from "@mui/material";
import LeftMenu9 from "../components/LeftMenu9";
import EventsSummary from "../components/EventsSummary";
import DeliveryPerformance from "../components/DeliveryPerformance";
import InventoryMetrics from "../components/InventoryMetrics";
import UserActivity from "../components/UserActivity";
import ActiveDeliveries from "../components/ActiveDeliveries";
import DeliveryHeatmaps from "../components/DeliveryHeatmaps";
import ResourceUtilization from "../components/ResourceUtilization";
import styles from "./Reports.module.css";

const Reports: FunctionComponent = () => {
  return (
    <div className={styles.reports}>
      <LeftMenu9 />
      <div className={styles.topNav}>
        <div className={styles.breadcrumbs}>
          <h3 className={styles.dashboardReports}>{`Dashboard > Reports`}</h3>
        </div>
        <div className={styles.user}>
          <div className={styles.userIcon} />
          <img
            className={styles.userImageIcon}
            loading="lazy"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
        </div>
        <img
          className={styles.userNotificationIcon}
          loading="lazy"
          alt=""
          src="/vector-15.svg"
        />
      </div>
      <div className={styles.dashboardActions}>
        <h1 className={styles.reportsDashboard}>Reports Dashboard</h1>
        <Button
          className={styles.button}
          startIcon={<img width="24px" height="24px" src="/vector-2.svg" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 140,
            height: 50,
          }}
        >{`Refresh `}</Button>
        <Button
          className={styles.button1}
          startIcon={<img width="24px" height="24px" src="/vector-3.svg" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 180,
            height: 50,
          }}
        >
          Customize
        </Button>
        <Button
          className={styles.button2}
          startIcon={<img width="24px" height="24px" src="/group-220.svg" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 140,
            height: 50,
          }}
        >
          Export
        </Button>
      </div>
      <EventsSummary />
      <DeliveryPerformance />
      <InventoryMetrics />
      <UserActivity />
      <ActiveDeliveries />
      <DeliveryHeatmaps />
      <ResourceUtilization />
    </div>
  );
};

export default Reports;
