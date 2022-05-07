import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Box, Text } from "@chakra-ui/react";
import { useAuth } from "../../context/AuthContext";
import Logo from "./logo.png";
import { useBox } from "../../context/BoxContext";

function Navbar() {
  const navigate = useNavigate();
  const { items, warning } = useBox();
  const { isLoggedIn, user } = useAuth();
  const { logout } = useAuth();
  const handleLogout = async () => {
    logout();
    navigate("/login");
  };

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
                alt="Logo"
              />
            </Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link className={styles.link} to="products">
                <span style={{ fontWeight: "bold" }}>Products</span>
              </Link>
            </li>
            {warning && (
              <Text
                ml={10}
                textColor={"chocolate"}
                fontSize={10}
                fontWeight={"bold"}
              >
                {warning}
              </Text>
            )}
            {isLoggedIn && user.role === "user" && (
              <>
                <li className={styles.menuItem}>
                  <Link className={styles.link} to="profile">
                    <span style={{ fontWeight: "bold" }}>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/box">
                    <Button colorScheme={"teal"} style={{ fontWeight: "bold" }}>
                      Box ({items && items.length})
                    </Button>
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && user.role === "admin" && (
              <>
                <li className={styles.menuItem}>
                  <Link className={styles.link} to="admin">
                    <Button
                      bg={"GrayText"}
                      colorScheme={"white"}
                      style={{ fontWeight: "bold" }}
                    >
                      Admin
                    </Button>
                  </Link>
                </li>{" "}
              </>
            )}
          </ul>
        </div>

        <div className={styles.right}>
          {!isLoggedIn && (
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
          )}

          {isLoggedIn && (
            <Button
              colorScheme="purple"
              variant={"link"}
              onClick={handleLogout}
            >
              {" "}
              Sign Out
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
