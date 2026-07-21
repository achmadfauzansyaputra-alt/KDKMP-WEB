import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Coffee, ShieldCheck, Upload, Compass } from "lucide-react";
import { EditableText, EditableArea } from "./Editable";
import { PremiumMockup, DefaultLogoSVG } from "./PremiumMockups";
import { CompanyInfo } from "../types";

interface HeroProps {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  info: CompanyInfo;
  isEditing: boolean;
  onChange: (field: string, val: string) => void;
  logoUrl: string;
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Hero: React.FC<HeroProps> = ({
  hero,
  info,
  isEditing,
  onChange,
  logoUrl,
  onLogoUpload,
}) => {
  const [activeScene, setActiveScene] = useState<"perkebunan" | "panen" | "penjemuran" | "cupping">("perkebunan");

  const handleSceneChange = (scene: "perkebunan" | "panen" | "penjemuran" | "cupping") => {
    setActiveScene(scene);
  };

  const scenes = [
    { id: "perkebunan", label: "Terroir Pegunungan" },
    { id: "panen", label: "Petik Ceri Merah" },
    { id: "penjemuran", label: "Solar Dome Drying" },
    { id: "cupping", label: "Uji Cita Rasa 84+" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-brand-cream pt-28 pb-16 flex items-center overflow-hidden border-b border-brand-brown/10">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#3D2B1F_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-10 z-0" />
      
      {/* Light mountain path background accent */}
      <div className="absolute -right-24 -top-24 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-24 bottom-12 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Premium Typography and Story intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Authentic Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cream border border-brand-brown/20 shadow-sm mb-6"
          >
            {/* National flag ribbon accent */}
            <div className="flex flex-col w-6 h-4 border border-brand-brown/10 rounded overflow-hidden">
              <div className="bg-brand-red h-1/2" />
              <div className="bg-white h-1/2" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-brown uppercase">
              KDKMP INDONESIA
            </span>
          </motion.div>
 
          {/* Logo Upload Box (only shown or highlighted in editing mode) */}
          {isEditing && (
            <div className="mb-4 p-3 bg-brand-cream border border-dashed border-brand-red/40 rounded-xl flex items-center gap-3">
              <div className="relative">
                {logoUrl ? (
                  <img src={logoUrl} alt="Logo" className="w-10 h-10 rounded-sm object-cover" />
                ) : (
                  <div className="w-10 h-10 bg-brand-red flex items-center justify-center text-white font-bold text-[9px] rounded-sm">KDKMP</div>
                )}
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-brand-red block">UPLOAD LOGO RESMI KDKMP</span>
                <label className="text-[10px] text-brand-brown/60 hover:text-brand-dark cursor-pointer underline">
                  Pilih Berkas Gambar
                  <input type="file" accept="image/*" className="hidden" onChange={onLogoUpload} />
                </label>
              </div>
            </div>
          )}

          {/* Main Titles */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2 w-full"
          >
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-brand-red" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-red uppercase font-mono">
                {info.brand}
              </span>
            </div>
            
            <h1 className="font-serif font-black text-4xl sm:text-6xl lg:text-[76px] text-brand-brown tracking-tighter leading-[0.9] uppercase">
              <EditableText
                value={hero.headline}
                onChange={(v) => onChange("headline", v)}
                isEditing={isEditing}
                tag="span"
              />
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-brand-brown/80 text-sm sm:text-lg max-w-xl leading-relaxed font-normal"
          >
            <EditableArea
              value={hero.subheadline}
              onChange={(v) => onChange("subheadline", v)}
              isEditing={isEditing}
            />
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 w-full"
          >
            <button
              onClick={() => handleScrollTo("#produk")}
              className="px-8 py-4 rounded-full bg-brand-green hover:bg-[#203116] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center gap-2 group cursor-pointer"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo("#tentang")}
              className="px-8 py-4 rounded-full bg-transparent hover:bg-brand-brown/5 text-brand-brown border border-brand-brown/20 font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-brand-red" />
              <span>{hero.ctaSecondary}</span>
            </button>
          </motion.div>

          {/* Quick Stats Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-brand-brown/10 w-full grid grid-cols-3 gap-4"
          >
            <div>
              <span className="text-2xl sm:text-3xl font-serif font-black text-brand-brown block">100%</span>
              <span className="text-[10px] sm:text-xs text-brand-brown/50 font-mono tracking-wider uppercase block">Kopi Arabika Asli</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-serif font-black text-brand-green block">SCA 84+</span>
              <span className="text-[10px] sm:text-xs text-brand-brown/50 font-mono tracking-wider uppercase block">Cupping Score</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-serif font-black text-brand-red block">FairTrade</span>
              <span className="text-[10px] sm:text-xs text-brand-brown/50 font-mono tracking-wider uppercase block">Pemberdayaan Desa</span>
            </div>
          </motion.div>

        </div>

        {/* Right: Interactive Showcase of Coffee Processes */}
        <div className="lg:col-span-5 w-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Interactive Tab Buttons */}
            <div className="flex gap-1.5 p-1 bg-brand-cream rounded-xl border border-brand-brown/10 mb-4 overflow-x-auto scrollbar-none">
              {scenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => handleSceneChange(scene.id as any)}
                  className={`flex-1 text-center py-2 px-3 rounded-lg text-[10px] uppercase tracking-wider font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeScene === scene.id
                      ? "bg-brand-brown text-brand-cream"
                      : "text-brand-brown/60 hover:text-brand-brown hover:bg-brand-brown/5"
                  }`}
                >
                  {scene.label}
                </button>
              ))}
            </div>

            {/* Active scene frame with animations */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-brand-brown/5 border border-brand-brown/10 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScene}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <PremiumMockup
                    type={activeScene}
                    name={info.brand}
                    subBranding={info.name}
                    logoUrl={logoUrl}
                    className="w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Top corner Indonesia flag ribbon */}
              <div className="absolute top-4 left-4 bg-brand-red text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1.5 border border-white/10 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                DARI GARUT UNTUK DUNIA
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block cursor-pointer" onClick={() => handleScrollTo("#tentang")}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-brand-brown/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-brand-red" />
        </motion.div>
      </div>

    </section>
  );
};
