import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu7 from "../components/LeftMenu7";
import User1 from "../components/User1";
import Table4 from "../components/Table4";
import Modal4 from "../components/Modal4";
import styles from "./ProofDetailsModal.module.css";

const ProofDetailsModal: FunctionComponent = () => {
  return (
    <div className={styles.proofDetailsModal}>
      <main className={styles.bg}>
        <LeftMenu7 />
        <div
          className={styles.dashboardDelivery}
        >{`Dashboard > Delivery > Proof of Delivery`}</div>
        <User1 />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-14.svg"
        />
        <h2 className={styles.proofOfDelivery}>Proof of Delivery</h2>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <div className={styles.editAdd}>
            <img
              className={styles.editAddPlus}
              loading="lazy"
              alt=""
              src="/edit--add-plus1.svg"
            />
          </div>
          <div className={styles.addNewPod}>Add New POD</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonItem} />
          <div className={styles.approve}>Approve</div>
        </div>
        <div className={styles.button2}>
          <div className={styles.buttonItem} />
          <div className={styles.reject}>Reject</div>
        </div>
        <Button
          className={styles.button3}
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
        <Table4 />
        <section className={styles.bgChild} />
      </main>
      <Modal4 />
    </div>
  );
};

export default ProofDetailsModal;
