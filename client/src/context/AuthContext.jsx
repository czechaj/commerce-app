import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (data) => {
    setUser(data);
    setIsLoggedIn(true);
  };
  const values = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={values}> {children} </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
