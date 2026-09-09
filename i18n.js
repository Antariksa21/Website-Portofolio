/**
 * MUHAMMAD ANTARIKSA PORTFOLIO - LIGHTWEIGHT I18N ENGINE
 * Supports Indonesian ('id' - default) and English ('en')
 * Zero dependencies, instant client-side switching, localStorage + cookie persistent
 */

const TRANSLATIONS = {
  id: {
  "meta": {
    "title": "Muhammad Antariksa | Portofolio Informatika & Machine Learning",
    "description": "Portofolio Muhammad Antariksa - Lulusan Informatika berfokus pada Machine Learning, Sistem Cerdas, dan Rekayasa Perangkat Lunak."
  },
  "nav": {
    "about": "Tentang",
    "experience": "Pengalaman",
    "projects": "Proyek",
    "contact": "Kontak",
    "hireMe": "Rekrut Sekarang"
  },
  "hero": {
    "badge": "Tersedia untuk Posisi Tech & AI Engineer",
    "greeting": "Halo, Saya",
    "subtitle": "Lulusan Informatika | Machine Learning & Software Engineer",
    "bio": "Lulusan Informatika yang berfokus pada pengembangan sistem cerdas, Machine Learning, dan rekayasa perangkat lunak. Suka membangun aplikasi web interaktif yang menyelesaikan masalah nyata menggunakan data dan teknologi modern.",
    "ctaProjects": "Lihat Proyek Saya",
    "ctaLinkedin": "LinkedIn Profil",
    "skillsTitle": "Teknologi & Keahlian Utama",
    "cardReady": "Ready for Work",
    "cardRole": "AI / ML & Software Eng.",
    "cardType": "Full-Time",
    "badgeFresh": "Fresh Graduate",
    "badgeDelegate": "Delegasi Jepang"
  },
  "about": {
    "degree": "S1 Teknik Informatika",
    "focusLabel": "Fokus Bidang",
    "focusVal": "AI / ML & Software Eng.",
    "statusLabel": "Status",
    "statusVal": "Ready for Hire",
    "locLabel": "Lokasi",
    "locVal": "Indonesia",
    "whyTitle": "Kenapa Memilih Saya?",
    "whyDesc": "Memiliki kombinasi analitis data komputasi machine learning serta kemampuan rekayasa web frontend/backend yang siap diimplementasikan langsung pada ekosistem industri.",
    "badge": "Ringkasan Kualifikasi",
    "heading": "Menghubungkan Algoritma Machine Learning dengan Pengalaman Pengguna Berdampak.",
    "desc": "Sebagai lulusan Informatika, saya berdedikasi membangun aplikasi cerdas berkinerja tinggi. Fokus utama saya mencakup pembuatan model machine learning yang akurat, pengolahan data time series & kesehatan, serta pengemasan model ke dalam antarmuka web interaktif yang siap diakses pengguna maupun stakeholder bisnis.",
    "stat1": {
      "val": "2+",
      "label": "Proyek ML Live"
    },
    "stat2": {
      "val": "Jepang",
      "label": "Delegasi Global"
    },
    "stat3": {
      "val": "100%",
      "label": "Web Deployed"
    },
    "stat4": {
      "val": "S1",
      "label": "Informatika"
    }
  },
  "experience": {
    "badge": "Pengalaman Internasional",
    "heading": "Pengalaman di Jepang",
    "sub": "Dokumentasi keterlibatan dalam delegasi akademik internasional, pendampingan MoU Universitas, serta pengabdian masyarakat lintas budaya di Jepang.",
    "conf": {
      "bCountry": "Jepang",
      "bOrg": "IEEE Student Branch (ASB)",
      "bRole": "Team Support Delegasi",
      "title": "Pendampingan MoU & Technical Support Konferensi Internasional di Jepang",
      "p1": "Sebagai perwakilan mahasiswa dari IEEE Student Branch (ASB), saya dan 2 teman saya diberangkatkan untuk membantu jalannya acara dan mendampingi para dosen Universitas Amikom yang juga memiliki agenda penandatanganan MoU dengan beberapa universitas ternama di Jepang. Pengalaman ini tidak hanya memperluas wawasan kami, tetapi juga memberikan pelajaran berharga tentang profesionalisme dalam acara berskala internasional.",
      "p2": "Tim kami memiliki tanggung jawab yang berbeda-beda. Ada yang bertugas mengelola live streaming melalui kanal YouTube amikomjogja, mendokumentasikan acara menggunakan kamera dan gimbal, serta mendesain materi visual seperti poster, sertifikat, dan banner. Kami merasa bangga dapat menjalankan tugas kami dengan lancar, mulai dari memastikan kelancaran live streaming, dokumentasi, hingga mendukung kebutuhan teknis lainnya.",
      "respTitle": "Tanggung Jawab & Kontribusi:",
      "resp1": "Live Streaming YouTube amikomjogja",
      "resp2": "Dokumentasi Kamera & Gimbal",
      "resp3": "Desain Poster, Sertifikat & Banner",
      "resp4": "Dukungan Agenda MoU Dosen",
      "img1Caption": "Dokumentasi Delegasi & Acara",
      "img2Caption": "Team Support & MoU Signing"
    },
    "community": {
      "bLoc": "Kanazawa, Jepang",
      "bType": "Pengabdian Masyarakat",
      "bOrg": "Lembaga AJU (一般社団法人あじゅ)",
      "title": "Program Pengabdian Masyarakat: Membawa Budaya Indonesia untuk Lansia & Disabilitas di Jepang",
      "p1": "Sebagai bagian dari rangkaian kunjungan akademik ke Jepang yaitu program pengabdian masyarakat, kami mengunjungi tempat lansia difabel di Kanazawa tepatnya di Lembaga AJU (一般社団法人あじゅ), yaitu Sebuah organisasi nirlaba yang berfokus pada pengembangan dan dukungan untuk lansia penyandang disabilitas.",
      "p2": "Agenda ini mengusung tema <span class=\"text-indigo-700 font-bold\">“Membawa Kebudayaan Indonesia kepada Lansia dan Disabilitas Jepang”</span>, dan ditujukan untuk berbagi inspirasi sekaligus memperkenalkan budaya Indonesia kepada warga lansia dan difabel setempat. Di sana, saya dan team memperkenalkan minuman dan makanan khas Indonesia, seperti secang dan bakpia. Kami juga berkesempatan untuk membeli hasil kerajinan tangan yang dibuat oleh para lansia tersebut.",
      "highlightTitle": "Sorotan Kegiatan & Dampak Sosial:",
      "highlight1": "Diplomasi Kuliner & Budaya (Secang & Bakpia)",
      "highlight2": "Apresiasi Kerajinan Tangan Lansia Difabel",
      "imgCaption": "Lembaga AJU (一般社団法人あじゅ) - Kanazawa"
    }
  },
  "projects": {
    "badge": "Featured Projects",
    "heading": "Proyek Unggulan",
    "sub": "Berikut adalah showcase karya aplikasi web berbasis Machine Learning yang telah dideploy dan siap diuji secara langsung oleh Tech HR.",
    "liveDemo": "Buka Live Demo",
    "p1": {
      "cat": "Health & Machine Learning",
      "title": "Stunting Prediction App",
      "desc": "Platform web interaktif yang dirancang untuk membantu memprediksi, mendeteksi secara dini, serta menganalisis risiko stunting pada anak berdasarkan indikator kesehatan antropometri menggunakan model komputasi yang akurat."
    },
    "p2": {
      "cat": "Finance & Time Series",
      "title": "Analisis Prediksi Harga Emas",
      "desc": "Sistem analisis dan peramalan berbasis web untuk memprediksi tren pergerakan harga komoditas emas. Menggunakan pendekatan machine learning / time series forecasting untuk membantu pengambilan keputusan investasi atau konversi aset."
    }
  },
  "contact": {
    "badge": "Hubungi Saya",
    "heading": "Tertarik Membangun Proyek Bersama?",
    "sub": "Saya selalu terbuka untuk berdiskusi tentang peluang kerja, rekrutmen tim engineering, atau proyek Machine Learning dan Software Development.",
    "emailBtn": "Kirim Email Langsung",
    "linkedinBtn": "LinkedIn Profil"
  },
  "footer": {
    "text": "© 2026 Muhammad Antariksa. Dibuat untuk Tech HR Showcase."
  }
},
  en: {
  "meta": {
    "title": "Muhammad Antariksa | Informatics & Machine Learning Portfolio",
    "description": "Portfolio of Muhammad Antariksa - Informatics graduate focusing on Machine Learning, Intelligent Systems, and Software Engineering."
  },
  "nav": {
    "about": "About",
    "experience": "Experience",
    "projects": "Projects",
    "contact": "Contact",
    "hireMe": "Hire Me Now"
  },
  "hero": {
    "badge": "Available for Tech & AI Engineer Roles",
    "greeting": "Hello, I am",
    "subtitle": "Informatics Graduate | Machine Learning & Software Engineer",
    "bio": "Informatics graduate specializing in intelligent systems development, Machine Learning, and software engineering. Passionate about building interactive web applications that solve real-world problems using data and modern technologies.",
    "ctaProjects": "Explore My Projects",
    "ctaLinkedin": "LinkedIn Profile",
    "skillsTitle": "Core Technologies & Skills",
    "cardReady": "Ready for Work",
    "cardRole": "AI / ML & Software Eng.",
    "cardType": "Full-Time",
    "badgeFresh": "Fresh Graduate",
    "badgeDelegate": "Japan Delegate"
  },
  "about": {
    "degree": "B.Sc. in Informatics Engineering",
    "focusLabel": "Core Focus",
    "focusVal": "AI / ML & Software Eng.",
    "statusLabel": "Status",
    "statusVal": "Ready for Hire",
    "locLabel": "Location",
    "locVal": "Indonesia",
    "whyTitle": "Why Choose Me?",
    "whyDesc": "Possesses a strong combination of computational machine learning data analytics and full frontend/backend web engineering, ready for direct impact in industry ecosystems.",
    "badge": "Qualifications Summary",
    "heading": "Bridging Machine Learning Algorithms with High-Impact User Experiences.",
    "desc": "As an Informatics graduate, I am dedicated to engineering high-performance intelligent applications. My core focus spans building accurate machine learning models, processing health & time-series data, and packaging models into interactive web interfaces ready for business stakeholders and users.",
    "stat1": {
      "val": "2+",
      "label": "Live ML Projects"
    },
    "stat2": {
      "val": "Japan",
      "label": "Global Delegate"
    },
    "stat3": {
      "val": "100%",
      "label": "Web Deployed"
    },
    "stat4": {
      "val": "B.Sc.",
      "label": "Informatics"
    }
  },
  "experience": {
    "badge": "International Experience",
    "heading": "Experience in Japan",
    "sub": "Documentation of international academic delegation involvement, university MoU facilitation, and cross-cultural community outreach in Japan.",
    "conf": {
      "bCountry": "Japan",
      "bOrg": "IEEE Student Branch (ASB)",
      "bRole": "Delegation Support Team",
      "title": "MoU Facilitation & Technical Support at International Conference in Japan",
      "p1": "As student representatives of the IEEE Student Branch (ASB), two peers and I were deployed to support event operations and assist Universitas Amikom lecturers during official MoU signings with prestigious universities in Japan. This experience broadened our perspective and taught valuable lessons in international professional standards.",
      "p2": "Our team carried distinct responsibilities: managing live stream broadcasting via the amikomjogja YouTube channel, documenting events using mirrorless cameras and gimbals, and designing visual assets such as posters, certificates, and banners. We successfully ensured smooth live streaming, media capture, and real-time technical operations.",
      "respTitle": "Responsibilities & Contributions:",
      "resp1": "Live Streaming via YouTube amikomjogja",
      "resp2": "Camera & Gimbal Documentation",
      "resp3": "Poster, Certificate & Banner Design",
      "resp4": "Faculty MoU Agenda Support",
      "img1Caption": "Delegation & Event Media",
      "img2Caption": "Team Support & MoU Signing"
    },
    "community": {
      "bLoc": "Kanazawa, Japan",
      "bType": "Community Outreach",
      "bOrg": "AJU Organization (一般社団法人あじゅ)",
      "title": "Community Outreach: Bringing Indonesian Culture to the Elderly & Disabled in Japan",
      "p1": "As part of our academic visit to Japan for community outreach, we visited an elderly disability care center in Kanazawa at the AJU Organization (一般社団法人あじゅ), a non-profit dedicated to the empowerment and support of elderly persons with disabilities.",
      "p2": "The mission carried the theme <span class=\"text-indigo-700 font-bold\">“Bringing Indonesian Culture to the Elderly and Disabled in Japan”</span>, aiming to share inspiration and introduce Indonesian traditions to local residents. Our team shared traditional herbal beverages (Secang) and Bakpia delicacies, while also purchasing artisanal handicrafts crafted by the elderly residents.",
      "highlightTitle": "Key Highlights & Social Impact:",
      "highlight1": "Culinary & Cultural Diplomacy (Secang & Bakpia)",
      "highlight2": "Supporting Handicrafts of Elderly with Disabilities",
      "imgCaption": "AJU Organization (一般社団法人あじゅ) - Kanazawa"
    }
  },
  "projects": {
    "badge": "Featured Projects",
    "heading": "Featured Projects",
    "sub": "Here is a showcase of deployed Machine Learning web applications ready for hands-on evaluation by Tech HR.",
    "liveDemo": "Open Live Demo",
    "p1": {
      "cat": "Health & Machine Learning",
      "title": "Stunting Prediction App",
      "desc": "An interactive web platform designed to predict, detect early, and analyze child stunting risks based on anthropometric health indicators using accurate computational models."
    },
    "p2": {
      "cat": "Finance & Time Series",
      "title": "Gold Price Prediction Analysis",
      "desc": "A web-based forecasting system predicting gold commodity price trends using machine learning and time series analysis to support investment decisions."
    }
  },
  "contact": {
    "badge": "Get in Touch",
    "heading": "Interested in Collaborating?",
    "sub": "I am always open to discussing career opportunities, engineering recruitment, or Machine Learning and Software Development projects.",
    "emailBtn": "Send Direct Email",
    "linkedinBtn": "LinkedIn Profile"
  },
  "footer": {
    "text": "© 2026 Muhammad Antariksa. Crafted for Tech HR Showcase."
  }
}
};

class I18nManager {
  constructor() {
    this.supportedLangs = ['id', 'en'];
    this.defaultLang = 'id';
    this.storageKey = 'portfolio_muhammad_lang';
    this.currentLang = this.detectInitialLanguage();
  }

  detectInitialLanguage() {
    // 1. Check localStorage
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved && this.supportedLangs.includes(saved)) {
        return saved;
      }
    } catch (e) {
      console.warn('localStorage not accessible:', e);
    }

    // 2. Check document cookies
    try {
      const match = document.cookie.match(new RegExp('(^|;\\s*)' + this.storageKey + '=([^;]*)'));
      if (match && this.supportedLangs.includes(match[2])) {
        return match[2];
      }
    } catch (e) {}

    // Default to 'id' as requested
    return this.defaultLang;
  }

  getLanguage() {
    return this.currentLang;
  }

  t(path, lang = this.currentLang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[this.defaultLang];
    const keys = path.split('.');
    let value = dict;

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // Fallback to default language dictionary
        let fallbackVal = TRANSLATIONS[this.defaultLang];
        for (const fKey of keys) {
          if (fallbackVal && typeof fallbackVal === 'object' && fKey in fallbackVal) {
            fallbackVal = fallbackVal[fKey];
          } else {
            fallbackVal = null;
            break;
          }
        }
        return fallbackVal !== null && fallbackVal !== undefined ? fallbackVal : path;
      }
    }

    return value;
  }

  setLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) return;
    this.currentLang = lang;

    // 1. Persist to localStorage
    try {
      localStorage.setItem(this.storageKey, lang);
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }

    // 2. Persist to Cookie (for SSR/Edge readiness)
    try {
      document.cookie = this.storageKey + '=' + lang + ';path=/;max-age=31536000;SameSite=Lax';
    } catch (e) {}

    // 3. Update document meta & lang
    document.documentElement.lang = lang;
    const titleVal = this.t('meta.title');
    if (titleVal) document.title = titleVal;

    const descMeta = document.querySelector('meta[name="description"]');
    const descVal = this.t('meta.description');
    if (descMeta && descVal) descMeta.setAttribute('content', descVal);

    // 4. Translate DOM elements
    this.translateDOM();

    // 5. Update Switcher Toggle UI buttons
    this.updateSwitcherUI();

    // 6. Broadcast event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { lang: this.currentLang } 
    }));

    // 7. Refresh Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  translateDOM() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    });

    // HTML content (for gradient text, spans, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = this.t(key);
      if (val !== undefined && val !== null) {
        el.innerHTML = val;
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.t(key);
      if (val !== undefined && val !== null) {
        el.setAttribute('placeholder', val);
      }
    });

    // Titles / Tooltips / Alt texts
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = this.t(key);
      if (val !== undefined && val !== null) {
        el.setAttribute('title', val);
      }
    });
  }

  updateSwitcherUI() {
    const buttons = document.querySelectorAll('[data-lang-btn]');
    buttons.forEach(btn => {
      const targetLang = btn.getAttribute('data-lang-btn');
      if (targetLang === this.currentLang) {
        btn.classList.add('bg-indigo-600', 'text-white', 'font-bold', 'shadow-xs');
        btn.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('bg-indigo-600', 'text-white', 'font-bold', 'shadow-xs');
        btn.classList.add('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  init() {
    this.translateDOM();
    this.updateSwitcherUI();

    // Attach click listeners to all language switcher buttons
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang-btn');
        if (targetLang && targetLang !== this.currentLang) {
          this.setLanguage(targetLang);
        }
      });
    });
  }
}

// Instantiate globally
window.i18n = new I18nManager();

// Automatically initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.i18n.init();
  });
} else {
  window.i18n.init();
}
