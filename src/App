import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { FlavorWheelSection } from "./components/FlavorWheelSection";
import { SuccessStory } from "./components/SuccessStory";
import { Benefits } from "./components/Benefits";
import { Gallery } from "./components/Gallery";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { DEFAULT_CONTENT } from "./data";
import { PageContent, CoffeeProduct } from "./types";

export default function App() {
  const [content, setContent] = useState<PageContent>(() => {
    const saved = localStorage.getItem("kdkmp_web_content_v1");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_CONTENT;
      }
    }
    return DEFAULT_CONTENT;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [logoUrl, setLogoUrl] = useState(() => {
    return localStorage.getItem("kdkmp_web_logo_v1") || "";
  });

  // Save content to localStorage automatically whenever it changes
  useEffect(() => {
    localStorage.setItem("kdkmp_web_content_v1", JSON.stringify(content));
  }, [content]);

  // Handle Logo Upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setLogoUrl(base64);
        localStorage.setItem("kdkmp_web_logo_v1", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset to default Indonesian content
  const handleReset = () => {
    if (window.confirm("Apakah Anda yakin ingin mengembalikan seluruh konten website ke pengaturan awal?")) {
      setContent(DEFAULT_CONTENT);
      setLogoUrl("");
      localStorage.removeItem("kdkmp_web_content_v1");
      localStorage.removeItem("kdkmp_web_logo_v1");
      setIsEditing(false);
    }
  };

  // State handlers for each section
  const handleInfoChange = (field: string, val: string) => {
    setContent((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        [field]: val,
      },
    }));
  };

  const handleHeroChange = (field: string, val: string) => {
    setContent((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: val,
      },
    }));
  };

  const handleAboutChange = (field: string, val: string) => {
    setContent((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        [field]: val,
      },
    }));
  };

  const handleStatChange = (id: string, field: "label" | "value", val: string) => {
    setContent((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        stats: prev.about.stats.map((s) => (s.id === id ? { ...s, [field]: val } : s)),
      },
    }));
  };

  const handleProductChange = (id: string, field: keyof CoffeeProduct, val: any) => {
    setContent((prev) => ({
      ...prev,
      products: prev.products.map((p) => (p.id === id ? { ...p, [field]: val } : p)),
    }));
  };

  const handleStoryChange = (field: string, val: string) => {
    setContent((prev) => ({
      ...prev,
      story: {
        ...prev.story,
        [field]: val,
      },
    }));
  };

  const handleTimelineChange = (id: string, field: "phase" | "title" | "description", val: string) => {
    setContent((prev) => ({
      ...prev,
      story: {
        ...prev.story,
        timeline: prev.story.timeline.map((t) => (t.id === id ? { ...t, [field]: val } : t)),
      },
    }));
  };

  const handleBenefitChange = (id: string, field: "title" | "description", val: string) => {
    setContent((prev) => ({
      ...prev,
      benefits: prev.benefits.map((b) => (b.id === id ? { ...b, [field]: val } : b)),
    }));
  };

  const handleGalleryItemChange = (id: string, field: "title" | "category", val: string) => {
    setContent((prev) => ({
      ...prev,
      gallery: prev.gallery.map((g) => (g.id === id ? { ...g, [field]: val } : g)),
    }));
  };

  const handleCtaChange = (field: string, val: string) => {
    setContent((prev) => ({
      ...prev,
      ctaSection: {
        ...prev.ctaSection,
        [field]: val,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-red selection:text-white overflow-x-hidden antialiased">
      {/* Dynamic Sticky Header */}
      <Header
        info={content.info}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onReset={handleReset}
        logoUrl={logoUrl}
        onLogoUpload={handleLogoUpload}
      />

      {/* Cinematic Hero */}
      <Hero
        hero={content.hero}
        info={content.info}
        isEditing={isEditing}
        onChange={handleHeroChange}
        logoUrl={logoUrl}
        onLogoUpload={handleLogoUpload}
      />

      {/* Company Profile (About KDKMP) */}
      <About
        about={content.about}
        isEditing={isEditing}
        onAboutChange={handleAboutChange}
        onStatChange={handleStatChange}
      />

      {/* Specialty Coffee Catalog */}
      <Products
        products={content.products}
        isEditing={isEditing}
        productsTitle={content.productsTitle}
        productsSubtitle={content.productsSubtitle}
        onProductsTitleChange={(v) => setContent((p) => ({ ...p, productsTitle: v }))}
        onProductsSubtitleChange={(v) => setContent((p) => ({ ...p, productsSubtitle: v }))}
        onProductChange={handleProductChange}
        logoUrl={logoUrl}
        info={content.info}
      />

      {/* Dynamic Terroir Flavor Wheel / Taste Profiles */}
      <FlavorWheelSection
        isEditing={isEditing}
        title={content.flavorProfileTitle}
        subtitle={content.flavorProfileSubtitle}
        onTitleChange={(v) => setContent((p) => ({ ...p, flavorProfileTitle: v }))}
        onSubtitleChange={(v) => setContent((p) => ({ ...p, flavorProfileSubtitle: v }))}
      />

      {/* Success Story Article & Interactive Milestone Timeline */}
      <SuccessStory
        story={content.story}
        isEditing={isEditing}
        onStoryChange={handleStoryChange}
        onTimelineChange={handleTimelineChange}
      />

      {/* Core Advantages */}
      <Benefits
        benefits={content.benefits}
        isEditing={isEditing}
        benefitsTitle={content.benefitsTitle}
        benefitsSubtitle={content.benefitsSubtitle}
        onBenefitsTitleChange={(v) => setContent((p) => ({ ...p, benefitsTitle: v }))}
        onBenefitsSubtitleChange={(v) => setContent((p) => ({ ...p, benefitsSubtitle: v }))}
        onBenefitChange={handleBenefitChange}
      />

      {/* Dynamic Image Gallery */}
      <Gallery
        gallery={content.gallery}
        isEditing={isEditing}
        galleryTitle={content.galleryTitle}
        gallerySubtitle={content.gallerySubtitle}
        onGalleryTitleChange={(v) => setContent((p) => ({ ...p, galleryTitle: v }))}
        onGallerySubtitleChange={(v) => setContent((p) => ({ ...p, gallerySubtitle: v }))}
        onGalleryItemChange={handleGalleryItemChange}
        logoUrl={logoUrl}
      />

      {/* B2B Call To Action & Smart Messaging Forms */}
      <ContactCTA
        info={content.info}
        cta={content.ctaSection}
        isEditing={isEditing}
        onCtaChange={handleCtaChange}
      />

      {/* Premium Footer */}
      <Footer info={content.info} logoUrl={logoUrl} />
    </div>
  );
}

