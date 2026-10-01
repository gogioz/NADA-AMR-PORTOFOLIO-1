"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function Gallery({ images }) {
  const [i, setI] = useState(null);
  useEffect(() => {
    const k = (e) => {
      if (i === null) return;
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((i + 1) % images.length);
      if (e.key === "ArrowLeft") setI((i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [i, images.length]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3">
        {images.map((im, n) => (
          <button key={im.src} onClick={() => setI(n)} className="group relative mb-4 block w-full overflow-hidden rounded-lg bg-moss">
            <img src={im.src} alt={im.alt} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-rose/0 transition duration-500 group-hover:bg-rose/25" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-forest/95 p-4" onClick={() => setI(null)} role="dialog" aria-modal="true">
          <img src={images[i].src} alt={images[i].alt} className="max-h-[85vh] max-w-full animate-pop rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={() => setI(null)} className="absolute right-5 top-5 font-display font-bold text-rose">Close</button>
          <button onClick={(e) => { e.stopPropagation(); setI((i - 1 + images.length) % images.length); }} className="absolute left-4 font-display text-3xl text-rose" aria-label="Previous">‹</button>
          <button onClick={(e) => { e.stopPropagation(); setI((i + 1) % images.length); }} className="absolute right-4 font-display text-3xl text-rose" aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
