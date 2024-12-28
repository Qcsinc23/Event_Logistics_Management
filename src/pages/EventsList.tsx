import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import FrameComponent3 from "../components/FrameComponent3";
import GroupComponent3 from "../components/GroupComponent3";
import Table1 from "../components/Table1";
import styles from "./EventsList.module.css";

const EventsList: FunctionComponent = () => {
  return (
    <div className={styles.eventsList}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.frameParent}>
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
                src="/layer-1-11.svg"
              />
            </div>
            <div className={styles.frameGroup}>
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
          <div className={styles.menuWrapper}>
            <div className={styles.menu}>
              <div className={styles.dashboard}>Dashboard</div>
              <div className={styles.eventsParent}>
                <div className={styles.events}>Events</div>
                <div className={styles.eventListParent}>
                  <div className={styles.eventList}>Event List</div>
                  <div className={styles.eventCalendar}>Event Calendar</div>
                </div>
              </div>
              <div className={styles.logistics}>Logistics</div>
              <div className={styles.inventory}>Inventory</div>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.reports}>Reports</div>
              <div className={styles.users}>Users</div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.logoiconParent}>
              <img
                className={styles.logoicon}
                loading="lazy"
                alt=""
                src="/placeholder@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.eventsListInner}>
        <section className={styles.breadcrumbItemsParent}>
          <FrameComponent3
            dashboardEventsCreateNewEve={`Dashboard > Events > Event List`}
            createNewEvent="Event Management"
            button="Create New Event"
            dashboardEventsDisplay="unset"
            buttonWidth="unset"
            buttonAlignSelf="stretch"
          />
          <GroupComponent3 />
          <Table1 />
        </section>
      </main>
    </div>
  );
};

export default EventsList;