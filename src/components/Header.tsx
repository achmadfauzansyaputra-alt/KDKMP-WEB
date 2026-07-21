import React, { useState, useEffect } from "react";
import { Coffee, Menu, X, Edit3, Check, RefreshCw } from "lucide-react";
import { DefaultLogoSVG } from "./PremiumMockups";
import { CompanyInfo } from "../types";

interface HeaderProps {
  info: CompanyInfo;
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  onReset: () => void;
  logoUrl: string;
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({
  info,
  isEditing,
  setIsEditing,
  onReset,
  logoUrl,
  onLogoUpload,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Produk", href: "#produk" },
    { name: "Profil Rasa", href: "#profil-rasa" },
    { name: "Keberhasilan", href: "#keberhasilan" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#kontak" },
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/95 backdrop-blur-md py-3 shadow-md border-b border-brand-brown/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="Logo KDKMP"
                  className="w-10 h-10 rounded-sm object-cover border border-brand-red/30"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-10 h-10 bg-brand-red flex items-center justify-center text-white font-bold text-[10px] rounded-sm tracking-tighter">
                  KDKMP
                </div>
              )}
              {isEditing && (
                <label className="absolute -inset-1 bg-black/60 rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Edit3 className="w-4 h-4 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onLogoUpload}
                  />
                </label>
              )}
            </div>
            
            <div className="flex flex-col">
              <span className="font-sans font-black text-sm sm:text-base text-brand-brown tracking-tight leading-tight uppercase">
                KDKMP Garut
              </span>
              <span className="text-[9px] text-brand-red font-mono font-bold tracking-[0.2em] leading-none">
                MERAH PUTIH
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollClick(e, link.href)}
                className="px-3 py-2 rounded-md text-[11px] uppercase font-bold tracking-[0.15em] text-brand-brown/70 hover:text-brand-red hover:bg-brand-brown/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Interactive Customization Bar / Admin Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-black transition-all duration-300 cursor-pointer ${
                isEditing
                  ? "bg-brand-red text-white shadow-lg shadow-brand-red/20 animate-pulse"
                  : "bg-brand-green/10 text-brand-green border border-brand-green/30 hover:bg-brand-green hover:text-white"
              }`}
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Mode Edit: Aktif
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5" />
                  Edit Konten Web
                </>
              )}
            </button>

            {isEditing && (
              <button
                onClick={onReset}
                title="Reset ke Konten Default"
                className="p-2 rounded-full bg-brand-cream hover:bg-brand-brown/10 text-brand-brown border border-brand-brown/20 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile hamburger & edit menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick edit indicator for mobile */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`p-1.5 rounded-full text-xs font-bold cursor-pointer ${
                isEditing ? "bg-brand-red text-white" : "bg-brand-brown/10 text-brand-brown"
              }`}
            >
              <Edit3 className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-brand-brown hover:text-brand-red hover:bg-brand-brown/5 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-brown/10 shadow-xl py-4 px-6 animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollClick(e, link.href)}
                className="py-2 text-brand-brown hover:text-brand-red text-xs uppercase tracking-widest font-bold border-b border-brand-brown/5"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Admin Controls */}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsEditing(!isEditing);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  isEditing ? "bg-brand-red text-white" : "bg-brand-green text-white"
                }`}
              >
                {isEditing ? (
                  <>
                    <Check className="w-4 h-4" />
                    Simpan & Matikan Edit
                  </>
                ) : (
                  <>
                    <Edit3 className="w-4 h-4" />
                    Aktifkan Edit Konten
                  </>
                )}
              </button>

              {isEditing && (
                <button
                  onClick={() => {
                    onReset();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest bg-brand-cream border border-brand-brown/20 text-brand-brown hover:bg-brand-brown/5 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset ke Konten Default
                </button>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Floating Info Toast when Editing */}
      {isEditing && (
        <div className="fixed bottom-4 right-4 z-50 bg-brand-cream border border-brand-red/30 text-brand-brown px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-md text-xs flex flex-col gap-1 max-w-xs animate-slide-up">
          <div className="flex items-center gap-2 text-brand-red font-bold">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
            <span>Anda sedang di Mode Edit!</span>
          </div>
          <p className="text-brand-brown/80 text-[11px] leading-relaxed">
            Klik langsung teks apa saja di layar untuk mengubahnya secara interaktif, atau ganti gambar & logo. Data disimpan otomatis.
          </p>
        </div>
      )}
    </header>
  );
};
