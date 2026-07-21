export interface CompanyStats {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface CoffeeProduct {
  id: string;
  name: string;
  description: string;
  image: string; // Base64 data-URL or local mock premium SVG/CSS background
  type: string; // e.g. Single Origin Arabika
  roastLevel: string; // e.g. Light to Medium, Medium, Medium-Dark
  origin: string; // e.g. Gunung Papandayan, Garut (1400-1600 mdpl)
  price: string; // e.g. Rp 85.000 / 250gr
  // Taste profiles from 1 to 5
  aroma: number;
  acidity: number;
  body: number;
  sweetness: number;
  aftertaste: number;
}

export interface TimelineEvent {
  id: string;
  phase: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface CompanyInfo {
  name: string;
  brand: string;
  logo: string; // Base64 or premium SVG
  address: string;
  email: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface PageContent {
  info: CompanyInfo;
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    stats: CompanyStats[];
  };
  productsTitle: string;
  productsSubtitle: string;
  products: CoffeeProduct[];
  flavorProfileTitle: string;
  flavorProfileSubtitle: string;
  story: {
    title: string;
    subtitle: string;
    articleTitle: string;
    articleBody: string;
    quoteText: string;
    quoteAuthor: string;
    timeline: TimelineEvent[];
  };
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: Benefit[];
  galleryTitle: string;
  gallerySubtitle: string;
  gallery: GalleryItem[];
  ctaSection: {
    headline: string;
    subheadline: string;
    buttonPrimary: string;
    buttonSecondary: string;
    buttonTertiary: string;
  };
}
