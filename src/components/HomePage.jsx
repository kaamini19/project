import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="icon-circle">💎</div>

      <h1 className="home-title">Jewelry Order Management</h1>

      <p className="home-subtitle">
        Streamline your jewelry business operations with our comprehensive
        order management system
      </p>

      <button
        className="home-button"
        onClick={() => navigate("/admin")}
      >
        Go to Admin Dashboard
      </button>
    </div>
  );
};

export default HomePage;
