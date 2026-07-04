"use client";

import React, { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Trophy, Coins, Clock, Star } from 'lucide-react';
import { Crown } from 'lucide-react';

export default function Leaderboards() {
  const [activeTab, setActiveTab] = useState('wealth');

  const leaderboards = {
    wealth: [
      { rank: 1, name: "AiraaChan", value: "$12,450,000", avatar: "AiraaChan" },
      { rank: 2, name: "aikensuriken", value: "$9,230,000", avatar: "aikensuriken" },
      { rank: 3, name: "Ercya", value: "$8,150,000", avatar: "Ercya" },
      { rank: 4, name: "Zeroslashz", value: "$5,400,000", avatar: "Zeroslashz" },
      { rank: 5, name: "NightCream", value: "$4,800,000", avatar: "NightCream" },
      { rank: 6, name: "arifxyz", value: "$4,100,000", avatar: "arifxyz" },
      { rank: 7, name: "Ryoota", value: "$3,900,000", avatar: "Ryoota" },
      { rank: 8, name: "fyr1f", value: "$3,200,000", avatar: "fyr1f" },
      { rank: 9, name: "Rathurr", value: "$2,800,000", avatar: "Rathurr" },
      { rank: 10, name: "Joowsy", value: "$2,500,000", avatar: "Joowsy" },
    ],
    playtime: [
      { rank: 1, name: "Ryoota", value: "482 Jam", avatar: "Ryoota" },
      { rank: 2, name: "Ercya", value: "415 Jam", avatar: "Ercya" },
      { rank: 3, name: "Zeroslashz", value: "390 Jam", avatar: "Zeroslashz" },
      { rank: 4, name: "AiraaChan", value: "350 Jam", avatar: "AiraaChan" },
      { rank: 5, name: "aikensuriken", value: "320 Jam", avatar: "aikensuriken" },
    ],
    mcmmo: [
      { rank: 1, name: "aikensuriken", value: "Level 4250", avatar: "aikensuriken" },
      { rank: 2, name: "AiraaChan", value: "Level 3800", avatar: "AiraaChan" },
      { rank: 3, name: "fyr1f", value: "Level 3450", avatar: "fyr1f" },
      { rank: 4, name: "NightCream", value: "Level 3100", avatar: "NightCream" },
      { rank: 5, name: "arifxyz", value: "Level 2900", avatar: "arifxyz" },
    ]
  };

  const tabs = [
    { id: 'wealth', label: 'Top Balance', icon: <Coins size={18} /> },
    { id: 'playtime', label: 'Top Playtime', icon: <Clock size={18} /> },
    { id: 'mcmmo', label: 'Top mcMMO', icon: <Star size={18} /> },
  ];

  const currentData = leaderboards[activeTab as keyof typeof leaderboards] || leaderboards.wealth;

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-24 pb-20">
        <section className="py-12 px-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
            <Trophy size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Leaderboards</h1>
          <p className="text-lg text-muted-foreground">
            Pemain-pemain terbaik yang mendominasi VOLTRAZ MC. Apakah namamu ada di sini?
          </p>
        </section>

        <section className="px-6 max-w-5xl mx-auto w-full">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    : 'glass-effect text-muted-foreground hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Top 3 Podium */}
          <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-6 mb-12 mt-8">
            {/* Rank 2 */}
            {currentData[1] && (
              <div className="flex flex-col items-center order-2 md:order-1 w-full md:w-1/3 max-w-[200px]">
                <div className="relative mb-4 group">
                  <div className="absolute inset-0 bg-gray-400/20 rounded-lg blur-xl group-hover:bg-gray-400/40 transition-all"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://mc-heads.net/body/${currentData[1].avatar}/128`}
                    alt={currentData[1].name}
                    className="relative z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] h-32 object-contain hover:-translate-y-2 transition-transform duration-300"
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-400 text-gray-900 font-black flex items-center justify-center z-20 shadow-lg">
                    #2
                  </div>
                </div>
                <div className="glass-effect w-full p-4 rounded-t-xl border border-gray-400/30 text-center bg-gradient-to-t from-gray-400/10 to-transparent pt-6 pb-8 -mt-6">
                  <h3 className="font-bold text-white truncate px-2">{currentData[1].name}</h3>
                  <p className="text-accent font-medium mt-1">{currentData[1].value}</p>
                </div>
              </div>
            )}

            {/* Rank 1 */}
            {currentData[0] && (
              <div className="flex flex-col items-center order-1 md:order-2 w-full md:w-1/3 max-w-[220px]">
                <div className="relative mb-4 group">
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-lg blur-2xl group-hover:bg-yellow-400/40 transition-all"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://mc-heads.net/body/${currentData[0].avatar}/160`}
                    alt={currentData[0].name}
                    className="relative z-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] h-40 object-contain hover:-translate-y-2 transition-transform duration-300"
                  />
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-yellow-400 text-yellow-900 font-black flex items-center justify-center z-20 shadow-[0_0_15px_rgba(250,204,21,0.5)] text-lg">
                    #1
                  </div>
                  <Crown className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" size={32} />
                </div>
                <div className="glass-effect w-full p-4 rounded-t-xl border border-yellow-400/40 text-center bg-gradient-to-t from-yellow-400/20 to-transparent pt-8 pb-10 -mt-6 z-10 shadow-[0_-5px_20px_rgba(250,204,21,0.1)]">
                  <h3 className="font-bold text-lg text-white truncate px-2">{currentData[0].name}</h3>
                  <p className="text-yellow-400 font-bold mt-1">{currentData[0].value}</p>
                </div>
              </div>
            )}

            {/* Rank 3 */}
            {currentData[2] && (
              <div className="flex flex-col items-center order-3 md:order-3 w-full md:w-1/3 max-w-[200px]">
                <div className="relative mb-4 group">
                  <div className="absolute inset-0 bg-orange-600/20 rounded-lg blur-xl group-hover:bg-orange-600/40 transition-all"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://mc-heads.net/body/${currentData[2].avatar}/128`}
                    alt={currentData[2].name}
                    className="relative z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] h-32 object-contain hover:-translate-y-2 transition-transform duration-300"
                  />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-600 text-orange-100 font-black flex items-center justify-center z-20 shadow-lg">
                    #3
                  </div>
                </div>
                <div className="glass-effect w-full p-4 rounded-t-xl border border-orange-600/30 text-center bg-gradient-to-t from-orange-600/10 to-transparent pt-6 pb-8 -mt-6">
                  <h3 className="font-bold text-white truncate px-2">{currentData[2].name}</h3>
                  <p className="text-orange-400 font-medium mt-1">{currentData[2].value}</p>
                </div>
              </div>
            )}
          </div>

          {/* List Remaining */}
          <div className="glass-effect rounded-2xl border border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 font-semibold text-muted-foreground w-16 text-center">Rank</th>
                    <th className="p-4 font-semibold text-muted-foreground">Player</th>
                    <th className="p-4 font-semibold text-muted-foreground text-right">{
                      activeTab === 'wealth' ? 'Balance' :
                      activeTab === 'playtime' ? 'Time Played' : 'Level'
                    }</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.slice(3).map((player) => (
                    <tr key={player.rank} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-center font-bold text-muted-foreground">#{player.rank}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`https://mc-heads.net/avatar/${player.avatar}/32`} alt={player.name} className="w-8 h-8 rounded-md" />
                          <span className="font-medium text-white">{player.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right font-medium text-accent">{player.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
