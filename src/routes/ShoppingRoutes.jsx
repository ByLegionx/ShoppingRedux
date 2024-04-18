import { Route, Routes } from "react-router-dom";
import { ShoppingHome } from "../pages/ShoppingHome/ShoppingHome";

export default function ShoppingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ShoppingHome />} />
    </Routes>
  );
}
