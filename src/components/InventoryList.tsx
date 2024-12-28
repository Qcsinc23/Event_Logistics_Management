import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import TableColumns from "./TableColumns";
import styles from "./InventoryList.module.css";

export type InventoryListType = {
  className?: string;
};

const InventoryList: FunctionComponent<InventoryListType> = ({
  className = "",
}) => {
  return (
    <form className={[styles.inventoryList, className].join(" ")}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <div className={styles.links}>
          <div className={styles.dashboard}>
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-11.svg"
            />
            <div className={styles.dashboard1}>Dashboard</div>
          </div>
          <div className={styles.events}>
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-1-13.svg"
            />
            <div className={styles.events1}>Events</div>
            <img
              className={styles.eventsChild}
              loading="lazy"
              alt=""
              src="/frame-2@2x.png"
            />
          </div>
          <div className={styles.logistics}>
            <div className={styles.logistics1}>Logistics</div>
            <img
              className={styles.logisticsChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
            </div>
          </div>
          <div className={styles.inventory}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameChild} />
              <img className={styles.arrowIcon} alt="" src="/arrow-4.svg" />
            </div>
            <div className={styles.inventory1}>Inventory</div>
            <img
              className={styles.inventoryChild}
              loading="lazy"
              alt=""
              src="/group-1112.svg"
            />
            <div className={styles.layer1} />
            <div className={styles.inventoryList1}>Inventory List</div>
            <div
              className={styles.alertsNotifications}
            >{`Alerts & Notifications`}</div>
          </div>
          <div className={styles.deliveries}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameItem} alt="" src="/arrow-4.svg" />
            </div>
            <div className={styles.deliveries1}>Deliveries</div>
            <img
              className={styles.logisticsChild}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
          </div>
          <div className={styles.reports}>
            <div className={styles.reports1}>Reports</div>
            <img
              className={styles.reportsChild}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
          </div>
          <div className={styles.users}>
            <div className={styles.users1}>Users</div>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className={styles.settings}>
            <div className={styles.settings1}>Settings</div>
            <img
              className={styles.layer1Icon2}
              loading="lazy"
              alt=""
              src="/layer-1-2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.topNav}>
        <div className={styles.breadcrumbs}>
          <div
            className={styles.dashboardInventory}
          >{`Dashboard > Inventory > Inventory List`}</div>
        </div>
        <div className={styles.user}>
          <div className={styles.userChild} />
          <img
            className={styles.userItem}
            loading="lazy"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <div className={styles.sherwynGraham}>{`Sherwyn Graham `}</div>
        </div>
        <img
          className={styles.vectorIcon1}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div className={styles.actions}>
        <h2 className={styles.inventoryManagement}>Inventory Management</h2>
        <Button
          className={styles.button}
          startIcon={
            <img width="15px" height="15px" src="/edit--add-plus.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#1a3e59",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#1a3e59" },
            width: 200,
            height: 50,
          }}
        >
          Add New Item
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
            width: 140,
            height: 50,
          }}
        >
          Activate
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
            width: 140,
            height: 50,
          }}
        >
          Deactivate
        </Button>
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
      </div>
      <section className={styles.filter}>
        <div className={styles.filterChild} />
        <TextField
          className={styles.enterName}
          placeholder="Search by name, SKU, or category"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <img width="18px" height="18px" src="/vector-2.svg" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#9e9e9e" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              paddingLeft: "20px",
              borderRadius: "8px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { paddingLeft: "10px", color: "#9e9e9e" },
            width: "385px",
          }}
        />
        <FormControl
          className={styles.category}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
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
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Category</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.supplier}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
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
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Supplier</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.location}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
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
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Location</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.status}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "10.81081081081081%",
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
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Status</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <Button
          className={styles.button4}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#ff6f3c",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#ff6f3c" },
            width: 125,
            height: 50,
          }}
        >
          Search
        </Button>
      </section>
      <h2 className={styles.inventoryList2}>Inventory List</h2>
      <div className={styles.sortFilter}>
        <div className={styles.sortBy}>Sort by:</div>
        <FormControl
          className={styles.sort}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "10px",
            width: "67.41573033707866%",
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
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Default</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <section className={styles.table}>
        <div className={styles.tableChild} />
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <input className={styles.rectangleInput} type="checkbox" />
          <div className={styles.itemName}>Item Name</div>
          <div className={styles.sku}>SKU</div>
          <div className={styles.category1}>Category</div>
          <div className={styles.availQty}>{`Avail Qty `}</div>
          <div className={styles.resQty}>Res Qty</div>
          <div className={styles.location1}>Location</div>
          <div className={styles.status1}>Status</div>
          <div className={styles.actions1}>Actions</div>
        </div>
        <TableColumns available="Available" />
        <TableColumns
          tableColumnsTop="195px"
          groupBoxWidth="105px"
          available="Reserved"
          availableMinWidth="81px"
          ellipseBoxBackgroundColor="#ffeb3b"
        />
        <TableColumns
          tableColumnsTop="305px"
          groupBoxWidth="128px"
          available="Out of Stock"
          availableMinWidth="104px"
          ellipseBoxBackgroundColor="#ed3006"
        />
        <TableColumns
          tableColumnsTop="415px"
          groupBoxWidth="105px"
          available="Available"
          availableMinWidth="81px"
          ellipseBoxBackgroundColor="#4caf50"
        />
        <TableColumns
          tableColumnsTop="525px"
          groupBoxWidth="105px"
          available="Available"
          availableMinWidth="81px"
          ellipseBoxBackgroundColor="#4caf50"
        />
        <TableColumns
          tableColumnsTop="635px"
          groupBoxWidth="105px"
          available="Reserved"
          availableMinWidth="81px"
          ellipseBoxBackgroundColor="#ffeb3b"
        />
        <div className={styles.row}>
          <div className={styles.rowItems}>578</div>
          <div className={styles.sectionName}>Section name</div>
          <input className={styles.rectangleInput1} type="checkbox" />
          <div className={styles.categoryHere}>Category here</div>
          <div className={styles.rowItems1}>2,257</div>
          <div className={styles.abc12345SBl}>ABC-12345-S-BL</div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
          <div className={styles.itemNameHere}>Item name here</div>
          <div className={styles.groupParent}>
            <img
              className={styles.groupChild}
              loading="lazy"
              alt=""
              src="/group-140.svg"
            />
            <img
              className={styles.groupItem}
              loading="lazy"
              alt=""
              src="/group-1371.svg"
            />
            <img
              className={styles.groupInner}
              loading="lazy"
              alt=""
              src="/group-1393.svg"
            />
          </div>
          <div className={styles.outOfStockParent}>
            <div className={styles.outOfStock}>Out of Stock</div>
            <div className={styles.ellipseDiv} />
          </div>
          <div className={styles.rowChild} />
        </div>
      </section>
      <footer className={styles.pagination}>
        <div className={styles.result1Container}>
          <span className={styles.result}>{`Result: `}</span>
          <span className={styles.span}>1 - 10</span>
          <span className={styles.result}>{` of 50 `}</span>
        </div>
        <FormControl
          className={styles.pageInput}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "10px",
            width: "80px",
            height: "45px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "45px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "45px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "45px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "45px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#3f3f3f",
              fontSize: 18,
              fontWeight: "SemiBold",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "14px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="12px"
                height="9px"
                src="/next-page.svg"
                style={{ marginRight: "10px" }}
              />
            )}
          >
            <MenuItem>10</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className={styles.paginationButtons}>
          <Button
            className={styles.pageNumberButtons}
            disableElevation
            variant="contained"
            sx={{
              background: "#ff6f3c",
              borderRadius: "10px",
              "&:hover": { background: "#ff6f3c" },
              width: 45,
              height: 45,
            }}
          />
          <Button
            className={styles.pageNumberButtons1}
            disableElevation
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              width: 45,
              height: 45,
            }}
          />
          <Button
            className={styles.pageNumberButtons2}
            disableElevation
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              width: 45,
              height: 45,
            }}
          />
          <Button
            className={styles.pageNumberButtons3}
            disableElevation
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              width: 45,
              height: 45,
            }}
          />
          <Button
            className={styles.pageNumberButtons4}
            disableElevation
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              width: 45,
              height: 45,
            }}
          />
          <div className={styles.pageNumber}>01</div>
          <div className={styles.pageNumberButtons5}>02</div>
          <div className={styles.pageNumberButtons6}>03</div>
          <div className={styles.pageNumberButtons7}>04</div>
          <div className={styles.pageNumberButtons8}>05</div>
          <div className={styles.pageNumberButtons9}>
            <div className={styles.pageButton} />
            <img
              className={styles.pageNumberButtonsChild}
              loading="lazy"
              alt=""
              src="/arrow-7.svg"
            />
          </div>
          <div className={styles.pageNumberButtons10}>
            <div className={styles.pageNumberButtonsItem} />
            <img
              className={styles.pageNumberButtonsInner}
              alt=""
              src="/arrow-8.svg"
            />
          </div>
        </div>
      </footer>
    </form>
  );
};

export default InventoryList;
