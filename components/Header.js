"use client";
import { useEffect, useState } from "react";

const links = [["work", "Work"], ["reports", "Reports"], ["services", "Services"], ["gallery", "Gallery"], ["about", "About"], ["contact", "Contact"]];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid || open ? "bg-forest/95 shadow-lg backdrop-blur" : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-display text-sm font-semibold text-blush">
        <a href="#top" className="grid h-10 w-10 place-items-center rounded-full bg-rose text-forest transition-transform duration-300 hover:rotate-6">NG</a>
        <div className="hidden gap-8 md:flex">
          {links.map(([id, l]) => <a key={id} href={`#${id}`} className="transition-colors duration-300 hover:text-rose">{l}</a>)}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">{open ? "Close" : "Menu"}</button>
      </nav>
      {open && (
        <div className="flex animate-pop flex-col gap-4 px-6 pb-6 font-display font-semibold text-blush md:hidden">
          {links.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </div>
      )}
    </header>
  );
}
