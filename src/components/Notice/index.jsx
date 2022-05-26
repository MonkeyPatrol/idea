import React from "react";
import styles from "./notice.module.css";

const Notice = ({ children }) => {
  return (
    <article className={styles.notice + " notice"}>
      <p>{children}</p>
    </article>
  );
};

export default Notice;
