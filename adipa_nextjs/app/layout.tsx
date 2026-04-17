import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADIPA Cursos 2026",
  description: "Landing page de catálogo inspirada en ADIPA, construida con Next.js App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
