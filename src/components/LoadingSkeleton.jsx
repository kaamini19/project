import React from "react";

export default function LoadingSkeleton() {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0% { background-position: -200px 0 }
          100% { background-position: calc(200px + 100%) 0 }
        }
      `}</style>

      <div
        style={{
          height: "120px",
          background: "linear-gradient(90deg,#eee,#ddd,#eee)",
          backgroundSize: "200% 100%",
          borderRadius: "8px",
          marginBottom: "12px",
          animation: "pulse 1.5s infinite",
        }}
      />
    </>
  );
}
