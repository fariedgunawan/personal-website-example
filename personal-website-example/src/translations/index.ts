export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      projects: "Projects",
      faq: "FAQ",
      contact: "Contact Us"
    },
    hero: {
      badge: "Software Engineer & AI Solutions",
      title: "Crafting Seamless",
      rotating: ["Digital Experiences", "Web Applications", "Scalable Systems", "User Interfaces", "Data Analytics", "AI Solutions"],
      subtitle: "I specialize in building intuitive UI/UX, robust frontend architectures, and scalable systems that solve complex problems and delight users.",
      cta_primary: "Get in Touch",
      cta_secondary: "Show Portfolio"
    },
    tech: {
      title: "Tech Stack & Tools",
      subtitle: "A comprehensive suite of modern technologies and tools I use to build exceptional digital experiences."
    },
    services: {
      label: "What I Do",
      title: "Specialized Services",
      s1_title: "Frontend Development",
      s1_desc: "Building responsive, accessible, and highly interactive user interfaces using modern frameworks like React and Next.js.",
      s2_title: "Backend Architecture",
      s2_desc: "Designing scalable APIs and microservices with robust database structures for high-performance applications.",
      s3_title: "UI/UX Design",
      s3_desc: "Crafting intuitive user experiences with a focus on modern aesthetics, usability, and seamless interactions.",
      s4_title: "Mobile Development",
      s4_desc: "Creating cross-platform mobile applications that deliver native-like performance and beautiful interfaces.",
      s5_title: "Data Analytics",
      s5_desc: "Transforming raw data into actionable insights through advanced statistical analysis and data visualization.",
      s6_title: "AI Solutions",
      s6_desc: "Developing intelligent systems and integrating machine learning models to automate and optimize workflows."
    },
    about: {
      label: "Behind the Code",
      title1: "A passionate creator bridging ",
      title2: "design",
      title3: " and ",
      title4: "engineering.",
      p1: "Hello! I'm a software developer with a deep appreciation for aesthetics and user experience. I build digital products that are not only highly functional but also visually striking.",
      p2: "My approach involves a meticulous attention to detail, a love for smooth animations, and a dedication to writing clean, maintainable code. When I'm not coding, you can find me exploring new design trends or optimizing workflows.",
      cta: "Know More About Me"
    },
    portfolio: {
      label: "My Work",
      title: "Selected Projects",
      desc: "Explore a curated collection of my most recent projects across web, mobile, and design disciplines.",
      p1_title: "E-Commerce Platform",
      p1_cat: "Web Development",
      p2_title: "Fintech Dashboard",
      p2_cat: "UI/UX Design",
      p3_title: "AI Analytics Tool",
      p3_cat: "Cloud Solutions",
      p4_title: "Healthcare App",
      p4_cat: "Mobile Development",
      p5_title: "Smart Home Interface",
      p5_cat: "IoT Solutions",
      p6_title: "Virtual Reality Tour",
      p6_cat: "AR/VR Experiences"
    },
    projects: {
      label: "Case Studies",
      title: "Interactive Projects",
      desc: "A selection of my recent works. Select a project from the list to explore it live directly in the browser mockup below.",
      p1_name: "Griche Website",
      p1_cat: "Web Development",
      p1_desc: "A modern product advertising website for businesses.",
      p1_note: "Product Advertising",
      p2_name: "ArthaMuda App",
      p2_cat: "Financial App",
      p2_desc: "A comprehensive financial management dashboard for tracking expenses and income.",
      p2_note: "auth: demo@demo.com pass: demo123",
      p3_name: "Company Profile",
      p3_cat: "Corporate Web",
      p3_desc: "An elegant, responsive company profile website with smooth animations.",
      p3_note: "Corporate Identity",
      p4_name: "Travel Marketing",
      p4_cat: "Landing Page",
      p4_desc: "A beautiful travel destination showcase to boost marketing conversions.",
      p4_note: "Tourism Promotion",
      p5_name: "School Website",
      p5_cat: "Education Portal",
      p5_desc: "An informative school portal with galleries, news, and facility showcases.",
      p5_note: "Educational Hub",
      p6_name: "Security Outsorcing Company",
      p6_cat: "Company Profile",
      p6_desc: "Company profile portfolio for a security guard outsourcing company.",
      p6_note: "Outsourcing Services",
      p7_name: "System Admin for Security Company",
      p7_cat: "Web Application",
      p7_desc: "Application feature promotion system for security company.",
      p7_note: "Feature Promotion",
      view_all: "View All Case Studies"
    },
    faq: {
      label: "Questions",
      title1: "Focus on the signal, ",
      title2: "not the noise.",
      desc: "Everything you need to know about partnering with our team, condensed into calm clarity.",
      q1: "How long does it take to complete a large project?",
      a1: "It typically takes about 5 to 8 months to complete a large project.",
      q2: "What is the payment system?",
      a2: "We use a down payment (DP) system with price negotiation upfront.",
      q3: "What if there are errors or revisions needed?",
      a3: "We prioritize customer satisfaction. If there are mistakes, revisions can be made in as fast as 7 days.",
      q4: "Can I request specific workflows or designs?",
      a4: "Yes, you can request specific workflows, color tones, and other design preferences."
    },
    contact: {
      label: "Let's Connect",
      title1: "Let's build ",
      title2: "something ",
      title3: "extraordinary.",
      desc: "I'm always open to discussing product design work or partnership opportunities. Drop me a line!",
      form_title: "Send a Message",
      name: "Your Name",
      email: "Your Email",
      msg: "Tell me about your project...",
      send: "Send Message"
    },
    pricing_page: {
      title: "Detailed Pricing Plans",
      subtitle: "Transparent pricing tailored for every stage of your project's lifecycle.",
      tabs: {
        frontend: "Frontend",
        backend: "Backend",
        uiux: "UI/UX",
        mobile: "Mobile",
        data: "Data Analytics",
        ai: "AI Solutions"
      },
      packages: {
        frontend: [
          { name: "Basic", desc: "For simple landing pages and portfolios.", price: "3.5", features: ["React / Next.js Setup", "Responsive Layout", "Basic Animations", "3 Pages max"], isPopular: false },
          { name: "Pro", desc: "For corporate websites and complex web apps.", price: "5.5", features: ["Interactive Animations", "SEO Friendly", "State Management", "Up to 10 Pages"], isPopular: true },
          { name: "Enterprise", desc: "For large scale custom web applications.", price: "Custom", features: ["Custom Architecture", "Performance Optimization", "Dedicated Support", "Unlimited Pages"], isPopular: false }
        ],
        backend: [
          { name: "Basic", desc: "Simple API integration and small databases.", price: "4.5", features: ["RESTful API", "Basic Database", "Authentication", "Cloud Deployment"], isPopular: false },
          { name: "Pro", desc: "Complex microservices and scalable architecture.", price: "7.0", features: ["GraphQL API", "Advanced Database", "Caching System", "Dockerization"], isPopular: true },
          { name: "Enterprise", desc: "High availability distributed systems.", price: "Custom", features: ["Microservices Architecture", "Load Balancing", "High Availability", "24/7 Monitoring"], isPopular: false }
        ],
        uiux: [
          { name: "Basic", desc: "Simple wireframes and UI designs.", price: "2.5", features: ["Wireframing", "Basic Prototyping", "Up to 5 Screens", "2 Revisions"], isPopular: false },
          { name: "Pro", desc: "High-fidelity interactive prototypes.", price: "4.0", features: ["High-fidelity UI", "Interactive Prototype", "User Flow Optimization", "4 Revisions"], isPopular: true },
          { name: "Enterprise", desc: "Complete design systems and research.", price: "Custom", features: ["Design System Creation", "User Research", "Usability Testing", "Unlimited Revisions"], isPopular: false }
        ],
        mobile: [
          { name: "Basic", desc: "Simple mobile applications for one platform.", price: "6.0", features: ["Cross-platform Setup", "Basic UI Elements", "API Integration", "App Store Submission"], isPopular: false },
          { name: "Pro", desc: "Feature-rich cross platform apps.", price: "9.0", features: ["Native Performance", "Push Notifications", "Local Storage", "Advanced Animations"], isPopular: true },
          { name: "Enterprise", desc: "Large scale mobile applications.", price: "Custom", features: ["Custom Native Modules", "Complex State", "Hardware Integration", "Ongoing Support"], isPopular: false }
        ],
        data: [
          { name: "Basic", desc: "Basic data modeling and reporting.", price: "5.0", features: ["Data Modeling", "Basic Reporting", "Data Cleaning", "Weekly Insights"], isPopular: false },
          { name: "Pro", desc: "Advanced analytics and interactive dashboards.", price: "8.0", features: ["Statistical Analysis", "Interactive Dashboards", "Predictive Models", "Real-time Data"], isPopular: true },
          { name: "Enterprise", desc: "Big data infrastructure and deep analysis.", price: "Custom", features: ["Big Data Architecture", "Data Pipeline setup", "Deep Learning Models", "Dedicated Analyst"], isPopular: false }
        ],
        ai: [
          { name: "Basic", desc: "Integration of existing AI APIs.", price: "7.0", features: ["API Integration (OpenAI etc)", "Basic Prompt Engineering", "Workflow Automation", "Simple Chatbots"], isPopular: false },
          { name: "Pro", desc: "Custom model fine-tuning and intelligent systems.", price: "12.0", features: ["Model Fine-tuning", "Intelligent Systems", "RAG Implementation", "Advanced Chatbots"], isPopular: true },
          { name: "Enterprise", desc: "Training custom models from scratch.", price: "Custom", features: ["Custom ML Models", "Large Scale Data Training", "On-premise Deployment", "Dedicated AI Engineer"], isPopular: false }
        ]
      }
    },
    footer: {
      subtitle: "Building extraordinary digital experiences.",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      portfolio: "Portofolio",
      projects: "Proyek",
      faq: "FAQ",
      contact: "Hubungi Kami"
    },
    hero: {
      badge: "Perancangan Perangkat Lunak & Solusi Kecerdasan Buatan",
      title: "Menciptakan",
      rotating: ["Pengalaman Digital", "Aplikasi Web", "Sistem Terukur", "Antarmuka Pengguna", "Analitik Data", "Solusi AI"],
      subtitle: "Saya ahli dalam membangun UI/UX yang intuitif, arsitektur frontend yang kuat, dan sistem yang dapat diskalakan untuk memecahkan masalah kompleks dan memuaskan pengguna.",
      cta_primary: "Hubungi Saya",
      cta_secondary: "Lihat Portofolio"
    },
    tech: {
      title: "Teknologi & Alat",
      subtitle: "Rangkaian komprehensif teknologi dan alat modern yang saya gunakan untuk membangun pengalaman digital yang luar biasa."
    },
    services: {
      label: "Apa Yang Saya Lakukan",
      title: "Layanan Khusus",
      s1_title: "Pengembangan Frontend",
      s1_desc: "Membangun antarmuka pengguna yang responsif, dapat diakses, dan sangat interaktif menggunakan kerangka kerja modern seperti React dan Next.js.",
      s2_title: "Arsitektur Backend",
      s2_desc: "Merancang API dan layanan mikro yang dapat diskalakan dengan struktur basis data yang kuat untuk aplikasi berkinerja tinggi.",
      s3_title: "Desain UI/UX",
      s3_desc: "Menciptakan pengalaman pengguna yang intuitif dengan fokus pada estetika modern, kegunaan, dan interaksi yang mulus.",
      s4_title: "Pengembangan Seluler",
      s4_desc: "Membuat aplikasi seluler lintas platform yang memberikan kinerja seperti aplikasi bawaan dan antarmuka yang indah.",
      s5_title: "Analitik Data",
      s5_desc: "Mengubah data mentah menjadi wawasan bermakna melalui analisis statistik mendalam dan visualisasi data.",
      s6_title: "Solusi AI",
      s6_desc: "Mengembangkan sistem cerdas dan mengintegrasikan model pembelajaran mesin untuk mengotomatisasi alur kerja."
    },
    about: {
      label: "Di Balik Kode",
      title1: "Kreator yang menghubungkan ",
      title2: "desain",
      title3: " dan ",
      title4: "rekayasa.",
      p1: "Halo! Saya seorang pengembang perangkat lunak dengan apresiasi mendalam terhadap estetika dan pengalaman pengguna. Saya membangun produk digital yang tidak hanya sangat fungsional tetapi juga memukau secara visual.",
      p2: "Pendekatan saya melibatkan perhatian yang cermat terhadap detail, kecintaan pada animasi yang halus, dan dedikasi untuk menulis kode yang bersih dan mudah dipelihara. Saat saya tidak sedang membuat kode, Anda bisa menemukan saya mengeksplorasi tren desain baru atau mengoptimalkan alur kerja.",
      cta: "Kenali Saya Lebih Jauh"
    },
    portfolio: {
      label: "Karya Saya",
      title: "Proyek Pilihan",
      desc: "Jelajahi koleksi kurasi dari proyek terbaru saya di berbagai disiplin web, mobile, dan desain.",
      p1_title: "Platform E-Commerce",
      p1_cat: "Pengembangan Web",
      p2_title: "Dasbor Fintech",
      p2_cat: "Desain UI/UX",
      p3_title: "Alat Analisis AI",
      p3_cat: "Solusi Cloud",
      p4_title: "Aplikasi Kesehatan",
      p4_cat: "Pengembangan Seluler",
      p5_title: "Antarmuka Smart Home",
      p5_cat: "Solusi IoT",
      p6_title: "Tur Virtual Reality",
      p6_cat: "Pengalaman AR/VR"
    },
    projects: {
      label: "Studi Kasus",
      title: "Proyek Interaktif",
      desc: "Pilihan karya terbaru saya. Pilih proyek dari daftar untuk menjelajahinya secara langsung di dalam maket peramban di bawah ini.",
      p1_name: "Website Griche",
      p1_cat: "Pengembangan Web",
      p1_desc: "Website periklanan produk modern untuk bisnis.",
      p1_note: "Periklanan Produk",
      p2_name: "Aplikasi ArthaMuda",
      p2_cat: "Aplikasi Keuangan",
      p2_desc: "Dasbor manajemen keuangan komprehensif untuk melacak pengeluaran dan pemasukan.",
      p2_note: "auth: demo@demo.com pass: demo123",
      p3_name: "Profil Perusahaan",
      p3_cat: "Web Korporat",
      p3_desc: "Website profil perusahaan yang elegan dan responsif dengan animasi yang mulus.",
      p3_note: "Identitas Korporat",
      p4_name: "Pemasaran Perjalanan",
      p4_cat: "Halaman Landas",
      p4_desc: "Pameran destinasi perjalanan yang indah untuk meningkatkan konversi pemasaran.",
      p4_note: "Promosi Pariwisata",
      p5_name: "Website Sekolah",
      p5_cat: "Portal Pendidikan",
      p5_desc: "Portal sekolah informatif dengan galeri, berita, dan pameran fasilitas.",
      p5_note: "Pusat Pendidikan",
      p6_name: "Profil Team BGS",
      p6_cat: "Profil Perusahaan",
      p6_desc: "Portofolio company profile untuk perusahaan outsourcing satpam.",
      p6_note: "Layanan Outsourcing",
      p7_name: "Sistem Admin untuk Perusahaan Keamanan",
      p7_cat: "Aplikasi Web",
      p7_desc: "Promosi fitur sistem aplikasi untuk perusahaan keamanan.",
      p7_note: "Promosi Fitur",
      view_all: "Lihat Semua Studi Kasus"
    },
    faq: {
      label: "Pertanyaan",
      title1: "Fokus pada sinyal, ",
      title2: "bukan kebisingan.",
      desc: "Segala yang perlu Anda ketahui tentang bermitra dengan tim kami, dirangkum dalam kejelasan yang tenang.",
      q1: "Berapa lama waktu untuk mengerjakan suatu proyek besar?",
      a1: "Pengerjaan proyek berskala besar biasanya memakan waktu 5 sampai 8 bulan.",
      q2: "Bagaimana sistem pembayarannya?",
      a2: "Kami menggunakan sistem DP (Down Payment) dan tawar menawar di awal.",
      q3: "Bagaimana jika ada kesalahan atau butuh revisi?",
      a3: "Kami sangat mengutamakan kepuasan pelanggan. Jika ada kesalahan, revisi bisa diselesaikan paling cepat dalam 7 hari.",
      q4: "Apakah bisa request model pengerjaan atau desain spesifik?",
      a4: "Tentu, Anda bisa request menggunakan model pengerjaan seperti apa, tone warna yang diinginkan, dan lain-lain."
    },
    contact: {
      label: "Mari Terhubung",
      title1: "Mari membangun ",
      title2: "sesuatu ",
      title3: "yang luar biasa.",
      desc: "Saya selalu terbuka untuk mendiskusikan pekerjaan desain produk atau peluang kemitraan. Kirimkan saya pesan!",
      form_title: "Kirim Pesan",
      name: "Nama Anda",
      email: "Email Anda",
      msg: "Ceritakan tentang proyek Anda...",
      send: "Kirim Pesan"
    },
    pricing_page: {
      title: "Rencana Harga Detail",
      subtitle: "Harga transparan yang disesuaikan untuk setiap tahap siklus proyek Anda.",
      tabs: {
        frontend: "Frontend",
        backend: "Backend",
        uiux: "UI/UX",
        mobile: "Seluler",
        data: "Analitik Data",
        ai: "Solusi AI"
      },
      packages: {
        frontend: [
          { name: "Dasar", desc: "Untuk landing page sederhana dan portofolio.", price: "3.5", features: ["Pengaturan React / Next.js", "Tata Letak Responsif", "Animasi Dasar", "Maksimal 3 Halaman"], isPopular: false },
          { name: "Pro", desc: "Untuk situs web perusahaan dan aplikasi web kompleks.", price: "5.5", features: ["Animasi Interaktif", "Ramah SEO", "Manajemen State", "Hingga 10 Halaman"], isPopular: true },
          { name: "Enterprise", desc: "Untuk aplikasi web kustom skala besar.", price: "Custom", features: ["Arsitektur Kustom", "Optimisasi Performa", "Dukungan Khusus", "Halaman Tak Terbatas"], isPopular: false }
        ],
        backend: [
          { name: "Dasar", desc: "Integrasi API sederhana dan basis data kecil.", price: "4.5", features: ["API RESTful", "Basis Data Dasar", "Autentikasi", "Penyebaran Cloud"], isPopular: false },
          { name: "Pro", desc: "Layanan mikro kompleks dan arsitektur terukur.", price: "7.0", features: ["API GraphQL", "Basis Data Lanjutan", "Sistem Caching", "Dockerisasi"], isPopular: true },
          { name: "Enterprise", desc: "Sistem terdistribusi dengan ketersediaan tinggi.", price: "Custom", features: ["Arsitektur Layanan Mikro", "Penyeimbangan Beban", "Ketersediaan Tinggi", "Pemantauan 24/7"], isPopular: false }
        ],
        uiux: [
          { name: "Dasar", desc: "Wireframe sederhana dan desain UI.", price: "2.5", features: ["Wireframing", "Pembuatan Prototipe Dasar", "Hingga 5 Layar", "2 Revisi"], isPopular: false },
          { name: "Pro", desc: "Prototipe interaktif fidelitas tinggi.", price: "4.0", features: ["UI Fidelitas Tinggi", "Prototipe Interaktif", "Optimasi Alur Pengguna", "4 Revisi"], isPopular: true },
          { name: "Enterprise", desc: "Sistem desain lengkap dan penelitian pengguna.", price: "Custom", features: ["Pembuatan Sistem Desain", "Penelitian Pengguna", "Pengujian Kegunaan", "Revisi Tak Terbatas"], isPopular: false }
        ],
        mobile: [
          { name: "Dasar", desc: "Aplikasi seluler sederhana untuk satu platform.", price: "6.0", features: ["Pengaturan Lintas Platform", "Elemen UI Dasar", "Integrasi API", "Pengiriman App Store"], isPopular: false },
          { name: "Pro", desc: "Aplikasi lintas platform kaya fitur.", price: "9.0", features: ["Performa Asli", "Notifikasi Push", "Penyimpanan Lokal", "Animasi Lanjutan"], isPopular: true },
          { name: "Enterprise", desc: "Aplikasi seluler berskala besar.", price: "Custom", features: ["Modul Asli Kustom", "State Kompleks", "Integrasi Perangkat Keras", "Dukungan Berkelanjutan"], isPopular: false }
        ],
        data: [
          { name: "Dasar", desc: "Pemodelan data dan pelaporan dasar.", price: "5.0", features: ["Pemodelan Data", "Pelaporan Dasar", "Pembersihan Data", "Wawasan Mingguan"], isPopular: false },
          { name: "Pro", desc: "Analitik lanjutan dan dasbor interaktif.", price: "8.0", features: ["Analisis Statistik", "Dasbor Interaktif", "Model Prediktif", "Data Real-time"], isPopular: true },
          { name: "Enterprise", desc: "Infrastruktur big data dan analisis mendalam.", price: "Custom", features: ["Arsitektur Big Data", "Pengaturan Jalur Data", "Model Deep Learning", "Analis Khusus"], isPopular: false }
        ],
        ai: [
          { name: "Dasar", desc: "Integrasi API AI yang ada.", price: "7.0", features: ["Integrasi API (OpenAI dll)", "Prompt Engineering Dasar", "Otomatisasi Alur Kerja", "Chatbot Sederhana"], isPopular: false },
          { name: "Pro", desc: "Penyempurnaan model kustom dan sistem cerdas.", price: "12.0", features: ["Penyempurnaan Model", "Sistem Cerdas", "Implementasi RAG", "Chatbot Lanjutan"], isPopular: true },
          { name: "Enterprise", desc: "Melatih model kustom dari awal.", price: "Custom", features: ["Model ML Kustom", "Pelatihan Data Skala Besar", "Penyebaran On-premise", "Insinyur AI Khusus"], isPopular: false }
        ]
      }
    },
    footer: {
      subtitle: "Membangun pengalaman digital yang luar biasa.",
      rights: "Hak cipta dilindungi undang-undang.",
      privacy: "Kebijakan Privasi",
      terms: "Ketentuan Layanan"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationPaths = string; // Using a string type for flexibility
