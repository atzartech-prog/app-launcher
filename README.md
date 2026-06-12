# 🚀 App Launcher

Aplikasi launcher yang **simple, cepat, dan elegant** dengan tampilan accordion vertikal. Semua data disimpan di JavaScript tanpa localStorage. Menggunakan **Font Awesome icons** untuk tampilan yang bersih dan modern.

## ✨ Fitur Utama

- 📂 **Accordion Vertikal** - Kategori aplikasi bisa dibuka dan ditutup
- 🔍 **Fitur Pencarian Real-time** - Cari aplikasi berdasar nama atau deskripsi
- 🎯 **Clickable Items** - Klik aplikasi untuk membuka di tab baru
- 🎨 **Font Awesome Icons** - Icon profesional dari Font Awesome 6.4
- 💾 **Data di JavaScript** - Semua aplikasi dan kategori dalam file `data.js`
- 📱 **Responsive Design** - Bekerja sempurna di mobile, tablet, dan desktop
- ⚡ **Lightweight** - Tidak ada loading spinner, hanya render sekali
- 🌈 **Warna-Warni** - Setiap kategori memiliki warna unik

## 🛠️ Teknologi

- **HTML5** - Struktur halaman
- **CSS3** - Styling responsive dan accordion
- **JavaScript** - Logika aplikasi
- **Font Awesome 6.4** - Library icon profesional

## 📦 Struktur File

```
app-launcher/
├── index.html      # HTML utama (minimal dan clean)
├── styles.css      # Stylesheet dengan accordion
├── app.js          # Script utama (accordion & search)
├── data.js         # Database aplikasi dan kategori
└── README.md       # Dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. Buka Aplikasi
Buka file `index.html` di browser Anda. Tidak perlu build atau install!

### 2. Navigasi Aplikasi
- **Buka Kategori**: Klik judul kategori untuk membuka/menutup daftar aplikasi
- **Cari Aplikasi**: Gunakan kotak pencarian untuk filter real-time
- **Buka Aplikasi**: Klik item aplikasi untuk membuka di tab baru

### 3. Menambah/Edit Aplikasi
Edit file `data.js` dan tambahkan aplikasi ke array `apps`:

```javascript
{
    id: '16',
    name: 'Nama Aplikasi',
    description: 'Deskripsi singkat',
    icon: 'fas fa-icon-name',  // Font Awesome class
    link: 'https://aplikasi.com',
    category: 'productivity'
}
```

### 4. Menambah Kategori
Edit file `data.js` dan tambahkan kategori ke array `categories`:

```javascript
{
    id: 'newcategory',
    name: '🎯 Nama Kategori',
    color: '#4a90e2'
}
```

## 📝 Format Data Aplikasi

```javascript
{
  id: '1',
  name: 'Google Drive',
  description: 'Penyimpanan cloud dan kolaborasi dokumen',
  icon: 'fas fa-cloud',  // Font Awesome icon
  link: 'https://drive.google.com',
  category: 'productivity'
}
```

## 📝 Format Data Kategori

```javascript
{
  id: 'productivity',
  name: '📊 Produktivitas',
  color: '#4a90e2'
}
```

## 🎨 Font Awesome Icons

Aplikasi menggunakan Font Awesome 6.4. Berikut beberapa contoh:

### Brand Icons (Social Media, Tools)
```javascript
'fab fa-github'       // GitHub
'fab fa-twitter'      // Twitter
'fab fa-linkedin'     // LinkedIn
'fab fa-instagram'    // Instagram
'fab fa-youtube'      // YouTube
'fab fa-spotify'      // Spotify
```

### Solid Icons (General)
```javascript
'fas fa-cloud'        // Cloud/Drive
'fas fa-code'         // Code Editor
'fas fa-tasks'        // Task Management
'fas fa-palette'      // Design Tools
'fas fa-book'         // Notes/Documentation
'fas fa-pencil-ruler' // Design/UI
'fas fa-play'         // Video/Entertainment
```

**Lihat lebih banyak:** https://fontawesome.com/icons

## 🎯 Ganti Logo Header

Buka `data.js` dan ubah `config.logo`:

```javascript
const config = {
    logo: 'fa-rocket',      // Ganti dengan Font Awesome class
    headerTitle: 'App Launcher',
    footerText: '© 2024 App Launcher'
};
```

Contoh lain:
- `fa-star` - Bintang
- `fa-cube` - Kubus
- `fa-lightning` - Petir
- `fa-heart` - Hati
- `fa-zap` - Kilatan

## 🎨 Kustomisasi Warna

Edit variable CSS di `styles.css`:

```css
:root {
    --primary-color: #4a90e2;      /* Warna biru utama */
    --secondary-color: #50e3c2;    /* Warna hijau sekunder */
    --danger-color: #e24a4a;       /* Warna merah */
    --bg-color: #f5f7fa;           /* Warna background */
    --card-bg: #ffffff;            /* Warna card */
    --text-color: #333333;         /* Warna teks */
    --text-light: #666666;         /* Warna teks terang */
    --border-color: #e0e0e0;       /* Warna border */
}
```

## 📱 Responsive Design

Aplikasi fully responsive dan bekerja sempurna di:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🎯 Tips Penggunaan

1. **Hover Effect** - Arahkan mouse ke item aplikasi untuk melihat efek
2. **Search** - Pencarian otomatis mencocokkan nama dan deskripsi
3. **Collapse** - Kategori yang ditutup tidak hilang, tinggal klik lagi untuk membuka
4. **Mobile** - Swipe/tap untuk navigasi yang smooth di mobile

## 🐛 Troubleshooting

### Aplikasi Tidak Muncul
1. Buka Developer Console (F12)
2. Pastikan tidak ada error di console
3. Refresh halaman (Ctrl+F5)

### Font Awesome Icons Tidak Tampil
- Pastikan CDN Font Awesome loaded di `index.html`
- Periksa di Network tab (F12 → Network)
- Gunakan icon class yang valid: https://fontawesome.com/icons

### Search Tidak Berfungsi
- Pastikan JavaScript enabled di browser
- Cek console untuk error message

## 📋 Roadmap Fitur

- [ ] Edit aplikasi inline
- [ ] Drag & drop untuk reorder
- [ ] Dark mode
- [ ] Export/Import JSON
- [ ] Kategori favorit
- [ ] Shortcuts keyboard
- [ ] Custom theme builder

## 📄 Lisensi

Bebas digunakan untuk keperluan pribadi dan komersial.

## 👨‍💻 Pengembang

Dibuat dengan ❤️ untuk kemudahan dan produktivitas digital.

---

**Selamat menggunakan App Launcher! 🚀**
