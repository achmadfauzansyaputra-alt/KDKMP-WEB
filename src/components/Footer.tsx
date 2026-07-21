import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ShieldCheck, Heart } from "lucide-react";
import { DefaultLogoSVG } from "./PremiumMockups";
import { CompanyInfo } from "../types";

interface FooterProps {
  info: CompanyInfo;
  logoUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ info, logoUrl }) => {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-brown text-white py-16 border-t border-brand-brown relative">
      <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {logoUrl ? (
                <img src={logoUrl} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <DefaultLogoSVG className="w-10 h-10" />
              )}
              <div className="flex flex-col">
                <span className="font-sans font-bold text-white text-base leading-tight">KDKMP Garut</span>
                <span className="text-[10px] text-white/50 font-mono tracking-widest uppercase">MERAH PUTIH</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-2">
              Koperasi Desa Merah Putih berkomitmen mengonsolidasikan potensi pertanian desa, mengangkat citra kopi Arabika khas Garut, dan membawa kemakmuran bagi para petani lokal.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 pt-4">
              <a href={info.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-brand-red text-white rounded-xl transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={info.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-brand-red text-white rounded-xl transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={info.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-brand-red text-white rounded-xl transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-mono">Navigasi Cepat</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <a href="#" onClick={handleScrollToTop} className="hover:text-brand-red transition-colors">Beranda</a>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("#tentang")} className="hover:text-brand-red transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Tentang Koperasi</button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("#produk")} className="hover:text-brand-red transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Katalog Produk</button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("#profil-rasa")} className="hover:text-brand-red transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Karakter Rasa Kopi</button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection("#keberhasilan")} className="hover:text-brand-red transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Artikel & Perjalanan</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-mono">Hubungi Kami</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{info.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`mailto:${info.email}`} className="hover:text-brand-red transition-colors">{info.email}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`https://wa.me/${info.whatsapp.replace(/[^0-9]/g, "")}`} className="hover:text-brand-red transition-colors">{info.whatsapp}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Credentials */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-mono">Koperasi Legal</h4>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-brand-green text-xs font-bold font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Terdaftar Resmi</span>
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Koperasi Desa Merah Putih didirikan berdasarkan hukum Koperasi Republik Indonesia dengan Nomor Badan Hukum terverifikasi Kemenkop UKM.
              </p>
              <div className="flex items-center gap-1 text-[10px] text-white/50">
                <span>Dibuat dengan</span>
                <Heart className="w-3 h-3 text-brand-red fill-brand-red" />
                <span>untuk Desa Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-[11px] sm:text-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-white/50">
          <p>© 2026 Koperasi Desa Merah Putih (KDKMP) Garut. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Syarat & Ketentuan</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
