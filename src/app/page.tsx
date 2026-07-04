"use client";

import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Copy, Users, Clock, Shield, Gem, Swords, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const ip = "voltraz.xyz";

  const copyIp = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Background placeholder - replace with actual MC background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
            <div className="absolute inset-0 bg-[url('https://i.imgur.com/vGZtfjv.png')] bg-cover bg-center bg-no-repeat opacity-20 blur-[2px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 z-0" />
          </div>

          <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-effect text-xs font-medium text-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Server Online - Season 1
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 gradient-text">
              VOLTRAZ MC
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect ke voltraz.xyz lewat Java atau Bedrock dan langsung main bareng komunitas.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={copyIp}
                className="group relative flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-xl transition-all hover-glow w-full sm:w-auto"
              >
                <div className="text-left">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">IP Address</div>
                  <div className="text-lg font-bold font-mono tracking-tight text-white">{ip}</div>
                </div>
                <div className="ml-4 p-2 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  {copied ? <span className="text-xs font-bold">COPIED!</span> : <Copy size={20} />}
                </div>
              </button>

              <Link
                href="/store"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all hover-glow w-full sm:w-auto"
              >
                Store <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-white/5 bg-[#0a0c10]/50 relative z-10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center p-6 glass-effect rounded-2xl">
              <Users className="text-primary mb-3" size={32} />
              <div className="text-3xl font-bold text-white mb-1">27</div>
              <div className="text-sm text-muted-foreground">Player Online</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-effect rounded-2xl">
              <Clock className="text-primary mb-3" size={32} />
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Server Uptime</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-effect rounded-2xl">
              {/* Discord icon placeholder */}
              <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center mb-3">
                <span className="text-white font-bold text-xs">D</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">175</div>
              <div className="text-sm text-muted-foreground">Discord Online</div>
            </div>
            <div className="flex flex-col items-center justify-center p-6 glass-effect rounded-2xl border border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10" />
              <Swords className="text-primary mb-3 relative z-10" size={32} />
              <div className="text-xl font-bold text-white mb-1 relative z-10 text-center leading-tight mt-1">Survival<br/>Economy</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6 relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Tentang</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Voltraz.</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Pertama kali dibangun untuk menghadirkan pengalaman bermain yang nyaman dan berkualitas, VOLTRAZ menjadi tempat bagi pemain yang ingin menikmati server Minecraft dengan progres yang seru, dan suasana bermain yang lebih hidup.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Server ini terus dikembangkan dengan berbagai fitur menarik, sistem yang stabil, serta update berkala untuk menjaga pengalaman bermain tetap fresh dan tidak membosankan. Mulai dari aktivitas santai bersama teman, membangun base, menjelajahi dunia, hingga mengejar progres dan item langka, semuanya dirancang agar setiap pemain punya perjalanan bermain yang berkesan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 glass-effect rounded-2xl aspect-square flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors z-0" />
                  <div className="relative z-20">
                    <h3 className="font-bold text-xl text-white mb-1">Survival</h3>
                    <p className="text-sm text-gray-300">Economy</p>
                  </div>
                </div>
                <div className="p-6 glass-effect rounded-2xl h-40 flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors z-0" />
                  <div className="relative z-20">
                    <h3 className="font-bold text-xl text-white mb-1">Quest</h3>
                    <p className="text-sm text-gray-300">+ progression</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 glass-effect rounded-2xl h-40 flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors z-0" />
                  <div className="relative z-20">
                    <h3 className="font-bold text-xl text-white mb-1">300+</h3>
                    <p className="text-sm text-gray-300">Friendly & responsive</p>
                  </div>
                </div>
                <div className="p-6 glass-effect rounded-2xl aspect-square flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors z-0" />
                  <div className="relative z-20">
                    <h3 className="font-bold text-xl text-white mb-1">Slot</h3>
                    <p className="text-sm text-gray-300">Minigames</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Info */}
        <section className="py-24 px-6 relative z-10 bg-[#0a0c10]/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Survival Economy <br/><span className="text-primary">Semi RPG</span></h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Server ini dilengkapi berbagai sistem yang membuat progres bermain terasa lebih hidup dan terarah. Mulai dari skills, leveling, quest, dungeon, semuanya dirancang untuk menghadirkan pengalaman bermain yang panjang dan tidak monoton, baik untuk pemain yang ingin bermain santai maupun yang suka progres dan persaingan kompetitif.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {['Skills', 'LandClaim', 'Quest', 'Crates', 'Levels', 'Reward', 'Clans'].map((badge) => (
                <span key={badge} className="px-4 py-2 glass-effect rounded-full text-sm font-medium border border-white/10 hover:border-primary/50 transition-colors cursor-default">
                  {badge}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 glass-effect rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                <Shield className="text-primary mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Land Claim + Shops</h3>
                <p className="text-sm text-muted-foreground">Sistem keamanan tanah dan ekonomi player-to-player yang stabil.</p>
              </div>
              <div className="p-6 glass-effect rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                <Shield className="text-accent mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Anti-grief rules</h3>
                <p className="text-sm text-muted-foreground">Bermain tenang tanpa takut hasil kerjamu dihancurkan pemain lain.</p>
              </div>
              <div className="p-6 glass-effect rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                <Users className="text-blue-400 mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Anti-Toxic</h3>
                <p className="text-sm text-muted-foreground">Komunitas ramah dengan kebijakan tegas terhadap perilaku toxic.</p>
              </div>
              <div className="p-6 glass-effect rounded-xl border border-white/5 hover:border-primary/30 transition-all">
                <Shield className="text-purple-400 mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Moderation aktif</h3>
                <p className="text-sm text-muted-foreground">Staff yang siap sedia membantu dan menjaga kenyamanan bermain.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
