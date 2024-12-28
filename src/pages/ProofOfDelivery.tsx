import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import UserContainer from "../components/UserContainer";
import Table3 from "../components/Table3";
import styles from "./ProofOfDelivery.module.css";

const ProofOfDelivery: FunctionComponent = () => {
  return (
    <div className={styles.proofOfDelivery}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.menuItems}>
          <div className={styles.menuIcons}>
            <img
              className={styles.selectIcon}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </div>
            <img
              className={styles.selectIcon}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
            <img
              className={styles.selectIcon}
              loading="lazy"
              alt=""
              src="/placeholder@2x.png"
            />
          </div>
          <div className={styles.pageTitles}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.events}>Events</div>
            <div className={styles.logistics}>Logistics</div>
            <div className={styles.inventory}>Inventory</div>
            <div className={styles.content}>
              <div className={styles.deliveries}>Deliveries</div>
              <div className={styles.menuSubtitles}>
                <div className={styles.liveTrackingMap}>Live Tracking Map</div>
                <div className={styles.liveTrackingMap}>Status Updates</div>
                <div className={styles.proofOfDelivery1}>Proof of Delivery</div>
              </div>
              <div className={styles.menuSettings}>
                <div className={styles.reports}>Reports</div>
                <div className={styles.users}>Users</div>
              </div>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.layers}>
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
                src="/layer-1-14.svg"
              />
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/group-1073.svg"
              />
              <div className={styles.frameParent}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-1113.svg"
                />
                <div className={styles.layer1} />
              </div>
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/group-1133.svg"
              />
            </div>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/group-1142.svg"
              />
              <img
                className={styles.selectionIndicatorsIcon}
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
      <main className={styles.mainContent}>
        <section className={styles.contentContainer}>
          <header className={styles.contentHeader}>
            <div className={styles.contentTitle}>
              <div className={styles.dashboardDeliveryProofOParent}>
                <div
                  className={styles.dashboardDelivery}
                >{`Dashboard > Delivery > Proof of Delivery`}</div>
                <h2 className={styles.proofOfDelivery2}>Proof of Delivery</h2>
              </div>
            </div>
            <div className={styles.buttons}>
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
                  width: 140,
                  height: 50,
                }}
              >
                Approve
              </Button>
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
                  width: 140,
                  height: 50,
                }}
              >
                Reject
              </Button>
              <div className={styles.user}>
                <UserContainer />
                <div className={styles.exportAdd}>
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
                      width: 140,
                      height: 50,
                    }}
                  >
                    Export
                  </Button>
                  <Button
                    className={styles.button3}
                    startIcon={
                      <img
                        width="15px"
                        height="15px"
                        src="/edit--add-plus.svg"
                      />
                    }
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      background: "#ff6f3c",
                      borderRadius: "10px",
                      "&:hover": { background: "#ff6f3c" },
                    }}
                  >
                    Add New POD
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <Table3 />
        </section>
      </main>
    </div>
  );
};

export default ProofOfDelivery;
