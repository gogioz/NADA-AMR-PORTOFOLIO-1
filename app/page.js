/* eslint-disable @next/next/no-img-element */
import Header from "../components/Header";
import Reveal from "../components/Reveal";
import Work from "../components/Work";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import { profile, stats, outlets, work, reports, services, experience, gallery } from "../data/site";

const wrap = "mx-auto w-full max-w-6xl px-6";
const h2 = "font-display text-4xl font-extrabold tracking-tight sm:text-6xl";
const kicker = "mb-3 font-display text-sm font-bold";

export default function Home() {
  const frames = gallery.length
    ? gallery
    : work.filter((w) => w.video).map((w, i) => ({ src: `https://i.ytimg.com/vi/${w.video}/hqdefault.jpg`, alt: `Frame ${i + 1}` }));
  const marquee = [...outlets, ...outlets];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-moss text-blush">
          <div className="pointer-events-none absolute -right-32 top-20 h-[30rem] w-[30rem] rounded-full bg-rose/20 blur-3xl" />
          <div className={`${wrap} relative pb-10 pt-40`}>
            <p style={{ animationDelay: "200ms" }} className="mb-6 animate-rise font-display text-lg font-semibold text-rose">{profile.role}</p>
            <h1 className="font-display text-[clamp(4rem,17vw,13rem)] font-extrabold uppercase leading-[.85] tracking-tighter text-rose">
              {profile.name.map((n, i) => (
                <span key={n} className="block overflow-hidden pb-[.06em]">
                  <span style={{ animationDelay: `${300 + i * 170}ms` }} className="block animate-lineup">{n}</span>
                </span>
              ))}
            </h1>
            <p style={{ animationDelay: "800ms" }} className="mt-8 max-w-xl animate-rise text-xl text-blush/90">{profile.intro}</p>
            <div style={{ animationDelay: "950ms" }} className="mt-8 flex flex-wrap gap-3 font-display font-bold animate-rise">
              <a href="#work" className="rounded-full bg-rose px-7 py-3 text-forest transition duration-300 hover:-translate-y-0.5 hover:bg-blush">View work</a>
              <a href="#contact" className="rounded-full border border-rose/60 px-7 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-rose hover:text-forest">Get in touch</a>
            </div>
            <dl style={{ animationDelay: "1100ms" }} className="mt-14 grid animate-rise grid-cols-3 gap-4 border-t border-rose/30 pt-6">
              {stats.map(([n, l]) => (
                <div key={l}><dd className="font-display text-4xl font-extrabold text-rose sm:text-5xl">{n}</dd><dt className="text-sm text-blush/80">{l}</dt></div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden border-t border-rose/30 bg-forest py-4" aria-hidden="true">
            <div className="flex w-max animate-marquee gap-12 font-display text-lg font-bold text-rose/90">
              {marquee.map((o, i) => <span key={i} className="whitespace-nowrap">{o} <span className="ml-12 text-rose/40">/</span></span>)}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="on-light py-28">
          <div className={wrap}>
            <Reveal><p className={`${kicker} text-moss`}>Selected work</p><h2 className={`${h2} mb-12 text-forest`}>Films and stories</h2></Reveal>
            <Work items={work} />
          </div>
        </section>

        {/* Reports */}
        <section id="reports" className="bg-forest py-28 text-blush">
          <div className={wrap}>
            <Reveal><p className={`${kicker} text-rose`}>Reports</p><h2 className={`${h2} mb-12 text-rose`}>Reporting and written work</h2></Reveal>
            <ul className="border-t border-rose/25">
              {reports.map((r, i) => {
                const row = (
                  <div className="group grid gap-2 py-8 transition-all duration-500 hover:pl-4 md:grid-cols-[16rem_1fr_auto] md:gap-10">
                    <div><h3 className="font-display text-2xl font-bold text-rose">{r.outlet}</h3><p className="font-display text-sm text-blush/70">{r.role}</p></div>
                    <p className="text-blush/85">{r.text}</p>
                    {r.url && <span className="font-display font-bold text-rose">Read →</span>}
                  </div>
                );
                return (
                  <li key={r.outlet} className="border-b border-rose/25">
                    <Reveal delay={i * 70}>{r.url ? <a href={r.url} target="_blank" rel="noopener noreferrer">{row}</a> : row}</Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="on-light py-28">
          <div className={wrap}>
            <Reveal><p className={`${kicker} text-moss`}>What I offer</p><h2 className={`${h2} mb-12 text-forest`}>Services</h2></Reveal>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([t, d], i) => (
                <Reveal key={t} delay={(i % 3) * 90}>
                  <div className="group h-full border-t-2 border-moss/25 pt-5 transition-colors duration-500 hover:border-moss">
                    <h3 className="font-display text-xl font-bold text-forest">{t}</h3>
                    <p className="mt-2 text-base text-ink/70">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="on-light bg-rose/40 py-28">
          <div className={wrap}>
            <Reveal><p className={`${kicker} text-moss`}>Gallery</p><h2 className={`${h2} mb-4 text-forest`}>Frames and moments</h2><p className="mb-12 max-w-xl text-ink/70">Stills from productions and field work. Click any image to enlarge.</p></Reveal>
            <Gallery images={frames} />
          </div>
        </section>

        {/* About */}
        <section id="about" className="on-light py-28">
          <div className={`${wrap} grid gap-14 lg:grid-cols-[22rem_1fr]`}>
            <Reveal>
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name.join(" ")} className="aspect-[4/5] w-full rounded-xl object-cover" />
              ) : (
                <div className="grid aspect-[4/5] w-full place-items-center rounded-xl bg-moss font-display text-8xl font-extrabold text-rose">NG</div>
              )}
            </Reveal>
            <div>
              <Reveal><p className={`${kicker} text-moss`}>About</p><h2 className={`${h2} mb-8 text-forest`}>{profile.name.join(" ")}</h2></Reveal>
              <Reveal>{profile.bio.map((p) => <p key={p} className="mb-5 max-w-2xl text-ink/80">{p}</p>)}</Reveal>
              <Reveal>
                <dl className="mt-8 grid gap-6 border-t border-moss/20 pt-8 sm:grid-cols-2">
                  {profile.facts.map(([k, v]) => <div key={k}><dt className="font-display text-sm font-bold text-moss">{k}</dt><dd>{v}</dd></div>)}
                </dl>
                <h3 className="mb-4 mt-10 font-display text-lg font-bold text-forest">Where she has worked</h3>
                <ul className="divide-y divide-moss/15 border-y border-moss/15">
                  {experience.map(([y, t]) => (
                    <li key={t} className="flex gap-6 py-3 text-base"><span className="w-28 shrink-0 font-display font-semibold text-moss">{y}</span><span>{t}</span></li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-moss py-28 text-blush">
          <div className={`${wrap} grid gap-16 lg:grid-cols-2`}>
            <Reveal>
              <p className={`${kicker} text-rose`}>Get in touch</p>
              <h2 className={`${h2} text-rose`}>Let's make something real</h2>
              <p className="mt-6 max-w-md text-blush/90">Available for documentary projects, reporting collaborations and commissions for digital and broadcast media.</p>
              <div className="mt-10 grid gap-5 font-display">
                <div><p className="text-sm text-blush/70">Email</p><a href={`mailto:${profile.email}`} className="text-xl font-semibold transition-colors hover:text-rose">{profile.email}</a></div>
                <div><p className="text-sm text-blush/70">Phone</p><a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-xl font-semibold transition-colors hover:text-rose">{profile.phone}</a></div>
                <div><p className="text-sm text-blush/70">Location</p><p className="text-xl font-semibold">{profile.location}</p></div>
              </div>
            </Reveal>
            <Reveal delay={120}><ContactForm email={profile.email} /></Reveal>
          </div>
        </section>
      </main>
      <footer className="bg-forest py-8 text-center font-display text-sm text-blush/70">
        © {new Date().getFullYear()} {profile.name.join(" ")} · {profile.role} · {profile.location}
      </footer>
    </>
  );
}
