"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export default function Work({ items }) {
  const cats = ["All", ...new Set(items.map((i) => i.category))];
  const [cat, setCat] = useState("All");
  const [playing, setPlaying] = useState(null);
  const shown = items.filter((i) => cat === "All" || i.category === cat);

  useEffect(() => {
    const k = (e) => e.key === "Escape" && setPlaying(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2 font-display text-sm font-semibold">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2 transition duration-300 ${cat === c ? "bg-moss text-blush" : "bg-white text-moss ring-1 ring-moss/20 hover:ring-moss"}`}>{c}</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((w) => {
          const inner = (
            <>
              <div className="relative aspect-video overflow-hidden bg-moss">
                {w.video ? (
                  <>
                    <img src={thumb(w.video)} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute inset-0 grid place-items-center bg-forest/0 transition duration-500 group-hover:bg-forest/40">
                      <span className="grid h-14 w-14 scale-90 place-items-center rounded-full bg-rose opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                        <span className="ml-1 border-y-[9px] border-l-[15px] border-y-transparent border-l-forest" />
                      </span>
                    </span>
                  </>
                ) : (
                  <div className="flex h-full items-end bg-gradient-to-br from-moss to-forest p-5 transition duration-700 group-hover:scale-105">
                    <span className="font-display text-2xl font-extrabold leading-tight text-rose">{w.title}</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="font-display text-xs font-bold text-moss/70">{w.category}{w.role ? ` · ${w.role}` : ""}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-base text-ink/70">{w.text}</p>
              </div>
            </>
          );
          const cls = "group block overflow-hidden rounded-xl bg-white text-left shadow-sm ring-1 ring-moss/10 transition duration-500 hover:-translate-y-1.5 hover:shadow-xl";
          return w.video ? (
            <button key={w.title} onClick={() => setPlaying(w.video)} className={cls}>{inner}</button>
          ) : w.url ? (
            <a key={w.title} href={w.url} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
          ) : (
            <div key={w.title} className={cls}>{inner}</div>
          );
        })}
      </div>
      {playing && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-forest/90 p-4" onClick={() => setPlaying(null)} role="dialog" aria-modal="true">
          <div className="aspect-video w-full max-w-4xl animate-pop" onClick={(e) => e.stopPropagation()}>
            <iframe className="h-full w-full rounded-lg" src={`https://www.youtube.com/embed/${playing}?autoplay=1`} title="Video player" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          </div>
          <button onClick={() => setPlaying(null)} className="absolute right-5 top-5 font-display font-bold text-rose">Close</button>
        </div>
      )}
    </>
  );
}
