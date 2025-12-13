import React from "react";

export default function LoadingSkeleton() {
  return (
    <div
      style={{
        height: "120px",
        background: "linear-gradient(90deg,#eee,#ddd,#eee)",
        borderRadius: "8px",
        marginBottom: "12px",
        animation: "pulse 1.5s infinite"
      }}
    />
  );
}
