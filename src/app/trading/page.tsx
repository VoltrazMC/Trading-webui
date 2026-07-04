"use client";

import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { AuthModal } from '@/components/auth-modal';
import { TrendingUp, TrendingDown, RefreshCcw, DollarSign, Activity, Coins, ShieldAlert } from 'lucide-react';

export default function Trading() {
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // User state
  const [balance, setBalance] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState({ symbol: "BTCUSDT", name: "Bitcoin", exchange: "BINANCE" });

  useEffect(() => {
    // Cek auth di localStorage
    const savedToken = localStorage.getItem('voltraz_trading_token');
    if (savedToken) {
      setAuthToken(savedToken);
      setIsAuthenticated(true);
      setBalance(15000); // Mock init balance for authenticated user
    }

    // Invest Plugin v2.0 Market Pairs
    setCryptoData([
      { symbol: "BTC/USD", tvSymbol: "BTCUSDT", exchange: "BINANCE", name: "Bitcoin", price: 62450.20, change: 2.4, high: 63500, low: 61200 },
      { symbol: "ETH/USD", tvSymbol: "ETHUSDT", exchange: "BINANCE", name: "Ethereum", price: 3420.15, change: -1.2, high: 3500, low: 3380 },
      { symbol: "BNB/USD", tvSymbol: "BNBUSDT", exchange: "BINANCE", name: "Binance Coin", price: 580.40, change: 0.5, high: 590, low: 575 },
      { symbol: "SOL/USD", tvSymbol: "SOLUSDT", exchange: "BINANCE", name: "Solana", price: 145.80, change: 5.6, high: 148, low: 138 },
      { symbol: "XRP/USD", tvSymbol: "XRPUSDT", exchange: "BINANCE", name: "Ripple", price: 0.52, change: -0.8, high: 0.55, low: 0.50 },
      { symbol: "HYPE/USD", tvSymbol: "HYPEUSDT", exchange: "BINANCE", name: "Hyperliquid", price: 12.30, change: 14.2, high: 13.0, low: 10.5 },
      { symbol: "USD/JPY", tvSymbol: "USDJPY", exchange: "FX_IDC", name: "US Dollar / Japanese Yen", price: 154.20, change: 0.1, high: 154.5, low: 153.8 },
      { symbol: "EUR/USD", tvSymbol: "EURUSD", exchange: "FX_IDC", name: "Euro / US Dollar", price: 1.0850, change: -0.2, high: 1.088, low: 1.082 },
      { symbol: "XAU/USD", tvSymbol: "XAUUSD", exchange: "OANDA", name: "Gold (Emas)", price: 2350.40, change: 0.8, high: 2360, low: 2330 },
      { symbol: "XAG/USD", tvSymbol: "XAGUSD", exchange: "OANDA", name: "Silver (Perak)", price: 28.50, change: 1.5, high: 29.0, low: 28.1 },
    ]);

    setLoading(false);
  }, []);

  const [leverage, setLeverage] = useState(100);
  const [tradeType, setTradeType] = useState<'LONG' | 'SHORT'>('LONG');
  const [margin, setMargin] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');

  const positionSize = (Number(margin) || 0) * leverage;

  const handleOpenPosition = async () => {
    if (!margin || Number(margin) <= 0) {
      alert("Masukkan margin yang valid");
      return;
    }

    if (Number(margin) > balance) {
      alert("Balance tidak cukup");
      return;
    }

    try {
      // INI ADALAH LOGIKA API CALL KE PLUGIN
      /*
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/position/open`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: tradeType.toLowerCase(),
          pair: selectedAsset.symbol,
          margin: Number(margin),
          leverage,
          stopLoss: stopLoss ? Number(stopLoss) : null,
          takeProfit: takeProfit ? Number(takeProfit) : null
        })
      });
      if (!res.ok) throw new Error("Gagal membuka posisi");
      */

      alert(`Berhasil membuka posisi ${tradeType} ${selectedAsset.symbol}!\nMargin: $${margin}\nLeverage: ${leverage}x`);
      setBalance(prev => prev - Number(margin));
      setMargin('');

    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleAuthSuccess = (token: string) => {
    setAuthToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('voltraz_trading_token', token);
    setBalance(15000); // Mock balance
    alert('Akun berhasil dihubungkan!');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthToken('');
    localStorage.removeItem('voltraz_trading_token');
    setBalance(0);
  };

  return (
    <>
      <Navbar />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
      <main className="flex-1 flex flex-col pt-24 pb-20">
        <section className="py-8 px-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 mb-6">
            <Activity size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Grafik Trading</h1>
          <p className="text-lg text-muted-foreground">
            Beli dan jual aset crypto & forex di dalam game! Harga tersinkronisasi secara real-time dari Binance & Yahoo Finance.
          </p>
        </section>

        <section className="px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-3 glass-effect p-2 sm:p-4 rounded-2xl border border-white/5 flex flex-col h-[500px] sm:h-[600px] overflow-hidden">
            <div className="flex-1 w-full h-full relative rounded-xl overflow-hidden">
              <iframe
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=${selectedAsset.exchange}%3A${selectedAsset.tvSymbol}&interval=60&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=Asia%2FJakarta&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=&utm_medium=widget&utm_campaign=chart&utm_term=${selectedAsset.exchange}%3A${selectedAsset.tvSymbol}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="TradingView Chart"
              ></iframe>
            </div>
          </div>

          {/* Right Sidebar - Trade Execution */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Quick Trade */}
            <div className="glass-effect p-5 rounded-2xl border border-white/5 flex flex-col h-full relative overflow-hidden">
              {!isAuthenticated && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center">
                  <ShieldAlert className="text-yellow-500 mb-3" size={32} />
                  <h3 className="text-white font-bold mb-2">Belum Terhubung</h3>
                  <p className="text-xs text-muted-foreground mb-4">Hubungkan akun Minecraft kamu untuk mulai trading.</p>
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full py-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors text-sm"
                  >
                    Link Account
                  </button>
                </div>
              )}

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Trade {selectedAsset.name.split(' ')[0]}</h2>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-bold text-muted-foreground flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                    <Coins size={14} className="text-yellow-500" />
                    ${balance.toLocaleString()}
                  </div>
                  {isAuthenticated && (
                    <button
                      onClick={handleLogout}
                      className="text-xs text-red-400 hover:text-red-300 font-bold bg-red-500/10 px-2 py-1 rounded"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>

              <div className="flex bg-white/5 rounded-lg p-1 mb-6">
                <button
                  onClick={() => setTradeType('LONG')}
                  className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${tradeType === 'LONG' ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'text-muted-foreground hover:text-white'}`}
                >
                  LONG
                </button>
                <button
                  onClick={() => setTradeType('SHORT')}
                  className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${tradeType === 'SHORT' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-muted-foreground hover:text-white'}`}
                >
                  SHORT
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Margin (Invest)</label>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="1000"
                      value={margin}
                      onChange={(e) => setMargin(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white font-mono outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">$</span>
                  </div>
                </div>

                {/* Leverage Slider */}
                <div className="pt-2 pb-2">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2 font-bold">
                    <span>Leverage</span>
                    <span className="text-white bg-white/10 px-2 py-0.5 rounded">{leverage}x</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="200"
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    className="w-full accent-primary h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1 px-1">
                    <span>1x</span>
                    <span>50x</span>
                    <span>100x</span>
                    <span>200x</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1 block">Stop Loss</label>
                    <input
                      type="number"
                      placeholder="Optional"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1 block">Take Profit</label>
                    <input
                      type="number"
                      placeholder="Optional"
                      value={takeProfit}
                      onChange={(e) => setTakeProfit(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div className="h-px bg-white/5 w-full my-4"></div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Position Size:</span>
                  <span className="font-bold text-white font-mono">${positionSize.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleOpenPosition}
                className={`w-full py-4 text-white font-black rounded-xl transition-colors mt-auto text-lg ${tradeType === 'LONG' ? 'bg-green-500 hover:bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'bg-red-500 hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.3)]'}`}
              >
                OPEN {tradeType}
              </button>

              <div className="text-xs text-center text-muted-foreground mt-4 space-y-1">
                <p>Swap fee: <span className="text-white">0.05%</span> / 24h</p>
                <p>Gunakan command <span className="text-accent font-mono px-1 bg-white/5 rounded border border-white/10">/open</span> in-game</p>
              </div>
            </div>
          </div>

          {/* Market List */}
          <div className="lg:col-span-4 glass-effect rounded-2xl border border-white/5 overflow-hidden mt-2">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h2 className="text-lg font-bold">Markets (Live Data)</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <input type="text" placeholder="Search..." className="bg-black/40 border border-white/10 rounded-lg pl-8 pr-4 py-1.5 text-sm text-white outline-none focus:border-primary w-48" />
                  <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <button className="text-muted-foreground hover:text-white flex items-center gap-2 text-sm bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 transition-colors">
                  <RefreshCcw size={14} /> Refresh
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-black/20 text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="p-4 font-bold">Asset</th>
                    <th className="p-4 font-bold text-right">Price</th>
                    <th className="p-4 font-bold text-right">24h Change</th>
                    <th className="p-4 font-bold text-right">24h High</th>
                    <th className="p-4 font-bold text-right">24h Low</th>
                    <th className="p-4 font-bold text-center w-24">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((coin, i) => (
                    <tr
                      key={i}
                      onClick={() => setSelectedAsset({ symbol: coin.tvSymbol, name: coin.name, exchange: coin.exchange })}
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group ${selectedAsset.tvSymbol === coin.tvSymbol ? 'bg-primary/5' : ''}`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${coin.symbol.startsWith('USD') || coin.symbol.startsWith('EUR') || coin.symbol.startsWith('X') ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-primary/20 text-primary border border-primary/30'}`}>
                            {coin.symbol.split('/')[0].substring(0, 3)}
                          </div>
                          <div>
                            <div className="font-bold text-white group-hover:text-primary transition-colors">{coin.symbol}</div>
                            <div className="text-xs text-muted-foreground">{coin.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right font-bold text-white font-mono">
                        ${coin.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 4})}
                      </td>
                      <td className="p-4 text-right">
                        <div className={`inline-flex items-center gap-1 font-bold ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'} bg-black/40 px-2 py-1 rounded-md`}>
                          {coin.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                          {Math.abs(coin.change)}%
                        </div>
                      </td>
                      <td className="p-4 text-right font-mono text-muted-foreground text-sm">
                        ${coin.high.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 4})}
                      </td>
                      <td className="p-4 text-right font-mono text-muted-foreground text-sm">
                        ${coin.low.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 4})}
                      </td>
                      <td className="p-4 text-center">
                        <button className={`w-full py-1.5 font-bold rounded-lg text-sm transition-colors border ${selectedAsset.tvSymbol === coin.tvSymbol ? 'bg-primary text-white border-primary' : 'bg-primary/10 hover:bg-primary text-primary hover:text-white border-primary/20 hover:border-primary'}`}>
                          {selectedAsset.tvSymbol === coin.tvSymbol ? 'Trading' : 'Trade'}
                        </button>
                      </td>
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
