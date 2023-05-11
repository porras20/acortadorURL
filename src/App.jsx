import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FormShortener from "./components/FormShortener";
import Statistics from "./components/Statistics";
import BoostYourLinks from "./components/BoostYourLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mx-32 mt-8">
        <Navbar />
        <Banner />
        <FormShortener />
        <Statistics />
      </div>
      <div>
        <BoostYourLinks />
        <Footer/>
      </div>
    </>
  );
}

export default App;
