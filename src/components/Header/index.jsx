import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.intro}>
      <div className="container">
        <img src={logo} className={styles["intro-icon"]} />
        <h1 className={styles.title}>MonkeyPatrol</h1>
        <p className={styles.subtitle}>
          Un proyecto para preservar al tití cabeciblanco usando Inteligencia
          Artificial
        </p>
      </div>
    </header>
  );
};

export default Header;
