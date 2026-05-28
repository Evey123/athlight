import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athlight — Elite Gear. Sanitized.",
  description: "Advanced UV-C sanitization technology engineered for athletes. Eliminate 99.9% of bacteria from your chinstrap in under ten minutes.",
  keywords: "UV-C sanitization, athletic equipment, chinstrap, hygiene, football, sports technology",
  openGraph: {
    title: "Athlight — Elite Gear. Sanitized.",
    description: "Advanced UV-C sanitization technology engineered for athletes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
