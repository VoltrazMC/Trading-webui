"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TrendingUp, TrendingDown, Clock, Search, ArrowRightLeft, DollarSign, Activity, ChevronRight, BarChart2 } from "lucide-react";
import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";
import axios from "axios";

const TRADING_ASSETS = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", ticker: "BTCUSDT", type: "crypto", desc: "Mata uang kripto paling likuid di dunia" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", ticker: "ETHUSDT", type: "crypto", desc: "Platform kontrak pintar terbesar" },
  { id: "binancecoin", symbol: "BNB", name: "Binance Coin", ticker: "BNBUSDT", type: "crypto", desc: "Token ekosistem Binance" },
  { id: "solana", symbol: "SOL", name: "Solana", ticker: "SOLUSDT", type: "crypto", desc: "Platform blockchain dengan throughput tinggi" },
  { id: "ripple", symbol: "XRP", name: "Ripple", ticker: "XRPUSDT", type: "crypto", desc: "Solusi pembayaran lintas batas" },
  { id: "hyperliquid", symbol: "HYPE", name: "Hyperliquid", ticker: "HYPEUSDT", type: "crypto", desc: "Blockchain DeFi Layer-1" },
  { id: "usdjpy", symbol: "USD/JPY", name: "USD/JPY", ticker: "USDJPY", type: "forex", desc: "Pasangan forex paling populer di Asia" },
  { id: "eurusd", symbol: "EUR/USD", name: "EUR/USD", ticker: "EURUSD", type: "forex", desc: "Pasangan forex paling likuid di dunia" },
  { id: "gold", symbol: "XAU/USD", name: "Gold (Emas)", ticker: "XAUUSD", type: "metal", desc: "Logam mulia safe haven global" },
  { id: "silver", symbol: "XAG/USD", name: "Silver (Perak)", ticker: "XAGUSD", type: "metal", desc: "Logam industri & safe haven" },
];

export default function TradingPage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [chartData, setChartData] = useState([]);

  // Fetch real crypto data from CoinGecko
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const ids = TRADING_ASSETS.filter(a => a.type === "crypto").map(a => a.id).join(",");
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: ids,
            order: 'market_cap_desc',
            sparkline: true,
          }
        });

        // Merge Coingecko data with our custom assets (mock forex/metals for now if they aren't on CG)
        const cgData = response.data;
        const mergedAssets = TRADING_ASSETS.map(asset => {
          const apiData = cgData.find(c => c.id === asset.id);
          if (apiData) {
            return {
              ...asset,
              image: apiData.image,
              current_price: apiData.current_price,
              price_change_percentage_24h: apiData.price_change_percentage_24h,
              sparkline_in_7d: apiData.sparkline_in_7d
            };
          }
          // Mock data for forex/metals until real API is added
          const mockPrice = asset.type === "metal" ? (asset.symbol.includes("XAU") ? 2340.5 : 28.4) : (asset.symbol.includes("JPY") ? 150.2 : 1.08);
          return {
            ...asset,
            image: `https://ui-avatars.com/api/?name=${asset.symbol}&background=random&color=fff`,
            current_price: mockPrice,
            price_change_percentage_24h: (Math.random() * 2) - 1,
            sparkline_in_7d: { price: Array.from({length: 168}, () => mockPrice + (Math.random() * mockPrice * 0.01 - mockPrice * 0.005)) }
          };
        });

        setCoins(mergedAssets);
        if (mergedAssets.length > 0) {
          setSelectedCoin(mergedAssets[0]);
          generateChartData(mergedAssets[0].sparkline_in_7d.price);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
        setLoading(false);
      }
    };

    fetchCoins();
    const interval = setInterval(fetchCoins, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const generateChartData = (sparklineData) => {
    if (!sparklineData) return;

    const formattedData = sparklineData.map((price, index) => ({
      time: index,
      price: price
    }));
    setChartData(formattedData);
  };

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin);
    if (coin.sparkline_in_7d && coin.sparkline_in_7d.price) {
      generateChartData(coin.sparkline_in_7d.price);
    }
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-10 pb-20 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="mb-8">
            <h1 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
              Crypto Exchange
            </h1>
            <p className="text-gray-400 font-medium">Trade virtual cryptocurrency with real-time market data directly in Voltraz MC.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Column - Markets */}
            <div className="lg:col-span-1 flex flex-col gap-6">

              {/* Account Balance (Mock) */}
              <div className="bg-[#111111] rounded-3xl p-6 border border-white/5 shadow-2xl">
                <p className="text-sm text-gray-400 font-medium mb-1">In-Game Balance</p>
                <div className="flex items-end gap-3 mb-4">
                  <h2 className="text-3xl font-black text-white">$24,500.00</h2>
                  <span className="text-green-400 text-sm font-bold flex items-center mb-1 bg-green-400/10 px-2 py-0.5 rounded">
                    <TrendingUp className="w-3 h-3 mr-1" /> +$450 Today
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-bold transition-all">
                    Deposit
                  </button>
                  <button className="flex-1 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-xl text-sm font-bold transition-all">
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Market List */}
              <div className="bg-[#111111] rounded-3xl border border-white/5 shadow-2xl flex-grow flex flex-col h-[600px]">
                <div className="p-5 border-b border-white/5">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search coins..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full bg-black/50 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex-grow overflow-y-auto custom-scrollbar p-2">
                  {loading ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {filteredCoins.map((coin) => (
                        <button
                          key={coin.id}
                          onClick={() => handleSelectCoin(coin)}
                          className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all ${selectedCoin?.id === coin.id ? 'bg-blue-600/10 border border-blue-500/20' : 'hover:bg-white/5 border border-transparent'}`}
                        >
                          <div className="flex items-center gap-3">
                            <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                            <div className="text-left">
                            <p className="font-bold text-white text-sm">{coin.symbol.toUpperCase()} <span className="text-gray-600 text-xs ml-1 bg-white/5 px-1 rounded">{coin.ticker}</span></p>
                            <p className="text-xs text-gray-500 max-w-[120px] truncate">{coin.desc}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-mono text-white text-sm font-medium">${coin.current_price.toLocaleString()}</p>
                            <p className={`text-xs font-bold flex items-center justify-end gap-1 ${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {coin.price_change_percentage_24h >= 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Chart & Trading */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Chart Section */}
              <div className="bg-[#111111] rounded-3xl p-6 border border-white/5 shadow-2xl h-[450px] flex flex-col">
                {selectedCoin ? (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <img src={selectedCoin.image} alt={selectedCoin.name} className="w-12 h-12 rounded-full" />
                        <div>
                          <h2 className="text-2xl font-black text-white">{selectedCoin.name} <span className="text-gray-500 text-lg uppercase">{selectedCoin.symbol}</span></h2>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xl font-mono text-white">${selectedCoin.current_price.toLocaleString()}</span>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${selectedCoin.price_change_percentage_24h >= 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                              {selectedCoin.price_change_percentage_24h >= 0 ? '+' : ''}{selectedCoin.price_change_percentage_24h.toFixed(2)}% (24h)
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="hidden sm:flex gap-2 bg-black/50 p-1 rounded-lg border border-white/5">
                        {['1H', '1D', '1W', '1M', '1Y'].map(time => (
                          <button key={time} className={`px-3 py-1.5 text-xs font-bold rounded-md ${time === '1W' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}>
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex-grow w-full h-full relative -ml-4">
                      {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData}>
                            <defs>
                              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={selectedCoin.price_change_percentage_24h >= 0 ? '#4ade80' : '#f87171'} stopOpacity={0.3}/>
                                <stop offset="95%" stopColor={selectedCoin.price_change_percentage_24h >= 0 ? '#4ade80' : '#f87171'} stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <Tooltip
                              contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                              itemStyle={{ color: '#fff' }}
                              formatter={(value) => [`$${value.toFixed(2)}`, 'Price']}
                              labelFormatter={() => ''}
                            />
                            <Area
                              type="monotone"
                              dataKey="price"
                              stroke={selectedCoin.price_change_percentage_24h >= 0 ? '#4ade80' : '#f87171'}
                              strokeWidth={2}
                              fillOpacity={1}
                              fill="url(#colorPrice)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                          Loading chart data...
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex-grow flex items-center justify-center flex-col text-gray-500">
                    <BarChart2 className="w-12 h-12 mb-3 opacity-20" />
                    <p>Select a coin to view chart</p>
                  </div>
                )}
              </div>

              {/* Trading Action */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#111111] rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" /> Buy {selectedCoin?.symbol.toUpperCase()}
                  </h3>

                  <div className="space-y-4 relative z-10">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">Amount</span>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-bold">{selectedCoin?.symbol.toUpperCase()}</span>
                      <input type="number" placeholder="0.00" className="w-full bg-black/50 border border-white/10 rounded-xl pl-20 pr-16 py-4 text-right text-white font-mono focus:outline-none focus:border-green-500/50" />
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 px-1">
                      <span>Available: $24,500.00</span>
                      <span>Est: 0.00000000 {selectedCoin?.symbol.toUpperCase()}</span>
                    </div>

                    <button className="w-full py-4 bg-green-500 hover:bg-green-600 text-black font-black rounded-xl transition-all shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]">
                      Buy {selectedCoin?.name}
                    </button>
                  </div>
                </div>

                <div className="bg-[#111111] rounded-3xl p-6 border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" /> Sell {selectedCoin?.symbol.toUpperCase()}
                  </h3>

                  <div className="space-y-4 relative z-10">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">Amount</span>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-bold">{selectedCoin?.symbol.toUpperCase()}</span>
                      <input type="number" placeholder="0.00" className="w-full bg-black/50 border border-white/10 rounded-xl pl-20 pr-16 py-4 text-right text-white font-mono focus:outline-none focus:border-red-500/50" />
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 px-1">
                      <span>Available: 0.00 {selectedCoin?.symbol.toUpperCase()}</span>
                      <span>Est: $0.00</span>
                    </div>

                    <button className="w-full py-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white font-black rounded-xl transition-all border border-red-500/20 hover:border-red-500">
                      Sell {selectedCoin?.name}
                    </button>
                  </div>
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