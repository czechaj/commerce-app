import { createContext, useContext, useEffect, useState } from "react";

const BoxContext = createContext();
const defaultBox = JSON.parse(localStorage.getItem("box")) || [];

const BoxProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBox);
  useEffect(() => {localStorage.setItem("box", JSON.stringify(items))}, [items])
  const addItem = (data, itemInBasket) => {
    if (!itemInBasket) {
      return setItems((state) => [...state, data]);
    }
    const filteredItems = items.filter((item) => item._id !== itemInBasket._id);
    setItems(filteredItems);
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
  };

  return <BoxContext.Provider value={values}>{children}</BoxContext.Provider>;
};

const useBox = () => useContext(BoxContext);
export { useBox, BoxProvider };
