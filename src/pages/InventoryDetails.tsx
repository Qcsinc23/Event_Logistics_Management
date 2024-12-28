import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu3 from "../components/LeftMenu3";
import UserContainer from "../components/UserContainer";
import styles from "./InventoryDetails.module.css";

const InventoryDetails: FunctionComponent = () => {
  return (
    <div className={styles.inventoryDetails}>
      <LeftMenu3 logo="/logo1.svg" />
      <div className={styles.content}>
        <section className={styles.main}>
          <div className={styles.header}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </div>
          <div className={styles.details}>
            <div className={styles.titleBar}>
              <header className={styles.itemDetails}>
                <div className={styles.itemName}>
                  <div className={styles.dashboardInventoryListParent}>
                    <div
                      className={styles.dashboardInventory}
                    >{`Dashboard > Inventory > List > Details (Item Name)`}</div>
                    <div className={styles.inventoryDetailsParent}>
                      <h3 className={styles.inventoryDetails1}>
                        Inventory Details
                      </h3>
                      <div className={styles.tabs}>
                        <div className={styles.tabsChild} />
                        <Button
                          className={styles.tabsItem}
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontSize: "16",
                            background: "#ff6f3c",
                            borderRadius: "50px",
                            "&:hover": { background: "#ff6f3c" },
                            width: 150,
                          }}
                        >
                          Overview
                        </Button>
                        <div className={styles.stockLevelsWrapper}>
                          <div className={styles.stockLevels}>Stock Levels</div>
                        </div>
                        <div className={styles.stockLevelsWrapper}>
                          <div className={styles.supplierInformation}>
                            Supplier Information
                          </div>
                        </div>
                        <div className={styles.stockLevelsWrapper}>
                          <div className={styles.relatedEvents}>
                            Related Events
                          </div>
                        </div>
                        <div className={styles.activityLogWrapper}>
                          <div className={styles.activityLog}>Activity Log</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.userActions}>
                  <UserContainer />
                  <div className={styles.actions}>
                    <Button
                      className={styles.button}
                      startIcon={
                        <img
                          width="20.9px"
                          height="20.9px"
                          src="/group-137.svg"
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
                      Edit
                    </Button>
                    <Button
                      className={styles.button}
                      startIcon={
                        <img width="18px" height="20px" src="/group-139.svg" />
                      }
                      disableElevation
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#1a3e59",
                        fontSize: "18",
                        borderColor: "#1a3e59",
                        borderRadius: "10px",
                        "&:hover": { borderColor: "#1a3e59" },
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </header>
              <div className={styles.info}>
                <div className={styles.infoChild} />
                <div className={styles.basicInfo}>
                  <div className={styles.basicInformation}>
                    Basic Information
                  </div>
                  <div className={styles.divider} />
                </div>
                <div className={styles.itemInfo}>
                  <div className={styles.labels}>
                    <div className={styles.name}>Name:</div>
                    <div className={styles.sku}>SKU:</div>
                    <div className={styles.category}>Category:</div>
                    <div className={styles.description}>Description:</div>
                  </div>
                  <div className={styles.infoFields}>
                    <div className={styles.itemNameHere}>Item name here</div>
                    <div className={styles.itemNameHere}>ABC-12345-S-BL</div>
                    <div className={styles.itemNameHere}>Category here</div>
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
            <div className={styles.images}>
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InventoryDetails;