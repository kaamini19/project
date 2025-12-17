import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>💎</div>

        <h2>Welcome Back</h2>
        <p>Sign in to manage your jewelry orders</p>

        <button style={styles.googleBtn}>
           Continue with Google
        </button>

        <p
          style={styles.adminLink}
          onClick={() => navigate("/admin")}
        >
          Admin Login →
        </p>
      </div>
    </div>
  );
}

export default Welcome;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fffaf3",
  },
  card: {
    background: "#fff",
    padding: "40px",
    width: "350px",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  logo: { fontSize: "40px", marginBottom: "10px" },
  googleBtn: {
    width: "100%",
    padding: "12px",
    background: "#f57c00",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
  },
  adminLink: {
    marginTop: "15px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
