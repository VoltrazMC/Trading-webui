"use client";
import React, { useEffect, useState } from "react";

const PAIRS = [
  { id: "BTCUSDT", name: "BTC/USD (Bitcoin)", exchange: "BINANCE" },
  { id: "ETHUSDT", name: "ETH/USD (Ethereum)", exchange: "BINANCE" },
  { id: "BNBUSDT", name: "BNB/USD (Binance Coin)", exchange: "BINANCE" },
  { id: "SOLUSDT", name: "SOL/USD (Solana)", exchange: "BINANCE" },
  { id: "XRPUSDT", name: "XRP/USD (Ripple)", exchange: "BINANCE" },
  { id: "HYPEUSDT", name: "HYPE/USD (Hyperliquid)", exchange: "BINANCE" },
  { id: "USDJPY", name: "USD/JPY", exchange: "FX_IDC" },
  { id: "EURUSD", name: "EUR/USD", exchange: "FX_IDC" },
  { id: "XAUUSD", name: "XAU/USD (Gold)", exchange: "OANDA" },
  { id: "XAGUSD", name: "XAG/USD (Silver)", exchange: "OANDA" },
];

export default function TradingUI() {
  const [activePair, setActivePair] = useState(PAIRS[0]);
  const [activeTab, setActiveTab] = useState("buy");

  useEffect(() => {
    const container = document.getElementById("tv-chart");
    if (container) container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `${activePair.exchange}:${activePair.id}`,
          interval: "15",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          backgroundColor: "rgba(10, 10, 10, 0)", // Match their transparent theme
          gridColor: "rgba(255, 255, 255, 0.05)",
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          container_id: "tv-chart",
          toolbar_bg: "rgba(0,0,0,0)",
        });
      }
    };
    document.head.appendChild(script);
    return () => { if (container) container.innerHTML = ""; };
  }, [activePair]);

  return (
    <div className="relative min-h-screen overflow-y-auto overflow-x-hidden lg:h-screen lg:overflow-hidden bg-[#0A0A0A] text-zinc-300 font-sans">
      
      {/* Background radial layer exactly as extracted */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_18%_16%,#22d3ee15,#0000_40%)]"></div>
      
      <div className="relative z-10 flex min-h-screen flex-col overflow-visible before:pointer-events-none before:absolute">
        
        {/* Navbar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
           <div className="flex items-center gap-6">
              <h1 className="text-white font-bold tracking-widest text-lg">SHADOWYN ID</h1>
              <div className="hidden md:flex items-center gap-4 text-sm font-medium">
                 <span className="text-cyan-400 border-b-2 border-cyan-400 py-5">Trading</span>
                 <span className="text-zinc-500 hover:text-white transition-colors cursor-pointer">Leaderboard</span>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <select
                className="bg-zinc-900 border border-white/10 text-white text-sm rounded px-3 py-1.5 focus:outline-none focus:border-cyan-500/50 cursor-pointer font-mono"
                value={activePair.id}
                onChange={(e) => setActivePair(PAIRS.find((p) => p.id === e.target.value))}
              >
                {PAIRS.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              <div className="flex items-center gap-2 bg-zinc-900 border border-white/10 rounded px-3 py-1.5">
                 <div className="w-5 h-5 bg-zinc-800 rounded-full"></div>
                 <span className="text-sm text-white font-medium">Steve</span>
                 <span className="text-xs text-yellow-500 font-mono ml-2">10K 🪙</span>
              </div>
           </div>
        </header>

        {/* EXACT Extracted Grid layout: [56px_minmax(0,1fr)_390px] */}
        <div className="grid flex-1 grid-cols-1 gap-2.5 p-2.5 lg:min-h-0 lg:grid-cols-[56px_minmax(0,1fr)_390px] lg:grid-rows-[minmax(0,1fr)_208px]">
          
          {/* Left Sidebar Menu */}
          <aside className="relative z-[80] flex min-w-0 items-center gap-2 overflow-x-auto rounded-2xl border border-white/5 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.16)] ring-1 ring-white/5 no-scrollbar backdrop-blur-xl lg:row-span-2 lg:min-h-0 lg:flex-col lg:gap-1 lg:overflow-visible bg-[#111111]/80">
            {['📈','💰','⚙️'].map((ico,i) => (
              <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${i===0?'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20':'text-zinc-500 hover:bg-white/5 hover:text-white'}`}>
                {ico}
              </div>
            ))}
          </aside>

          {/* Chart Area */}
          <main className="min-h-0 overflow-hidden bg-[#111111]/80 rounded-2xl border border-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl">
             <div className="aspect-video min-h-0 sm:aspect-auto sm:h-[460px] lg:h-full relative p-1" id="tv-chart"></div>
          </main>

          {/* Right Form / Orderbook */}
          <aside className="min-h-0 flex flex-col gap-3 overflow-visible rounded-2xl border border-white/5 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.16)] ring-1 ring-white/5 no-scrollbar backdrop-blur-xl lg:row-span-2 lg:overflow-y-auto bg-[#111111]/80">
            
            {/* Form Buy/Sell Toggle */}
            <div className="flex bg-black/50 p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setActiveTab("buy")}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${activeTab === "buy" ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "text-zinc-500 hover:text-white"}`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab("sell")}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${activeTab === "sell" ? "bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]" : "text-zinc-500 hover:text-white"}`}
              >
                Sell
              </button>
            </div>

            <div className="space-y-2 mt-1">
              <div className="bg-black/40 border border-white/5 rounded-lg flex items-center px-3 h-10 focus-within:border-white/20 transition-colors">
                <span className="text-zinc-500 text-xs w-12">Price</span>
                <input type="text" className="bg-transparent flex-1 text-right text-white text-sm focus:outline-none font-mono" placeholder="Market" />
                <span className="text-zinc-500 text-xs ml-2 w-8 text-right">USD</span>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-lg flex items-center px-3 h-10 focus-within:border-white/20 transition-colors">
                <span className="text-zinc-500 text-xs w-12">Amount</span>
                <input type="text" className="bg-transparent flex-1 text-right text-white text-sm focus:outline-none font-mono" placeholder="0.00" />
                <span className="text-zinc-500 text-xs ml-2 w-8 text-right text-[10px]">{activePair.id.replace('USDT','').replace('USD','')}</span>
              </div>
              
              <div className="flex justify-between gap-1 py-1">
                 {['25%','50%','75%','Max'].map(p => (
                   <button key={p} className="flex-1 bg-white/5 hover:bg-white/10 py-1 text-xs text-zinc-400 rounded transition-colors">{p}</button>
                 ))}
              </div>

              <button className={`w-full h-10 rounded-lg font-bold text-sm text-black mt-2 transition-all ${activeTab === "buy" ? "bg-emerald-500 hover:bg-emerald-400" : "bg-rose-500 text-white hover:bg-rose-400"}`}>
                {activeTab === "buy" ? "Execute Buy" : "Execute Sell"}
              </button>
            </div>

            {/* Orderbook Mock */}
            <div className="flex-1 mt-4 flex flex-col bg-black/20 rounded-lg p-2 border border-white/5">
               <div className="flex justify-between px-1 mb-2">
                 <span className="text-[10px] font-semibold text-zinc-500 uppercase">Price (USD)</span>
                 <span className="text-[10px] font-semibold text-zinc-500 uppercase">Amount</span>
               </div>
               <div className="flex-1 flex flex-col gap-[2px]">
                 {[...Array(5)].map((_,i) => (
                    <div key={'s'+i} className="flex justify-between text-xs font-mono px-1 py-0.5 hover:bg-white/5 cursor-pointer rounded-sm relative">
                      <div className="absolute right-0 top-0 bottom-0 bg-rose-500/10" style={{width: `${(5-i)*18}%`}}></div>
                      <span className="text-rose-500 relative z-10">{(150+(5-i)*0.1).toFixed(2)}</span>
                      <span className="text-zinc-300 relative z-10">{(Math.random()*2).toFixed(4)}</span>
                    </div>
                 ))}
                 <div className="my-1 py-1 border-y border-white/5 flex items-center justify-between px-1">
                    <span className="text-cyan-400 font-mono font-bold">150.00</span>
                    <span className="text-zinc-500 text-[10px]">Spread 0.10</span>
                 </div>
                 {[...Array(5)].map((_,i) => (
                    <div key={'b'+i} className="flex justify-between text-xs font-mono px-1 py-0.5 hover:bg-white/5 cursor-pointer rounded-sm relative">
                      <div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10" style={{width: `${(i+1)*18}%`}}></div>
                      <span className="text-emerald-500 relative z-10">{(149.9-(i)*0.1).toFixed(2)}</span>
                      <span className="text-zinc-300 relative z-10">{(Math.random()*2).toFixed(4)}</span>
                    </div>
                 ))}
               </div>
            </div>
          </aside>
            
          {/* Bottom Positions */}
          <section className="min-h-[200px] flex flex-col overflow-hidden rounded-2xl border border-white/5 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.14)] ring-1 ring-white/5 backdrop-blur-xl lg:col-start-2 lg:min-h-0 bg-[#111111]/80">
            <div className="flex gap-4 border-b border-white/5 pb-2">
              <button className="text-sm font-medium text-cyan-400 border-b border-cyan-400 pb-2 -mb-2">Positions (0)</button>
              <button className="text-sm font-medium text-zinc-500 hover:text-white transition-colors pb-2">Open Orders</button>
              <button className="text-sm font-medium text-zinc-500 hover:text-white transition-colors pb-2">History</button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-sm text-zinc-500">
               <svg className="w-12 h-12 mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 12H4M20 12l-4-4m4 4l-4 4" /></svg>
               No active positions for {activePair.name}
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
}
