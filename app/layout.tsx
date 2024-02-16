import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Anton", url: "https://github.com/zoomfrost" }],
  creator: "Anton Rez",
  publisher: "Anton Rez",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Baskov",
    description: "Отель в центре Санкт-Петербурга",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru-RU">
      <body className="w-[100vw] overflow-x-hidden">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
