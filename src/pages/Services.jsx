import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services/index.jsx";

/**
 * Services page component
 *
 * This is a wrapper component that imports and renders the actual Services component
 * from the Services folder. This approach allows us to maintain backward compatibility
 * with the existing router configuration while organizing our code in a more modular way.
 */
const ServicesPage = () => {
  return <Services />;
};

export default ServicesPage;
