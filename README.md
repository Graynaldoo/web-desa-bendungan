# Catatan Progres: Web Desa Bendungan (Tugas Frontend Group Challenge, UI Pages)

Tugas: membuat tampilan website dengan React minimal 1 halaman, berdasarkan Hi-Fi UI Figma.
Deadline: **Rabu, 25 November 2026 pukul 23:59 WIB**.
Form: Program, Mentor Trainer (Ahmad Thomthomi Barosimi), Module Frontend Development, tabel anggota tim (Nama, Mentor Personal, Role, Universitas).

## Sudah selesai
- Project React + Vite + react-router-dom + lucide-react, build sukses.
- Halaman **Beranda** (hero + statistik, pintu akses 4 kartu, potensi unggulan 3 kartu, peta sebaran dengan legenda dan ilustrasi SVG, berita, agenda, CTA).
- Halaman **Profil Desa** (header + tab + breadcrumb, tentang dan data wilayah, visi dan misi, struktur pemerintah desa, lembaga kemasyarakatan, galeri, CTA).
- Navbar (menu mobile) dan Footer, serta halaman placeholder "Segera" untuk menu lain.
- Seluruh konten ada di `src/data/content.js`. Ikon di `src/components/Icon.jsx`.
- `.gitignore` (node_modules, dist, .env) dan README.

## BELUM / perlu dilanjutkan
1. **Foto asli**: gambar saat ini gradient CSS (kelas `img-*` di `src/index.css`). Ganti dengan foto asli dari Figma (simpan di `src/assets/`, pakai `background-image`).
2. **Data contoh**: angka (3.840 jiwa, 142 Ha, 48+ UMKM, luas 342,5 Ha, batas wilayah, nama dusun, dsb) berasal dari desain Hi-Fi dan berlabel "Contoh data". Ganti dengan data resmi/sekunder (proposal melarang data karangan). Nama pejabat masih placeholder `[Nama ...]`.
3. **Cek kemiripan dengan Figma**: bandingkan jarak, ukuran font, dan warna dengan frame aslinya, lalu sesuaikan.
4. **Halaman lain** (opsional): Potensi Desa, Peta Wilayah (Leaflet), Berita & Agenda, Kontak. Saat ini placeholder.
5. **Form pengumpulan**: isi nama anggota tim, mentor personal, role, universitas. Nama anggota kedua belum diketahui.
6. **Pengumpulan**: push ke GitHub publik atau ZIP tanpa `node_modules` dan `dist` ke Google Drive publik, lalu submit via Airtable.
7. Screenshot hasil (opsional) untuk dokumentasi.

## Cara menjalankan
npm install, lalu npm run dev (buka http://localhost:5173).
