import React from "react";
import Router from "./Router";
import Navbar from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";
import ScrollToTop from "./components/utils/ScrollToTop.tsx";

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
