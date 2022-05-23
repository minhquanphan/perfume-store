import React from "react";
import { Button, Typography } from "@mui/material";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import ThemeProvider from "./contexts/ThemeProvider";

function App() {
  return (
    <AuthProvider>
      <CartContextProvider>
        <BrowserRouter>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </CartContextProvider>
    </AuthProvider>
  );
}

export default App;
