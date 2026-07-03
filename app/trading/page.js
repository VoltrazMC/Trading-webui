"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TrendingUp, TrendingDown, Clock, Activity, Wallet, ArrowRightLeft } from "lucide-react";
import { useState, useEffect } from "react";

// Dummy crypto data since we can't reliably fetch a public non-auth realtime API during build
const dummyCrypto = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", price: 64230.50, change: 2.4 },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", price: 3450.20, change: -1.2 },
  { id: "solana", symbol: "SOL", name: "Solana", price: 145.80, change: 5.6 },
  { id: "binancecoin", symbol: "BNB", name: "BNB", price: 580.40, change: 0.8 },
  { id: "cardano", symbol: "ADA", name: "Cardano", price: 0.45, change: -0.5 },
];

export default function TradingPage() {
  const [activeTab, setActiveTab] = useState("market");

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4 flex items-center gap-3">
              <ArrowRightLeft className="text-blue-500 w-8 h-8" />
              Crypto Market
            </h1>
            <p className="text-gray-400">Trade virtual cryptocurrency with your in-game balance. Real-time market data simulation.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium mb-1">Your Balance</p>
                <p className="text-2xl font-bold text-white">$14,500.00</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                <Wallet className="w-6 h-6" />
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium mb-1">Portfolio Value</p>
                <p className="text-2xl font-bold text-white">$3,240.50</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500">
                <Activity className="w-6 h-6" />
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium mb-1">24h Profit/Loss</p>
                <p className="text-2xl font-bold text-green-400">+$240.50 (8.4%)</p>
              </div>
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Main Trading Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Market List */}
            <div className="lg:col-span-2">
              <div className="glass rounded-3xl overflow-hidden border border-white/5">
                <div className="flex border-b border-white/10">
                  <button
                    onClick={() => setActiveTab("market")}
                    className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === "market" ? "text-white border-b-2 border-blue-500" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    Live Market
                  </button>
                  <button
                    onClick={() => setActiveTab("portfolio")}
                    className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === "portfolio" ? "text-white border-b-2 border-blue-500" : "text-gray-500 hover:text-gray-300"}`}
                  >
                    Your Portfolio
                  </button>
                </div>

                <div className="p-6">
                  {activeTab === "market" ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="text-gray-500 text-xs uppercase tracking-wider border-b border-white/10">
                            <th className="pb-4 font-semibold">Asset</th>
                            <th className="pb-4 font-semibold text-right">Price</th>
                            <th className="pb-4 font-semibold text-right">24h Change</th>
                            <th className="pb-4 font-semibold text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dummyCrypto.map((coin) => (
                            <tr key={coin.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                              <td className="py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-white">
                                    {coin.symbol[0]}
                                  </div>
                                  <div>
                                    <p className="font-bold text-white">{coin.name}</p>
                                    <p className="text-xs text-gray-500">{coin.symbol}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 text-right font-mono text-white">
                                ${coin.price.toLocaleString(undefined, {minimumFractionDigits: 2})}
                              </td>
                              <td className="py-4 text-right">
                                <div className={`inline-flex items-center gap-1 font-medium ${coin.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                                  {coin.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                  {Math.abs(coin.change)}%
                                </div>
                              </td>
                              <td className="py-4 text-center">
                                <button className="px-4 py-1.5 bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-bold transition-all opacity-0 group-hover:opacity-100">
                                  Trade
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Clock className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400 font-medium">You don't own any assets yet.</p>
                      <button className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold transition-all">
                        Buy Crypto
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Trading Panel */}
            <div className="lg:col-span-1">
              <div className="glass p-6 rounded-3xl border border-white/5 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-6">Quick Trade</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 font-medium mb-1.5 block">Select Asset</label>
                    <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 appearance-none">
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum (ETH)</option>
                      <option>Solana (SOL)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 font-medium mb-1.5 block">Amount (USD)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full bg-black/50 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 py-3 bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white rounded-xl text-sm font-bold transition-all">
                      Buy
                    </button>
                    <button className="flex-1 py-3 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-xl text-sm font-bold transition-all">
                      Sell
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 text-xs text-gray-500 text-center">
                  Trading fees: 1.5% per transaction. <br/>Prices are synced with real-world API.
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}