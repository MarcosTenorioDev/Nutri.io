import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GenerateDiet from "../components/GenerateDiet";
import axios from "axios";


const Home = () => {



  return (
    <>
      <Navbar />
      <GenerateDiet />
      
    </>
  );
}

export default Home;
