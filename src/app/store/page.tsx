"use client";

import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Gem, ArrowRight, Shield, Swords, Star, Crown } from 'lucide-react';

export default function Store() {
  const packages = [
    {
      name: "VIP",
      color: "text-blue-400",
      bgColor: "bg-blue-400",
      price: "Rp 10.000",
      desc: "Langkah pertama jadi pemain elite! Nikmati kemudahan ekstra, kit eksklusif, dan command yang bikin hidup di server jauh lebih seru.",
      features: [
        "3 Jobs Slot", "Quest 5×/d", "Akses VIP Job & Quest", "VIP Prefix",
        "Sethome 5x", "Kit VIP", "/nick", "/enderchest", "/recipe", "/disposal"
      ]
    },
    {
      name: "VIP+",
      color: "text-blue-300",
      bgColor: "bg-blue-300",
      price: "Rp 20.000",
      popular: true,
      desc: "Naik level, naik privilege! Lebih banyak slot job, quest harian lebih banyak, dan command tambahan yang makin memudahkan hidupmu.",
      features: [
        "5 Jobs Slot", "Quest 8×/d", "Akses VIP+ Job & Quest", "VIP+ Prefix",
        "VIP Feature", "Sethome 10x", "Kit VIP+", "/near", "/craft"
      ]
    },
    {
      name: "MVP",
      color: "text-purple-400",
      bgColor: "bg-purple-400",
      price: "Rp 50.000",
      desc: "Jadilah pemain yang diperhitungkan! Akses ender chest dari mana saja, lebih banyak peluang kerja & quest, dan slot rumah yang terus bertambah.",
      features: [
        "7 Jobs Slot", "Quest 12×/d", "Akses MVP Job & Quest", "MVP Prefix",
        "VIP+ Feature", "Sethome 20x", "Kit MVP", "/feed", "/ptime", "/back"
      ]
    },
    {
      name: "MVP+",
      color: "text-pink-400",
      bgColor: "bg-pink-400",
      price: "Rp 100.000",
      desc: "Terbang bebas, sembuh seketika, dan tampil beda dari semua pemain! Dengan name color changer, kamu bakal selalu jadi perhatian di server.",
      features: [
        "10 Jobs Slot", "Quest 15×/d", "Akses Semua Quest & Job", "MVP+ Prefix",
        "MVP Feature", "Sethome 30x", "Name Color Changer", "Kit MVP+", "4 Row Backpack Size", "/heal", "/fly", "/grindstone"
      ]
    },
    {
      name: "MVP++",
      color: "text-red-400",
      bgColor: "bg-red-400",
      price: "Rp 200.000",
      desc: "Di atas rata-rata dalam segala hal. Skill EXP double, repair semua item, atur cuaca sendiri — server ini rasanya milik kamu.",
      features: [
        "15 Jobs Slot", "Quest 20×/d", "Level Reward +50%", "MVP++ Prefix",
        "MVP+ Feature", "Sethome Unlimited", "Kit MVP++", "5 Row Backpack Size", "/pweather", "/anvil", "/repair", "/repair all"
      ]
    },
    {
      name: "MASTER",
      color: "text-accent",
      bgColor: "bg-accent",
      price: "Rp 500.000",
      desc: "Rank tertinggi — simbol dominasi sejati di VOLTRAZ. Semua terbuka, semua terbebas, dan kamu yang memegang kendali penuh.",
      features: [
        "25 Jobs Slot", "Quest 30/d", "Level Reward +100%", "MASTER Prefix",
        "MVP++ Feature", "Kit MASTER", "6 Row Backpack Size", "All Cosmetic Unlocked", "/ptime", "/teleport", "/god"
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col pt-24 pb-20">
        <section className="py-12 px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Store</h1>
          <p className="text-lg text-muted-foreground">
            Dukung server dan dapatkan keuntungan eksklusif. Pembayaran via Transfer / QRIS. Konfirmasi ke Discord setelah bayar.
          </p>
        </section>

        <section className="px-6 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`relative glass-effect rounded-2xl p-6 border ${pkg.popular ? 'border-primary' : 'border-white/10'} flex flex-col h-full hover:border-primary/50 transition-all hover:-translate-y-1`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${pkg.bgColor}/10 flex items-center justify-center`}>
                    <Crown className={pkg.color} size={24} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${pkg.color}`}>{pkg.name}</h3>
                    <div className="text-xl font-bold text-white">{pkg.price}</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 min-h-[60px]">
                  {pkg.desc}
                </p>

                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <Star className={`mt-0.5 shrink-0 ${j < 4 ? pkg.color : 'text-muted-foreground'}`} size={14} />
                      <span className={j < 4 ? 'text-white font-medium' : 'text-gray-400'}>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://discord.gg/voltrazmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-center transition-all ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
                >
                  Beli Sekarang
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
