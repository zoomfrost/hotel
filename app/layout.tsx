import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel",
  description: "Hotel in the Saint-P",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[100vw] overflow-x-hidden">{children}</body>
    </html>
  );
}
