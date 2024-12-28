import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import TableRows from "./TableRows";
import styles from "./BreadcrumbBar.module.css";

export type BreadcrumbBarType = {
  className?: string;
};

const BreadcrumbBar: FunctionComponent<BreadcrumbBarType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.breadcrumbBar, className].join(" ")}>
      <div
        className={styles.dashboardEvents}
      >{`Dashboard > Events > List > Details`}</div>
      <div className={styles.main}>
        <div className={styles.mainChild} />
        <div className={styles.eventsTitleGoesHereParent}>
          <h2 className={styles.eventsTitleGoes}>Events title goes here</h2>
          <div className={styles.frameParent}>
            <div className={styles.linkWrapper}>
              <div className={styles.link} />
            </div>
            <div className={styles.upcoming}>Upcoming</div>
          </div>
        </div>
        <div className={styles.mainInner}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-137.svg"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-138.svg"
            />
            <img className={styles.frameInner} alt="" src="/group-139.svg" />
          </div>
        </div>
      </div>
      <div className={styles.tabbedPane}>
        <div className={styles.tabs}>
          <div className={styles.tabsChild} />
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <div className={styles.logisticsPlan}>Logistics Plan</div>
          </div>
          <div className={styles.inventoryWrapper}>
            <div className={styles.inventory}>Inventory</div>
          </div>
          <div className={styles.inventoryWrapper}>
            <div className={styles.assignedPersonnel}>Assigned Personnel</div>
          </div>
          <div className={styles.documentsWrapper}>
            <div className={styles.documents}>Documents</div>
          </div>
        </div>
        <div className={styles.logisticsPlan1}>
          <div className={styles.logisticsPlanChild} />
          <h2 className={styles.logisticsPlan2}>Logistics Plan</h2>
          <div className={styles.margin} />
          <div className={styles.tableRows}>
            <h3 className={styles.taskName}>Task name</h3>
            <div className={styles.assigneeRobertSteveParent}>
              <div className={styles.assigneeRobertSteveContainer}>
                <span>
                  <span>Assignee:</span>
                </span>
                <span className={styles.robertSteve}>
                  <span>{` `}</span>
                  <span className={styles.robertSteve1}>Robert Steve</span>
                </span>
              </div>
              <div className={styles.dueDateDdMmYyyyWrapper}>
                <div className={styles.dueDateDdMmYyyyContainer}>
                  <span>{`Due Date: `}</span>
                  <span className={styles.ddMmYyyy}>dd-mm-yyyy</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.masterDataStructuresAlgori} />
          <TableRows />
          <div className={styles.masterDataStructuresAlgori} />
          <TableRows spanColor="unset" />
          <div className={styles.logisticsPlanItem} />
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbBar;
