import React from "react";

/* Minimal visually pleasing carousel replacement — stacked slides */
const images = [
  "https://via.placeholder.com/1200x380?text=Hero+Slide+1",
  "https://via.placeholder.com/1200x380?text=Hero+Slide+2",
  "https://via.placeholder.com/1200x380?text=Hero+Slide+3",
];

export default function ImageCarousel() {
  return (
    <div style={{display:"grid", gap:12}}>
      {images.map((src,i) => (
        <img key={i} src={src} alt={`slide-${i}`} style={{width:"100%", borderRadius:8}} />
      ))}
    </div>
  );
}
