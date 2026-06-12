# 🚀 App Launcher

Aplikasi launcher yang simple, cepat, dan user-friendly dengan tampilan accordion vertikal. Semua data disimpan di JavaScript tanpa localStorage.

## ✨ Fitur Utama

- 📂 **Accordion Vertikal** - Kategori aplikasi bisa dibuka dan ditutup
- 🔍 **Fitur Pencarian** - Cari aplikasi real-time berdasar nama atau deskripsi
- 🎯 **Satu Klik Buka** - Tombol "🚀 Buka" untuk membuka aplikasi di tab baru
- 💾 **Data di JavaScript** - Semua aplikasi dan kategori dalam file `data.js`
- 🎨 **Responsive Design** - Bekerja sempurna di mobile, tablet, dan desktop
- 🌈 **Warna-Warni** - Setiap kategori memiliki warna unik

## 🛠️ Teknologi

- **HTML5** - Struktur halaman
- **CSS3** - Styling responsive dan accordion
- **JavaScript** - Logika aplikasi

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
Buka file `index.html` di browser Anda.

### 2. Navigasi Aplikasi
- **Buka Kategori**: Klik judul kategori untuk membuka/menutup daftar aplikasi
- **Cari Aplikasi**: Gunakan kotak pencarian untuk filter aplikasi
- **Buka Aplikasi**: Klik tombol "🚀 Buka" untuk membuka di tab baru

### 3. Menambah/Edit Aplikasi
Edit file `data.js` dan tambahkan aplikasi ke array `apps`:

```javascript
{
    id: '16',
    name: 'Nama Aplikasi',
    description: 'Deskripsi singkat',
    icon: 'https://url-ke-icon.svg',
    link: 'https://aplikasi.com',
    category: 'productivity'
}
```

### 4. Menambah Kategori
Edit file `data.js` dan tambahkan kategori ke array `categories`:

```javascript
{
    id: 'newcategory',
    name: '📌 Nama Kategori',
    color: '#4a90e2'
}
```

## 📝 Format Data Aplikasi

```json
{
  "id": "1",
  "name": "Google Drive",
  "description": "Penyimpanan cloud dan kolaborasi dokumen",
  "icon": "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
  "link": "https://drive.google.com",
  "category": "productivity"
}
```

## 📝 Format Data Kategori

```json
{
  "id": "productivity",
  "name": "📊 Produktivitas",
  "color": "#4a90e2"
}
```

## 🎨 Kustomisasi

### Ubah Logo dan Judul Header
Buka `data.js` dan ubah objek `config`:

```javascript
const config = {
    logo: 'https://url-ke-logo-anda.svg',
    headerTitle: 'Judul Custom',
    footerText: 'Teks Footer Custom'
};
```

### Ubah Warna
Edit variable CSS di `styles.css`:

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #50e3c2;
    --danger-color: #e24a4a;
    --bg-color: #f5f7fa;
    --card-bg: #ffffff;
    --text-color: #333333;
}
```

## 📱 Responsive Design

Aplikasi fully responsive dan bekerja sempurna di:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🐛 Troubleshooting

### Aplikasi Tidak Muncul
1. Buka Developer Console (F12)
2. Pastikan tidak ada error di console
3. Refresh halaman (Ctrl+F5 atau Cmd+Shift+R)

### Icon Tidak Tampil
- Pastikan URL icon valid
- Cek CORS headers jika menggunakan URL eksternal
- Gunakan placeholder: `https://via.placeholder.com/50?text=IconName`

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

## 📄 Lisensi

Bebas digunakan untuk keperluan pribadi dan komersial.

## 👨‍💻 Pengembang

Dibuat dengan ❤️ untuk kemudahan dan produktivitas digital.

---

**Selamat menggunakan App Launcher! 🚀**
