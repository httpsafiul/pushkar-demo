import React from "react";
import { Box, Card, CardContent, Typography, Grid, Grid2 } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import HomeMain from "./HomeMain/HomeMain";

const Home = () => {
    return (
      <div >
        <Navbar />
        <HomeMain/>
      </div>
    );
  };

export default Home;
