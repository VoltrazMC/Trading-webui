import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Voltraz MC — Minecraft Server",
  description: "Voltraz MC — Server Minecraft Survival Economy. Java & Bedrock 1.21+. Bergabung sekarang di voltraz.xyz",
  openGraph: {
    images: [{ url: "https://i.imgur.com/vGZtfjv.png" }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}