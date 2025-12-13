import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="icon-circle">
        💎
      </div>

      <h1 className="home-title">Jewelry Order Management</h1>

      <p className="home-subtitle">
        Streamline your jewelry business operations with our comprehensive
        order management system
      </p>

      <button
        className="home-button"
        onClick={() => (window.location.href = "/admin")}
      >
        Go to Admin Dashboard
      </button>
    </div>
  );
};

export default HomePage;
