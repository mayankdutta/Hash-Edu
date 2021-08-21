import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Logo
          </Link>
        </div>
      </nav>
    </>
  );
};

export default App;
