import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Box from "./pages/Box";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

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
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              {" "}
              <Profile />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/box"
          element={
            <ProtectedRoute>
              {" "}
              <Box />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              {" "}
              <Admin admin={true} />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Error />} />

        {/* <Route path="/users" element={<Users />}>
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="*" element={< Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
