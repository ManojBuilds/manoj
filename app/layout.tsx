import type { Metadata } from "next";
import { Instrument_Serif, Mona_Sans } from "next/font/google";
import "@fontsource/mona-sans";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800",]
});

export const metadata: Metadata = {
  title: "Manoj Kumar | Portfolio",
  description: "Frontend Engineer & UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable}  ${monaSans.className} min-h-screen transition-colors relative antialiased font-sans relative`}
      >
        <NavbarDemo className="top-2" />
        <div className="">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-0 top-0 w-[60px] h-full overflow-hidden sm:block hidden "><div className="absolute dark:opacity-[0.04] opacity-[0.06] inset-0 w-[60px] h-full border dark:border-[#eee] border-[#000]/70" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px);" }}></div></div>
            <div className="absolute right-0 top-0 w-[60px] h-full overflow-hidden sm:block hidden "><div className="absolute dark:opacity-[0.04] opacity-[0.06] inset-0 w-[60px] h-full border dark:border-[#eee] border-[#000]/70" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px);" }}></div></div>
            <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl px-2 sm:px-0">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
