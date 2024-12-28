import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./VehicleManagement.module.css";

const VehicleManagement: FunctionComponent = () => {
  return (
    <div className={styles.vehicleManagement}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img className={styles.logoIcon} loading="lazy" alt="" />
        <div className={styles.menuContent}>
          <div className={styles.layersParent}>
            <div className={styles.layers}>
              <img className={styles.layer1Icon} loading="lazy" alt="" />
              <img className={styles.layer1Icon} loading="lazy" alt="" />
              <img className={styles.layersChild} loading="lazy" alt="" />
            </div>
            <div className={styles.layer1Parent}>
              <div className={styles.layer1}>
                <img className={styles.layer1Child} loading="lazy" alt="" />
              </div>
              <img className={styles.frameChild} loading="lazy" alt="" />
              <img className={styles.frameChild} loading="lazy" alt="" />
              <img className={styles.vectorIcon} loading="lazy" alt="" />
              <img className={styles.layer1Icon2} loading="lazy" alt="" />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.eventsParent}>
                  <div className={styles.events}>Events</div>
                  <div className={styles.logisticsParent}>
                    <div className={styles.logistics}>Logistics</div>
                    <div className={styles.overviewParent}>
                      <div className={styles.overview}>Overview</div>
                      <div className={styles.overview}>Task Assignment</div>
                      <div className={styles.overview}>Route Planning</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
                    <img className={styles.frameInner} loading="lazy" alt="" />
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <img className={styles.arrowIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.vehicleManagement1}>
                Vehicle Management
              </div>
            </div>
            <div className={styles.navigationParent}>
              <div className={styles.navigation}>
                <div className={styles.inventory}>Inventory</div>
                <div className={styles.deliveries}>Deliveries</div>
                <div className={styles.reports}>Reports</div>
                <div className={styles.users}>Users</div>
                <div className={styles.settings}>Settings</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameContainer}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <img className={styles.frameChild2} loading="lazy" alt="" />
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <img className={styles.frameChild2} loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.footer}>
        <div className={styles.footerContent}>
          <FrameComponent1 />
          <div className={styles.footerContent}>
            <h2 className={styles.vehicleManagement2}>Vehicle Management</h2>
            <div className={styles.table}>
              <div className={styles.tableChild} />
              <div className={styles.header}>
                <div className={styles.headerChild} />
                <div className={styles.vehicleIdname}>Vehicle ID/Name</div>
                <div className={styles.headerActions}>
                  <div className={styles.vehicleInfo}>
                    <div className={styles.type}>Type</div>
                    <div className={styles.capacity}>Capacity</div>
                  </div>
                  <div className={styles.statusHeader}>
                    <div className={styles.status}>Status</div>
                  </div>
                  <div className={styles.vehicleIdname}>Assigned Driver</div>
                  <div className={styles.actions}>Actions</div>
                </div>
              </div>
              <div className={styles.tableRows}>
                <div className={styles.rowItems}>
                  <div className={styles.rowData}>
                    <div className={styles.taskNames}>
                      <div className={styles.taskNameHere}>Task name here</div>
                    </div>
                    <div className={styles.vehicles}>
                      <div className={styles.truck}>Truck</div>
                    </div>
                    <div className={styles.weights}>
                      <div className={styles.kg}>550 KG</div>
                    </div>
                    <div className={styles.statusIcons}>
                      <div className={styles.icons}>
                        <div className={styles.iconShape} />
                      </div>
                      <div className={styles.inUse}>In Use</div>
                    </div>
                  </div>
                  <div className={styles.driverNames}>
                    <div className={styles.thomasGardio}>Thomas Gardio</div>
                  </div>
                  <div className={styles.actionButtons}>
                    <div className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                      />
                      <img className={styles.buttonDataInner} alt="" />
                      <img className={styles.groupIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tableRows1}>
                <div className={styles.tableRowsChild} />
              </div>
              <div className={styles.tableRows}>
                <div className={styles.rowItems}>
                  <div className={styles.taskNameHereWrapper}>
                    <div className={styles.taskNameHere}>Task name here</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.vehicleDetailsWrapper}>
                      <div className={styles.navigationParent}>
                        <div className={styles.truck}>Truck</div>
                        <div className={styles.kg}>550 KG</div>
                      </div>
                    </div>
                    <div className={styles.statusIcons}>
                      <div className={styles.icons}>
                        <div className={styles.maintenanceShape} />
                      </div>
                      <div className={styles.maintenance}>Maintenance</div>
                    </div>
                    <div className={styles.driverNames}>
                      <div className={styles.thomasGardio}>Thomas Gardio</div>
                    </div>
                  </div>
                  <div className={styles.actionButtons}>
                    <div className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                      />
                      <img className={styles.buttonDataInner} alt="" />
                      <img className={styles.groupIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tableRows1}>
                <div className={styles.tableRowsChild} />
              </div>
              <div className={styles.tableRows}>
                <div className={styles.rowItems}>
                  <div className={styles.frameParent6}>
                    <div className={styles.taskNames}>
                      <div className={styles.taskNameHere}>Task name here</div>
                    </div>
                    <div className={styles.vehicles}>
                      <div className={styles.truck}>Truck</div>
                    </div>
                    <div className={styles.weights}>
                      <div className={styles.kg}>550 KG</div>
                    </div>
                    <div className={styles.statusIcons}>
                      <div className={styles.icons}>
                        <div className={styles.ellipseDiv} />
                      </div>
                      <div className={styles.available}>Available</div>
                    </div>
                  </div>
                  <div className={styles.driverNames}>
                    <div className={styles.thomasGardio}>Thomas Gardio</div>
                  </div>
                  <div className={styles.actionButtons}>
                    <div className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                      />
                      <img className={styles.buttonDataInner} alt="" />
                      <img className={styles.groupIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tableRows1}>
                <div className={styles.tableRowsChild} />
              </div>
              <div className={styles.tableRows}>
                <div className={styles.rowItems}>
                  <div className={styles.frameParent6}>
                    <div className={styles.taskNames}>
                      <div className={styles.taskNameHere}>Task name here</div>
                    </div>
                    <div className={styles.vehicles}>
                      <div className={styles.truck}>Truck</div>
                    </div>
                    <div className={styles.weights}>
                      <div className={styles.kg}>550 KG</div>
                    </div>
                    <div className={styles.statusIcons}>
                      <div className={styles.icons}>
                        <div className={styles.ellipseDiv} />
                      </div>
                      <div className={styles.available}>Available</div>
                    </div>
                  </div>
                  <div className={styles.driverNames}>
                    <div className={styles.thomasGardio}>Thomas Gardio</div>
                  </div>
                  <div className={styles.actionButtons}>
                    <div className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                      />
                      <img className={styles.buttonDataInner} alt="" />
                      <img className={styles.groupIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tableRows1}>
                <div className={styles.tableRowsChild} />
              </div>
              <div className={styles.tableRows}>
                <div className={styles.rowItems}>
                  <div className={styles.frameParent6}>
                    <div className={styles.taskNames}>
                      <div className={styles.taskNameHere}>Task name here</div>
                    </div>
                    <div className={styles.vehicles}>
                      <div className={styles.truck}>Truck</div>
                    </div>
                    <div className={styles.weights}>
                      <div className={styles.kg}>550 KG</div>
                    </div>
                    <div className={styles.statusIcons}>
                      <div className={styles.icons}>
                        <div className={styles.ellipseDiv} />
                      </div>
                      <div className={styles.available}>Available</div>
                    </div>
                  </div>
                  <div className={styles.driverNames}>
                    <div className={styles.thomasGardio}>Thomas Gardio</div>
                  </div>
                  <div className={styles.actionButtons}>
                    <div className={styles.navigationParent}>
                      <img
                        className={styles.buttonDataChild}
                        loading="lazy"
                        alt=""
                      />
                      <img
                        className={styles.buttonDataItem}
                        loading="lazy"
                        alt=""
                      />
                      <img
                        className={styles.buttonDataInner}
                        loading="lazy"
                        alt=""
                      />
                      <img className={styles.groupIcon} loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tableItem} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleManagement;
