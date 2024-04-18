import React from "react";
import ReactDOM from "react-dom/client";

import { ContextProvider } from "./context/ContextProvider.jsx";
import ShoppingRoutes from "./routes/ShoppingRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <ShoppingRoutes />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
