import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, Mail, MapPin, CheckCircle2, MessageSquare, Briefcase, Users, ShoppingBag } from "lucide-react";
import { EditableText, EditableArea } from "./Editable";
import { CompanyInfo } from "../types";

interface ContactProps {
  info: CompanyInfo;
  cta: {
    headline: string;
    subheadline: string;
    buttonPrimary: string;
    buttonSecondary: string;
    buttonTertiary: string;
  };
  isEditing: boolean;
  onCtaChange: (field: string, val: string) => void;
}

export const ContactCTA: React.FC<ContactProps> = ({
  info,
  cta,
  isEditing,
  onCtaChange,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Kemitraan Ekspor B2B",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Create a structured Whatsapp text template
    const formattedText = `Halo Koperasi Desa Merah Putih (KDKMP) Garut,\n\nNama saya *${formData.name}* (${formData.email || "-"}),\nNo. HP: ${formData.phone || "-"}\n\n*Perihal:* ${formData.subject}\n*Pesan:* ${formData.message}\n\n_Dikirim melalui website Company Profile KDKMP._`;
    const encoded = encodeURIComponent(formattedText);
    const link = `https://wa.me/${info.whatsapp.replace(/[^0-9]/g, "")}?text=${encoded}`;
    
    setWaLink(link);
    setSubmitted(true);
  };

  const handleScrollToProducts = () => {
    const el = document.querySelector("#produk");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    const el = document.querySelector("#tentang");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="kontak" className="relative py-24 bg-brand-cream text-brand-dark overflow-hidden border-t border-brand-brown/10">
      
      {/* Background radial soft colors */}
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-brand-brown/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core CTA Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 border border-brand-red/25 text-brand-red text-[10px] font-bold rounded-lg uppercase tracking-widest font-mono mb-4"
          >
            <Users className="w-3.5 h-3.5" />
            <span>KEMITRAAN & KOLABORASI GLOBAL</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-brand-brown tracking-tighter leading-tight uppercase">
            <EditableText
              value={cta.headline}
              onChange={(v) => onCtaChange("headline", v)}
              isEditing={isEditing}
              tag="span"
            />
          </h2>

          <div className="mt-6 text-brand-brown/80 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            <EditableArea
              value={cta.subheadline}
              onChange={(v) => onCtaChange("subheadline", v)}
              isEditing={isEditing}
            />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleScrollToProducts}
              className="px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs tracking-wide transition-colors cursor-pointer"
            >
              <EditableText
                value={cta.buttonSecondary}
                onChange={(v) => onCtaChange("buttonSecondary", v)}
                isEditing={isEditing}
              />
            </button>
            <button
              onClick={handleScrollToAbout}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-brand-brown/5 border border-brand-brown/15 text-brand-brown font-semibold text-xs tracking-wide transition-colors cursor-pointer"
            >
              <EditableText
                value={cta.buttonTertiary}
                onChange={(v) => onCtaChange("buttonTertiary", v)}
                isEditing={isEditing}
              />
            </button>
          </div>
        </div>

        {/* Info Cards & Form grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 pt-12 border-t border-brand-brown/10">
          
          {/* Left Split: Contact Information Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-serif font-black text-brand-brown tracking-tight">Hubungi Sekretariat KDKMP</h3>
            <p className="text-brand-brown/70 text-xs sm:text-sm leading-relaxed">
              Kantor pusat administrasi dan stasiun pengolahan basah bersama koperasi kami terbuka untuk kunjungan kurator kopi, eksportir, dan calon petani mitra.
            </p>

            <div className="space-y-4 pt-4">
              {/* Alamat */}
              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-brown/10 shadow-sm">
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Alamat Sekretariat</span>
                  <span className="text-xs sm:text-sm font-semibold text-brand-brown block mt-1 leading-relaxed">
                    {info.address}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-brown/10 shadow-sm">
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Email Hubungan Ekspor</span>
                  <a href={`mailto:${info.email}`} className="text-xs sm:text-sm font-semibold text-brand-red hover:underline block mt-1">
                    {info.email}
                  </a>
                </div>
              </div>

              {/* Whatsapp */}
              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-brown/10 shadow-sm">
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-brown/50 font-mono uppercase tracking-wider block">Hotline WhatsApp Koperasi</span>
                  <a href={`https://wa.me/${info.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-brand-red hover:underline block mt-1">
                    {info.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Split: Inquiry Form panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-brand-brown/10 p-6 sm:p-8 shadow-sm relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="text-[11px] font-bold text-brand-brown/50 uppercase tracking-widest block mb-1.5">Nama Lengkap</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama Anda..."
                          className="w-full px-4 py-3 bg-brand-cream rounded-xl border border-brand-brown/10 focus:border-brand-red focus:outline-none text-brand-brown text-xs sm:text-sm"
                        />
                      </div>

                      {/* WhatsApp / Phone */}
                      <div>
                        <label className="text-[11px] font-bold text-brand-brown/50 uppercase tracking-widest block mb-1.5">No. WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 08123456789"
                          className="w-full px-4 py-3 bg-brand-cream rounded-xl border border-brand-brown/10 focus:border-brand-red focus:outline-none text-brand-brown text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[11px] font-bold text-brand-brown/50 uppercase tracking-widest block mb-1.5">Alamat Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        className="w-full px-4 py-3 bg-brand-cream rounded-xl border border-brand-brown/10 focus:border-brand-red focus:outline-none text-brand-brown text-xs sm:text-sm"
                      />
                    </div>

                    {/* Interest / Subject */}
                    <div>
                      <label className="text-[11px] font-bold text-brand-brown/50 uppercase tracking-widest block mb-1.5">Perihal Pertanyaan</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-brand-cream rounded-xl border border-brand-brown/10 focus:border-brand-red focus:outline-none text-brand-brown text-xs sm:text-sm cursor-pointer"
                      >
                        <option value="Kemitraan Ekspor B2B">Kemitraan Ekspor & Distribusi B2B</option>
                        <option value="Jadi Mitra Petani">Pendaftaran Anggota / Mitra Petani Koperasi</option>
                        <option value="Pemesanan Kopi Retail">Pembelian Grosir / Kedai Kopi Nasional</option>
                        <option value="Konsultasi Terroir">Kunjungan Studi Potensi Desa</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[11px] font-bold text-brand-brown/50 uppercase tracking-widest block mb-1.5">Isi Pesan</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tuliskan pesan, rincian volume kerja sama, atau pertanyaan Anda di sini..."
                        className="w-full px-4 py-3 bg-brand-cream rounded-xl border border-brand-brown/10 focus:border-brand-red focus:outline-none text-brand-brown text-xs sm:text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-xl text-xs sm:text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{cta.buttonPrimary}</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-serif font-black text-brand-brown">Formulir Sukses Terbentuk!</h4>
                      <p className="text-brand-brown/80 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                        Terima kasih, <b>{formData.name}</b>. Kami telah menyusun pesan kemitraan secara otomatis agar Anda dapat mengirimkannya langsung ke WhatsApp resmi kami sekarang.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 bg-brand-green text-white font-bold rounded-xl text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Kirim via WhatsApp Sekarang
                      </a>
                      
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            subject: "Kemitraan Ekspor B2B",
                            message: "",
                          });
                        }}
                        className="w-full sm:w-auto px-5 py-3 bg-brand-cream hover:bg-brand-brown/5 text-brand-brown font-semibold rounded-xl text-xs border border-brand-brown/10 transition-colors cursor-pointer"
                      >
                        Tulis Pesan Baru
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
