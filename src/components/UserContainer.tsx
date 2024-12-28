import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./UserContainer.module.css";

export type UserContainerType = {
  className?: string;
  profilePicture?: string;

  /** Style props */
  userContainerWidth?: CSSProperties["width"];
  userContainerAlignSelf?: CSSProperties["alignSelf"];
  userContainerHeight?: CSSProperties["height"];
  userIconHeight?: CSSProperties["height"];
  userIconWidth?: CSSProperties["width"];
  userFlex?: CSSProperties["flex"];
  userHeight?: CSSProperties["height"];
  userWidth?: CSSProperties["width"];
  userNameHeight?: CSSProperties["height"];
  userNameWidth?: CSSProperties["width"];
  sherwynGrahamWidth?: CSSProperties["width"];
  sherwynGrahamHeight?: CSSProperties["height"];
  sherwynGrahamDisplay?: CSSProperties["display"];
};

const UserContainer: FunctionComponent<UserContainerType> = ({
  className = "",
  userContainerWidth,
  userContainerAlignSelf,
  userContainerHeight,
  userIconHeight,
  userIconWidth,
  profilePicture,
  userFlex,
  userHeight,
  userWidth,
  userNameHeight,
  userNameWidth,
  sherwynGrahamWidth,
  sherwynGrahamHeight,
  sherwynGrahamDisplay,
}) => {
  const userContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: userContainerWidth,
      alignSelf: userContainerAlignSelf,
      height: userContainerHeight,
    };
  }, [userContainerWidth, userContainerAlignSelf, userContainerHeight]);

  const userIconStyle: CSSProperties = useMemo(() => {
    return {
      height: userIconHeight,
      width: userIconWidth,
    };
  }, [userIconHeight, userIconWidth]);

  const userStyle: CSSProperties = useMemo(() => {
    return {
      flex: userFlex,
      height: userHeight,
      width: userWidth,
    };
  }, [userFlex, userHeight, userWidth]);

  const userNameStyle: CSSProperties = useMemo(() => {
    return {
      height: userNameHeight,
      width: userNameWidth,
    };
  }, [userNameHeight, userNameWidth]);

  const sherwynGrahamStyle: CSSProperties = useMemo(() => {
    return {
      width: sherwynGrahamWidth,
      height: sherwynGrahamHeight,
      display: sherwynGrahamDisplay,
    };
  }, [sherwynGrahamWidth, sherwynGrahamHeight, sherwynGrahamDisplay]);

  return (
    <div
      className={[styles.userContainer, className].join(" ")}
      style={userContainerStyle}
    >
      <div className={styles.userIcon} style={userIconStyle}>
        <img
          className={styles.profilePictureIcon}
          loading="lazy"
          alt=""
          src={profilePicture}
        />
      </div>
      <div className={styles.user} style={userStyle}>
        <div className={styles.userChild} />
        <img
          className={styles.profileBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className={styles.userName} style={userNameStyle}>
          <div
            className={styles.sherwynGraham}
            style={sherwynGrahamStyle}
          >{`Sherwyn Graham `}</div>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;