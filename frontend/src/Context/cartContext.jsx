import React, {
  createContext,
  useContext,
  useState,
} from "react";

// Create a Context
const CartContext = createContext();

// Create a Provider Component
export const CartProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);

  return (
    <CartContext.Provider
      value={{ totalItems, setTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
