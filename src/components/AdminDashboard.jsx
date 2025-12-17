import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-wrapper">

      {/* HEADER */}
      <div className="admin-header">
        <div className="admin-left">
          <div className="admin-icon">🛡️</div>
          <div>
            <h2>Admin Panel</h2>
            <p>Altrex@123.com</p>
          </div>
        </div>

        <div className="logout">↪</div>
      </div>

      {/* TABS */}
      <div className="tab-container">
        <NavLink to="/admin/dashboard" end className="tab">
          📊 Overview
        </NavLink>
        <NavLink to="/admin/vyapari" className="tab">
          👥 Vyapari
        </NavLink>
        <NavLink to="/admin/karigar" className="tab">
          🛠 Karigar
        </NavLink>
        <NavLink to="/admin/assign" className="tab">
          🔁 Assign
        </NavLink>
        <NavLink to="/admin/orders" className="tab">
          📦 Orders
        </NavLink>
      </div>

      

    </div>
  );
};

export default AdminDashboard;
