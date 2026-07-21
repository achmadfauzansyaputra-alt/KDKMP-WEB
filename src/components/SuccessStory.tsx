import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Calendar, ArrowRight, ArrowLeft, Trophy, CheckCircle2, TrendingUp, Sparkles, BookOpen } from "lucide-react";
import { EditableText, EditableArea } from "./Editable";
import { TimelineEvent } from "../types";

interface SuccessStoryProps {
  story: {
    title: string;
    subtitle: string;
    articleTitle: string;
    articleBody: string;
    quoteText: string;
    quoteAuthor: string;
    timeline: TimelineEvent[];
  };
  isEditing: boolean;
  onStoryChange: (field: string, val: string) => void;
  onTimelineChange: (id: string, field: "phase" | "title" | "description", val: string) => void;
}

export const SuccessStory: React.FC<SuccessStoryProps> = ({
  story,
  isEditing,
  onStoryChange,
  onTimelineChange,
}) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(6); // Default to last step (Passar Global 2026)

  // Splitting the article body into first part and second part for "Baca Selengkapnya" toggle
  const paragraphs = story.articleBody.split("\n\n");
  const introParagraphs = paragraphs.slice(0, 2).join("\n\n");
  const remainingParagraphs = paragraphs.slice(2).join("\n\n");

  return (
    <section id="keberhasilan" className="relative py-24 bg-brand-cream text-brand-dark overflow-hidden border-t border-brand-brown/10">
      
      {/* Background radial elements */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red text-xs sm:text-sm font-bold tracking-[0.2em] uppercase font-mono block mb-2">
            STORYTELLING & REKAM JEJAK
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-brand-brown tracking-tighter leading-tight uppercase">
            <EditableText
              value={story.subtitle}
              onChange={(v) => onStoryChange("subtitle", v)}
              isEditing={isEditing}
              tag="span"
            />
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Block: Success Story Article */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl border border-brand-brown/10 p-6 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
              
              <div className="flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-[0.15em] font-mono mb-4">
                <BookOpen className="w-4 h-4 text-brand-red" />
                <span>ARTIKEL FITUR KDKMP</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-black text-brand-brown tracking-tight leading-snug mb-6">
                <EditableText
                  value={story.articleTitle}
                  onChange={(v) => onStoryChange("articleTitle", v)}
                  isEditing={isEditing}
                  tag="span"
                />
              </h3>

              <div className="text-brand-brown/80 text-xs sm:text-sm leading-relaxed space-y-4">
                <EditableArea
                  value={isEditing ? story.articleBody : introParagraphs}
                  onChange={(v) => onStoryChange("articleBody", v)}
                  isEditing={isEditing}
                />

                {!isEditing && remainingParagraphs && (
                  <AnimatePresence>
                    {isReadMore && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 pt-4 border-t border-brand-brown/10 mt-4"
                      >
                        <p className="whitespace-pre-wrap">
                          {remainingParagraphs}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>

              {!isEditing && remainingParagraphs && (
                <button
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="mt-6 text-xs font-bold text-brand-red hover:text-brand-brown flex items-center gap-1.5 focus:outline-none cursor-pointer"
                >
                  <span>{isReadMore ? "Baca Lebih Sedikit" : "Baca Selengkapnya"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isReadMore ? "rotate-90" : ""}`} />
                </button>
              )}
            </div>

            {/* Quote of Empowerment */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-cream border border-brand-brown/15 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-sm"
            >
              <Quote className="w-10 h-10 text-brand-red/10 absolute -left-1 -top-1" />
              <blockquote className="text-brand-brown text-sm sm:text-base italic leading-relaxed relative z-10 font-serif">
                "<EditableText
                  value={story.quoteText}
                  onChange={(v) => onStoryChange("quoteText", v)}
                  isEditing={isEditing}
                />"
              </blockquote>
              <div className="mt-4 flex items-center gap-3 relative z-10 border-t border-brand-brown/10 pt-4">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/25 flex items-center justify-center text-brand-red">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-brown block">
                    <EditableText
                      value={story.quoteAuthor}
                      onChange={(v) => onStoryChange("quoteAuthor", v)}
                      isEditing={isEditing}
                    />
                  </span>
                  <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">KDKMP Garut Management</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Interactive Timeline Stepper */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-brand-brown/10 p-6 sm:p-8 shadow-sm relative text-left">
              <div className="flex items-center justify-between gap-4 border-b border-brand-brown/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] text-brand-brown/50 font-mono font-bold tracking-widest uppercase block">MILESTONE</span>
                  <h4 className="text-base sm:text-lg font-serif font-black text-brand-brown">Timeline Perjalanan KDKMP</h4>
                </div>
                <div className="px-3 py-1 bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-bold rounded-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-green" />
                  <span>Interactive</span>
                </div>
              </div>

              {/* Step indicator badges */}
              <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-4 mb-6">
                {story.timeline.map((item, idx) => {
                  const isActive = activeTimelineStep === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTimelineStep(idx)}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono border transition-all cursor-pointer ${
                        isActive
                          ? "bg-brand-red text-white border-brand-red font-black shadow-md"
                          : "bg-brand-cream text-brand-brown/60 border-brand-brown/10 hover:text-brand-brown hover:border-brand-brown/30"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Render Selected Timeline Step Details with AnimatePresence */}
              <div className="min-h-[180px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {story.timeline.map((item, idx) => {
                    if (idx !== activeTimelineStep) return null;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div>
                          <span className="px-2.5 py-1 bg-brand-brown/5 border border-brand-brown/10 text-brand-red font-mono text-[10px] font-bold rounded-md uppercase tracking-wider inline-block">
                            <EditableText
                              value={item.phase}
                              onChange={(v) => onTimelineChange(item.id, "phase", v)}
                              isEditing={isEditing}
                            />
                          </span>
                          <h5 className="text-lg font-serif font-black text-brand-brown mt-2 leading-tight">
                            <EditableText
                              value={item.title}
                              onChange={(v) => onTimelineChange(item.id, "title", v)}
                              isEditing={isEditing}
                            />
                          </h5>
                        </div>

                        <div className="text-brand-brown/80 text-xs sm:text-sm leading-relaxed">
                          <EditableArea
                            value={item.description}
                            onChange={(v) => onTimelineChange(item.id, "description", v)}
                            isEditing={isEditing}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Stepper Buttons */}
                <div className="flex gap-3 pt-6 border-t border-brand-brown/10 mt-6">
                  <button
                    disabled={activeTimelineStep === 0}
                    onClick={() => setActiveTimelineStep((prev) => Math.max(0, prev - 1))}
                    className="p-2.5 rounded-xl bg-brand-cream border border-brand-brown/10 text-brand-brown hover:text-brand-dark hover:bg-brand-brown/5 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={activeTimelineStep === story.timeline.length - 1}
                    onClick={() => setActiveTimelineStep((prev) => Math.min(story.timeline.length - 1, prev + 1))}
                    className="p-2.5 rounded-xl bg-brand-brown border border-brand-brown text-white hover:bg-brand-dark disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex-1 flex justify-center items-center gap-1 font-bold text-xs"
                  >
                    <span>Langkah Berikutnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Timeline Map Overview badge */}
            <div className="bg-brand-green/10 border border-brand-green/20 p-5 rounded-3xl flex gap-3.5 items-center">
              <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
              <div className="text-left text-xs">
                <span className="font-bold text-brand-green block uppercase font-mono tracking-widest">Sertifikasi & Regulasi</span>
                <p className="text-brand-brown/80 mt-0.5 leading-relaxed">Seluruh rantai pasok KDKMP tersertifikasi Ketertelusuran (Traceable) & Karantina Ekspor Indonesia.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
