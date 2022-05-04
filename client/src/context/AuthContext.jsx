import { Center, Spinner } from "@chakra-ui/react";
import { createContext, useState, useContext, useEffect } from "react";
import { isUser, signUserOut } from "../api";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(false);
      const user = await isUser();
      setIsLoggedIn(true);
      setUser(user);
    })();
  }, []);

  const login = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
    localStorage.setItem("access_token", data.accessToken);
    localStorage.setItem("refresh_token", data.refreshToken);
  };
  const logout = async () => {
    setIsLoggedIn(false);
    setUser(null);
    await signUserOut();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token ");
    setLoading(false);
  };
  const values = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    login,
    logout,
    setUser,
  };

  if (loading) {
    return (
      <Center mt={100}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <AuthContext.Provider value={values}> {children} </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
