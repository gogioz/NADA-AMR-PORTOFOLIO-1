import { Bricolage_Grotesque, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const text = Source_Serif_4({ subsets: ["latin"], variable: "--font-text" });

export const metadata = {
  title: "Nada Ghonemy | Multimedia Journalist & Video Producer",
  description:
    "Portfolio of Nada Ghonemy, multimedia journalist and video producer in Cairo with 10+ years of experience in digital video, documentary and storytelling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
