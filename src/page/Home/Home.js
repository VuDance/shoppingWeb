import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Slider from "../../component/Slider/Slider"
import Products from "../../component/Products/Products"
import Outfit from "../../component/Outfit/Outfit";
import Footer from "../../component/Footer/Footer";

function Home() {
    return (
      <div>
        <Navbar/>
        <Slider/>
        <Products/>
        <Outfit/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  