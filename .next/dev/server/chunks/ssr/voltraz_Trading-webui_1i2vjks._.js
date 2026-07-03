module.exports = [
"[project]/voltraz/Trading-webui/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TradingUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const PAIRS = [
    {
        id: "BTCUSDT",
        name: "BTC/USD (Bitcoin)",
        exchange: "BINANCE"
    },
    {
        id: "ETHUSDT",
        name: "ETH/USD (Ethereum)",
        exchange: "BINANCE"
    },
    {
        id: "BNBUSDT",
        name: "BNB/USD (Binance Coin)",
        exchange: "BINANCE"
    },
    {
        id: "SOLUSDT",
        name: "SOL/USD (Solana)",
        exchange: "BINANCE"
    },
    {
        id: "XRPUSDT",
        name: "XRP/USD (Ripple)",
        exchange: "BINANCE"
    },
    {
        id: "HYPEUSDT",
        name: "HYPE/USD (Hyperliquid)",
        exchange: "BINANCE"
    },
    {
        id: "USDJPY",
        name: "USD/JPY",
        exchange: "FX_IDC"
    },
    {
        id: "EURUSD",
        name: "EUR/USD",
        exchange: "FX_IDC"
    },
    {
        id: "XAUUSD",
        name: "XAU/USD (Gold)",
        exchange: "OANDA"
    },
    {
        id: "XAGUSD",
        name: "XAG/USD (Silver)",
        exchange: "OANDA"
    }
];
function TradingUI() {
    const [activePair, setActivePair] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(PAIRS[0]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("buy");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = document.getElementById("tv-chart");
        if (container) container.innerHTML = "";
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/tv.js";
        script.async = true;
        script.onload = ()=>{
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
                    backgroundColor: "rgba(10, 10, 10, 0)",
                    gridColor: "rgba(255, 255, 255, 0.05)",
                    hide_top_toolbar: false,
                    hide_legend: false,
                    save_image: false,
                    container_id: "tv-chart",
                    toolbar_bg: "rgba(0,0,0,0)"
                });
            }
        };
        document.head.appendChild(script);
        return ()=>{
            if (container) container.innerHTML = "";
        };
    }, [
        activePair
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-y-auto overflow-x-hidden lg:h-screen lg:overflow-hidden bg-[#0A0A0A] text-zinc-300 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_18%_16%,#22d3ee15,#0000_40%)]"
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex min-h-screen flex-col overflow-visible before:pointer-events-none before:absolute",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-white font-bold tracking-widest text-lg",
                                        children: "SHADOWYN ID"
                                    }, void 0, false, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center gap-4 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-400 border-b-2 border-cyan-400 py-5",
                                                children: "Trading"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 66,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-500 hover:text-white transition-colors cursor-pointer",
                                                children: "Leaderboard"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 67,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                lineNumber: 63,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-zinc-900 border border-white/10 text-white text-sm rounded px-3 py-1.5 focus:outline-none focus:border-cyan-500/50 cursor-pointer font-mono",
                                        value: activePair.id,
                                        onChange: (e)=>setActivePair(PAIRS.find((p)=>p.id === e.target.value)),
                                        children: PAIRS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: p.name
                                            }, p.id, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 77,
                                                columnNumber: 35
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-zinc-900 border border-white/10 rounded px-3 py-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 bg-zinc-800 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 80,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-white font-medium",
                                                children: "Steve"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 81,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-yellow-500 font-mono ml-2",
                                                children: "10K 🪙"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 82,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                lineNumber: 71,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid flex-1 grid-cols-1 gap-2.5 p-2.5 lg:min-h-0 lg:grid-cols-[56px_minmax(0,1fr)_390px] lg:grid-rows-[minmax(0,1fr)_208px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "relative z-[80] flex min-w-0 items-center gap-2 overflow-x-auto rounded-2xl border border-white/5 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.16)] ring-1 ring-white/5 no-scrollbar backdrop-blur-xl lg:row-span-2 lg:min-h-0 lg:flex-col lg:gap-1 lg:overflow-visible bg-[#111111]/80",
                                children: [
                                    '📈',
                                    '💰',
                                    '⚙️'
                                ].map((ico, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${i === 0 ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-zinc-500 hover:bg-white/5 hover:text-white'}`,
                                        children: ico
                                    }, i, false, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "min-h-0 overflow-hidden bg-[#111111]/80 rounded-2xl border border-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-video min-h-0 sm:aspect-auto sm:h-[460px] lg:h-full relative p-1",
                                    id: "tv-chart"
                                }, void 0, false, {
                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                    lineNumber: 101,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "min-h-0 flex flex-col gap-3 overflow-visible rounded-2xl border border-white/5 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.16)] ring-1 ring-white/5 no-scrollbar backdrop-blur-xl lg:row-span-2 lg:overflow-y-auto bg-[#111111]/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex bg-black/50 p-1 rounded-lg border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab("buy"),
                                                className: `flex-1 py-1.5 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${activeTab === "buy" ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "text-zinc-500 hover:text-white"}`,
                                                children: "Buy"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTab("sell"),
                                                className: `flex-1 py-1.5 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${activeTab === "sell" ? "bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]" : "text-zinc-500 hover:text-white"}`,
                                                children: "Sell"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-black/40 border border-white/5 rounded-lg flex items-center px-3 h-10 focus-within:border-white/20 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-500 text-xs w-12",
                                                        children: "Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 125,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "bg-transparent flex-1 text-right text-white text-sm focus:outline-none font-mono",
                                                        placeholder: "Market"
                                                    }, void 0, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-500 text-xs ml-2 w-8 text-right",
                                                        children: "USD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-black/40 border border-white/5 rounded-lg flex items-center px-3 h-10 focus-within:border-white/20 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-500 text-xs w-12",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "bg-transparent flex-1 text-right text-white text-sm focus:outline-none font-mono",
                                                        placeholder: "0.00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-500 text-xs ml-2 w-8 text-right text-[10px]",
                                                        children: activePair.id.replace('USDT', '').replace('USD', '')
                                                    }, void 0, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 132,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between gap-1 py-1",
                                                children: [
                                                    '25%',
                                                    '50%',
                                                    '75%',
                                                    'Max'
                                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "flex-1 bg-white/5 hover:bg-white/10 py-1 text-xs text-zinc-400 rounded transition-colors",
                                                        children: p
                                                    }, p, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 137,
                                                        columnNumber: 20
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `w-full h-10 rounded-lg font-bold text-sm text-black mt-2 transition-all ${activeTab === "buy" ? "bg-emerald-500 hover:bg-emerald-400" : "bg-rose-500 text-white hover:bg-rose-400"}`,
                                                children: activeTab === "buy" ? "Execute Buy" : "Execute Sell"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 mt-4 flex flex-col bg-black/20 rounded-lg p-2 border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between px-1 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-semibold text-zinc-500 uppercase",
                                                        children: "Price (USD)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 149,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-semibold text-zinc-500 uppercase",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 150,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 148,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex flex-col gap-[2px]",
                                                children: [
                                                    [
                                                        ...Array(5)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs font-mono px-1 py-0.5 hover:bg-white/5 cursor-pointer rounded-sm relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute right-0 top-0 bottom-0 bg-rose-500/10",
                                                                    style: {
                                                                        width: `${(5 - i) * 18}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                                    lineNumber: 155,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-rose-500 relative z-10",
                                                                    children: (150 + (5 - i) * 0.1).toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                                    lineNumber: 156,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-300 relative z-10",
                                                                    children: (Math.random() * 2).toFixed(4)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                                    lineNumber: 157,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, 's' + i, true, {
                                                            fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-1 py-1 border-y border-white/5 flex items-center justify-between px-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-cyan-400 font-mono font-bold",
                                                                children: "150.00"
                                                            }, void 0, false, {
                                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                                lineNumber: 161,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-zinc-500 text-[10px]",
                                                                children: "Spread 0.10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                                lineNumber: 162,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                        lineNumber: 160,
                                                        columnNumber: 18
                                                    }, this),
                                                    [
                                                        ...Array(5)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs font-mono px-1 py-0.5 hover:bg-white/5 cursor-pointer rounded-sm relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute right-0 top-0 bottom-0 bg-emerald-500/10",
                                                                    style: {
                                                                        width: `${(i + 1) * 18}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                                    lineNumber: 166,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-500 relative z-10",
                                                                    children: (149.9 - i * 0.1).toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                                    lineNumber: 167,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-zinc-300 relative z-10",
                                                                    children: (Math.random() * 2).toFixed(4)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                                    lineNumber: 168,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, 'b' + i, true, {
                                                            fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 152,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "min-h-[200px] flex flex-col overflow-hidden rounded-2xl border border-white/5 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.14)] ring-1 ring-white/5 backdrop-blur-xl lg:col-start-2 lg:min-h-0 bg-[#111111]/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 border-b border-white/5 pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm font-medium text-cyan-400 border-b border-cyan-400 pb-2 -mb-2",
                                                children: "Positions (0)"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm font-medium text-zinc-500 hover:text-white transition-colors pb-2",
                                                children: "Open Orders"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm font-medium text-zinc-500 hover:text-white transition-colors pb-2",
                                                children: "History"
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex flex-col items-center justify-center text-sm text-zinc-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-12 h-12 mb-2 opacity-20",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1,
                                                    d: "M20 12H4M20 12l-4-4m4 4l-4 4"
                                                }, void 0, false, {
                                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                    lineNumber: 183,
                                                    columnNumber: 113
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                                lineNumber: 183,
                                                columnNumber: 16
                                            }, this),
                                            "No active positions for ",
                                            activePair.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/voltraz/Trading-webui/app/page.js",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/voltraz/Trading-webui/app/page.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/voltraz/Trading-webui/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/voltraz/Trading-webui/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=voltraz_Trading-webui_1i2vjks._.js.map