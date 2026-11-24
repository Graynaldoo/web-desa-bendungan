// Seluruh konten halaman disimpan di sini agar komponen tetap bersih.
// CATATAN: angka/nama pada konten ini adalah CONTOH dari desain Hi-Fi.
// Ganti dengan data resmi/sekunder yang dapat dipertanggungjawabkan.

export const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/profil-desa', label: 'Profil Desa' },
  { to: '/potensi-desa', label: 'Potensi Desa' },
  { to: '/peta-wilayah', label: 'Peta Wilayah' },
  { to: '/berita-agenda', label: 'Berita & Agenda' },
  { to: '/kontak', label: 'Kontak' },
];

export const stats = [
  { value: '3.840', label: 'Jiwa Penduduk' },
  { value: '142 Ha', label: 'Lahan Pertanian' },
  { value: '48+', label: 'Unit UMKM Aktif' },
  { value: '100%', label: 'Layanan Terbuka' },
];

export const akses = [
  { icon: 'Users', judul: 'Masyarakat Desa', sub: 'Administrasi & Bansos', desc: 'Surat pengantar, KTP/KK, jadwal posyandu, dan pengaduan langsung.', link: 'Buka Layanan', warna: 'teal' },
  { icon: 'Map', judul: 'Pengunjung Desa', sub: 'Wisata & Kuliner', desc: 'Sumber air alami, rute gowes persawahan, serta oleh-oleh khas Bendungan.', link: 'Rute & Daya Tarik', warna: 'slate' },
  { icon: 'Store', judul: 'Pelaku UMKM', sub: 'Pemberdayaan Usaha', desc: 'Kemitraan BumDes, sertifikasi PIRT/Halal, dan pameran produk desa.', link: 'Katalog Usaha', warna: 'clay' },
  { icon: 'Lightbulb', judul: 'Generasi Muda', sub: 'Inovasi & Kreasi', desc: 'Giat kepemudaan, turnamen olahraga antar-RT, dan pelatihan agritech.', link: 'Agenda Pemuda', warna: 'teal' },
];

export const potensi = [
  { tag: 'Pertanian · Sawah Lestari', badge: 'Grade A Organik', judul: 'Beras Organik Bendungan', desc: 'Dibudidayakan secara alami dengan aliran air pegunungan tanpa pestisida kimia. Memiliki aroma wangi pulen alami dan sertifikasi mutu pangan terdaftar.', metaLabel: 'Produksi Rata-rata', metaValue: '32 Ton / Musim', tombol: 'Detail Komoditas', gambar: 'img-sawah' },
  { tag: 'UMKM Kreatif · Kerajinan', badge: 'Ekspor Antar-Kota', judul: 'Sentra Kerajinan Anyaman Bambu', desc: 'Keahlian turun-temurun warga Dusun Krajan menghasilkan wadah estetis ramah lingkungan, besek hampers, kap lampu, hingga ornamen interior modern.', metaLabel: 'Kelompok Pengrajin', metaValue: '18 Keluarga Binaan', tombol: 'Detail UMKM', gambar: 'img-bambu' },
  { tag: 'Pariwisata Alam · Edukasi', badge: 'Ramah Keluarga', judul: 'Wisata Edukasi Sumber Mata Air', desc: 'Kawasan mata air murni dengan kolam pemandian alami, area konservasi ikan sungai endemik, dan jalur jelajah edukasi botani bagi anak sekolah.', metaLabel: 'Tiket Masuk BUMDes', metaValue: 'Rp 5.000 / Org', tombol: 'Detail Wisata', gambar: 'img-air' },
];

export const petaLegend = [
  { warna: '#0b5c4e', label: 'Lahan Pertanian & Irigasi Teknis', nilai: '4 Dusun' },
  { warna: '#8c4526', label: 'Pusat Kerajinan & Pasar Rakyat', nilai: '12 Lokasi' },
  { warna: '#3a5a5a', label: 'Objek Daya Tarik Wisata & Sumber Air', nilai: '3 Titik' },
  { warna: '#6b7878', label: 'Balai Kantor Desa & Poskesdes', nilai: '5 Bangunan' },
];

export const berita = [
  { kategori: 'Pemerintahan', tanggal: '24 Oktober 2024', judul: 'Musrenbangdes Penetapan RKPDes Bendungan Tahun Anggaran 2025', desc: 'Forum musyawarah warga menyepakati alokasi prioritas pada pembangunan drainase persawahan dan modernisasi alat pasca panen.', dibaca: '320x', gambar: 'img-rapat' },
  { kategori: 'Kesehatan', tanggal: '19 Oktober 2024', judul: 'Cegah Stunting: Program Makanan Pendamping Bergizi Balita Dusun Krajan', desc: 'Kader Posyandu Desa Bendungan menyalurkan paket protein telur dan susu bagi balita secara serentak di 5 posko terpadu.', dibaca: '184x', gambar: 'img-posyandu' },
];

export const agenda = [
  { tgl: '28', bln: 'OKT', tag: 'Gotong Royong', judul: 'Kerja Bakti Massal Normalisasi Saluran Irigasi Tersier', jam: '06.30 WIB - Selesai', lokasi: 'Dusun Krajan RW 02', warna: 'teal' },
  { tgl: '05', bln: 'NOV', tag: 'Pelatihan Usaha', judul: 'Workshop Digital Marketing & Kemasan Produk Anyaman Bambu', jam: '09.00 - 14.00 WIB', lokasi: 'Aula Balai Desa Bendungan', warna: 'slate' },
  { tgl: '12', bln: 'NOV', tag: 'Kesehatan', judul: 'Pemeriksaan Kesehatan & Senam Lansia Bugar Sehat', jam: '07.00 - 10.30 WIB', lokasi: 'Halaman Kantor Balai Desa', warna: 'clay' },
];

/* ---------------- Profil Desa ---------------- */
export const profilTabs = [
  { id: 'tentang', label: 'Tentang & Geografis' },
  { id: 'visimisi', label: 'Visi & Misi' },
  { id: 'pemerintah', label: 'Pemerintah Desa' },
  { id: 'lembaga', label: 'Lembaga Kemasyarakatan' },
  { id: 'galeri', label: 'Galeri Desa' },
];

export const dataWilayah = {
  luas: '342,5 Ha',
  dusun: ['Dusun Krajan', 'Dusun Wonorejo', 'Dusun Sumberrejo'],
  batas: [
    { arah: 'Utara', desa: 'Desa Gondang' },
    { arah: 'Selatan', desa: 'Desa Notorejo' },
    { arah: 'Barat', desa: 'Desa Tiudan' },
    { arah: 'Timur', desa: 'Desa Sepatan' },
  ],
  topografi: 'Dataran Rendah & Perbukitan',
  ketinggian: 'Ketinggian 85 - 120 mdpl',
};

export const misi = [
  { no: '01', icon: 'TrendingUp', judul: 'Penguatan Ekonomi Desa', desc: 'Meningkatkan produktivitas agribisnis, modernisasi tata niaga hasil bumi, dan pemberdayaan pelaku UMKM lokal berbasis komoditas keunggulan.' },
  { no: '02', icon: 'Landmark', judul: 'Infrastruktur & Akuntabilitas', desc: 'Membangun akses jalan tani, saluran irigasi terpadu, dan transparansi tata kelola anggaran desa yang terbuka bagi warga.' },
  { no: '03', icon: 'MonitorSmartphone', judul: 'Digitalisasi Layanan Warga', desc: 'Mempermudah administrasi kependudukan dan penyebaran informasi desa melalui portal digital yang cepat, mudah, dan transparan.' },
  { no: '04', icon: 'Leaf', judul: 'Kelestarian & Kearifan Lokal', desc: 'Menjaga keasrian ekosistem alam desa, konservasi sumber mata air, serta melestarikan adat istiadat dan paguyuban pemuda.' },
];

export const staf = {
  kades: { jabatan: 'Pimpinan Puncak', nama: 'Kepala Desa Bendungan', placeholder: '[Nama Kepala Desa Definitif]', tugas: 'Pemegang Kekuasaan Pengelolaan Keuangan & Pemerintahan Desa' },
  sekdes: { jabatan: 'Pimpinan Sekretariat', nama: 'Sekretaris Desa', placeholder: '[Nama Sekretaris Desa]', tugas: 'Koordinator Administrasi, Perencanaan, dan Keuangan Desa' },
  kaur: { judul: 'Unsur Staf Sekretariat (Kaur)', sub: 'Membantu operasional dan tata usaha administrasi desa', item: [
    { nama: 'Kaur Keuangan', placeholder: '[Nama Kaur Keuangan]', tugas: 'Pengelolaan pertanggungjawaban keuangan dan kas APBDes' },
    { nama: 'Kaur Umum & Perencanaan', placeholder: '[Nama Kaur Perencanaan]', tugas: 'Administrasi umum, aset, dan penyusunan RKPD' },
  ] },
  kasi: { judul: 'Pelaksana Teknis Lapangan (Kasi)', sub: 'Operasional program sektoral dan pelayanan warga', item: [
    { nama: 'Kasi Pemerintahan', placeholder: '[Nama Kasi Pemerintahan]', tugas: 'Tata praja kependudukan, pertanahan, ketertiban umum' },
    { nama: 'Kasi Kesejahteraan & Pelayanan', placeholder: '[Nama Kasi Kesra]', tugas: 'Sosial kemasyarakatan, bantuan publik, & pemberdayaan' },
  ] },
  kasun: [
    { wilayah: 'Wilayah I', judul: 'Kepala Dusun Krajan (Kasun Krajan)', placeholder: '[Nama Kasun Krajan]', tugas: 'Wilayah Kerja Dusun Krajan: Pelayanan administrasi dusun, pembinaan ketertiban masyarakat, dan koordinasi bidang tani setempat.' },
    { wilayah: 'Wilayah II', judul: 'Kepala Dusun Patoman (Kasun Patoman)', placeholder: '[Nama Kasun Patoman]', tugas: 'Wilayah Kerja Dusun Patoman: Pelayanan administrasi dusun, pemberdayaan kemasyarakatan, dan pengawalan infrastruktur lingkungan pemukiman.' },
  ],
};

export const lembaga = [
  { icon: 'Scale', judul: 'Badan Permusyawaratan Desa (BPD)', desc: 'Fungsi pengawasan kinerja pemerintah desa, penampung aspirasi masyarakat, serta penyusunan Peraturan Desa bersama Kepala Desa.', peran: 'Pengawasan & Regulasi' },
  { icon: 'Hammer', judul: 'Lembaga Pemberdayaan Masyarakat (LPMD)', desc: 'Mitra pemerintah desa dalam merencanakan, melaksanakan, dan menumbuhkembangkan prakarsa gotong royong swadaya masyarakat.', peran: 'Partisipasi Swadaya' },
  { icon: 'UsersRound', judul: 'Karang Taruna Tunas Bhakti', desc: 'Wadah pengembangan generasi muda dalam kegiatan sosial kemasyarakatan, keolahragaan, kepeloporan, dan kewirausahaan digital.', peran: 'Kepemudaan & Kreativitas' },
  { icon: 'HeartHandshake', judul: 'Tim Penggerak PKK', desc: 'Pemberdayaan kesejahteraan keluarga melalui program posyandu, pencegahan stunting, pemanfaatan pekarangan, dan ketahanan pangan.', peran: 'Kesejahteraan Keluarga' },
];

export const galeri = [
  { tag: 'Karya Bhakti', judul: 'Gotong Royong Saluran Irigasi', desc: 'Pembersihan berkala aliran sungai primer untuk menjamin kelancaran air.', gambar: 'img-sawah' },
  { tag: 'Hasil Panen', judul: 'Panen Raya Padi Dusun Krajan', desc: 'Keberhasilan musim unggul binaan kelompok tani.', gambar: 'img-panen' },
  { tag: 'Kreativitas Pemuda', judul: 'Pelatihan Kerajinan Pemuda', desc: 'Peningkatan kecakapan ekonomi kreatif Karang Taruna memanfaatkan bahan lokal.', gambar: 'img-bambu' },
  { tag: 'Pesona Alam', judul: 'Pemandangan Alam Perbukitan Gondang', desc: 'Ketinggian panorama perbukitan yang membentengi sisi selatan.', gambar: 'img-air' },
];
