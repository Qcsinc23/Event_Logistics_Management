import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import LeftMenu1 from "../components/LeftMenu1";
import FrameComponent from "../components/FrameComponent";
import UserContainer from "../components/UserContainer";
import styles from "./RoutePlanning.module.css";

const RoutePlanning: FunctionComponent = () => {
  return (
    <div className={styles.routePlanning}>
      <LeftMenu1 />
      <main className={styles.pageContent}>
        <section className={styles.mainContentParent}>
          <div className={styles.mainContent}>
            <div className={styles.innerContent}>
              <div
                className={styles.dashboardLogistics}
              >{`Dashboard > Logistics > Route Planning`}</div>
              <div className={styles.planningContent}>
                <h3 className={styles.routePlanning1}>Route Planning</h3>
                <div className={styles.map}>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src="/mask-group2@2x.png"
                  />
                  <img
                    className={styles.mapChild}
                    loading="lazy"
                    alt=""
                    src="/group-191.svg"
                  />
                  <div className={styles.locations}>
                    <img
                      className={styles.locationsChild}
                      loading="lazy"
                      alt=""
                      src="/group-195.svg"
                    />
                    <div className={styles.nestedLocation}>
                      <div className={styles.deepNestedLocation}>
                        <img
                          className={styles.deepNestedLocationChild}
                          loading="lazy"
                          alt=""
                          src="/group-191.svg"
                        />
                        <div className={styles.deepNestedLocationInner}>
                          <img
                            className={styles.frameChild}
                            loading="lazy"
                            alt=""
                            src="/group-195.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <FrameComponent
                      depotIcon="/vector-11.svg"
                      depotLocation="Depot Location"
                      group196="/group-195.svg"
                    />
                  </div>
                  <div className={styles.dropoffContainerWrapper}>
                    <div className={styles.dropoffContainer}>
                      <div className={styles.dropoffDetails}>
                        <div className={styles.dropoffContent}>
                          <div className={styles.dropoffInfo}>
                            <div className={styles.dropoffMarker}>
                              <img
                                className={styles.dropoffIcon}
                                alt=""
                                src="/vector-11.svg"
                              />
                              <div className={styles.dropoffName}>
                                <img
                                  className={styles.dropoffNameChild}
                                  loading="lazy"
                                  alt=""
                                  src="/group-187.svg"
                                />
                                <div className={styles.dropOffLocation}>
                                  Drop-off Location
                                </div>
                              </div>
                              <div className={styles.sauerLock}>
                                859 Sauer Lock , Janismouth, Kansas, USA
                              </div>
                            </div>
                            <div className={styles.dropoffInfoInner}>
                              <img
                                className={styles.frameItem}
                                loading="lazy"
                                alt=""
                                src="/group-191.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.secondDropoff}>
                            <img
                              className={styles.secondDropoffChild}
                              loading="lazy"
                              alt=""
                              src="/group-187.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.pickupContainerParent}>
                        <FrameComponent
                          frameBoxAlignSelf="unset"
                          frameBoxJustifyContent="flex-start"
                          frameBoxWidth="258px"
                          depotContainerGap="10px"
                          depotIcon="/vector-11.svg"
                          depotLocation="Pickup Location"
                          group196="/group-187.svg"
                          groupIconWidth="37.2px"
                        />
                        <div className={styles.moreMarkers}>
                          <div className={styles.additionalMarker}>
                            <img
                              className={styles.secondDropoffChild}
                              loading="lazy"
                              alt=""
                              src="/group-187.svg"
                            />
                          </div>
                          <img
                            className={styles.moreMarkersChild}
                            loading="lazy"
                            alt=""
                            src="/group-195.svg"
                          />
                          <img
                            className={styles.moreMarkersItem}
                            loading="lazy"
                            alt=""
                            src="/group-191.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.userPanel}>
            <UserContainer />
            <div className={styles.routePanel}>
              <div className={styles.routeDetails}>
                <div className={styles.routeDetailsChild} />
                <div className={styles.routeDetails1}>Route Details</div>
                <div className={styles.routeDetailsItem} />
                <div className={styles.routeLocations}>
                  <div className={styles.routeLocationsChild} />
                  <div className={styles.steuberMissionMichaelasideContainer}>
                    <p className={styles.steuberMissionMichaelaside}>
                      10884 Steuber Mission, Michaelaside, Mississippi, USA
                    </p>
                    <p className={styles.terrellTowne}>
                      Terrell Towne - (937) 773-8255
                    </p>
                  </div>
                </div>
                <div className={styles.routeLocations}>
                  <div className={styles.routeLocationsItem} />
                  <div className={styles.steuberMissionMichaelasideContainer}>
                    <p className={styles.steuberMissionMichaelaside}>
                      10884 Steuber Mission, Michaelaside, Mississippi, USA
                    </p>
                    <p className={styles.terrellTowne}>
                      Terrell Towne - (937) 773-8255
                    </p>
                  </div>
                </div>
                <div className={styles.routeLocations}>
                  <div className={styles.routeLocationsInner} />
                  <div className={styles.steuberMissionMichaelasideContainer}>
                    <p className={styles.steuberMissionMichaelaside}>
                      10884 Steuber Mission, Michaelaside, Mississippi, USA
                    </p>
                    <p className={styles.terrellTowne}>
                      Terrell Towne - (937) 773-8255
                    </p>
                  </div>
                </div>
                <div className={styles.routeButtons}>
                  <div className={styles.button}>
                    <div className={styles.buttonChild} />
                    <div className={styles.autoOptimize}>Auto-optimize</div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.buttonItem} />
                    <div className={styles.reverse}>Reverse</div>
                  </div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.buttonInner} />
                  <div className={styles.manuallyReorderStops}>
                    Manually Reorder Stops
                  </div>
                </div>
              </div>
              <div className={styles.vehicleSelection}>
                <div className={styles.vehicleSelectionChild} />
                <div className={styles.vehicleSelection1}>
                  Vehicle Selection
                </div>
                <FormControl
                  className={styles.button3}
                  variant="standard"
                  sx={{
                    borderColor: "#9e9e9e",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRadius: "10px",
                    width: "79.5%",
                    height: "50px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "50px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "50px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "50px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "50px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#9e9e9e",
                      fontSize: 18,
                      fontWeight: "Medium",
                      fontFamily: "Poppins",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "20px",
                    },
                  }}
                >
                  <InputLabel color="warning" />
                  <Select
                    color="warning"
                    disableUnderline
                    displayEmpty
                    IconComponent={undefined}
                  >
                    <MenuItem>Assign Routes</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RoutePlanning;