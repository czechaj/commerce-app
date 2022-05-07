import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Orders from "./Orders";
import styles from "./styles.module.css";

function Admin() {
  return (
    <div>
      <nav>
        <ul className={styles.navigator}>
          <Link to="products">
            <li>Products</li>
          </Link>
           
          <Link to="orders">
            <li>Orders</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route exact path="products" element={<Products />} />
        <Route exact path="orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default Admin;
