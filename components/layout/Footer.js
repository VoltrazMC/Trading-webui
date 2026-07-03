"use client";

import { MessageSquare } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-xl text-white">
                V
              </div>
              <span className="text-2xl font-bold text-white">Voltraz MC</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Premium Minecraft Survival Economy server. Join our growing community and experience the best custom features, trading, and economy systems.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Server</h3>
            <ul className="space-y-3">
              <li><Link href="/rules" className="text-gray-400 hover:text-white text-sm transition-colors">Rules</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-white text-sm transition-colors">Status</Link></li>
              <li><Link href="/leaderboards" className="text-gray-400 hover:text-white text-sm transition-colors">Leaderboards</Link></li>
              <li><Link href="/vote" className="text-gray-400 hover:text-white text-sm transition-colors">Vote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/store" className="text-gray-400 hover:text-white text-sm transition-colors">Store</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white text-sm transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Voltraz MC. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Not affiliated with Mojang AB.
          </p>
        </div>
      </div>
    </footer>
  );
}