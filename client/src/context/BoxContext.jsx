import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const BoxContext = createContext();
const defaultBox = JSON.parse(localStorage.getItem("box")) || [];

const BoxProvider = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const [warning, setWarning] = useState("");
  const [items, setItems] = useState(defaultBox);
  useEffect(() => {
    setWarning("");
  }, [isLoggedIn]);
  useEffect(() => {
    localStorage.setItem("box", JSON.stringify(items));
  }, [items]);

  const addItem = (data, itemInBasket) => {
    if (!isLoggedIn) {
      return setWarning("Please login to use box features");
    }
    if (!itemInBasket) {
      return setItems((state) => [...state, data]);
    }
    const filteredItems = items.filter((item) => item._id !== itemInBasket._id);
    setItems(filteredItems);
  };
  const emptyBox = () => {
    setItems([]);
  };
  const removeItem = (item_id) => {
    const filtered = items.filter((item) => item._id !== item_id);
    setItems(filtered);
  };
  const values = {
    items,
    setItems,
    addItem,
    removeItem,
    emptyBox,
    warning,
    setWarning,
  };

  return <BoxContext.Provider value={values}>{children}</BoxContext.Provider>;
};

const useBox = () => useContext(BoxContext);
export { useBox, BoxProvider };
