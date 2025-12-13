import React from "react";

export default function OptimizedImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      loading="lazy"
      style={{ objectFit: "cover" }}
    />
  );
}
