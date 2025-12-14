import React from "react";

const images = [
  "https://via.placeholder.com/1200x380?text=Hero+Slide+1",
  "https://via.placeholder.com/1200x380?text=Hero+Slide+2",
  "https://via.placeholder.com/1200x380?text=Hero+Slide+3",
];

export default function ImageCarousel() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt="carousel-slide"
          style={{ width: "100%", borderRadius: 8 }}
        />
      ))}
    </div>
  );
}
