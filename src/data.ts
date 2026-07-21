import { PageContent } from "./types";

export const DEFAULT_CONTENT: PageContent = {
  info: {
    name: "Koperasi Desa Merah Putih",
    brand: "Kopi Arabika Khas Garut",
    logo: "", // Empty indicates we show a beautiful default SVG logo that can be replaced by uploading
    address: "Jl. Raya Cikajang No. 45, Kecamatan Cikajang, Kabupaten Garut, Jawa Barat 44171, Indonesia",
    email: "info@kdkmp-garut.co.id",
    phone: "+62 262 555 1234",
    whatsapp: "+62 812 3456 7890",
    instagram: "https://instagram.com/kdkmp.garut",
    facebook: "https://facebook.com/kdkmp.garut",
    youtube: "https://youtube.com/kdkmp.garut",
  },
  hero: {
    headline: "Dari Tanah Garut, Menembus Dunia.",
    subheadline: "Mengangkat cita rasa kopi Arabika premium dari lereng vulkanik Garut, memberdayakan ratusan petani lokal, dan membawa kebanggaan produk desa ke pasar internasional.",
    ctaPrimary: "Jelajahi Produk",
    ctaSecondary: "Tentang KDKMP",
  },
  about: {
    title: "Membangun Desa, Memberdayakan Petani",
    subtitle: "Tentang Koperasi Desa Merah Putih",
    description1: "Koperasi Desa Merah Putih (KDKMP) didirikan di dataran tinggi Garut dengan misi mulia: mengonsolidasikan potensi pertanian desa, meningkatkan kapasitas budidaya petani kopi lokal, dan memotong rantai pasar yang tidak adil agar kesejahteraan kembali ke tangan petani.",
    description2: "Mengelola perkebunan kopi Arabika di lereng pegunungan vulkanik Garut yang subur (antara 1.200 - 1.600 mdpl), kami memastikan setiap proses pasca-panen memenuhi standar kualitas tertinggi. KDKMP kini menjadi mercusuar ekonomi desa, membuktikan bahwa komoditas nusantara yang diolah dengan keahlian lokal mampu bersaing dan diakui oleh pencinta kopi spesial di seluruh penjuru dunia.",
    stats: [
      {
        id: "stat-1",
        label: "Petani Mitra Aktif",
        value: "350+",
        icon: "Users"
      },
      {
        id: "stat-2",
        label: "Luas Lahan Binaan",
        value: "280 Ha",
        icon: "Map"
      },
      {
        id: "stat-3",
        label: "Produksi Tahunan",
        value: "120 Ton",
        icon: "Scale"
      },
      {
        id: "stat-4",
        label: "Negara Ekspor",
        value: "8+",
        icon: "Globe"
      }
    ]
  },
  productsTitle: "Koleksi Kopi Arabika Garut Unggulan",
  productsSubtitle: "Hasil kurasi terbaik dari perkebunan vulkanik dengan penanganan pasca-panen yang presisi dan profil pemanggangan yang konsisten.",
  products: [
    {
      id: "prod-1",
      name: "Kopi Arabika Garut Premium",
      description: "Kopi Arabika pilihan yang tumbuh di dataran tinggi Garut dengan karakter rasa yang kompleks, aroma khas, dan cita rasa yang elegan. Diproses secara Full Wash untuk kejernihan rasa yang maksimal.",
      image: "premium_bag",
      type: "Single Origin Arabika - Full Wash",
      roastLevel: "Medium Roast",
      origin: "Kecamatan Cikajang, Garut (1.400 mdpl)",
      price: "Rp 85.000 / 250g",
      aroma: 5,
      acidity: 4,
      body: 3,
      sweetness: 4,
      aftertaste: 4
    },
    {
      id: "prod-2",
      name: "Kopi Arabika Specialty Garut",
      description: "Specialty coffee dengan kualitas biji pilihan (grade 1), proses pengolahan Natural yang terjaga secara ketat, serta karakter rasa eksotis yang mencerminkan kekayaan mineral tanah vulkanik Garut.",
      image: "specialty_bag",
      type: "Micro-lot Specialty - Natural Process",
      roastLevel: "Medium-Light Roast",
      origin: "Gunung Cikuray, Garut (1.550 mdpl)",
      price: "Rp 120.000 / 250g",
      aroma: 5,
      acidity: 5,
      body: 3,
      sweetness: 5,
      aftertaste: 5
    },
    {
      id: "prod-3",
      name: "Kopi Arabika Garut - Roasted Beans",
      description: "Biji kopi pilihan yang dipanggang oleh roaster profesional dengan profil pemanggangan yang tepat untuk mempertahankan aroma buah segar, keasaman seimbang, dan karakter asli kopi Garut yang kaya.",
      image: "roasted_bag",
      type: "Single Origin - Honey Process",
      roastLevel: "Medium-Dark Roast",
      origin: "Gunung Papandayan, Garut (1.450 mdpl)",
      price: "Rp 95.000 / 250g",
      aroma: 4,
      acidity: 3,
      body: 5,
      sweetness: 4,
      aftertaste: 4
    }
  ],
  flavorProfileTitle: "Karakteristik & Profil Rasa Kopi Garut",
  flavorProfileSubtitle: "Sensasi cita rasa khas (terroir) lereng pegunungan Garut yang subur, menghasilkan keunikan rasa kompleks yang digemari kurator internasional.",
  story: {
    title: "Membawa Kopi Lokal Garut Menembus Pasar Internasional",
    subtitle: "Cerita Keberhasilan KDKMP",
    articleTitle: "KDKMP: Dari Hulu Pegunungan Cikuray Hingga ke Cangkir Dunia",
    articleBody: "Perjalanan Koperasi Desa Merah Putih (KDKMP) dimulai dengan kegelisahan melihat melimpahnya hasil panen kopi Arabika Garut yang belum dihargai secara adil di pasar bebas. Para petani sering kali terpaksa menjual ceri kopi basah dengan harga sangat murah karena keterbatasan pengetahuan pengolahan pasca-panen dan akses pasar langsung.\n\nMelalui pendekatan koperasi yang kekeluargaan dan modern, KDKMP mengumpulkan para petani, memberikan pelatihan intensif mengenai pemetikan ceri merah (red cherry picking), serta mendirikan stasiun pengolahan bersama yang higienis dan terstandarisasi. Langkah ini berhasil menaikkan kualitas biji kopi (green beans) Garut hingga mencapai standar Specialty Coffee Association (SCA) dengan nilai uji cita rasa (cupping score) konsisten di atas 84 poin.\n\nDengan kemasan yang elegan, standarisasi internasional, sertifikasi organik, dan digitalisasi pemasaran, KDKMP meluncurkan produknya dengan membawa nama besar Indonesia. Melalui keikutsertaan dalam pameran dagang global di Eropa, Asia, dan Timur Tengah, Kopi Arabika Garut binaan KDKMP kini telah diekspor secara rutin ke berbagai negara mitra seperti Jepang, Korea Selatan, Jerman, dan Arab Saudi. Keberhasilan ini tidak hanya membawa kebanggaan budaya Indonesia di mata dunia, tetapi juga meningkatkan pendapatan riil para petani lokal hingga 150%, menjadi bukti nyata bahwa pemberdayaan berbasis desa mampu menggerakkan ekonomi mikro secara masif.",
    quoteText: "Produk lokal bukan hanya untuk dikenal di negeri sendiri, tetapi juga memiliki kesempatan emas untuk menjadi kebanggaan dan inspirasi di pasar dunia.",
    quoteAuthor: "Ketua Koperasi Desa Merah Putih",
    timeline: [
      {
        id: "time-1",
        phase: "Tahap 1: Potensi Desa (2020)",
        title: "Pemetaan & Inisiasi",
        description: "Mengidentifikasi melimpahnya varietas lini-S dan bourbon di lereng Gunung Cikuray dan Papandayan yang belum terkelola optimal secara ekonomi."
      },
      {
        id: "time-2",
        phase: "Tahap 2: Pemberdayaan Petani (2021)",
        title: "Edukasi & Pembentukan KDKMP",
        description: "Membentuk wadah koperasi formal, merangkul 50 petani pertama, dan memberikan edukasi petik merah serta teknik penjemuran yang terkontrol."
      },
      {
        id: "time-3",
        phase: "Tahap 3: Kualitas Produk (2022)",
        title: "Pembangunan Wet Mill & Standarisasi",
        description: "Mendirikan pusat pengolahan basah bersama untuk proses wash, honey, dan natural guna memastikan konsistensi cita rasa specialty grade."
      },
      {
        id: "time-4",
        phase: "Tahap 4: Pengembangan Brand (2023)",
        title: "Identitas Premium Merah Putih",
        description: "Merancang desain kemasan berstandar ekspor dengan nama KDKMP, menyematkan narasi terroir pegunungan Garut yang kuat dan bernilai tinggi."
      },
      {
        id: "time-5",
        phase: "Tahap 5: Pemasaran Digital (2024)",
        title: "Go Digital & B2B Matchmaking",
        description: "Memanfaatkan platform digital, traceability system (sistem pelacakan asal biji), dan menjalin kemitraan dengan jaringan kedai kopi nasional."
      },
      {
        id: "time-6",
        phase: "Tahap 6: Perluasan Pasar Nasional (2025)",
        title: "Distribusi Nasional & Lisensi Ekspor",
        description: "Memasok jaringan hotel, maskapai, dan supermarket premium di Indonesia, sekaligus mengamankan sertifikat phytosanitary untuk jalur ekspor."
      },
      {
        id: "time-7",
        phase: "Tahap 7: Menembus Pasar Global (2026)",
        title: "Ekspor Perdana & Kemitraan Internasional",
        description: "Berhasil mengekspor kontainer perdana green beans dan roasted beans ke Jerman dan Jepang, memperkokoh posisi kopi Garut di peta perkopian global."
      }
    ]
  },
  benefitsTitle: "Mengapa Memilih Kopi Binaan KDKMP?",
  benefitsSubtitle: "Setiap cangkir yang Anda nikmati merupakan simbol dari dedikasi, kualitas tanpa kompromi, dan perubahan nyata bagi kehidupan petani desa.",
  benefits: [
    {
      id: "ben-1",
      title: "Kualitas Specialty Grade",
      description: "Hanya memproses ceri merah matang sempurna dengan cupping score di atas 84, menghasilkan cita rasa kopi yang sangat kaya, bersih, dan memikat.",
      icon: "Award"
    },
    {
      id: "ben-2",
      title: "Pemberdayaan Petani Lokal",
      description: "Sistem bagi hasil koperasi yang adil memastikan petani mendapatkan keuntungan langsung yang layak, meningkatkan taraf hidup keluarga mereka.",
      icon: "HeartHandshake"
    },
    {
      id: "ben-3",
      title: "Terroir Vulkanik Alami",
      description: "Ditanam di ketinggian ideal lereng gunung berapi aktif di Garut yang kaya akan unsur hara mineral organik alami.",
      icon: "Mountain"
    },
    {
      id: "ben-4",
      title: "Ramah Lingkungan",
      description: "Menerapkan sistem tumpang sari (agroforestri) di bawah naungan pohon hutan alami demi menjaga kelestarian ekosistem tanah Garut.",
      icon: "Leaf"
    },
    {
      id: "ben-5",
      title: "Proses Produksi Terkontrol",
      description: "Dari penjemuran di kubah kaca rumah jemur (solar dome) hingga profiling roasting menggunakan mesin modern bersensor suhu presisi.",
      icon: "Settings"
    },
    {
      id: "ben-6",
      title: "Potensi Pasar Global",
      description: "Telah memenuhi standar ekspor karantina tumbuhan internasional serta memiliki sertifikasi ketertelusuran produk yang transparan.",
      icon: "TrendingUp"
    }
  ],
  galleryTitle: "Galeri Aktivitas & Keindahan Terroir Garut",
  gallerySubtitle: "Potret autentik perjalanan kopi dari perkebunan pegunungan yang asri hingga ke cangkir seduhan Anda.",
  gallery: [
    {
      id: "gal-1",
      title: "Perkebunan Kopi Cikajang",
      category: "Perkebunan",
      image: "perkebunan"
    },
    {
      id: "gal-2",
      title: "Pemetikan Ceri Merah Pilihan",
      category: "Aktivitas",
      image: "panen"
    },
    {
      id: "gal-3",
      title: "Proses Penjemuran Higienis",
      category: "Proses",
      image: "penjemuran"
    },
    {
      id: "gal-4",
      title: "Uji Cita Rasa (Cupping Session)",
      category: "Proses",
      image: "cupping"
    },
    {
      id: "gal-5",
      title: "Biji Kopi Hijau Standar Ekspor",
      category: "Produk",
      image: "green_beans"
    },
    {
      id: "gal-6",
      title: "Pertemuan Anggota Koperasi",
      category: "Aktivitas",
      image: "koperasi"
    }
  ],
  ctaSection: {
    headline: "Rasakan Cita Rasa Garut. Dukung Produk Lokal. Tembus Pasar Dunia.",
    subheadline: "Jadilah bagian dari gerakan pemberdayaan petani kopi lokal. Nikmati kemurnian Arabika Garut premium di cangkir Anda atau bergabunglah sebagai mitra dagang strategis kami.",
    buttonPrimary: "Hubungi Kami",
    buttonSecondary: "Jelajahi Produk",
    buttonTertiary: "Jadi Mitra Koperasi",
  }
};
