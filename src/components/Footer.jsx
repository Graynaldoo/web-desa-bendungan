import { Link } from 'react-router-dom';
import { Droplets, MapPin, Mail } from 'lucide-react';
import { navLinks } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-light">
            <span className="brand-logo"><Droplets size={20} /></span>
            <span className="brand-text"><strong>BENDUNGAN</strong><small>Informasi & Potensi Desa</small></span>
          </div>
          <p className="footer-desc">
            Portal informasi dan pemetaan potensi Desa Bendungan, Kecamatan Gondang,
            Kabupaten Tulungagung.
          </p>
        </div>
        <div>
          <h4>Tautan</h4>
          <ul>
            {navLinks.map((l) => (<li key={l.to}><Link to={l.to}>{l.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <h4>Kontak Desa</h4>
          <ul className="footer-contact">
            <li><MapPin size={14} /> Dusun Krajan, Desa Bendungan, Kec. Gondang, Kab. Tulungagung</li>
            <li><Mail size={14} /> [email resmi desa — diisi admin]</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Pemerintah Desa Bendungan. Dikembangkan sebagai proyek Studi Independen.
      </div>
    </footer>
  );
}
