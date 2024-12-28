import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import DashboardContent from "../components/DashboardContent";
import styles from "./StatusUpdates.module.css";

const StatusUpdates: FunctionComponent = () => {
  return (
    <div className={styles.statusUpdates}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.menuContent}>
          <div className={styles.menuButtons}>
            <img
              className={styles.menuButtonIcon}
              alt=""
              src="/frame-2@2x.png"
            />
            <div className={styles.menuButton}>
              <div className={styles.menuButtonChild} />
              <img
                className={styles.menuButtonItem}
                alt=""
                src="/arrow-4.svg"
              />
            </div>
            <img
              className={styles.menuButtonIcon}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <img
              className={styles.menuButtonIcon}
              loading="lazy"
              alt=""
              src="/placeholder@2x.png"
            />
          </div>
          <div className={styles.menuCategories}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.events}>Events</div>
            <div className={styles.logistics}>Logistics</div>
            <div className={styles.inventory}>Inventory</div>
            <div className={styles.menuSettings}>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.trackingMenu}>
                <div className={styles.liveTrackingMap}>Live Tracking Map</div>
                <div className={styles.statusUpdates1}>Status Updates</div>
                <div className={styles.liveTrackingMap}>Proof of Delivery</div>
              </div>
              <div className={styles.usersMenu}>
                <div className={styles.reports}>Reports</div>
                <div className={styles.users}>Users</div>
              </div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.layers}>
            <div className={styles.layerTypes}>
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
                src="/layer-1-14.svg"
              />
              <img
                className={styles.layerTypesChild}
                loading="lazy"
                alt=""
                src="/group-1073.svg"
              />
              <div className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-1113.svg"
                />
                <div className={styles.layer1} />
              </div>
              <img
                className={styles.layerTypesItem}
                loading="lazy"
                alt=""
                src="/group-1133.svg"
              />
            </div>
            <div className={styles.frameGroup}>
              <img
                className={styles.layerTypesItem}
                loading="lazy"
                alt=""
                src="/group-1142.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
              <img
                className={styles.layer1Icon2}
                loading="lazy"
                alt=""
                src="/layer-1-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <main className={styles.content}>
        <section className={styles.dashboardContentParent}>
          <DashboardContent />
          <div className={styles.deliveriesTable}>
            <div className={styles.tableContent}>
              <div className={styles.tableHeader}>
                <h2 className={styles.deliveriesList}>Deliveries List</h2>
              </div>
              <div className={styles.tableActions}>
                <Button
                  className={styles.button}
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
                  Update Status
                </Button>
                <Button
                  className={styles.button1}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#9e9e9e",
                    fontSize: "18",
                    borderColor: "#9e9e9e",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#9e9e9e" },
                    width: 160,
                    height: 50,
                  }}
                >
                  Assign Driver
                </Button>
                <Button
                  className={styles.button2}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#9e9e9e",
                    fontSize: "18",
                    borderColor: "#9e9e9e",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#9e9e9e" },
                    height: 50,
                  }}
                >
                  Send Group Communication
                </Button>
              </div>
            </div>
            <div className={styles.table}>
              <div className={styles.tableChild} />
              <div className={styles.header}>
                <div className={styles.headerChild} />
                <div className={styles.headerCell}>
                  <input className={styles.deliveryHeader} type="checkbox" />
                  <div className={styles.deliveryId}>Delivery ID</div>
                </div>
                <div className={styles.headerInfo}>
                  <div className={styles.relatedEvent}>Related Event</div>
                  <div className={styles.relatedEvent}>Driver Assigned</div>
                  <div className={styles.relatedEvent}>Pickup Location</div>
                  <div className={styles.relatedEvent}>Drop-off Location</div>
                  <div className={styles.relatedEvent}>Scheduled Time</div>
                  <div className={styles.status}>Status</div>
                </div>
                <div className={styles.eta}>ETA</div>
              </div>
              <div className={styles.tableBody}>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell}>
                    <div className={styles.tableData}>
                      <div className={styles.deliveryInfo}>
                        <div className={styles.deliveryDetails}>
                          <div className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <div className={styles.aa478525}>AA-4785-25</div>
                          </div>
                          <div className={styles.eventInfo}>
                            <div className={styles.eventName}>Event name</div>
                            <div className={styles.royAnderson}>
                              Roy Anderson
                            </div>
                          </div>
                          <div className={styles.locationInfo}>
                            <div className={styles.streetCityState}>
                              Street, City, State
                            </div>
                            <div className={styles.streetCityState1}>
                              Street, City, State
                            </div>
                          </div>
                          <div className={styles.pm}>00:00:00 PM</div>
                        </div>
                      </div>
                      <div className={styles.statusInfo}>
                        <div className={styles.statusIcons}>
                          <div className={styles.statusIcon}>
                            <div className={styles.iconShape} />
                          </div>
                          <div className={styles.inTransit}>In Transit</div>
                        </div>
                        <div className={styles.transitTime}>
                          <div className={styles.hours}>2 Hours</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tableCell1}>
                    <div className={styles.tableCellChild} />
                  </div>
                  <div className={styles.tableCell}>
                    <div className={styles.tableData}>
                      <div className={styles.deliveryInfo}>
                        <div className={styles.deliveryDetails}>
                          <div className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <div className={styles.aa478525}>AA-4785-25</div>
                          </div>
                          <div className={styles.eventInfo}>
                            <div className={styles.eventName}>Event name</div>
                            <div className={styles.royAnderson}>
                              Roy Anderson
                            </div>
                          </div>
                          <div className={styles.locationInfo}>
                            <div className={styles.streetCityState}>
                              Street, City, State
                            </div>
                            <div className={styles.streetCityState1}>
                              Street, City, State
                            </div>
                          </div>
                          <div className={styles.pm}>00:00:00 PM</div>
                        </div>
                      </div>
                      <div className={styles.frameParent2}>
                        <div className={styles.statusIcons}>
                          <div className={styles.statusIcon}>
                            <div className={styles.frameInner} />
                          </div>
                          <div className={styles.delivered}>Delivered</div>
                        </div>
                        <div className={styles.transitTime}>
                          <div className={styles.hours}>-</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tableCell1}>
                    <div className={styles.tableCellChild} />
                  </div>
                  <div className={styles.tableCell}>
                    <div className={styles.tableData}>
                      <div className={styles.deliveryInfo}>
                        <div className={styles.deliveryDetails}>
                          <div className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <div className={styles.aa478525}>AA-4785-25</div>
                          </div>
                          <div className={styles.eventInfo}>
                            <div className={styles.eventName}>Event name</div>
                            <div className={styles.royAnderson}>
                              Roy Anderson
                            </div>
                          </div>
                          <div className={styles.locationInfo}>
                            <div className={styles.streetCityState}>
                              Street, City, State
                            </div>
                            <div className={styles.streetCityState1}>
                              Street, City, State
                            </div>
                          </div>
                          <div className={styles.pm}>00:00:00 PM</div>
                        </div>
                      </div>
                      <div className={styles.statusInfo}>
                        <div className={styles.statusIcons}>
                          <div className={styles.statusIcon}>
                            <div className={styles.iconShape} />
                          </div>
                          <div className={styles.inTransit}>In Transit</div>
                        </div>
                        <div className={styles.transitTime}>
                          <div className={styles.hours}>2 Hours</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listDivider} />
                  <div className={styles.tableCell}>
                    <div className={styles.tableData}>
                      <div className={styles.deliveryInfo}>
                        <div className={styles.deliveryDetails}>
                          <div className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <div className={styles.aa478525}>AA-4785-25</div>
                          </div>
                          <div className={styles.eventInfo}>
                            <div className={styles.eventName}>Event name</div>
                            <div className={styles.royAnderson}>
                              Roy Anderson
                            </div>
                          </div>
                          <div className={styles.locationInfo}>
                            <div className={styles.streetCityState}>
                              Street, City, State
                            </div>
                            <div className={styles.streetCityState1}>
                              Street, City, State
                            </div>
                          </div>
                          <div className={styles.pm}>00:00:00 PM</div>
                        </div>
                      </div>
                      <div className={styles.frameParent12}>
                        <div className={styles.statusIcons}>
                          <div className={styles.statusIcon}>
                            <div className={styles.frameChild1} />
                          </div>
                          <div className={styles.delayed}>Delayed</div>
                        </div>
                        <div className={styles.dayWrapper}>
                          <div className={styles.hours}>1 Day</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tableCell1}>
                    <div className={styles.tableCellChild} />
                  </div>
                  <div className={styles.tableCell}>
                    <div className={styles.tableData}>
                      <div className={styles.deliveryInfo}>
                        <div className={styles.deliveryDetails}>
                          <div className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <div className={styles.aa478525}>AA-4785-25</div>
                          </div>
                          <div className={styles.eventInfo}>
                            <div className={styles.eventName}>Event name</div>
                            <div className={styles.royAnderson}>
                              Roy Anderson
                            </div>
                          </div>
                          <div className={styles.locationInfo}>
                            <div className={styles.streetCityState}>
                              Street, City, State
                            </div>
                            <div className={styles.streetCityState1}>
                              Street, City, State
                            </div>
                          </div>
                          <div className={styles.pm}>00:00:00 PM</div>
                        </div>
                      </div>
                      <div className={styles.statusInfo}>
                        <div className={styles.statusIcons}>
                          <div className={styles.statusIcon}>
                            <div className={styles.iconShape} />
                          </div>
                          <div className={styles.inTransit}>In Transit</div>
                        </div>
                        <div className={styles.transitTime}>
                          <div className={styles.hours}>2 Hours</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.tableCell1}>
                    <div className={styles.tableCellChild} />
                  </div>
                  <div className={styles.tableCell}>
                    <div className={styles.tableData}>
                      <div className={styles.deliveryInfo}>
                        <div className={styles.deliveryDetails}>
                          <div className={styles.deliveryValues}>
                            <input
                              className={styles.valueLabels}
                              type="checkbox"
                            />
                            <div className={styles.aa478525}>AA-4785-25</div>
                          </div>
                          <div className={styles.eventInfo}>
                            <div className={styles.eventName}>Event name</div>
                            <div className={styles.royAnderson}>
                              Roy Anderson
                            </div>
                          </div>
                          <div className={styles.locationInfo}>
                            <div className={styles.streetCityState}>
                              Street, City, State
                            </div>
                            <div className={styles.streetCityState1}>
                              Street, City, State
                            </div>
                          </div>
                          <div className={styles.pm}>00:00:00 PM</div>
                        </div>
                      </div>
                      <div className={styles.statusInfo}>
                        <div className={styles.statusIcons}>
                          <div className={styles.statusIcon}>
                            <div className={styles.iconShape} />
                          </div>
                          <div className={styles.inTransit}>In Transit</div>
                        </div>
                        <div className={styles.transitTime}>
                          <div className={styles.hours}>2 Hours</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listScrollContainer}>
                    <div className={styles.listDivider} />
                    <div className={styles.scroll}>
                      <div className={styles.scrollChild} />
                      <div className={styles.scrollBar} />
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

export default StatusUpdates;
