import React from "react";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/400x300?text=Image+Unavailable";

export default function OptimizedImage({ src, alt = "", className = "" }) {
  return (
    <img
      src={src || FALLBACK_IMAGE}
      alt={alt}
      className={className}
      loading="lazy"
      style={{ objectFit: "cover" }}
    />
  );
}
