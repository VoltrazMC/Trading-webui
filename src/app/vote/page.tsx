"use client";

import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import { ExternalLink, Gift, CheckCircle2 } from 'lucide-react';

export default function Vote() {
  const voteSites = [
    { name: "Minecraft-MP", url: "https://minecraft-mp.com/server/335805/vote/", bonus: "1x Vote Crate Key" },
    { name: "TopMinecraftServers", url: "https://topminecraftservers.org/vote/38495", bonus: "1x Vote Crate Key" },
    { name: "ServerPact", url: "https://www.serverpact.com/vote-47671", bonus: "1x Vote Crate Key" },
    { name: "MinecraftServers.org", url: "https://minecraftservers.org/vote/663854", bonus: "1x Vote Crate Key" }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-24 pb-20">
        <section className="py-12 px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vote Server</h1>
          <p className="text-lg text-muted-foreground">
            Bantu VOLTRAZ MC naik ke peringkat atas dan dapatkan hadiah menarik setiap kali kamu melakukan vote!
          </p>
        </section>

        <section className="px-6 max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ExternalLink className="text-primary" /> Link Vote
              </h2>
              {voteSites.map((site, i) => (
                <a
                  key={i}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-4 rounded-xl border border-white/5 flex items-center justify-between hover:border-primary/50 hover:bg-white/5 transition-all group"
                >
                  <div>
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">{site.name}</h3>
                    <p className="text-sm text-muted-foreground">Dapatkan: <span className="text-accent">{site.bonus}</span></p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                </a>
              ))}
            </div>

            <div>
              <div className="glass-effect p-8 rounded-2xl border border-primary/20 bg-primary/5 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Gift className="text-accent" /> Info Hadiah
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">Vote Crate</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Setiap vote di salah satu link di samping akan memberikanmu 1x Vote Crate Key secara otomatis in-game. Pastikan kamu sedang online atau mengetikkan username dengan benar!
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="font-bold text-lg text-white mb-3">Isi Vote Crate:</h3>
                    <ul className="space-y-2">
                      {['In-game Money ($1,000 - $10,000)', 'Diamond, Iron, Gold Blocks', 'Rare Enchantment Books', 'Cosmetic Keys', 'Rank Upgrade (0.1% chance)'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
