import { Geist, Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "InfinityBuild - Agence de développement web premium",
  description: "Création de sites web et applications sur mesure performants et modernes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr" // Changed to "fr" since your site is in French
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${inter.variable}
        ${outfit.variable}
      `}
    >
      <head>
        {/* This prevents iOS Safari from auto-detecting phone numbers, dates, etc. and injecting links */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>

      <body>
        {/* Wrapper div takes over all styling that was previously on <body> */}
        <div className="antialiased min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}