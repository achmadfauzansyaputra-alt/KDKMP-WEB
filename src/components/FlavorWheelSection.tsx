import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Compass, Heart, Wind, Star, Info, Check } from "lucide-react";
import { EditableText, EditableArea } from "./Editable";

interface FlavorDescriptor {
  id: string;
  name: string;
  valueText: string;
  ratingValue: number; // 1-5
  notes: string;
  description: string;
  icon: string;
}

interface FlavorWheelProps {
  isEditing: boolean;
  title: string;
  subtitle: string;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export const FlavorWheelSection: React.FC<FlavorWheelProps> = ({
  isEditing,
  title,
  subtitle,
  onTitleChange,
  onSubtitleChange,
}) => {
  const [activeTab, setActiveTab] = useState<string>("aroma");

  // Initial internal state for the taste descriptors so we can easily edit them
  const [descriptors, setDescriptors] = useState<FlavorDescriptor[]>([
    {
      id: "aroma",
      name: "Aroma",
      valueText: "Floral, Jasmine, & Fruity (Buah Segar)",
      ratingValue: 5,
      notes: "Jeruk mandarin, melati, madu hutan, gula cokelat",
      description: "Aroma kopi Arabika Garut sangat kaya dan khas, didominasi oleh kesegaran bunga melati (floral) dan manisnya buah matang yang menguap seketika setelah diseduh air panas.",
      icon: "Wind",
    },
    {
      id: "acidity",
      name: "Acidity (Keasaman)",
      valueText: "Medium Bright Acidity (Asam Bersih & Segar)",
      ratingValue: 4,
      notes: "Asam apel hijau, asam sitrat jeruk manis yang segar",
      description: "Tingkat keasaman yang cerah namun bersahabat dengan lambung. Keasaman ini bersumber dari melimpahnya nutrisi mineral vulkanis alami tanah Garut.",
      icon: "Award",
    },
    {
      id: "body",
      name: "Body (Kekentalan)",
      valueText: "Medium to Full Body (Halus & Padat)",
      ratingValue: 4,
      notes: "Mouthfeel yang lembut, seimbang, dan bulat mantap",
      description: "Mouthfeel atau tekstur cairan yang menyelimuti rongga mulut terasa lembut dan bulat (creamy), meninggalkan bobot rasa kopi asli tanpa rasa seret.",
      icon: "Compass",
    },
    {
      id: "sweetness",
      name: "Sweetness (Kemanisan)",
      valueText: "Chocolate & Sweet Caramelized Brown Sugar",
      notes: "Karamel pekat, madu manis, sensasi akhir cokelat hitam",
      ratingValue: 5,
      description: "Rasa manis alami yang tertinggal di lidah menyerupai manisnya gula kelapa yang dilelehkan atau lapisan karamel cokelat premium yang tebal.",
      icon: "Heart",
    },
    {
      id: "aftertaste",
      name: "Aftertaste (Kesan Rasa)",
      valueText: "Clean, Sweet, & Long Lingering Finish",
      notes: "Bersih di tenggorokan, manis buah bertahan lama",
      ratingValue: 5,
      description: "Setelah meminum kopi, rasa bersih dan segar langsung menyelimuti rongga mulut dengan meninggalkan aroma karamel manis yang bertahan lama tanpa rasa pahit gosong.",
      icon: "Star",
    },
  ]);

  const handleDescriptorChange = (id: string, field: keyof FlavorDescriptor, val: any) => {
    setDescriptors((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: val } : d))
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wind":
        return <Wind className="w-5 h-5" />;
      case "Award":
        return <Award className="w-5 h-5" />;
      case "Compass":
        return <Compass className="w-5 h-5" />;
      case "Heart":
        return <Heart className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const activeData = descriptors.find((d) => d.id === activeTab) || descriptors[0];

  return (
    <section id="profil-rasa" className="relative py-24 bg-brand-cream text-brand-dark overflow-hidden border-t border-brand-brown/10">
      
      {/* Background patterns */}
      <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-brand-brown/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono block mb-2">
            KARAKTER TERROIR GUNUNG GARUT
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-brand-brown tracking-tighter leading-tight uppercase">
            <EditableText
              value={title}
              onChange={onTitleChange}
              isEditing={isEditing}
              tag="span"
            />
          </h2>
          <div className="mt-4 text-brand-brown/80 text-sm sm:text-base leading-relaxed">
            <EditableArea
              value={subtitle}
              onChange={onSubtitleChange}
              isEditing={isEditing}
            />
          </div>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Interactive Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: 5 tabs styled with premium custom card selectors */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-brand-brown/50 text-xs font-bold uppercase tracking-widest font-mono block mb-2 text-left">
              Pilih Indikator Cita Rasa
            </span>
            <div className="flex flex-col gap-3">
              {descriptors.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                      isActive
                        ? "bg-brand-brown border-brand-brown text-white shadow-md"
                        : "bg-white border-brand-brown/10 hover:border-brand-brown/30 text-brand-brown/80 hover:text-brand-brown hover:bg-brand-brown/5"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />
                    )}
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl transition-all ${
                        isActive ? "bg-brand-red text-white" : "bg-brand-brown/5 text-brand-brown/60"
                      }`}>
                        {getIcon(item.icon)}
                      </div>
                      <div>
                        <span className={`font-sans font-bold text-sm block ${isActive ? "text-white" : "text-brand-brown"}`}>
                          {isEditing ? (
                            <EditableText
                              value={item.name}
                              onChange={(v) => handleDescriptorChange(item.id, "name", v)}
                              isEditing={isEditing}
                            />
                          ) : (
                            item.name
                          )}
                        </span>
                        <span className={`text-[10px] font-medium block max-w-[200px] truncate mt-0.5 ${isActive ? "text-white/70" : "text-brand-brown/60"}`}>
                          {item.valueText}
                        </span>
                      </div>
                    </div>
                    
                    {/* Tiny star rate badge */}
                    <div className="flex items-center gap-1 bg-brand-cream/10 px-2.5 py-1 rounded-lg text-xs font-bold text-brand-red border border-brand-brown/10">
                      <Star className="w-3 h-3 fill-brand-red text-brand-red" />
                      <span className={isActive ? "text-white" : "text-brand-brown"}>{item.ratingValue}/5</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Showcase display card of active taste note */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-brand-brown/10 p-6 sm:p-10 shadow-md relative overflow-hidden"
              >
                {/* Background soft element */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl" />

                <div className="flex items-start justify-between gap-6 pb-6 border-b border-brand-brown/10 mb-6">
                  <div>
                    <span className="text-[10px] text-brand-red font-bold uppercase tracking-widest font-mono block mb-1">
                      INDIKATOR AKTIF
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-brand-brown leading-tight">
                      <EditableText
                        value={activeData.name}
                        onChange={(v) => handleDescriptorChange(activeData.id, "name", v)}
                        isEditing={isEditing}
                        tag="span"
                      />
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-green/10 border border-brand-green/20 text-xs font-bold text-brand-green font-mono">
                    <Check className="w-3.5 h-3.5 text-brand-green" />
                    <span>Specialty Standard</span>
                  </div>
                </div>

                <div className="space-y-6 text-left">
                  {/* Rating value bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs text-brand-brown/60 font-mono">
                      <span>Tingkat Karakter (Intensitas)</span>
                      <span className="font-bold text-brand-red">{activeData.ratingValue} dari 5</span>
                    </div>
                    {isEditing ? (
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={activeData.ratingValue}
                        onChange={(e) => handleDescriptorChange(activeData.id, "ratingValue", parseInt(e.target.value))}
                        className="w-full accent-brand-red h-2 bg-brand-brown/10 rounded-lg cursor-pointer"
                      />
                    ) : (
                      <div className="w-full h-3 bg-brand-brown/5 rounded-full overflow-hidden flex p-0.5 border border-brand-brown/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(activeData.ratingValue / 5) * 100}%` }}
                          transition={{ duration: 0.6 }}
                          className="h-full rounded-full bg-brand-red"
                        />
                      </div>
                    )}
                  </div>

                  {/* Flavor Descriptors */}
                  <div>
                    <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Catatan Cita Rasa (Cupping Notes)</span>
                    <p className="text-base font-serif font-black text-brand-brown block mt-1">
                      <EditableText
                        value={activeData.valueText}
                        onChange={(v) => handleDescriptorChange(activeData.id, "valueText", v)}
                        isEditing={isEditing}
                      />
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Nuansa Rasa Detil</span>
                    <p className="text-xs sm:text-sm text-brand-brown/80 block mt-1 font-medium">
                      <EditableText
                        value={activeData.notes}
                        onChange={(v) => handleDescriptorChange(activeData.id, "notes", v)}
                        isEditing={isEditing}
                      />
                    </p>
                  </div>

                  {/* Description body */}
                  <div className="border-t border-brand-brown/10 pt-6 text-xs sm:text-sm text-brand-brown/70 leading-relaxed font-normal">
                    <EditableArea
                      value={activeData.description}
                      onChange={(v) => handleDescriptorChange(activeData.id, "description", v)}
                      isEditing={isEditing}
                    />
                  </div>

                  {/* Terroir impact info box */}
                  <div className="p-4 bg-brand-green/10 border border-brand-green/20 rounded-2xl flex gap-3 text-xs text-brand-brown/80 items-start">
                    <Info className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                    <span>
                      Cita rasa unik ini terbentuk akibat suhu sejuk dataran tinggi Garut yang berkisar antara 16°C – 22°C serta teknik tumpangsari di bawah pohon penaung alami.
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
