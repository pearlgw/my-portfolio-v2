import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://me.natagw.my.id'),
  title: "Gayuh Widyanata | Software Engineer",
  description:
    "Portfolio Gayuh Widyanata - Software Engineer & Backend-focused Fullstack Developer based in Indonesia. Explore my projects, experience, and skills.",
  keywords: [
    "Gayuh Widyanata",
    "Portfolio Gayuh",
    "Software Engineer Indonesia",
    "Backend Developer",
    "Fullstack Developer",
    "Web Developer",
    "Laravel Developer",
    "Next.js",
  ],
  authors: [{ name: "Gayuh Widyanata" }],
  creator: "Gayuh Widyanata",
  openGraph: {
    title: "Gayuh Widyanata | Software Engineer",
    description:
      "Software Engineer & Backend-focused Fullstack Developer based in Indonesia.",
    url: "https://me.natagw.my.id",
    siteName: "Gayuh Widyanata Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/gw.png",
        width: 800,
        height: 600,
        alt: "Gayuh Widyanata Logo",
      },
    ],
  },
  icons: {
    icon: "/gw.png",
    shortcut: "/gw.png",
    apple: "/gw.png",
  },
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${poppins.variable} h-full`}>
      <body className="min-h-full bg-[#eef5fc] text-slate-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
