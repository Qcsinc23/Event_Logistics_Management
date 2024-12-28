import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.navigation}>
          <div className={styles.primaryNavigation}>
            <div className={styles.subNavigation}>
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-1.svg"
              />
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-1-1.svg"
              />
              <img
                className={styles.subNavigationChild}
                loading="lazy"
                alt=""
                src="/group-107.svg"
              />
              <div className={styles.layer1}>
                <img
                  className={styles.layer1Child}
                  loading="lazy"
                  alt=""
                  src="/group-111.svg"
                />
              </div>
              <img
                className={styles.subNavigationItem}
                loading="lazy"
                alt=""
                src="/group-113.svg"
              />
              <img
                className={styles.subNavigationItem}
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
            <div className={styles.dashboardLinks}>
              <div className={styles.dashboard1}>Dashboard</div>
              <div className={styles.events}>Events</div>
              <div className={styles.logistics}>Logistics</div>
              <div className={styles.inventory}>Inventory</div>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <section className={styles.dashboardContainer}>
          <div className={styles.firstRowParent}>
            <div className={styles.firstRow}>
              <div className={styles.dashboardWrapper}>
                <div className={styles.dashboard2}>Dashboard</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.profilePictureWrapper}>
                  <img
                    className={styles.profilePictureIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className={styles.user}>
                  <div className={styles.userChild} />
                  <img
                    className={styles.profileBackgroundIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-2@2x.png"
                  />
                  <div className={styles.nameContainer}>
                    <div
                      className={styles.sherwynGraham}
                    >{`Sherwyn Graham `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.metrics}>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild4} />
                <div className={styles.grosOeuvres}>158</div>
                <div className={styles.eventsManagedThis}>
                  Events managed this month.
                </div>
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild5} />
                <div className={styles.grosOeuvres}>95%</div>
                <div className={styles.eventsManagedThis}>
                  On-time delivery rate
                </div>
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild5} />
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
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild7} />
                  <div className={styles.eventDetails}>
                    <div className={styles.eventTime}>
                      <div className={styles.eventName}>Event name</div>
                      <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                    </div>
                  </div>
                  <div className={styles.eventStatus}>
                    <div className={styles.statusIconContainer}>
                      <div className={styles.souscatgorie} />
                    </div>
                    <div className={styles.ongoing}>Ongoing</div>
                  </div>
                </div>
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
                            <div className={styles.eventStatus}>
                              <div className={styles.statusIconContainer}>
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
                              <p className={styles.ddMmYyyy1}>DD-MM-YYYY</p>
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
                  <div className={styles.rectangleParent4}>
                    <div className={styles.frameChild7} />
                    <div className={styles.eventDetails}>
                      <div className={styles.eventTime}>
                        <div className={styles.eventName}>Event name</div>
                        <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                      </div>
                    </div>
                    <div className={styles.eventStatus}>
                      <div className={styles.statusIconContainer}>
                        <div className={styles.taskStatusIcon} />
                      </div>
                      <div className={styles.inprogress}>Upcoming</div>
                    </div>
                  </div>
                  <div className={styles.taskAssignmentsParent}>
                    <h2 className={styles.upcomingEvents}>Inventory Alerts</h2>
                    <div className={styles.taskCards}>
                      <div className={styles.taskCardsChild} />
                      <div className={styles.inventoryCard}>
                        <div className={styles.itemDetails}>
                          <div className={styles.itemTopRow}>
                            <div className={styles.firstRow}>
                              <div className={styles.itemNameContainer}>
                                <div className={styles.eventTime}>
                                  <div className={styles.itemName}>
                                    Item name
                                  </div>
                                  <div className={styles.lowStock}>
                                    Low Stock
                                  </div>
                                </div>
                              </div>
                              <div className={styles.rectangleParent5}>
                                <div className={styles.frameChild9} />
                                <div className={styles.restock}>Restock</div>
                              </div>
                            </div>
                            <div className={styles.separator} />
                          </div>
                          <div className={styles.firstRow}>
                            <div className={styles.itemNameContainer}>
                              <div className={styles.eventTime}>
                                <div className={styles.itemName}>Item name</div>
                                <div className={styles.lowStock}>Low Stock</div>
                              </div>
                            </div>
                            <div className={styles.rectangleParent5}>
                              <div className={styles.frameChild9} />
                              <div className={styles.restock}>Restock</div>
                            </div>
                          </div>
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
                <div className={styles.frameContainer}>
                  <div className={styles.frameParent1}>
                    <div className={styles.rectangleParent7}>
                      <div className={styles.frameChild7} />
                      <div className={styles.eventDetails}>
                        <div className={styles.eventTime}>
                          <div className={styles.eventName}>Event name</div>
                          <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                        </div>
                      </div>
                      <div className={styles.eventStatus}>
                        <div className={styles.statusIconContainer}>
                          <div className={styles.taskStatusIcon} />
                        </div>
                        <div className={styles.inprogress}>Upcoming</div>
                      </div>
                    </div>
                    <div className={styles.arrowWrapper}>
                      <img
                        className={styles.arrowIcon1}
                        loading="lazy"
                        alt=""
                        src="/arrow.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.eventList}>
                    <div className={styles.deliveriesContent}>
                      <div className={styles.deliveriesTitle}>
                        <h2 className={styles.activeDeliveries}>
                          Active Deliveries
                        </h2>
                      </div>
                      <div className={styles.tabs}>
                        <div className={styles.tabsChild} />
                        <div className={styles.rectangleParent8}>
                          <div className={styles.frameChild12} />
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
