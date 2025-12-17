import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // redirect to admin dashboard layout
    navigate("/admin-panel/dashboard");
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="icon-circle">🛡️</div>

        <h2 className="admin-title">Admin Panel</h2>
        <p className="admin-subtitle">
          Jewelry Order Management System
        </p>

        <div className="form-group">
          <label>Admin Email</label>
          <input type="email" placeholder="Altrex@123.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login as Admin
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
