# Muhammad Antariksa - Portfolio: Informatika & Machine Learning

Website portofolio interaktif modern berfokus pada **Machine Learning, Sistem Cerdas, dan Rekayasa Perangkat Lunak**, siap di-deploy secara instan ke **Vercel** (`https://portfolio-muhammad-antariksa.vercel.app/`).

Website ini kini telah dilengkapi fitur **Multi-Bahasa (i18n: Bahasa Indonesia & English)** dengan peralihan instan (*client-side reactive switching*) yang dirancang khusus untuk memenuhi standar rekrutmen **Tech HR internasional**.

---

## 🌟 Fitur Utama

1. **Multi-Bahasa (i18n) Responsif**:
   - Dukungan penuh untuk **Bahasa Indonesia (Default)** dan **English**.
   - Toggle switcher (`🇮🇩 ID | 🇬🇧 EN`) di Header Desktop, Header Mobile, dan Mobile Drawer.
   - Preferensi bahasa otomatis tersimpan di `localStorage` dan `cookie` (tidak reset saat refresh).
   - Dynamic meta `<title>` dan `<meta name="description">` teroptimasi SEO.
2. **Hero & Highlight Kualifikasi**:
   - Status ketersediaan kerja (*Available for Tech & AI Engineer Roles*).
   - Headline dinamis bergradien dengan animas teks.
   - Badges keahlian utama: Machine Learning, Time Series, Python & Web App, Data Analytics, dan Vercel Deployment.
3. **Showcase Pengalaman Internasional di Jepang**:
   - Dokumentasi delegasi mahasiswa IEEE Student Branch (ASB) pada konferensi internasional dan pendampingan MoU Universitas di Jepang.
   - Dokumentasi pengabdian masyarakat lintas budaya di Lembaga AJU (一般社団法人あじゅ), Kanazawa.
   - Image Lightbox responsif dengan keterangan dwibahasa.
4. **Koleksi Proyek Unggulan (Live Demo)**:
   - **Stunting Prediction App**: Platform deteksi dini & analisis risiko stunting berbasis machine learning.
   - **Analisis Prediksi Harga Emas**: Sistem peramalan tren harga komoditas berbasis time series forecasting.
5. **Bagian Kontak & Direct Reach**:
   - Tombol email langsung dan integrasi profil LinkedIn.

---

## 📁 Struktur File Proyek

```
D:\coba porto/
├── index.html                  # Single-page portfolio utama (Tailwind CSS, Lucide Icons)
├── i18n.js                     # Mesin i18n ringan, reaktif, dan zero-dependency
├── locales/                    # Kamus data terjemahan
│   ├── id.json                 # Kamus Bahasa Indonesia (Default)
│   └── en.json                 # Kamus English (International Recruiter Ready)
├── assets/                     # Aset gambar & dokumentasi foto
│   ├── profile.jpg
│   ├── japan_conference_1.jpg
│   ├── japan_conference_2.jpg
│   ├── japan_community_service.jpg
│   ├── stunting_app_preview.jpg
│   └── gold_app_preview.jpg
├── .vercel/                    # Konfigurasi proyek Vercel
│   └── project.json
├── package.json                # Skrip build & start lokal
└── README.md                   # Dokumentasi proyek
```

---

## 💻 Uji Coba Lokal (Local Preview)

Jalankan perintah berikut di terminal:

```bash
cd "D:\coba porto"
npm start
# atau: npx serve .
# atau: python -m http.server 3000
```

Buka browser di `http://localhost:3000` (atau port yang tertera).

---

## 🚀 Panduan Deploy ke Production (Vercel)

Karena proyek ini sudah terhubung dengan Vercel (`portfolio-muhammad-antariksa`), Anda dapat langsung merilis pembaruan ini ke live URL:

### Cara 1: Deploy via Vercel CLI
```bash
cd "D:\coba porto"
npx vercel --prod
```

### Cara 2: Push ke GitHub (Jika terhubung CI/CD Vercel)
```bash
cd "D:\coba porto"
git add .
git commit -m "feat: implement responsive i18n (ID/EN) with language switcher toggle"
git push origin main
```
Vercel akan otomatis melakukan auto-build dan merilisnya ke `https://portfolio-muhammad-antariksa.vercel.app/` dalam hitungan detik!
