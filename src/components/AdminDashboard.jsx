import React from "react";

/**
 * Minimal AdminDashboard placeholder for debugging.
 * If this displays, the problem is inside your original AdminDashboard code.
 */

export default function AdminDashboard() {
  return (
    <div style={{
      padding: 28,
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
      background: "linear-gradient(180deg,#fff,#f7f7f8)",
      minHeight: "80vh"
    }}>
      <h1 style={{ marginTop: 0 }}>Admin Dashboard — Debug Placeholder</h1>
      <p style={{ color: "#444" }}>
        If you see this page, the router and auth wrapper are working correctly.
        The original AdminDashboard component likely contains an import/runtime error.
      </p>

      <div style={{ marginTop: 18 }}>
        <button
          onClick={() => alert("Admin placeholder working")}
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            background: "#d86305",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Test button
        </button>
      </div>
    </div>
  );
}
