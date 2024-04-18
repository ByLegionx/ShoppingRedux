import { useEffect } from "react";
import { Header } from "../../components/Header";
import { getProducts } from "../../services/getProducts";
import { useAppContext } from "../../context/ContextProvider";
import { LeftBar } from "../../components/LeftBar";
import { SelectorGender } from "./components/SelectorGender";

export const ShoppingHome = () => {
  const { allProducts, setAllProducts } = useAppContext();

  useEffect(() => {
    const fetch = async () => {
      const data = await getProducts();
      setAllProducts(data);
    };

    fetch();
  }, []);

  useEffect(() => {
    console.log(allProducts);
  }, [allProducts]);
  return (
    <>
      <Header />
      <LeftBar />
      <SelectorGender />
    </>
  );
};
