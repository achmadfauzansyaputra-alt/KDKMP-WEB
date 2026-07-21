import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { EditableText, EditableArea } from "./Editable";
import { CompanyStats } from "../types";

interface AboutProps {
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    stats: CompanyStats[];
  };
  isEditing: boolean;
  onAboutChange: (field: string, val: string) => void;
  onStatChange: (id: string, field: "label" | "value", val: string) => void;
}

// Icon mapper to dynamically render Lucide icons from string keys
export const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-6 h-6" }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
};

export const About: React.FC<AboutProps> = ({
  about,
  isEditing,
  onAboutChange,
  onStatChange,
}) => {
  return (
    <section id="tentang" className="relative py-24 bg-brand-cream text-brand-dark overflow-hidden border-t border-brand-brown/10">
      
      {/* Decorative vector shape background */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-12 top-12 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-red text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono block mb-2"
          >
            <EditableText
              value={about.subtitle}
              onChange={(v) => onAboutChange("subtitle", v)}
              isEditing={isEditing}
            />
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-serif font-black text-brand-brown tracking-tighter leading-tight uppercase"
          >
            <EditableText
              value={about.title}
              onChange={(v) => onAboutChange("title", v)}
              isEditing={isEditing}
              tag="span"
            />
          </motion.h2>
          
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative story */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-brand-brown/80 text-sm sm:text-base leading-relaxed font-normal"
          >
            <div className="bg-white rounded-2xl border border-brand-brown/10 p-6 md:p-8 space-y-6 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-green" />
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-brand-green/5 rounded-full" />
              
              <div className="text-brand-brown/90 font-medium">
                <EditableArea
                  value={about.description1}
                  onChange={(v) => onAboutChange("description1", v)}
                  isEditing={isEditing}
                />
              </div>

              <div className="text-brand-brown/70 text-sm border-t border-brand-brown/10 pt-4">
                <EditableArea
                  value={about.description2}
                  onChange={(v) => onAboutChange("description2", v)}
                  isEditing={isEditing}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Block: Statistics and credentials */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-brand-brown/10 p-6 rounded-2xl shadow-sm relative group overflow-hidden hover:border-brand-red/30 hover:bg-brand-brown/5 transition-all duration-300"
                >
                  {/* Glowing background on hover */}
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-brand-red/5 rounded-full blur-xl group-hover:bg-brand-red/10 transition-all" />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <DynamicIcon name={stat.icon} className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl font-serif font-black text-brand-brown tracking-tight">
                      <EditableText
                        value={stat.value}
                        onChange={(v) => onStatChange(stat.id, "value", v)}
                        isEditing={isEditing}
                      />
                    </div>
                    <div className="text-xs sm:text-sm text-brand-brown/60 font-bold uppercase tracking-wider mt-1">
                      <EditableText
                        value={stat.label}
                        onChange={(v) => onStatChange(stat.id, "label", v)}
                        isEditing={isEditing}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote of value chain */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-5 bg-brand-green/10 border border-brand-green/20 rounded-2xl flex items-start gap-4"
            >
              <div className="p-2 rounded-xl bg-brand-green/20 text-brand-green mt-1 shrink-0">
                <Icons.Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-green uppercase tracking-widest font-mono">Prinsip Keberlanjutan</h4>
                <p className="text-brand-brown/80 text-xs sm:text-sm mt-1 leading-relaxed">
                  Kami membayarkan harga di atas rata-rata pasar langsung ke tangan petani, memberikan jaminan harga yang stabil, serta menanam pohon pelindung kehutanan untuk mencegah erosi lereng Garut.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
