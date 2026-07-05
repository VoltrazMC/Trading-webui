"use client";

import { useState } from 'react';
import Link from 'next/link';
import config from '@/data/config.json';
import CopyNotification from './CopyNotification';

interface NavLink {
  to: string;
  label: string;
}

const SOCIALS = [
  { icon: 'fab fa-discord', href: 'https://discord.voltraz.xyz/', label: 'Discord', cls: 'hover:text-[#5865f2]' },
  { icon: 'fab fa-whatsapp', href: 'https://wa.voltraz.xyz/', label: 'WhatsApp', cls: 'hover:text-[#25d366]' },
  { icon: 'fab fa-tiktok', href: 'https://www.tiktok.com/@voltrazmc', label: 'TikTok', cls: 'hover:text-white/50' },
];

export function Navbar() {
  const [copyNotif, setCopyNotif] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
      <Link href="/trading" className="text-xl font-bold tracking-wider flex items-center gap-2">
        <span className="text-primary">VOLTRAZ</span> MC
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/trading" className="text-sm font-medium hover:text-primary transition-colors text-accent">Trading</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://discord.voltraz.xyz"
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
            setCopyNotif(true);
            setTimeout(() => setCopyNotif(false), 2000);
          }}
        >
          Copy IP
        </button>
      </div>
      <CopyNotification show={copyNotif} />
    </nav>
  );
}

export function Footer() {
  const [copyNotif, setCopyNotif] = useState(false);
  const currentYear = new Date().getFullYear();

  // Nav links: derive from nav_buttons with internal paths, or use defaults
  const navButtons = config.nav_buttons || [];
  const defaultLinks: NavLink[] = [
    { to: '/', label: 'Home' },
    { to: '/store', label: 'Store' },
    { to: '/leaderboard', label: 'Leaderboard' },
    { to: '/faq', label: 'FAQ' },
    { to: '/rules', label: 'Rules' },
    { to: '/terms', label: 'Terms' },
  ];
  const internalNavLinks = navButtons
    .filter((b: any) => b.link && !b.link.startsWith('http') && !b.link.startsWith('#'))
    .map((b: any) => ({ to: b.link, label: b.text }));
  const links = internalNavLinks.length >= 3 ? internalNavLinks : defaultLinks;

  return (
    <footer className="footer-cyto-bg relative border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto px-6 pt-14 pb-6">
        {/* Top: brand + links row */}
        <div className="flex flex-wrap items-start justify-between gap-10 mb-12 max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-8">
          {/* Brand block */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3 max-sm:justify-center">
              <img src={config.logo} alt="Voltraz" width="36" height="36" className="rounded-lg" />
              <span className="font-heading text-lg font-bold text-white/90">Voltraz</span>
            </div>
            <p className="text-[0.82rem] text-white/35 leading-[1.65]">
              Minecraft multiplayer since 2025. Latest version, crossplay, always up.
            </p>
          </div>

          {/* Nav links — flat, no headings */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 max-sm:justify-center">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className="text-[0.82rem] text-white/40 no-underline hover:text-white/70 transition-colors duration-150"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider line */}
        <div className="h-px bg-white/[0.05] mb-5" />

        {/* Bottom row: copyright + server + socials */}
        <div className="flex flex-wrap items-center justify-between gap-4 max-sm:flex-col max-sm:gap-3">
          <p className="text-[0.75rem] text-white/20">
            © 2025–{currentYear} Voltraz
          </p>

          {/* Server IP */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => {
              navigator.clipboard.writeText(config.final_cta.ip);
              setCopyNotif(true);
              setTimeout(() => setCopyNotif(false), 2000);
            }}
          >
            <span className="text-[0.78rem] font-mono text-white/30 group-hover:text-white/50 transition-colors duration-150">
              {config.final_cta.ip}
            </span>
            <i className="fas fa-copy text-[0.65rem] text-white/15 group-hover:text-white/35 transition-colors duration-150" />
            <span className="text-[0.7rem] text-white/15">Java & Bedrock</span>
          </div>

          {/* Socials — just icons, no boxes */}
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/20 transition-colors duration-150 text-sm ${s.cls}`}
                aria-label={s.label}
              >
                <i className={s.icon}></i>
              </a>
            ))}
            <span className="text-[0.7rem] text-white/15 ml-1">
              by <span className="text-white/25">Voltraz</span>
            </span>
          </div>
        </div>
      </div>

      <CopyNotification show={copyNotif} />
    </footer>
  );
}
