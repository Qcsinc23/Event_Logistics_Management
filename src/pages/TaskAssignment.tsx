import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import UserContainer from "../components/UserContainer";
import Modal from "../components/Modal";
import styles from "./TaskAssignment.module.css";

const TaskAssignment: FunctionComponent = () => {
  return (
    <div className={styles.taskAssignment}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.menuContent}>
          <div className={styles.layersParent}>
            <div className={styles.layers}>
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
                src="/layer-1-1.svg"
              />
              <img
                className={styles.layersChild}
                loading="lazy"
                alt=""
                src="/group-1071.svg"
              />
            </div>
            <div className={styles.layer1Parent}>
              <div className={styles.layer1}>
                <img
                  className={styles.layer1Child}
                  loading="lazy"
                  alt=""
                  src="/group-111.svg"
                />
              </div>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-113.svg"
              />
              <img
                className={styles.frameChild}
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
          <div className={styles.content}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.innerContentParent}>
              <div className={styles.innerContent}>
                <div className={styles.contentItems}>
                  <div className={styles.events}>Events</div>
                  <div className={styles.logisticsParent}>
                    <div className={styles.logistics}>Logistics</div>
                    <div className={styles.overviewParent}>
                      <div className={styles.overview}>Overview</div>
                      <div className={styles.taskAssignment1}>
                        Task Assignment
                      </div>
                      <div className={styles.overview}>Route Planning</div>
                    </div>
                  </div>
                </div>
                <div className={styles.innerContentInner}>
                  <div className={styles.frameParent}>
                    <img
                      className={styles.frameInner}
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
                  </div>
                </div>
              </div>
              <div className={styles.overview}>Vehicle Management</div>
            </div>
            <div className={styles.settingsLabelsParent}>
              <div className={styles.settingsLabels}>
                <div className={styles.inventory}>Inventory</div>
                <div className={styles.deliveries}>Deliveries</div>
                <div className={styles.reports}>Reports</div>
                <div className={styles.users}>Users</div>
                <div className={styles.settings}>Settings</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.frameChild2}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.rightSidebar}>
        <section className={styles.sidebarContent}>
          <div className={styles.frameContainer}>
            <div className={styles.userHeaderWrapper}>
              <div className={styles.userHeader}>
                <div
                  className={styles.dashboardLogistics}
                >{`Dashboard > Logistics > Task Assignment`}</div>
                <h2 className={styles.taskAssignment2}>Task Assignment</h2>
              </div>
            </div>
            <UserContainer />
          </div>
          <Modal />
        </section>
      </main>
    </div>
  );
};

export default TaskAssignment;