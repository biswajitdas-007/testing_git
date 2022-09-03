import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <h1>Biswajit Das</h1>
      <div className={styles.navbarLinks}>
        <a href="#">Menu</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Blogs</a>
        <a href="#">Contact US</a>
        <a href="#">Change Color</a>
      </div>
    </nav>
  );
};

export default Navbar;
