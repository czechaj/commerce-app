import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* <Route path="/users" element={<Users />}>
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="*" element={< Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
