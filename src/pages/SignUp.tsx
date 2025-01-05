import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import InputFields from "../components/InputFields";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <div className={styles.content}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <div className={styles.formHeaderParent}>
          <div className={styles.formHeader}>
            <div className={styles.title}>
              <h1 className={styles.createYourAccountContainer}>
                <p className={styles.createYourAccount}>
                  <b className={styles.create}>{`Create `}</b>
                  <span className={styles.yourAccount}>your Account</span>
                </p>
              </h1>
            </div>
            <div className={styles.fillOutThe}>
              Fill out the form below to have your parcels delivered and to
              create a Quiet Craft Solutions Inc customer account.
            </div>
          </div>
          <InputFields />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
