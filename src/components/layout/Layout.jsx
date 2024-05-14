import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Box } from "@mui/material";

import "../../../src/index.css";

export const Layout = () => {
  return (
    <div className="background">
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: "40px",
          width: "100%",
          minHeight: "90vh",
        }}
      >
        <Outlet />
        
      </Box>
      <Footer />
    </div>
  );
};
