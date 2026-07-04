import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Voltraz MC — Minecraft Server",
  description: "Voltraz MC — Server Minecraft Survival Economy. Java & Bedrock 1.21+. Bergabung sekarang di voltraz.xyz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakartaSans.variable} font-sans min-h-screen bg-background text-foreground flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
