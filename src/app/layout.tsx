import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gayuh Widyanata | Portfolio",
  description:
    "Portfolio Gayuh Widyanata - Backend Developer & Fullstack Web Developer. Explore my projects, experience, and skills.",
  keywords: [
    "Gayuh Widyanata",
    "Portfolio",
    "Backend Developer",
    "Fullstack Developer",
    "Laravel",
    "Next.js",
  ],
  authors: [{ name: "Gayuh Widyanata" }],
  openGraph: {
    title: "Gayuh Widyanata | Portfolio",
    description:
      "Backend Developer & Fullstack Web Developer. Explore my projects.",
    url: "http://localhost:3000",
    siteName: "Gayuh Portfolio V2",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} h-full`}>
      <body className="min-h-full bg-[#eef5fc] text-slate-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

