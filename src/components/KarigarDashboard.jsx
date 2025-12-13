import React, { useEffect, useState } from "react";

function LoadingSkeleton({ rows = 3 }) {
  const skeleton = {
    background: "linear-gradient(90deg,#eee,#e6e6e6,#eee)",
    borderRadius: 8,
    height: 64,
    marginBottom: 12,
    animation: "pulse 1.4s infinite",
  };
  return (
    <div>
      <style>{`@keyframes pulse{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}`}</style>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} style={{ ...skeleton, backgroundSize: "200% 100%" }} />
      ))}
    </div>
  );
}

function OptimizedImage({ src, alt = "", style = {} }) {
  return <img src={src} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6, ...style }} />;
}

export default function KarigarDashboard() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setOrders([
        { id: "K-1001", item: "Gold Ring", status: "Pending", due: "2025-11-20" },
        { id: "K-1002", item: "Silver Necklace", status: "In Progress", due: "2025-11-22" },
        { id: "K-1003", item: "Earrings", status: "Done", due: "2025-11-18" },
      ]);
      setLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Inter, system-ui" }}>
      <h2>Karigar Dashboard</h2>
      <p style={{ color: "#666" }}>Overview of assigned production orders</p>

      <div style={{ display: "flex", gap: 14, marginTop: 18 }}>
        <div style={cardStyle}>
          <div style={{ fontSize: 13, color: "#555" }}>Assigned Orders</div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>7</div>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: 13, color: "#555" }}>Pending</div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>1</div>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: 13, color: "#555" }}>In Progress</div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>3</div>
        </div>
      </div>

      <section style={{ marginTop: 26 }}>
        <h3>Recent Orders</h3>
        {loading ? (
          <LoadingSkeleton rows={3} />
        ) : (
          <div style={{ display: "grid", gap: 12 }}>
            {orders.map((o) => (
              <div key={o.id} style={orderRowStyle}>
                <div style={{ width: 120, height: 80 }}>
                  <OptimizedImage src={`https://via.placeholder.com/360x240?text=${encodeURIComponent(o.item)}`} alt={o.item} />
                </div>

                <div style={{ flex: 1, paddingLeft: 12 }}>
                  <div style={{ fontWeight: 700 }}>{o.item}</div>
                  <div style={{ color: "#666", fontSize: 13, marginTop: 6 }}>
                    Order <strong>{o.id}</strong> • Due: {o.due}
                  </div>
                </div>

                <div style={{ minWidth: 110, textAlign: "right" }}>
                  <div style={{ color: statusColor(o.status), fontSize: 13 }}>{o.status}</div>
                  <button onClick={() => alert(`Open order ${o.id}`)} style={{ marginTop: 8, padding: "8px 10px", borderRadius: 8, border: "none", background: "#111827", color: "#fff" }}>
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

const cardStyle = { padding: 14, background: "#fff", borderRadius: 10, minWidth: 160, boxShadow: "0 8px 30px rgba(2,6,23,0.06)" };
const orderRowStyle = { display: "flex", gap: 12, alignItems: "center", padding: 12, background: "#fff", borderRadius: 10, boxShadow: "0 6px 18px rgba(2,6,23,0.04)" };
function statusColor(s) { if (!s) return "#374151"; if (s.toLowerCase().includes("pending")) return "#b45309"; if (s.toLowerCase().includes("in progress")) return "#2563eb"; if (s.toLowerCase().includes("done")) return "#059669"; return "#374151"; }
