import React from "react";
import styles from "./styles.module.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";
import Logo from "./logo.png";
function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className="logo">
            <Link to="/" className={styles.link}>
              {" "}
              <img
                src={Logo}
                style={{ width: "60px", height: " 60px" }}
                alt="lsö"
              />
            </Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link className={styles.link} to="products">
                <span style={{ fontWeight: "bold" }}>Products</span>
              </Link>
            </li>
            {isLoggedIn && (
              <li className={styles.menuItem}>
                <Link className={styles.link} to="profile">
                  <span style={{ fontWeight: "bold" }}>Profile</span>
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className={styles.right}>
          {!isLoggedIn ? (
            <div className="">
              <Link className={styles.link} to="/login">
                <Button colorScheme="teal" mr={2}>
                  {" "}
                  Login
                </Button>
              </Link>

              <Link className={styles.link} to="/signup">
                <Button colorScheme="teal"> Sign Up</Button>
              </Link>
            </div>
          ) : (<Link className={styles.link} to="/signup">
           
           TODO
           <Button colorScheme="purple" variant={"link"}> Sign Out</Button>
        </Link>) }
           
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
