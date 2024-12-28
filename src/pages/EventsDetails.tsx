import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu from "../components/LeftMenu";
import BreadcrumbBar from "../components/BreadcrumbBar";
import UserContainer from "../components/UserContainer";
import ActivityList from "../components/ActivityList";
import styles from "./EventsDetails.module.css";

const EventsDetails: FunctionComponent = () => {
  return (
    <div className={styles.eventsDetails}>
      <LeftMenu />
      <main className={styles.eventsDetailsInner}>
        <section className={styles.breadcrumbBarParent}>
          <BreadcrumbBar />
          <div className={styles.sidebar}>
            <div className={styles.sidebarTop}>
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
              <div className={styles.summary}>
                <div className={styles.summaryChild} />
                <h2 className={styles.eventSummary}>Event Summary</h2>
                <div className={styles.link} />
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
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/group-152.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.summaryRight}>
                    <div className={styles.frameParent}>
                      <div className={styles.frameGroup}>
                        <div className={styles.ddMmYyyyWrapper}>
                          <div className={styles.ddMmYyyy}>dd-mm-yyyy</div>
                        </div>
                        <div className={styles.frameWrapper}>
                          <div className={styles.frameContainer}>
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
                          <div className={styles.frameContainer}>
                            <img
                              className={styles.groupIcon}
                              loading="lazy"
                              alt=""
                              src="/group.svg"
                            />
                            <div className={styles.ddMmYyyy}>
                              Contact Person
                            </div>
                          </div>
                        </div>
                        <div className={styles.frameContainer}>
                          <img
                            className={styles.frameItem}
                            loading="lazy"
                            alt=""
                            src="/group-149.svg"
                          />
                          <img
                            className={styles.frameItem}
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
                <div className={styles.link} />
              </div>
              <ActivityList
                assignedATask="Assigned a Task"
                robertSteve="Robert Steve"
                justNow="Just now"
                assignedATask1="Assigned a Task"
                robertSteve1="Robert Steve"
              />
              <ActivityList
                assignedATask="Added a Document"
                robertSteve="Event name"
                frameDivHeight="unset"
                justNow="05:23 PM"
                assignedATask1="Added a Document"
                robertSteve1="Event name"
              />
              <div className={styles.feedItemCompleted}>
                <h3 className={styles.robertSteveCompletedContainer}>
                  <span>
                    <span>Robert Steve</span>
                    <span className={styles.completedTaskName}>
                      <span className={styles.span}>{` `}</span>
                      <span className={styles.completedTaskName1}>
                        Completed Task Name
                      </span>
                    </span>
                  </span>
                </h3>
                <div className={styles.itemDescription}>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </div>
                  <div className={styles.timestampCompleted}>
                    <div className={styles.timeCompleted}>
                      <div className={styles.pm1}>02:15 PM</div>
                      <div className={styles.contactInfoWrapper}>
                        <div className={styles.volkswagenbabpng} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accolitecpng} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventsDetails;