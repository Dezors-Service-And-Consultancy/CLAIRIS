import { Geist, Geist_Mono,Rajdhani } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raj = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight:["400"]
})

export const metadata = {
  title: "Claris",
  description: "next gen AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raj.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
