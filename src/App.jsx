import React from "react";
import Router from "./Router";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="bg-[#FDF8EC] min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-grow">
        <Navbar />
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default App;
