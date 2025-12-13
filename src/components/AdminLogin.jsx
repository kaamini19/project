import "./HomePage.css";

const AdminLogin = () => {
  return (
    <div className="home-container">
      <div className="icon-circle">
        🛡️
      </div>

      <h2 className="admin-title">\Admin Panel</h2>
      <p className="admin-subtitle">JewelryOrderManagementSystem</p>

      <label className="password-label">Password</label>
      <input type="password" className="password-input" />

      <button className="home-button login-btn">
        Login as Admin
      </button>
    </div>
  );
};

export default AdminLogin;
