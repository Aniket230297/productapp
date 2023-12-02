import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import ProductPage from "./Components/ProductPage";

const App=()=>{

  return(
    <div>
      <BrowserRouter>
        <Navbar />
        <ProductPage />
        </BrowserRouter>
    </div>
  )
}

export default App;
