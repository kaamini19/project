import React, { useState, useEffect } from "react";

export default function VyapariDashboard() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setOrders([
        { id: "V-2001", status: "Pending", total: "₹3,400", due: "2025-11-25" },
        { id: "V-2002", status: "Delivered", total: "₹1,200", due: "2025-11-18" },
      ]);
      setLoading(false);
    }, 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Inter, system-ui" }}>
      <h2>Vyapari Dashboard</h2>
      <p style={{ color: "#666" }}>Sales and orders summary</p>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <div style={{ padding: 12, background: "#fff", borderRadius: 8, boxShadow: "0 8px 30px rgba(2,6,23,0.06)" }}>
          <div style={{ fontSize: 13, color: "#555" }}>Orders</div>
          <div style={{ fontSize: 24, fontWeight: 700, marginTop: 6 }}>{orders.length}</div>
        </div>
        <div style={{ padding: 12, background: "#fff", borderRadius: 8 }}>
          <div style={{ fontSize: 13, color: "#555" }}>Pending</div>
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>{orders.filter(o => o.status === "Pending").length}</div>
        </div>
      </div>

      <section style={{ marginTop: 18 }}>
        <h3>Recent orders</h3>
        {loading ? (
          <div style={{ background: "#eee", height: 80, borderRadius: 8 }} />
        ) : (
          <ul style={{ padding: 0, listStyle: "none", marginTop: 12 }}>
            {orders.map(o => (
              <li key={o.id} style={{ background: "#fff", padding: 12, borderRadius: 8, marginBottom: 10, boxShadow: "0 6px 18px rgba(2,6,23,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong>{o.id}</strong>
                  <span>{o.total}</span>
                </div>
                <div style={{ color: "#666", fontSize: 13 }}>{o.status} • Due: {o.due}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
