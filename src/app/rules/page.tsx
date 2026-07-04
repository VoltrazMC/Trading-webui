"use client";

import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import { ShieldAlert, MessageSquare, Sword, Gavel, ServerCrash } from 'lucide-react';

export default function Rules() {
  const rulesList = [
    {
      id: "01",
      icon: <MessageSquare size={24} className="text-blue-400" />,
      title: "Komunikasi & Chat",
      desc: "Dilarang keras melakukan toxic berlebihan, SARA, doxing, spam, atau promosi server/layanan lain. Hormati sesama pemain di chat global maupun local."
    },
    {
      id: "02",
      icon: <Sword size={24} className="text-red-400" />,
      title: "Gameplay & Modifikasi",
      desc: "Penggunaan cheat, hack client (X-Ray, KillAura, dll), macro, auto-clicker, atau eksploitasi bug server sangat dilarang dan berujung pada ban permanen."
    },
    {
      id: "03",
      icon: <Gavel size={24} className="text-orange-400" />,
      title: "Griefing & Stealing",
      desc: "Dilarang menghancurkan bangunan (griefing) atau mencuri barang (stealing) milik pemain lain yang sudah atau belum di-claim. Scaming dalam transaksi juga dilarang."
    },
    {
      id: "04",
      icon: <ServerCrash size={24} className="text-purple-400" />,
      title: "Lag Machine",
      desc: "Dilarang membuat redstone clock berlebihan, mob farm yang menyebabkan tumpukan entity melebihi batas, atau struktur lain yang sengaja dibuat untuk membuat server lag (TPS drop)."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-24 pb-20">
        <section className="py-12 px-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-6">
            <ShieldAlert size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Peraturan Server</h1>
          <p className="text-lg text-muted-foreground">
            Bermainlah dengan adil dan hormati sesama pemain. Pelanggaran terhadap peraturan ini dapat mengakibatkan peringatan, mute, kick, hingga ban permanen.
          </p>
        </section>

        <section className="px-6 max-w-4xl mx-auto w-full">
          <div className="space-y-6">
            {rulesList.map((rule) => (
              <div key={rule.id} className="glass-effect p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-6 items-start hover:border-white/10 transition-colors">
                <div className="text-4xl font-black text-white/5 select-none hidden md:block">
                  {rule.id}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {rule.icon}
                    <h3 className="text-xl font-bold text-white">{rule.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
            <p className="text-sm text-primary/80">
              Staff memiliki hak penuh untuk menindak pelanggaran yang mungkin tidak tertulis secara eksplisit di atas jika dianggap mengganggu kenyamanan server. Keputusan staff adalah mutlak.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
