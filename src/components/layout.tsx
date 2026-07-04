import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold tracking-wider flex items-center gap-2">
        <span className="text-primary">VOLTRAZ</span> MC
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
        <Link href="/store" className="text-sm font-medium hover:text-primary transition-colors">Store</Link>
        <Link href="/rules" className="text-sm font-medium hover:text-primary transition-colors">Rules</Link>
        <Link href="/vote" className="text-sm font-medium hover:text-primary transition-colors">Vote</Link>
        <Link href="/leaderboards" className="text-sm font-medium hover:text-primary transition-colors">Leaderboards</Link>
        <Link href="/trading" className="text-sm font-medium hover:text-primary transition-colors text-accent">Trading</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://discord.gg/voltrazmc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
        >
          Discord
        </a>
        <button
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md text-sm font-medium transition-all hover-glow"
          onClick={() => {
            navigator.clipboard.writeText("voltraz.xyz");
            alert("IP Copied: voltraz.xyz");
          }}
        >
          Copy IP
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#0a0c10] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-xl font-bold tracking-wider mb-4 block">
            <span className="text-primary">VOLTRAZ</span> MC
          </Link>
          <p className="text-muted-foreground text-sm max-w-md">
            Server Minecraft Survival Economy dengan fitur premium. Bergabung dengan komunitas kami yang terus berkembang!
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Tautan</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/store" className="text-sm text-muted-foreground hover:text-primary transition-colors">Store</Link></li>
            <li><Link href="/rules" className="text-sm text-muted-foreground hover:text-primary transition-colors">Rules</Link></li>
            <li><Link href="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Sosial</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">TikTok</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
        <p>© 2026 Voltraz MC. All rights reserved.</p>
        <p>Not affiliated with Mojang AB.</p>
      </div>
    </footer>
  );
}
