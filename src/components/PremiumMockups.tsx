import React from "react";

interface MockupProps {
  type: string;
  name?: string;
  subBranding?: string;
  logoUrl?: string; // If user uploads a custom logo
  className?: string;
  flavorProfile?: {
    aroma: number;
    acidity: number;
    body: number;
    sweetness: number;
    aftertaste: number;
  };
}

export const DefaultLogoSVG: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Circle with Red & White accents */}
      <circle cx="50" cy="50" r="46" stroke="#4a2c11" strokeWidth="3" fill="#faf6f0" />
      <circle cx="50" cy="50" r="42" stroke="#1b3f22" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Red & White Flag Shield/Arc */}
      <path d="M25 45 C 25 25, 75 25, 75 45 L 75 52 C 75 68, 50 78, 50 78 C 50 78, 25 68, 25 52 Z" fill="white" stroke="#1b3f22" strokeWidth="2" />
      <path d="M25 45 C 25 25, 75 25, 75 45 L 75 48 C 75 48, 55 48, 50 48 C 45 48, 25 48, 25 48 Z" fill="#e11d48" />
      
      {/* Golden Coffee Beans inside */}
      <path d="M42 56 C39 52, 42 45, 48 45 C54 45, 53 52, 50 56 C47 60, 45 60, 42 56 Z" fill="#8c5827" />
      <path d="M58 56 C61 52, 58 45, 52 45 C46 45, 47 52, 50 56 C53 60, 55 60, 58 56 Z" fill="#5c3818" />
      <path d="M40 54 Q48 51 52 57" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M46 51 Q51 48 57 53" stroke="#faf6f0" strokeWidth="1" strokeLinecap="round" />

      {/* Ribbon Banner at bottom */}
      <path d="M15 65 L 25 60 L 25 70 Z" fill="#1b3f22" />
      <path d="M85 65 L 75 60 L 75 70 Z" fill="#1b3f22" />
      <path d="M20 62 H 80 V 72 H 20 Z" fill="#1b3f22" />
      <text x="50" y="69" fill="#faf6f0" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="1">KDKMP</text>
      
      {/* Decorative Stars */}
      <polygon points="50,14 52,18 56,18 53,21 54,25 50,23 46,25 47,21 44,18 48,18" fill="#fbbf24" />
    </svg>
  );
};

export const PremiumMockup: React.FC<MockupProps> = ({
  type,
  name = "Kopi Arabika Garut",
  subBranding = "Koperasi Desa Merah Putih",
  logoUrl,
  className = "w-full h-80",
}) => {
  // Determine gradient backgrounds based on coffee variant
  let pouchBg = "url(#espressoGrad)";
  let labelBg = "#faf6f0";
  let labelText = "#291507";
  let accentColor = "#e11d48"; // Red Merah Putih
  let highlightColor = "#22c55e"; // Green

  if (type === "specialty_bag") {
    pouchBg = "url(#emeraldGrad)";
    labelBg = "#faf6f0";
    labelText = "#0d2313";
    accentColor = "#e11d48";
    highlightColor = "#fbbf24"; // Gold
  } else if (type === "roasted_bag") {
    pouchBg = "url(#charcoalGrad)";
    labelBg = "#fcd34d"; // Kraft / golden
    labelText = "#1e1b4b";
    accentColor = "#e11d48";
    highlightColor = "#475569";
  }

  // Pre-configured SVGs for non-bag elements (perkebunan, panen, etc.)
  if (type === "perkebunan") {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-b from-sky-100 to-amber-50 rounded-2xl border border-stone-200/50 shadow-inner flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="40%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="mountainGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="mountainGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
            <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect width="400" height="300" fill="url(#skyGrad)" />

          {/* Sun */}
          <circle cx="200" cy="110" r="50" fill="#fef08a" opacity="0.9" />
          <circle cx="200" cy="110" r="90" fill="url(#sunGrad)" opacity="0.4" />

          {/* Back Mountains (Garut Cikuray / Papandayan Silhouette) */}
          <path d="M 0 240 L 110 130 L 220 220 L 310 140 L 400 240 Z" fill="#0f5132" opacity="0.4" />
          <path d="M 80 250 L 200 120 L 320 230 Z" fill="#14532d" opacity="0.6" />

          {/* Midground Hills */}
          <path d="M -50 300 Q 100 180 250 300 Z" fill="url(#mountainGrad1)" />
          <path d="M 150 300 Q 280 200 450 300 Z" fill="url(#mountainGrad2)" />

          {/* Coffee Bush in foreground */}
          <g transform="translate(40, 200) scale(0.8)">
            {/* Branches */}
            <path d="M 10 90 Q 20 50 40 10 Q 50 60 70 90" stroke="#3f2305" strokeWidth="4" fill="none" />
            {/* Leaves */}
            <path d="M 15 40 Q -10 30 15 20 Q 40 30 15 40 Z" fill="#166534" />
            <path d="M 45 25 Q 70 15 45 5 Q 20 15 45 25 Z" fill="#15803d" />
            <path d="M 30 60 Q 5 50 30 40 Q 55 50 30 60 Z" fill="#16a34a" />
            {/* Coffee Cherries (Red dots) */}
            <circle cx="25" cy="40" r="4" fill="#e11d48" />
            <circle cx="28" cy="44" r="3.5" fill="#be123c" />
            <circle cx="22" cy="42" r="3" fill="#fda4af" />
            <circle cx="40" cy="30" r="4.5" fill="#e11d48" />
            <circle cx="43" cy="34" r="3.5" fill="#be123c" />
          </g>

          {/* Farmer Silhouette working */}
          <g transform="translate(290, 210) scale(0.65)">
            <ellipse cx="50" cy="20" rx="12" ry="10" fill="#1c1917" /> {/* Caping (Farmer hat) */}
            <circle cx="50" cy="32" r="6" fill="#1c1917" /> {/* Head */}
            <path d="M 35 45 C 35 45, 45 42, 50 45 C 55 42, 65 45, 65 65 L 60 90 H 40 Z" fill="#292524" /> {/* Body */}
            <path d="M 35 45 L 20 60 L 30 65 L 42 52" fill="#292524" /> {/* Hand holding basket */}
            <ellipse cx="18" cy="68" rx="12" ry="6" fill="#78350f" /> {/* Basket */}
          </g>

          {/* Decorative Red & White ribbon in the sky corner */}
          <path d="M 0 0 L 60 0 L 0 60 Z" fill="#e11d48" opacity="0.9" />
          <path d="M 0 0 L 30 0 L 0 30 Z" fill="white" />
          <text x="18" y="22" fill="#1c1917" fontSize="8" fontWeight="bold" transform="rotate(-45 15 15)">KDKMP</text>
        </svg>
        {/* Absolute Glassmorphic Tag */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/40 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-emerald-800 uppercase block">TERROIR GARUT</span>
            <span className="text-xs font-semibold text-stone-900 block">Ketinggian 1400-1600 MDPL</span>
          </div>
          <div className="bg-emerald-900 text-white text-[10px] font-bold px-2 py-1 rounded-md">100% Organik</div>
        </div>
      </div>
    );
  }

  if (type === "panen") {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-b from-emerald-950 to-emerald-900 rounded-2xl border border-emerald-800/50 shadow-xl flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sunGlow" cx="10%" cy="10%" r="80%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="300" fill="#022c22" />
          <rect width="400" height="300" fill="url(#sunGlow)" />

          {/* Warm Sun Rays */}
          <path d="M 0 0 L 80 300 L 120 300 Z" fill="#fef08a" opacity="0.08" />
          <path d="M 0 0 L 220 300 L 280 300 Z" fill="#fef08a" opacity="0.05" />

          {/* Green lush backgrounds */}
          <circle cx="100" cy="280" r="140" fill="#064e3b" opacity="0.8" />
          <circle cx="320" cy="280" r="120" fill="#0f5132" opacity="0.7" />

          {/* Close up coffee branches with shiny red cherries */}
          <g transform="translate(140, 60) scale(1.4)">
            <path d="M -50 40 Q 20 30 90 20" stroke="#451a03" strokeWidth="5" fill="none" />
            {/* Leaves */}
            <path d="M 0 32 Q -15 15 5 10 Q 25 20 0 32 Z" fill="#15803d" stroke="#166534" strokeWidth="1" />
            <path d="M 40 26 Q 25 5 45 0 Q 65 10 40 26 Z" fill="#166534" />
            <path d="M 15 30 Q 30 50 15 55 Q 0 45 15 30 Z" fill="#15803d" />

            {/* Clusters of cherries */}
            <circle cx="10" cy="32" r="6" fill="#dc2626" />
            <circle cx="16" cy="30" r="5" fill="#ef4444" />
            <circle cx="8" cy="27" r="5.5" fill="#991b1b" />
            <circle cx="13" cy="36" r="4.5" fill="#ef4444" />
            <circle cx="5" cy="33" r="5" fill="#f87171" />
            {/* Little highlights */}
            <circle cx="14" cy="28" r="1.5" fill="#ffffff" opacity="0.8" />
            <circle cx="8" cy="30" r="1.2" fill="#ffffff" opacity="0.8" />

            <circle cx="45" cy="24" r="5.5" fill="#dc2626" />
            <circle cx="50" cy="21" r="5" fill="#ef4444" />
            <circle cx="41" cy="20" r="4.5" fill="#991b1b" />
            <circle cx="46" cy="27" r="4" fill="#f87171" />
            <circle cx="48" cy="19" r="1.5" fill="#ffffff" opacity="0.8" />
          </g>

          {/* Hand Picking Cherry */}
          <g transform="translate(60, 40) scale(1.1)">
            {/* Sleeve */}
            <path d="M -40 120 L 5 85 L 12 105 L -25 135 Z" fill="#1e293b" />
            {/* Hand & fingers */}
            <path d="M 5 85 Q 35 75 48 84 Q 52 87 56 82 Q 62 82 64 88 Q 65 92 61 95 L 42 105 L 12 105 Z" fill="#eab308" opacity="0.85" />
            {/* Thumb pressing */}
            <path d="M 32 80 Q 48 68 53 74 L 42 85 Z" fill="#eab308" opacity="0.85" />
          </g>

          <text x="20" y="270" fill="#fef08a" fontSize="12" fontWeight="bold" letterSpacing="1">100% RED CHERRY PICKING</text>
          <text x="20" y="285" fill="#a7f3d0" fontSize="10">Hanya Memetik Buah Kopi Matang Sempurna</text>
        </svg>
      </div>
    );
  }

  if (type === "penjemuran") {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-b from-stone-100 to-amber-100 rounded-2xl border border-stone-200/50 shadow-xl flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Glasshouse Dome structure */}
          <rect width="400" height="300" fill="#fefcf8" />
          <path d="M 10 300 L 10 140 Q 200 10 390 140 L 390 300 Z" fill="none" stroke="#e2e8f0" strokeWidth="8" />
          <path d="M 10 140 H 390" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M 100 300 V 70" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M 200 300 V 42" stroke="#94a3b8" strokeWidth="3" />
          <path d="M 300 300 V 70" stroke="#cbd5e1" strokeWidth="2" />

          {/* Raised Drying Beds with coffee beans */}
          {/* Bed 1 Left */}
          <polygon points="20,280 180,210 180,240 20,300" fill="#78350f" />
          <polygon points="25,278 175,212 175,225 25,290" fill="#d97706" /> {/* Coffee beans layer */}
          <polygon points="20,280 180,210 180,212 20,282" fill="#451a03" />

          {/* Bed 2 Right */}
          <polygon points="380,280 220,210 220,240 380,300" fill="#78350f" />
          <polygon points="375,278 225,212 225,225 375,290" fill="#b45309" /> {/* Honey process golden parchment */}
          <polygon points="380,280 220,210 220,212 380,282" fill="#451a03" />

          {/* Sun glowing above */}
          <circle cx="200" cy="50" r="30" fill="#fef08a" opacity="0.8" />
          <circle cx="200" cy="50" r="50" fill="#fef08a" opacity="0.3" />

          <text x="200" y="120" fill="#7c2d12" fontSize="14" fontWeight="bold" textAnchor="middle">SOLAR DOME DRYING</text>
          <text x="200" y="138" fill="#78350f" fontSize="10" textAnchor="middle">Proses Penjemuran Higienis & Terkontrol Sinar Matahari</text>
        </svg>
      </div>
    );
  }

  if (type === "cupping") {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-b from-stone-900 to-neutral-950 rounded-2xl border border-stone-800 shadow-xl flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#171717" />
          {/* Table background */}
          <path d="M 0 160 L 400 130 L 400 300 L 0 300 Z" fill="#2d1d10" opacity="0.6" />
          <path d="M 0 160 L 400 130" stroke="#5c3f24" strokeWidth="4" />

          {/* Cupping Bowls */}
          {/* Bowl 1 */}
          <ellipse cx="100" cy="180" rx="35" ry="18" fill="#1c1917" stroke="#44403c" strokeWidth="2" />
          <ellipse cx="100" cy="177" rx="32" ry="14" fill="#3f2205" /> {/* Liquid coffee */}
          <ellipse cx="100" cy="177" rx="26" ry="11" fill="#78350f" opacity="0.7" /> {/* Creamy top */}
          <path d="M 100 165 Q 102 150 95 140" stroke="#faf6f0" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none" /> {/* Steam */}

          {/* Bowl 2 */}
          <ellipse cx="280" cy="165" rx="32" ry="16" fill="#1c1917" stroke="#44403c" strokeWidth="2" />
          <ellipse cx="280" cy="162" rx="29" ry="12" fill="#2d1602" />
          <ellipse cx="280" cy="162" rx="22" ry="9" fill="#542603" opacity="0.7" />
          <path d="M 280 150 Q 282 135 277 125" stroke="#faf6f0" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none" /> {/* Steam */}

          {/* Cupping Spoon */}
          <g transform="translate(140, 210) rotate(-25)">
            {/* Handle */}
            <path d="M 0 5 H 120 V -5 H 0 Z" fill="#d1d5db" />
            <path d="M 0 5 C -20 5 -20 -5 0 -5 Z" fill="#9ca3af" />
            {/* Spoon Head */}
            <ellipse cx="120" cy="0" rx="20" ry="14" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />
            <ellipse cx="118" cy="0" rx="14" ry="9" fill="#f3f4f6" />
            {/* Spoon liquid reflection */}
            <path d="M 112 -4 Q 124 0 124 6" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>

          {/* Coffee beans on table */}
          <ellipse cx="170" cy="190" rx="6" ry="4" fill="#451a03" transform="rotate(15 170 190)" />
          <ellipse cx="182" cy="186" rx="5" ry="3.5" fill="#3b1502" transform="rotate(-30 182 186)" />
          <ellipse cx="210" cy="175" rx="5.5" ry="3.8" fill="#5c2605" transform="rotate(45 210 175)" />

          <text x="200" y="60" fill="#fbbf24" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="1">SCA STANDARDS TESTING</text>
          <text x="200" y="80" fill="#d6d3d1" fontSize="11" textAnchor="middle">Cupping Score Konsisten 84+ (Specialty Grade)</text>
        </svg>
      </div>
    );
  }

  if (type === "green_beans") {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-b from-stone-800 to-neutral-900 rounded-2xl border border-stone-700 shadow-xl flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sackGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#cca47c" />
              <stop offset="100%" stopColor="#8c6239" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="#1c1917" />

          {/* Jute Sack illustration */}
          <path d="M 120 300 L 140 140 Q 200 130 260 140 L 280 300 Z" fill="url(#sackGrad)" stroke="#5c3f24" strokeWidth="2" />
          {/* Stitching lines */}
          <path d="M 140 140 Q 200 155 260 140" stroke="#5c3f24" strokeWidth="4" strokeDasharray="6 4" fill="none" />
          <path d="M 135 155 Q 200 170 265 155" stroke="#78350f" strokeWidth="2" strokeDasharray="10 5" opacity="0.5" fill="none" />

          {/* Stencil writing on sack */}
          <text x="200" y="210" fill="#2d1502" fontSize="18" fontWeight="black" textAnchor="middle" opacity="0.75" letterSpacing="2">KDKMP</text>
          <text x="200" y="232" fill="#2d1502" fontSize="12" fontWeight="bold" textAnchor="middle" opacity="0.75" letterSpacing="1">ARABIKA GARUT</text>
          <text x="200" y="250" fill="#991b1b" fontSize="10" fontWeight="bold" textAnchor="middle" opacity="0.8">INDONESIA</text>

          {/* Overflowing Green Beans from the top */}
          <g transform="translate(130, 95)">
            {/* Pile of green beans */}
            <path d="M 10 45 Q 70 5 130 45 Z" fill="#99f6e4" opacity="0.3" />
            <path d="M 20 40 Q 70 15 120 40 Z" fill="#4d7c0f" opacity="0.7" />
            <path d="M 30 35 Q 70 25 110 35 Z" fill="#65a30d" />

            {/* Individual bean details */}
            <ellipse cx="60" cy="32" rx="6" ry="3.5" fill="#a3e635" transform="rotate(15 60 32)" />
            <line x1="54" y1="32" x2="66" y2="32" stroke="#4d7c0f" strokeWidth="1" />

            <ellipse cx="80" cy="30" rx="5" ry="3" fill="#a3e635" transform="rotate(-25 80 30)" />
            <line x1="75" y1="30" x2="85" y2="30" stroke="#4d7c0f" strokeWidth="1" />

            <ellipse cx="70" cy="24" rx="5.5" ry="3.2" fill="#d9f99d" transform="rotate(5 70 24)" />
            <line x1="64.5" y1="24" x2="75.5" y2="24" stroke="#4d7c0f" strokeWidth="1" />
          </g>

          <text x="200" y="50" fill="#a3e635" fontSize="14" fontWeight="bold" textAnchor="middle" letterSpacing="1">EKSPOR QUALITY GREEN BEANS</text>
          <text x="200" y="68" fill="#d6d3d1" fontSize="10" textAnchor="middle">Kadar Air Terjaga Konsisten 11.5% - 12%</text>
        </svg>
      </div>
    );
  }

  if (type === "koperasi") {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-b from-teal-950 to-stone-900 rounded-2xl border border-stone-800 shadow-xl flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#1c1917" />
          {/* Indonesian flag in background */}
          <g opacity="0.25" transform="translate(120, 20)">
            <rect width="160" height="100" fill="white" rx="4" />
            <rect width="160" height="50" fill="#e11d48" rx="4" />
          </g>

          {/* Wooden meeting shelter silhouette */}
          <path d="M 40 280 L 120 120 H 280 L 360 280" stroke="#78350f" strokeWidth="6" fill="none" />
          <path d="M 80 120 L 200 40 L 320 120 Z" fill="#451a03" />

          {/* Petani meeting silhouettes */}
          <g transform="translate(120, 160) scale(0.8)">
            {/* Petani 1 Left */}
            <circle cx="50" cy="50" r="12" fill="#fcd34d" opacity="0.9" /> {/* Caping */}
            <circle cx="50" cy="65" r="7" fill="#e5e7eb" />
            <path d="M 30 80 Q 50 75 70 80 L 75 140 H 25 Z" fill="#334155" />

            {/* Petani 2 Middle */}
            <circle cx="110" cy="45" r="12" fill="#fcd34d" opacity="0.9" />
            <circle cx="110" cy="60" r="7" fill="#e5e7eb" />
            <path d="M 90 75 Q 110 70 130 75 L 135 140 H 85 Z" fill="#1e293b" />

            {/* Petani 3 Right */}
            <circle cx="170" cy="52" r="12" fill="#fcd34d" opacity="0.9" />
            <circle cx="170" cy="67" r="7" fill="#e5e7eb" />
            <path d="M 150 82 Q 170 77 190 82 L 195 140 H 145 Z" fill="#475569" />
          </g>

          <text x="200" y="260" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" letterSpacing="1">PEMBERDAYAAN KOMUNITAS</text>
          <text x="200" y="278" fill="#cbd5e1" fontSize="10" textAnchor="middle">Musyawarah & Pembagian Sisa Hasil Usaha yang Adil</text>
        </svg>
      </div>
    );
  }

  // Fallback to rendering the coffee pouch mockups
  return (
    <div className={`relative group transition-all duration-500 rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center bg-stone-900/50 border border-stone-800/80 ${className}`}>
      {/* Background radial soft light */}
      <div className="absolute inset-0 bg-radial from-stone-800/40 via-transparent to-transparent pointer-events-none" />

      {/* Actual Pouch SVG render */}
      <svg viewBox="0 0 240 320" className="w-48 h-64 drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Coffee beans pouch gradient */}
          <linearGradient id="espressoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d1d06" />
            <stop offset="40%" stopColor="#241103" />
            <stop offset="100%" stopColor="#0f0701" />
          </linearGradient>

          {/* Specialty pouch gradient */}
          <linearGradient id="emeraldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="40%" stopColor="#022c22" />
            <stop offset="100%" stopColor="#011c15" />
          </linearGradient>

          {/* Roasted pouch gradient */}
          <linearGradient id="charcoalGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="40%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Shiny overlay gradient */}
          <linearGradient id="shineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <clipPath id="labelClip">
            <rect x="50" y="110" width="140" height="150" rx="8" />
          </clipPath>
        </defs>

        {/* Shadow base inside SVG */}
        <ellipse cx="120" cy="305" rx="75" ry="10" fill="#000000" opacity="0.5" />

        {/* Pouch Main Body */}
        {/* Top fold line */}
        <path d="M 40 40 L 200 40 L 210 55 L 30 55 Z" fill={pouchBg} />
        <line x1="30" y1="48" x2="210" y2="48" stroke="#000000" strokeWidth="1.5" opacity="0.4" />
        <line x1="30" y1="52" x2="210" y2="52" stroke="#ffffff" strokeWidth="1" opacity="0.15" />

        {/* Main Pouch Shape */}
        <path d="M 30 55 C 30 55, 35 150, 45 270 C 45 290, 70 300, 120 300 C 170 300, 195 290, 195 270 C 205 150, 210 55, 210 55 Z" fill={pouchBg} />

        {/* Side folds / shadows for 3D realism */}
        <path d="M 30 55 C 30 55, 35 150, 45 270 C 45 270, 52 180, 50 55 Z" fill="#000000" opacity="0.25" />
        <path d="M 210 55 C 210 55, 205 150, 195 270 C 195 270, 188 180, 190 55 Z" fill="#000000" opacity="0.35" />

        {/* Premium Label */}
        <rect x="50" y="110" width="140" height="145" rx="6" fill={labelBg} stroke="#8c6239" strokeWidth="1" />
        
        {/* Label Internal Border */}
        <rect x="54" y="114" width="132" height="137" rx="4" fill="none" stroke={accentColor} strokeWidth="0.75" strokeDasharray="3 2" />

        {/* Logo Placement on label */}
        {logoUrl ? (
          <image href={logoUrl} x="100" y="118" width="40" height="40" clipPath="url(#logoClip)" />
        ) : (
          <g transform="translate(100, 118) scale(0.4)">
            <circle cx="50" cy="50" r="44" stroke="#4a2c11" strokeWidth="3" fill="#ffffff" />
            <path d="M25 45 C 25 25, 75 25, 75 45 L 75 52 C 75 68, 50 78, 50 78 C 50 78, 25 68, 25 52 Z" fill="white" stroke="#1b3f22" strokeWidth="2" />
            <path d="M25 45 C 25 25, 75 25, 75 45 L 75 48 C 75 48, 55 48, 50 48 C 45 48, 25 48, 25 48 Z" fill="#e11d48" />
            {/* Beans */}
            <path d="M42 56 C39 52, 42 45, 48 45 C54 45, 53 52, 50 56 Z" fill="#8c5827" />
            <path d="M58 56 C61 52, 58 45, 52 45 C46 45, 47 52, 50 56 Z" fill="#5c3818" />
          </g>
        )}

        {/* Brand Name */}
        <text x="120" y="172" fill={labelText} fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
          {name.length > 24 ? name.substring(0, 22) + "..." : name}
        </text>

        {/* Coffee Type / Subtitle */}
        <text x="120" y="185" fill={accentColor} fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="1">
          ARABIKA SPECIALTY
        </text>

        {/* Sub-branding */}
        <text x="120" y="196" fill="#4b5563" fontSize="6.5" fontStyle="italic" textAnchor="middle">
          {subBranding.length > 30 ? subBranding.substring(0, 28) + "..." : subBranding}
        </text>

        {/* Decorative Separator Line */}
        <line x1="75" y1="205" x2="165" y2="205" stroke="#9ca3af" strokeWidth="0.5" />

        {/* Red & White authentic Indonesian coffee seal */}
        <g transform="translate(100, 210)">
          {/* Flag shape */}
          <rect x="0" y="0" width="40" height="15" fill="#faf6f0" stroke="#d1d5db" strokeWidth="0.5" rx="1" />
          <rect x="1" y="1" width="38" height="6.5" fill="#e11d48" />
          <text x="20" y="11" fill="#1f2937" fontSize="5.5" fontWeight="black" textAnchor="middle" letterSpacing="0.5">INDONESIA</text>
        </g>

        {/* Net weight tag */}
        <text x="120" y="242" fill="#6b7280" fontSize="6.5" textAnchor="middle">
          Netto: 250 gram | Biji Kopi
        </text>

        {/* Shiny highlights sweeping across the pouch for realistic premium packaging */}
        <path d="M 30 55 C 30 55, 35 150, 45 270 L 60 270 L 45 55 Z" fill="url(#shineGrad)" pointerEvents="none" />
        <path d="M 120 55 C 120 55, 125 150, 135 270 L 150 270 L 135 55 Z" fill="url(#shineGrad)" pointerEvents="none" opacity="0.6" />

        {/* Round Valve (Warna silver/krem) */}
        <circle cx="120" cy="85" r="9" fill="#1c1917" opacity="0.4" />
        <circle cx="120" cy="85" r="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
        {/* Valve holes */}
        <circle cx="120" cy="81" r="1" fill="#000000" />
        <circle cx="116" cy="86" r="1" fill="#000000" />
        <circle cx="124" cy="86" r="1" fill="#000000" />
        <circle cx="120" cy="89" r="1" fill="#000000" />
      </svg>

      {/* Decorative scattered beans beneath the pouch in UI rendering */}
      <div className="flex gap-2 mt-4 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[11px] text-amber-500/90 font-medium">✨ Premium Packaging Mockup</span>
      </div>
    </div>
  );
};
