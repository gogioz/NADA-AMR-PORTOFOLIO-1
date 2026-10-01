"use client";
import { useState } from "react";

const field = "w-full border-b border-rose/40 bg-transparent py-3 font-display text-blush outline-none transition-colors duration-300 placeholder:text-blush/50 focus:border-rose";

// Opens the visitor's email app with the message filled in. No server needed.
export default function ContactForm({ email }) {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const body = `${d.message}\n\n${d.name}${d.org ? ` (${d.org})` : ""}\n${d.email}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(d.subject || "Hello from your website")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <input name="name" required placeholder="Full name" aria-label="Full name" className={field} />
        <input name="email" type="email" required placeholder="Email address" aria-label="Email address" className={field} />
        <input name="org" placeholder="Organization" aria-label="Organization" className={field} />
        <input name="subject" placeholder="Subject" aria-label="Subject" className={field} />
      </div>
      <textarea name="message" required rows={4} placeholder="Your message" aria-label="Your message" className={field} />
      <div className="flex items-center gap-5">
        <button className="rounded-full bg-rose px-8 py-3 font-display font-bold text-forest transition duration-300 hover:-translate-y-0.5 hover:bg-blush">Send message</button>
        {sent && <p className="animate-pop font-display text-sm text-rose">Your email app should open. If not, write to {email}.</p>}
      </div>
    </form>
  );
}
