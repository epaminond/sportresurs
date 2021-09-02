import React from "react";
import styles from "./styles.module.scss";

const PlaygroundInfoRow = ({ label, value }) => (
  <p className={styles.text}>
    <b className={styles.label}>{label}:</b> {value}
  </p>
);

export default PlaygroundInfoRow;
