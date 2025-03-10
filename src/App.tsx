import React from "react";
import Router from "./Router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";

const App: React.FC = () => {
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
