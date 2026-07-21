import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import { EditableText } from "./Editable";
import { PremiumMockup } from "./PremiumMockups";
import { GalleryItem } from "../types";

interface GalleryProps {
  gallery: GalleryItem[];
  isEditing: boolean;
  galleryTitle: string;
  gallerySubtitle: string;
  onGalleryTitleChange: (v: string) => void;
  onGallerySubtitleChange: (v: string) => void;
  onGalleryItemChange: (id: string, field: "title" | "category", val: string) => void;
  logoUrl: string;
}

export const Gallery: React.FC<GalleryProps> = ({
  gallery,
  isEditing,
  galleryTitle,
  gallerySubtitle,
  onGalleryTitleChange,
  onGallerySubtitleChange,
  onGalleryItemChange,
  logoUrl,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const categories = ["Semua", "Perkebunan", "Aktivitas", "Proses", "Produk"];

  const filteredItems = gallery.filter((item) => {
    if (activeFilter === "Semua") return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="galeri" className="relative py-24 bg-brand-cream text-brand-dark overflow-hidden border-t border-brand-brown/10">
      
      {/* Background accents */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-red text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono block mb-2">
            KEINDAHAN TERROIR & DOKUMENTASI
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-brand-brown tracking-tighter leading-tight uppercase">
            <EditableText
              value={galleryTitle}
              onChange={onGalleryTitleChange}
              isEditing={isEditing}
              tag="span"
            />
          </h2>
          <div className="mt-4 text-brand-brown/80 text-sm sm:text-base leading-relaxed">
            <EditableArea
              value={gallerySubtitle}
              onChange={onGallerySubtitleChange}
              isEditing={isEditing}
            />
          </div>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-brand-brown text-white shadow-md"
                  : "bg-white text-brand-brown/60 border border-brand-brown/10 hover:text-brand-brown hover:bg-brand-brown/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid of Illustrated scenes */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Map visual names to our customized high-fidelity PremiumMockup elements
              let typeKey = "perkebunan";
              if (item.image === "perkebunan") typeKey = "perkebunan";
              else if (item.image === "panen") typeKey = "panen";
              else if (item.image === "penjemuran") typeKey = "penjemuran";
              else if (item.image === "cupping") typeKey = "cupping";
              else if (item.image === "green_beans") typeKey = "green_beans";
              else if (item.image === "koperasi") typeKey = "koperasi";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl border border-brand-brown/10 overflow-hidden shadow-sm relative group flex flex-col justify-between"
                >
                  {/* Photo area */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-stone-950/40">
                    <PremiumMockup
                      type={typeKey}
                      logoUrl={logoUrl}
                      className="w-full h-full"
                    />

                    {/* Dark Hover overlay */}
                    <div
                      onClick={() => setSelectedImageIdx(index)}
                      className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 cursor-zoom-in"
                    >
                      <div className="p-3 rounded-full bg-brand-red text-white shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-brand-brown text-white text-[10px] font-bold uppercase tracking-wider rounded-md border border-brand-brown/10 font-mono">
                      {item.category}
                    </span>
                  </div>

                  {/* Context Footer Card */}
                  <div className="p-5 text-left border-t border-brand-brown/10 mt-auto bg-white">
                    <h4 className="font-serif font-black text-brand-brown text-sm sm:text-base">
                      <EditableText
                        value={item.title}
                        onChange={(v) => onGalleryItemChange(item.id, "title", v)}
                        isEditing={isEditing}
                        tag="span"
                      />
                    </h4>
                    <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-widest mt-1 block">
                      <EditableText
                        value={item.category}
                        onChange={(v) => onGalleryItemChange(item.id, "category", v)}
                        isEditing={isEditing}
                      />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedImageIdx !== null && filteredItems[selectedImageIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIdx(null)}
            className="fixed inset-0 z-50 bg-brand-brown/95 backdrop-blur-md flex flex-col justify-center items-center p-4 cursor-zoom-out"
          >
            {/* Close Lightbox */}
            <button
              onClick={() => setSelectedImageIdx(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-brand-cream border border-brand-brown/10 text-brand-brown hover:text-brand-dark transition-colors cursor-pointer z-50"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Display Frame */}
            <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Illustration Scene Display */}
              <div className="w-full aspect-[4/3] max-h-[70vh] bg-brand-cream rounded-3xl overflow-hidden shadow-2xl border border-brand-brown/10 flex justify-center items-center">
                <PremiumMockup
                  type={filteredItems[selectedImageIdx].image}
                  logoUrl={logoUrl}
                  className="w-full h-full"
                />
              </div>

              {/* Slider Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-brand-cream/90 text-brand-brown hover:text-brand-dark border border-brand-brown/10 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-brand-cream/90 text-brand-brown hover:text-brand-dark border border-brand-brown/10 transition-colors cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Captions Block */}
              <div className="mt-6 text-center max-w-xl text-brand-cream">
                <span className="px-2.5 py-1 bg-brand-red text-white border border-brand-red/10 text-[10px] font-bold rounded-md uppercase tracking-wider font-mono">
                  {filteredItems[selectedImageIdx].category}
                </span>
                <h4 className="text-xl font-serif font-black text-brand-cream mt-3">{filteredItems[selectedImageIdx].title}</h4>
                <p className="text-brand-cream/80 text-xs sm:text-sm mt-1">Dokumentasi resmi rantai kemitraan kopi berkelanjutan Koperasi Desa Merah Putih Garut.</p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

// Re-declare mock helper to avoid import loop
import { EditableArea } from "./Editable";
