import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, X, Sliders, DollarSign, MapPin, Tag, ShoppingBag, Coffee, Star } from "lucide-react";
import { EditableText, EditableArea } from "./Editable";
import { PremiumMockup } from "./PremiumMockups";
import { CoffeeProduct, CompanyInfo } from "../types";

interface ProductsProps {
  products: CoffeeProduct[];
  isEditing: boolean;
  productsTitle: string;
  productsSubtitle: string;
  onProductsTitleChange: (v: string) => void;
  onProductsSubtitleChange: (v: string) => void;
  onProductChange: (id: string, field: keyof CoffeeProduct, val: any) => void;
  logoUrl: string;
  info: CompanyInfo;
}

export const Products: React.FC<ProductsProps> = ({
  products,
  isEditing,
  productsTitle,
  productsSubtitle,
  onProductsTitleChange,
  onProductsSubtitleChange,
  onProductChange,
  logoUrl,
  info,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<CoffeeProduct | null>(null);

  // Flavor profiles mapping
  const flavorKeys: { key: keyof CoffeeProduct; label: string }[] = [
    { key: "aroma", label: "Aroma" },
    { key: "acidity", label: "Acidity (Keasaman)" },
    { key: "body", label: "Body (Kekentalan)" },
    { key: "sweetness", label: "Sweetness (Kemanisan)" },
    { key: "aftertaste", label: "Aftertaste" },
  ];

  return (
    <section id="produk" className="relative py-24 bg-brand-cream text-brand-dark overflow-hidden border-t border-brand-brown/10">
      
      {/* Background accents */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono block mb-2">
            KATALOG BRAND PREMIUM KDKMP
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-brand-brown tracking-tighter leading-tight uppercase">
            <EditableText
              value={productsTitle}
              onChange={onProductsTitleChange}
              isEditing={isEditing}
              tag="span"
            />
          </h2>
          <div className="mt-4 text-brand-brown/80 text-sm sm:text-base leading-relaxed">
            <EditableArea
              value={productsSubtitle}
              onChange={onProductsSubtitleChange}
              isEditing={isEditing}
            />
          </div>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              layoutId={`card-${product.id}`}
              className="bg-white rounded-3xl border border-brand-brown/10 shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-xl hover:border-brand-red/20 transition-all duration-300 relative group"
            >
              
              {/* Product Pouch Visual Mockup */}
              <div className="p-4 bg-brand-brown/5 relative flex items-center justify-center">
                <PremiumMockup
                  type={product.image}
                  name={product.name}
                  subBranding="Koperasi Desa Merah Putih"
                  logoUrl={logoUrl}
                  className="w-full h-72"
                />
                
                {/* Visual Accent Tags */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="px-2.5 py-1 bg-brand-green text-white text-[9px] font-bold tracking-wider rounded-sm uppercase font-mono">
                    {product.type.split(" - ")[1] || "Natural"}
                  </span>
                  <span className="px-2.5 py-1 bg-brand-brown text-white text-[9px] font-bold tracking-wider rounded-sm uppercase font-mono">
                    {product.roastLevel}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-brown tracking-tight leading-tight group-hover:text-brand-red transition-colors">
                      <EditableText
                        value={product.name}
                        onChange={(v) => onProductChange(product.id, "name", v)}
                        isEditing={isEditing}
                        tag="span"
                      />
                    </h3>
                  </div>

                  <div className="text-xs text-brand-brown/60 font-semibold mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <EditableText
                      value={product.origin}
                      onChange={(v) => onProductChange(product.id, "origin", v)}
                      isEditing={isEditing}
                    />
                  </div>

                  <div className="text-brand-brown/80 text-xs sm:text-sm leading-relaxed mb-4">
                    <EditableArea
                      value={product.description}
                      onChange={(v) => onProductChange(product.id, "description", v)}
                      isEditing={isEditing}
                    />
                  </div>

                  <div className="border-t border-brand-brown/10 pt-4 space-y-2">
                    <span className="text-[10px] font-bold tracking-widest text-brand-brown/60 uppercase font-mono flex items-center gap-1.5 mb-2">
                      <Sliders className="w-3.5 h-3.5 text-brand-green" />
                      Profil Karakter Rasa
                    </span>
                    
                    {flavorKeys.map((item) => {
                      const val = (product as any)[item.key] as number;
                      return (
                        <div key={item.key} className="flex items-center gap-4 text-xs">
                          <span className="w-24 text-brand-brown/60 text-[11px]">{item.label}</span>
                          
                          {isEditing ? (
                            <input
                              type="range"
                              min="1"
                              max="5"
                              value={val}
                              onChange={(e) => onProductChange(product.id, item.key, parseInt(e.target.value))}
                              className="flex-1 accent-brand-red h-1 bg-brand-brown/10 rounded-lg cursor-pointer"
                            />
                          ) : (
                            <div className="flex-1 flex gap-1 items-center">
                              {[...Array(5)].map((_, idx) => (
                                <span
                                  key={idx}
                                  className={`w-2.5 h-1.5 rounded-full transition-colors ${
                                    idx < val ? "bg-brand-red" : "bg-brand-brown/10"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                          <span className="text-[10px] text-brand-red font-bold font-mono">{val}/5</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-brand-brown/10 mt-auto">
                  <div>
                    <span className="text-[10px] text-brand-brown/50 font-mono tracking-wider uppercase block">HARGA PRODUK</span>
                    <span className="text-base sm:text-lg font-serif font-black text-brand-green">
                      <EditableText
                        value={product.price}
                        onChange={(v) => onProductChange(product.id, "price", v)}
                        isEditing={isEditing}
                      />
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="px-4 py-2.5 rounded-full bg-brand-brown/5 hover:bg-brand-brown text-brand-brown hover:text-white text-xs font-bold border border-brand-brown/10 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Lihat Detail
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-dark/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              layoutId={`card-${selectedProduct.id}`}
              className="bg-brand-cream border border-brand-brown/20 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-cream/90 text-brand-brown hover:text-brand-dark border border-brand-brown/20 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Split: Product Image Mockup */}
                <div className="md:col-span-5 bg-brand-brown/5 p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-brand-brown/10">
                  <PremiumMockup
                    type={selectedProduct.image}
                    name={selectedProduct.name}
                    subBranding="Koperasi Desa Merah Putih"
                    logoUrl={logoUrl}
                    className="w-full h-80"
                  />
                  <div className="text-center mt-4">
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest font-mono">Kemasan Premium</span>
                    <p className="text-[11px] text-brand-brown/60 mt-1">Menggunakan Flat Bottom Pouch dengan zipper pengunci kesegaran & One-Way Valve khusus ekspor.</p>
                  </div>
                </div>

                {/* Right Split: Advanced specifications */}
                <div className="md:col-span-7 p-6 sm:p-10 space-y-6">
                  <div>
                    <span className="px-3 py-1 bg-brand-green text-white text-[10px] font-bold tracking-wider rounded-sm uppercase font-mono inline-block mb-3">
                      Specialty Grade
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-brand-brown tracking-tight leading-none">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs text-brand-red font-mono tracking-wider uppercase mt-2">
                      {selectedProduct.type}
                    </p>
                  </div>

                  <p className="text-brand-brown/80 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Metadata Table */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-brown/10 text-xs">
                    <div>
                      <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Wilayah Asal (Terroir)</span>
                      <span className="font-bold text-brand-brown block mt-0.5">{selectedProduct.origin}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Roasting Level</span>
                      <span className="font-bold text-brand-brown block mt-0.5">{selectedProduct.roastLevel}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Harga Eksklusif</span>
                      <span className="font-bold text-brand-green block mt-0.5">{selectedProduct.price}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Rekomendasi Seduh</span>
                      <span className="font-bold text-brand-brown block mt-0.5">V60 Pour Over, French Press</span>
                    </div>
                  </div>

                  {/* Taste profile list */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-brand-brown uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <Sliders className="w-4 h-4 text-brand-green" />
                      Detail Sensasi Rasa (Flavor Wheels)
                    </span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {flavorKeys.map((item) => {
                        const val = (selectedProduct as any)[item.key] as number;
                        return (
                          <div key={item.key} className="flex justify-between items-center text-xs border-b border-brand-brown/5 py-1">
                            <span className="text-brand-brown/60">{item.label.split(" (")[0]}</span>
                            <div className="flex gap-1 items-center">
                              {[...Array(5)].map((_, idx) => (
                                <Star
                                  key={idx}
                                  className={`w-3 h-3 ${
                                    idx < val ? "text-brand-red fill-brand-red" : "text-brand-brown/10"
                                  }`}
                                />
                              ))}
                              <span className="text-[10px] font-bold text-brand-brown/80 ml-1">{val}/5</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Modal CTA */}
                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href={`https://wa.me/${info.whatsapp.replace(/[^0-9]/g, "")}?text=Halo%20Koperasi%20Desa%20Merah%20Putih,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(selectedProduct.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-brand-green hover:bg-[#203116] text-white font-bold rounded-full text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Pesan via WhatsApp Koperasi
                    </a>
                    
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="px-6 py-3 bg-transparent hover:bg-brand-brown/5 text-brand-brown font-bold rounded-full text-xs uppercase tracking-widest transition-colors border border-brand-brown/20"
                    >
                      Tutup
                    </button>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
