"use client";

import Link from "next/link";
import { Copy, Menu, X, Gamepad2, ShoppingCart, Trophy, FileText, Activity, LifeBuoy, ArrowRightLeft } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyIp = () => {
    navigator.clipboard.writeText("voltraz.xyz");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <Gamepad2 className="w-4 h-4" /> },
    { href: "/store", label: "Store", icon: <ShoppingCart className="w-4 h-4" /> },
    { href: "/vote", label: "Vote", icon: <Trophy className="w-4 h-4" /> },
    { href: "/leaderboards", label: "Leaderboards", icon: <Activity className="w-4 h-4" /> },
    { href: "/trading", label: "Trading", icon: <ArrowRightLeft className="w-4 h-4" /> },
    { href: "/slot", label: "Slot", icon: <Gamepad2 className="w-4 h-4" /> },
    { href: "/rules", label: "Rules", icon: <FileText className="w-4 h-4" /> },
    { href: "/status", label: "Status", icon: <Activity className="w-4 h-4" /> },
    { href: "/support", label: "Support", icon: <LifeBuoy className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-xl text-white group-hover:scale-105 transition-transform">
            V
          </div>
          <span className="text-xl font-bold text-white hidden sm:block">Voltraz MC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.slice(0, 6).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyIp}
            className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all border border-white/5"
          >
            <span className="text-blue-400 font-bold">voltraz.xyz</span>
            <Copy className="w-4 h-4" />
            {copied && <span className="absolute -bottom-8 bg-black text-xs px-2 py-1 rounded">Copied!</span>}
          </button>

          <Link href="/store" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            Store
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl p-4 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-colors flex items-center gap-3"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleCopyIp}
            className="mt-2 flex items-center justify-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-3 rounded-xl text-sm font-bold transition-all border border-blue-500/20"
          >
            <span>Copy IP: voltraz.xyz</span>
            <Copy className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}