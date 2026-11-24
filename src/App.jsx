import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Beranda from './pages/Beranda.jsx';
import ProfilDesa from './pages/ProfilDesa.jsx';
import Segera from './pages/Segera.jsx';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil-desa" element={<ProfilDesa />} />
          <Route path="/potensi-desa" element={<Segera judul="Potensi Desa" />} />
          <Route path="/peta-wilayah" element={<Segera judul="Peta Wilayah" />} />
          <Route path="/berita-agenda" element={<Segera judul="Berita & Agenda" />} />
          <Route path="/kontak" element={<Segera judul="Kontak" />} />
          <Route path="*" element={<Segera judul="Halaman tidak ditemukan" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
