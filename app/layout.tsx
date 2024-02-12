import "./globals.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};
export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Anton", url: "https://github.com/zoomfrost" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru-RU">
      <body className="w-[100vw] overflow-x-hidden">{children}</body>
    </html>
  );
}
