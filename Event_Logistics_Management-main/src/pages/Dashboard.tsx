import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import LeftMenu2 from "../components/LeftMenu2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <LeftMenu2 />
      <main className={styles.main}>
        <section className={styles.dashboardContainer}>
          <div className={styles.firstRowParent}>
            <FrameComponent1
              dashboardLogisticsVehicleMan="Dashboard"
              dashboardLogisticsDisplay="inline-block"
              dashboardLogisticsMinWidth="99px"
            />
            <div className={styles.metrics}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.grosOeuvres}>158</div>
                <div className={styles.eventsManagedThis}>
                  Events managed this month.
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.grosOeuvres}>95%</div>
                <div className={styles.eventsManagedThis}>
                  On-time delivery rate
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.checkbox}>218</div>
                <div className={styles.eventsManagedThis}>
                  Total tasks completed
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eventList}>
            <h2 className={styles.upcomingEvents}>Upcoming Events</h2>
            <div className={styles.eventsContainer}>
              <div className={styles.eventCards}>
                <GroupComponent2 ongoing="Ongoing" />
                <div className={styles.taskAssignmentsParent}>
                  <h2 className={styles.upcomingEvents}>Task Assignments</h2>
                  <div className={styles.taskCards}>
                    <div className={styles.taskCardsChild} />
                    <div className={styles.taskCard}>
                      <div className={styles.taskDetails}>
                        <div className={styles.taskName}>Task name</div>
                        <div className={styles.assigneeInfoParent}>
                          <div className={styles.assigneeInfo}>
                            <div
                              className={styles.assigneeRobertSteveContainer}
                            >
                              <p className={styles.assignee}>Assignee</p>
                              <p className={styles.robertSteve}>Robert Steve</p>
                            </div>
                            <div className={styles.taskStatus}>
                              <div className={styles.taskStatusIconWrapper}>
                                <div className={styles.taskStatusIcon} />
                              </div>
                              <div className={styles.inprogress}>
                                Inprogress
                              </div>
                            </div>
                          </div>
                          <div className={styles.dueDateDdMmYyyyParent}>
                            <div className={styles.dueDateDdMmYyyyContainer}>
                              <p className={styles.assignee}>Due Date</p>
                              <p className={styles.ddMmYyyy}>DD-MM-YYYY</p>
                            </div>
                            <div className={styles.dueDateValue}>
                              <div className={styles.placeholder}>50%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.separator} />
                      <img
                        className={styles.maskGroupIcon}
                        loading="lazy"
                        alt=""
                        src="/mask-group1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.alertList}>
                <div className={styles.alertCards}>
                  <GroupComponent2
                    groupDivAlignSelf="stretch"
                    groupDivFlex="unset"
                    groupDivMinWidth="unset"
                    souscatgorieBackgroundColor="#4caf50"
                    ongoing="Upcoming"
                    ongoingDisplay="unset"
                    ongoingMinWidth="unset"
                  />
                  <div className={styles.taskAssignmentsParent}>
                    <h2 className={styles.upcomingEvents}>Inventory Alerts</h2>
                    <div className={styles.inventoryItems}>
                      <div className={styles.taskCardsChild} />
                      <div className={styles.inventoryCard}>
                        <div className={styles.itemDetails}>
                          <div className={styles.itemTopRow}>
                            <FrameComponent2 />
                            <div className={styles.separator} />
                          </div>
                          <FrameComponent2 />
                        </div>
                        <div className={styles.separator} />
                        <img
                          className={styles.maskGroupIcon}
                          loading="lazy"
                          alt=""
                          src="/mask-group-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <GroupComponent2
                      groupDivAlignSelf="unset"
                      groupDivFlex="1"
                      groupDivMinWidth="256px"
                      souscatgorieBackgroundColor="#4caf50"
                      ongoing="Upcoming"
                      ongoingDisplay="unset"
                      ongoingMinWidth="unset"
                    />
                    <div className={styles.arrowWrapper}>
                      <img
                        className={styles.arrowIcon}
                        loading="lazy"
                        alt=""
                        src="/arrow.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.deliveries}>
                    <div className={styles.deliveriesContent}>
                      <div className={styles.deliveriesTitle}>
                        <h2 className={styles.activeDeliveries}>
                          Active Deliveries
                        </h2>
                      </div>
                      <div className={styles.tabs}>
                        <div className={styles.tabsChild} />
                        <div className={styles.groupDiv}>
                          <div className={styles.rectangleDiv} />
                          <div className={styles.mapView}>Map View</div>
                        </div>
                        <div className={styles.listView}>
                          <div className={styles.listView1}>List View</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.deliveryMap}>
                      <div className={styles.deliveryMapChild} />
                      <img
                        className={styles.maskGroupIcon2}
                        loading="lazy"
                        alt=""
                        src="/mask-group-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;