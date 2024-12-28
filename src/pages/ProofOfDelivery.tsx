import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu7 from "../components/LeftMenu7";
import UserContainer from "../components/UserContainer";
import Table3 from "../components/Table3";
import styles from "./ProofOfDelivery.module.css";

const ProofOfDelivery: FunctionComponent = () => {
  return (
    <div className={styles.proofOfDelivery}>
      <LeftMenu7 />
      <main className={styles.mainContent}>
        <section className={styles.contentContainer}>
          <header className={styles.contentHeader}>
            <div className={styles.contentTitle}>
              <div className={styles.dashboardDeliveryProofOParent}>
                <div
                  className={styles.dashboardDelivery}
                >{`Dashboard > Delivery > Proof of Delivery`}</div>
                <h2 className={styles.proofOfDelivery1}>Proof of Delivery</h2>
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