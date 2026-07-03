(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/voltraz/Trading-webui/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TradingUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "9055a22c1d48c241bbb9beed6d1ab52e72cf9607ee4f24828bda618e11101db7") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9055a22c1d48c241bbb9beed6d1ab52e72cf9607ee4f24828bda618e11101db7";
    }
    const [activePair, setActivePair] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PAIRS[0]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("buy");
    let t0;
    if ($[1] !== activePair.exchange || $[2] !== activePair.id) {
        t0 = ({
            "TradingUI[useEffect()]": ()=>{
                const container = document.getElementById("tv-chart");
                if (container) {
                    container.innerHTML = "";
                }
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
                    if (container) {
                        container.innerHTML = "";
                    }
                };
            }
        })["TradingUI[useEffect()]"];
        $[1] = activePair.exchange;
        $[2] = activePair.id;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[4] !== activePair) {
        t1 = [
            activePair
        ];
        $[4] = activePair;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_18%_16%,#22d3ee15,#0000_40%)]"
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-white font-bold tracking-widest text-lg",
            children: "SHADOWYN ID"
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-4 text-sm font-medium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cyan-400 border-b-2 border-cyan-400 py-5",
                            children: "Trading"
                        }, void 0, false, {
                            fileName: "[project]/voltraz/Trading-webui/app/page.js",
                            lineNumber: 127,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 hover:text-white transition-colors cursor-pointer",
                            children: "Leaderboard"
                        }, void 0, false, {
                            fileName: "[project]/voltraz/Trading-webui/app/page.js",
                            lineNumber: 127,
                            columnNumber: 204
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 127,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = activePair.id;
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "TradingUI[<select>.onChange]": (e)=>setActivePair(PAIRS.find({
                    "TradingUI[<select>.onChange > PAIRS.find()]": (p)=>p.id === e.target.value
                }["TradingUI[<select>.onChange > PAIRS.find()]"]))
        })["TradingUI[<select>.onChange]"];
        t7 = PAIRS.map(_TradingUIPAIRSMap);
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] !== activePair.id) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "bg-zinc-900 border border-white/10 text-white text-sm rounded px-3 py-1.5 focus:outline-none focus:border-cyan-500/50 cursor-pointer font-mono",
            value: t5,
            onChange: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[11] = activePair.id;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 bg-zinc-900 border border-white/10 rounded px-3 py-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 bg-zinc-800 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 158,
                    columnNumber: 106
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-white font-medium",
                    children: "Steve"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 158,
                    columnNumber: 158
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-yellow-500 font-mono ml-2",
                    children: "10K 🪙"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 158,
                    columnNumber: 219
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        t8,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 165,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[14] = t8;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "relative z-[80] flex min-w-0 items-center gap-2 overflow-x-auto rounded-2xl border border-white/5 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.16)] ring-1 ring-white/5 no-scrollbar backdrop-blur-xl lg:row-span-2 lg:min-h-0 lg:flex-col lg:gap-1 lg:overflow-visible bg-[#111111]/80",
            children: [
                "\uD83D\uDCC8",
                "\uD83D\uDCB0",
                "\u2699\uFE0F"
            ].map(_TradingUIAnonymous)
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-0 overflow-hidden bg-[#111111]/80 rounded-2xl border border-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-video min-h-0 sm:aspect-auto sm:h-[460px] lg:h-full relative p-1",
                id: "tv-chart"
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 180,
                columnNumber: 158
            }, this)
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "TradingUI[<button>.onClick]": ()=>setActiveTab("buy")
        })["TradingUI[<button>.onClick]"];
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const t14 = `flex-1 py-1.5 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${activeTab === "buy" ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "text-zinc-500 hover:text-white"}`;
    let t15;
    if ($[19] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: t14,
            children: "Buy"
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = ({
            "TradingUI[<button>.onClick]": ()=>setActiveTab("sell")
        })["TradingUI[<button>.onClick]"];
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    const t17 = `flex-1 py-1.5 text-xs font-bold rounded-md transition-all uppercase tracking-wide ${activeTab === "sell" ? "bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]" : "text-zinc-500 hover:text-white"}`;
    let t18;
    if ($[22] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t16,
            className: t17,
            children: "Sell"
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[22] = t17;
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] !== t15 || $[25] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-black/50 p-1 rounded-lg border border-white/5",
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t18;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/40 border border-white/5 rounded-lg flex items-center px-3 h-10 focus-within:border-white/20 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 text-xs w-12",
                    children: "Price"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 232,
                    columnNumber: 148
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-transparent flex-1 text-right text-white text-sm focus:outline-none font-mono",
                    placeholder: "Market"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 232,
                    columnNumber: 205
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 text-xs ml-2 w-8 text-right",
                    children: "USD"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 232,
                    columnNumber: 340
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    let t22;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-zinc-500 text-xs w-12",
            children: "Amount"
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            className: "bg-transparent flex-1 text-right text-white text-sm focus:outline-none font-mono",
            placeholder: "0.00"
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[28] = t21;
        $[29] = t22;
    } else {
        t21 = $[28];
        t22 = $[29];
    }
    let t23;
    if ($[30] !== activePair.id) {
        t23 = activePair.id.replace("USDT", "").replace("USD", "");
        $[30] = activePair.id;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/40 border border-white/5 rounded-lg flex items-center px-3 h-10 focus-within:border-white/20 transition-colors",
            children: [
                t21,
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-500 text-xs ml-2 w-8 text-right text-[10px]",
                    children: t23
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 258,
                    columnNumber: 158
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[32] = t23;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    let t25;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between gap-1 py-1",
            children: [
                "25%",
                "50%",
                "75%",
                "Max"
            ].map(_TradingUIAnonymous2)
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[34] = t25;
    } else {
        t25 = $[34];
    }
    const t26 = `w-full h-10 rounded-lg font-bold text-sm text-black mt-2 transition-all ${activeTab === "buy" ? "bg-emerald-500 hover:bg-emerald-400" : "bg-rose-500 text-white hover:bg-rose-400"}`;
    const t27 = activeTab === "buy" ? "Execute Buy" : "Execute Sell";
    let t28;
    if ($[35] !== t26 || $[36] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t26,
            children: t27
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[35] = t26;
        $[36] = t27;
        $[37] = t28;
    } else {
        t28 = $[37];
    }
    let t29;
    if ($[38] !== t24 || $[39] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 mt-1",
            children: [
                t20,
                t24,
                t25,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[38] = t24;
        $[39] = t28;
        $[40] = t29;
    } else {
        t29 = $[40];
    }
    let t30;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between px-1 mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-semibold text-zinc-500 uppercase",
                    children: "Price (USD)"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 293,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-semibold text-zinc-500 uppercase",
                    children: "Amount"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 293,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[41] = t30;
    } else {
        t30 = $[41];
    }
    let t31;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = [
            ...Array(5)
        ].map(_TradingUIAnonymous3);
        $[42] = t31;
    } else {
        t31 = $[42];
    }
    let t32;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 mt-4 flex flex-col bg-black/20 rounded-lg p-2 border border-white/5",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col gap-[2px]",
                    children: [
                        t31,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "my-1 py-1 border-y border-white/5 flex items-center justify-between px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-cyan-400 font-mono font-bold",
                                    children: "150.00"
                                }, void 0, false, {
                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                    lineNumber: 307,
                                    columnNumber: 251
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-500 text-[10px]",
                                    children: "Spread 0.10"
                                }, void 0, false, {
                                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                                    lineNumber: 307,
                                    columnNumber: 316
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/voltraz/Trading-webui/app/page.js",
                            lineNumber: 307,
                            columnNumber: 161
                        }, this),
                        [
                            ...Array(5)
                        ].map(_TradingUIAnonymous4)
                    ]
                }, void 0, true, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 307,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[43] = t32;
    } else {
        t32 = $[43];
    }
    let t33;
    if ($[44] !== t19 || $[45] !== t29) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "min-h-0 flex flex-col gap-3 overflow-visible rounded-2xl border border-white/5 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.16)] ring-1 ring-white/5 no-scrollbar backdrop-blur-xl lg:row-span-2 lg:overflow-y-auto bg-[#111111]/80",
            children: [
                t19,
                t29,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[44] = t19;
        $[45] = t29;
        $[46] = t33;
    } else {
        t33 = $[46];
    }
    let t34;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 border-b border-white/5 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-sm font-medium text-cyan-400 border-b border-cyan-400 pb-2 -mb-2",
                    children: "Positions (0)"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 323,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-sm font-medium text-zinc-500 hover:text-white transition-colors pb-2",
                    children: "Open Orders"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 323,
                    columnNumber: 180
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-sm font-medium text-zinc-500 hover:text-white transition-colors pb-2",
                    children: "History"
                }, void 0, false, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 323,
                    columnNumber: 294
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[47] = t34;
    } else {
        t34 = $[47];
    }
    let t35;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-12 h-12 mb-2 opacity-20",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1,
                d: "M20 12H4M20 12l-4-4m4 4l-4 4"
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 330,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[48] = t35;
    } else {
        t35 = $[48];
    }
    let t36;
    if ($[49] !== activePair.name) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-[200px] flex flex-col overflow-hidden rounded-2xl border border-white/5 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.14)] ring-1 ring-white/5 backdrop-blur-xl lg:col-start-2 lg:min-h-0 bg-[#111111]/80",
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center text-sm text-zinc-500",
                    children: [
                        t35,
                        "No active positions for ",
                        activePair.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 337,
                    columnNumber: 236
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[49] = activePair.name;
        $[50] = t36;
    } else {
        t36 = $[50];
    }
    let t37;
    if ($[51] !== t33 || $[52] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid flex-1 grid-cols-1 gap-2.5 p-2.5 lg:min-h-0 lg:grid-cols-[56px_minmax(0,1fr)_390px] lg:grid-rows-[minmax(0,1fr)_208px]",
            children: [
                t11,
                t12,
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[51] = t33;
        $[52] = t36;
        $[53] = t37;
    } else {
        t37 = $[53];
    }
    let t38;
    if ($[54] !== t10 || $[55] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen overflow-y-auto overflow-x-hidden lg:h-screen lg:overflow-hidden bg-[#0A0A0A] text-zinc-300 font-sans",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex min-h-screen flex-col overflow-visible before:pointer-events-none before:absolute",
                    children: [
                        t10,
                        t37
                    ]
                }, void 0, true, {
                    fileName: "[project]/voltraz/Trading-webui/app/page.js",
                    lineNumber: 354,
                    columnNumber: 156
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/voltraz/Trading-webui/app/page.js",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[54] = t10;
        $[55] = t37;
        $[56] = t38;
    } else {
        t38 = $[56];
    }
    return t38;
}
_s(TradingUI, "bFWKSk3IZgTNPcqrvRZKDwquoUk=");
_c = TradingUI;
function _TradingUIAnonymous4(__0, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between text-xs font-mono px-1 py-0.5 hover:bg-white/5 cursor-pointer rounded-sm relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 bottom-0 bg-emerald-500/10",
                style: {
                    width: `${(i_1 + 1) * 18}%`
                }
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 364,
                columnNumber: 146
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-emerald-500 relative z-10",
                children: (149.9 - i_1 * 0.1).toFixed(2)
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 366,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-300 relative z-10",
                children: (Math.random() * 2).toFixed(4)
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 366,
                columnNumber: 98
            }, this)
        ]
    }, "b" + i_1, true, {
        fileName: "[project]/voltraz/Trading-webui/app/page.js",
        lineNumber: 364,
        columnNumber: 10
    }, this);
}
function _TradingUIAnonymous3(_, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between text-xs font-mono px-1 py-0.5 hover:bg-white/5 cursor-pointer rounded-sm relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 bottom-0 bg-rose-500/10",
                style: {
                    width: `${(5 - i_0) * 18}%`
                }
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 369,
                columnNumber: 146
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-rose-500 relative z-10",
                children: (150 + (5 - i_0) * 0.1).toFixed(2)
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 371,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-300 relative z-10",
                children: (Math.random() * 2).toFixed(4)
            }, void 0, false, {
                fileName: "[project]/voltraz/Trading-webui/app/page.js",
                lineNumber: 371,
                columnNumber: 99
            }, this)
        ]
    }, "s" + i_0, true, {
        fileName: "[project]/voltraz/Trading-webui/app/page.js",
        lineNumber: 369,
        columnNumber: 10
    }, this);
}
function _TradingUIAnonymous2(p_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "flex-1 bg-white/5 hover:bg-white/10 py-1 text-xs text-zinc-400 rounded transition-colors",
        children: p_1
    }, p_1, false, {
        fileName: "[project]/voltraz/Trading-webui/app/page.js",
        lineNumber: 374,
        columnNumber: 10
    }, this);
}
function _TradingUIAnonymous(ico, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${i === 0 ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-zinc-500 hover:bg-white/5 hover:text-white"}`,
        children: ico
    }, i, false, {
        fileName: "[project]/voltraz/Trading-webui/app/page.js",
        lineNumber: 377,
        columnNumber: 10
    }, this);
}
function _TradingUIPAIRSMap(p_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: p_0.id,
        children: p_0.name
    }, p_0.id, false, {
        fileName: "[project]/voltraz/Trading-webui/app/page.js",
        lineNumber: 380,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TradingUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$voltraz$2f$Trading$2d$webui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/voltraz/Trading-webui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/voltraz/Trading-webui/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=voltraz_Trading-webui_18g0nrr._.js.map