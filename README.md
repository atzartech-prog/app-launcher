# 🚀 App Launcher

Aplikasi launcher yang powerful dan user-friendly untuk mengelola dan meluncurkan aplikasi favorit Anda dengan mudah.

## ✨ Fitur Utama

- 📱 **Tampilan Responsif** - Pilih antara tampilan Grid atau Vertikal
- 🎨 **Kustomisasi Penuh** - Edit header, footer, logo, dan kategori
- 📂 **Pengelompokan Kategori** - Organisir aplikasi berdasarkan fungsinya
- 🔍 **Fitur Pencarian** - Cari aplikasi dengan mudah
- ✏️ **Edit Lengkap** - Ubah icon, deskripsi, dan link aplikasi
- 💾 **Database JSON** - Semua data tersimpan di localStorage (JSON)
- 🌈 **Warna-Warni** - Setiap kategori memiliki warna unik
- 📊 **Toggle View** - Ubah tampilan dengan satu klik

## 🛠️ Teknologi

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan responsive design
- **JavaScript** - Logika aplikasi
- **localStorage** - Database JSON

## 📦 Struktur File

```
app-launcher/
├── index.html      # File HTML utama
├── styles.css      # Stylesheet
├── app.js          # Script utama aplikasi
├── db.js           # Manajemen database
└── README.md       # Dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. Buka Aplikasi
Buka file `index.html` di browser Anda.

### 2. Mengatur Pengaturan Umum
- Klik tombol **⚙️ Pengaturan**
- Tab **Umum** untuk mengubah:
  - Logo
  - Judul Header
  - Warna Header
  - Teks Footer

### 3. Mengelola Kategori
- Klik **⚙️ Pengaturan**
- Tab **Kategori** untuk:
  - Tambah kategori baru
  - Edit nama dan warna kategori
  - Hapus kategori

### 4. Mengelola Aplikasi
- **Tambah Aplikasi**: Akan ditambahkan di modal editor
- **Edit Aplikasi**: Klik tombol ✏️ Edit pada aplikasi
- **Hapus Aplikasi**: Klik Delete saat mengedit
- **Buka Aplikasi**: Klik tombol 🚀 Buka

### 5. Mengubah Tampilan
- Klik tombol **📊** untuk toggle antara Grid dan Vertikal
- Atau gunakan tombol "Grid" dan "Vertikal" di view controls

### 6. Mencari Aplikasi
- Gunakan kotak pencarian untuk filter aplikasi
- Pencarian otomatis berdasar nama dan deskripsi

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
  "name": "Produktivitas",
  "color": "#4a90e2"
}
```

## 💾 Export/Import Data

Data aplikasi disimpan di localStorage dengan format JSON. Anda dapat:

1. **Backup Data**: Buka console browser dan jalankan:
   ```javascript
   console.log(exportDatabase());
   ```

2. **Restore Data**: Jalankan di console:
   ```javascript
   importDatabase('{data JSON di sini}');
   ```

## 🎨 Kustomisasi Warna

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

## 🔒 Privasi

Semua data disimpan secara lokal di browser Anda menggunakan localStorage. Tidak ada data yang dikirim ke server.

## 🐛 Troubleshooting

### Data Tidak Muncul
1. Buka Developer Console (F12)
2. Jalankan: `initializeDatabase()`
3. Refresh halaman

### Clear Data
Jalankan di console:
```javascript
localStorage.clear();
window.location.reload();
```

## 📋 Roadmap Fitur

- [ ] Export/Import dengan file
- [ ] Dark Mode
- [ ] Drag & Drop untuk reorder
- [ ] Sync ke cloud (Firebase/Supabase)
- [ ] Mobile App
- [ ] Custom shortcut keys

## 📄 Lisensi

Bebas digunakan untuk keperluan pribadi dan komersial.

## 👨‍💻 Pengembang

Buat dengan ❤️ untuk kemudahan hidup digital Anda.

---

**Selamat menggunakan App Launcher! 🚀**