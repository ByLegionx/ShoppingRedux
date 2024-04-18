import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [openLeftBar, setOpenLeftBar] = useState(false);

  const data = { allProducts, setAllProducts, openLeftBar, setOpenLeftBar };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.any,
};
