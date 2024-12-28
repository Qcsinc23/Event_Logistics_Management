import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./EventsDetails.module.css";

const EventsDetails: FunctionComponent = () => {
  return (
    <div className={styles.eventsDetails}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.leftContent}>
          <div className={styles.menuTop}>
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
                src="/layer-1-11.svg"
              />
            </div>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
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
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-113.svg"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-114.svg"
              />
              <img
                className={styles.digiboxxIcon}
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
          <div className={styles.menuBottom}>
            <div className={styles.menuOptions}>
              <div className={styles.dashboard}>Dashboard</div>
              <div className={styles.eventMenu}>
                <div className={styles.events}>Events</div>
                <div className={styles.calendarOptions}>
                  <div className={styles.eventList}>Event List</div>
                  <div className={styles.eventList}>Event Calendar</div>
                </div>
              </div>
              <div className={styles.eventList}>Logistics</div>
              <div className={styles.inventory}>Inventory</div>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.contentTop}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder@2x.png"
              />
              <div className={styles.ravishankarkumarcdpngParent}>
                <div className={styles.ravishankarkumarcdpng}>
                  <div className={styles.ravishankarkumarcdpngChild} />
                  <img
                    className={styles.ravishankarkumarcdpngItem}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
                <div className={styles.ravishankarkumarcdpng}>
                  <div className={styles.ravishankarkumarcdpngChild} />
                  <img
                    className={styles.ravishankarkumarcdpngItem}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </div>
                <div className={styles.ravishankarkumarcdpng}>
                  <div className={styles.ravishankarkumarcdpngChild} />
                  <img
                    className={styles.ravishankarkumarcdpngItem}
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
      <main className={styles.eventsDetailsInner}>
        <section className={styles.breadcrumbBarParent}>
          <div className={styles.breadcrumbBar}>
            <div
              className={styles.dashboardEvents}
            >{`Dashboard > Events > List > Details`}</div>
            <div className={styles.main}>
              <div className={styles.mainChild} />
              <div className={styles.eventsTitleGoesHereParent}>
                <h2 className={styles.eventsTitleGoes}>
                  Events title goes here
                </h2>
                <div className={styles.frameGroup}>
                  <div className={styles.linkWrapper}>
                    <div className={styles.link} />
                  </div>
                  <div className={styles.eventList}>Upcoming</div>
                </div>
              </div>
              <div className={styles.mainInner}>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-137.svg"
                  />
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/group-138.svg"
                  />
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/group-139.svg"
                  />
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
                  <div className={styles.inventory1}>Inventory</div>
                </div>
                <div className={styles.inventoryWrapper}>
                  <div className={styles.assignedPersonnel}>
                    Assigned Personnel
                  </div>
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
                        <span className={styles.robertSteve1}>
                          Robert Steve
                        </span>
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
                <div className={styles.tableRows}>
                  <h3 className={styles.taskName}>Task name</h3>
                  <div className={styles.assigneeRobertSteveParent}>
                    <div className={styles.assigneeRobertSteveContainer}>
                      <span>{`Assignee: `}</span>
                      <span className={styles.ddMmYyyy}>Robert Steve</span>
                    </div>
                    <div className={styles.dueDateDdMmYyyyWrapper}>
                      <div className={styles.dueDateDdMmYyyyContainer}>
                        <span>
                          <span>Due Date:</span>
                        </span>
                        <span>
                          <span>{` `}</span>
                          <span className={styles.span}>dd-mm-yyyy</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.masterDataStructuresAlgori} />
                <div className={styles.tableRows}>
                  <h3 className={styles.taskName}>Task name</h3>
                  <div className={styles.assigneeRobertSteveParent}>
                    <div className={styles.assigneeRobertSteveContainer}>
                      <span>{`Assignee: `}</span>
                      <span className={styles.ddMmYyyy}>Robert Steve</span>
                    </div>
                    <div className={styles.dueDateDdMmYyyyWrapper}>
                      <div className={styles.dueDateDdMmYyyyContainer}>
                        <span>
                          <span>Due Date:</span>
                        </span>
                        <span>
                          <span>{` `}</span>
                          <span className={styles.span}>dd-mm-yyyy</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.logisticsPlanItem} />
              </div>
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.sidebarTop}>
              <div className={styles.frameParent1}>
                <div className={styles.userIconWrapper}>
                  <img
                    className={styles.userIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className={styles.user}>
                  <div className={styles.userChild} />
                  <img
                    className={styles.buttonIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-2@2x.png"
                  />
                  <div className={styles.sherwynGrahamWrapper}>
                    <div
                      className={styles.sherwynGraham}
                    >{`Sherwyn Graham `}</div>
                  </div>
                </div>
              </div>
              <div className={styles.summary}>
                <div className={styles.summaryChild} />
                <h2 className={styles.eventSummary}>Event Summary</h2>
                <div className={styles.margin} />
                <div className={styles.summaryContent}>
                  <div className={styles.summaryLeft}>
                    <div className={styles.pageIconParent}>
                      <img
                        className={styles.pageIcon}
                        alt=""
                        src="/vector-2.svg"
                      />
                      <img
                        className={styles.page1Icon}
                        loading="lazy"
                        alt=""
                        src="/page1.svg"
                      />
                      <img
                        className={styles.frameChild3}
                        loading="lazy"
                        alt=""
                        src="/group-152.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.summaryRight}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameParent3}>
                        <div className={styles.ddMmYyyyWrapper}>
                          <div className={styles.contactPerson}>dd-mm-yyyy</div>
                        </div>
                        <div className={styles.frameWrapper}>
                          <div className={styles.contactInfo}>
                            <div className={styles.freeIconsWrapper}>
                              <img
                                className={styles.pageIcon}
                                alt=""
                                src="/freeicons.svg"
                              />
                            </div>
                            <div className={styles.pm}>00:00 PM</div>
                          </div>
                        </div>
                        <div className={styles.contactInfoWrapper}>
                          <div className={styles.contactInfo}>
                            <img
                              className={styles.groupIcon1}
                              loading="lazy"
                              alt=""
                              src="/group.svg"
                            />
                            <div className={styles.contactPerson}>
                              Contact Person
                            </div>
                          </div>
                        </div>
                        <div className={styles.contactInfo}>
                          <img
                            className={styles.frameChild4}
                            loading="lazy"
                            alt=""
                            src="/group-149.svg"
                          />
                          <img
                            className={styles.frameChild4}
                            loading="lazy"
                            alt=""
                            src="/group-150.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.addressParent}>
                        <div className={styles.address}>
                          <div className={styles.mercerStreetNew}>
                            181 Mercer Street, New York, NY 10012, United States
                          </div>
                        </div>
                        <Button
                          className={styles.groupButton}
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontSize: "16",
                            background: "#1a3e59",
                            borderRadius: "50px",
                            "&:hover": { background: "#1a3e59" },
                            width: 220,
                            height: 35,
                          }}
                        >
                          View Location on Map
                        </Button>
                      </div>
                    </div>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.activityFeed}>
              <div className={styles.activityFeedChild} />
              <div className={styles.feedHeader}>
                <h2 className={styles.eventSummary}>Activity Feed</h2>
                <div className={styles.margin} />
              </div>
              <div className={styles.activityList}>
                <div className={styles.activityItems}>
                  <h3 className={styles.sherwynGrahamAssignedContainer}>
                    <span>
                      <span>Sherwyn Graham</span>
                      <span className={styles.assignedATask}>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.eventName}>
                          Assigned a Task
                        </span>
                      </span>
                      <span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.to}>{`to `}</span>
                        <span className={styles.eventName}>Robert Steve</span>
                      </span>
                    </span>
                  </h3>
                  <div className={styles.activityDetails}>
                    <div className={styles.loremIpsumDolor1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </div>
                    <div className={styles.timeWrapper}>
                      <div className={styles.time}>
                        <div className={styles.justNow}>Just now</div>
                        <div className={styles.contactInfoWrapper}>
                          <div className={styles.adobedbcpng} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.masterDataStructuresAlgori} />
              </div>
              <div className={styles.activityList}>
                <div className={styles.activityItems}>
                  <h3 className={styles.sherwynGrahamAssignedContainer}>
                    <span>
                      <span>Sherwyn Graham</span>
                      <span className={styles.assignedATask}>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.eventName}>
                          Added a Document
                        </span>
                      </span>
                      <span>
                        <span className={styles.span}>{` `}</span>
                        <span className={styles.to}>{`to `}</span>
                        <span className={styles.eventName}>Event name</span>
                      </span>
                    </span>
                  </h3>
                  <div className={styles.activityDetails}>
                    <div className={styles.loremIpsumDolor1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </div>
                    <div className={styles.timestampCompleted}>
                      <div className={styles.time}>
                        <div className={styles.justNow}>05:23 PM</div>
                        <div className={styles.contactInfoWrapper}>
                          <div className={styles.adobedbcpng} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.masterDataStructuresAlgori} />
              </div>
              <div className={styles.feedItemCompleted}>
                <h3 className={styles.sherwynGrahamAssignedContainer}>
                  <span>
                    <span>Robert Steve</span>
                    <span className={styles.assignedATask}>
                      <span className={styles.span}>{` `}</span>
                      <span className={styles.eventName}>
                        Completed Task Name
                      </span>
                    </span>
                  </span>
                </h3>
                <div className={styles.activityDetails}>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </div>
                  <div className={styles.timestampCompleted}>
                    <div className={styles.time}>
                      <div className={styles.justNow}>02:15 PM</div>
                      <div className={styles.contactInfoWrapper}>
                        <div className={styles.adobedbcpng} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.masterDataStructuresAlgori} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventsDetails;
