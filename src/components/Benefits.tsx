import React from "react";
import { motion } from "motion/react";
import { Award, HeartHandshake, Mountain, Leaf, Settings, TrendingUp, Compass, Sparkles } from "lucide-react";
import { EditableText, EditableArea } from "./Editable";
import { Benefit } from "../types";

interface BenefitsProps {
  benefits: Benefit[];
  isEditing: boolean;
  benefitsTitle: string;
  benefitsSubtitle: string;
  onBenefitsTitleChange: (v: string) => void;
  onBenefitsSubtitleChange: (v: string) => void;
  onBenefitChange: (id: string, field: "title" | "description", val: string) => void;
}

export const getBenefitIcon = (name: string, className: string = "w-6 h-6") => {
  switch (name) {
    case "Award":
      return <Award className={className} />;
    case "HeartHandshake":
      return <HeartHandshake className={className} />;
    case "Mountain":
      return <Mountain className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    case "Settings":
      return <Settings className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    default:
      return <Compass className={className} />;
  }
};

export const Benefits: React.FC<BenefitsProps> = ({
  benefits,
  isEditing,
  benefitsTitle,
  benefitsSubtitle,
  onBenefitsTitleChange,
  onBenefitsSubtitleChange,
  onBenefitChange,
}) => {
  return (
    <section id="keunggulan" className="relative py-24 bg-brand-cream text-brand-dark overflow-hidden border-t border-brand-brown/10">
      
      {/* Decorative ambient lighting */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-brown/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 top-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono block mb-2">
            KEUNGGULAN KOOPERATIF
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-brand-brown tracking-tighter leading-tight uppercase">
            <EditableText
              value={benefitsTitle}
              onChange={onBenefitsTitleChange}
              isEditing={isEditing}
              tag="span"
            />
          </h2>
          <div className="mt-4 text-brand-brown/80 text-sm sm:text-base leading-relaxed">
            <EditableArea
              value={benefitsSubtitle}
              onChange={onBenefitsSubtitleChange}
              isEditing={isEditing}
            />
          </div>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-brand-brown/10 p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-brand-red/30 hover:bg-brand-brown/5 transition-all duration-300 shadow-sm text-left"
            >
              {/* Corner decor icon on hover */}
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-brand-red/5 rounded-full blur-xl group-hover:bg-brand-red/10 transition-all" />

              {/* Icon Container */}
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  {getBenefitIcon(benefit.icon, "w-6 h-6")}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-serif font-black text-brand-brown tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                <EditableText
                  value={benefit.title}
                  onChange={(v) => onBenefitChange(benefit.id, "title", v)}
                  isEditing={isEditing}
                  tag="span"
                />
              </h3>

              <div className="text-brand-brown/80 text-xs sm:text-sm leading-relaxed font-normal">
                <EditableArea
                  value={benefit.description}
                  onChange={(v) => onBenefitChange(benefit.id, "description", v)}
                  isEditing={isEditing}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
