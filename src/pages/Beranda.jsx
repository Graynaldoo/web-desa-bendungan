import { Link } from 'react-router-dom';
import { Compass, Map as MapIcon, MapPin, ArrowRight, Maximize, ShieldCheck, Clock, Calendar, Phone, MousePointerClick, Building2 } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { stats, akses, potensi, petaLegend, berita, agenda } from '../data/content.js';

export default function Beranda() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="pill pill-glass"><ShieldCheck size={13} /> Desa Bendungan · Kecamatan Gondang · Tulungagung</span>
          <h1>Kenali Desa, Temukan Potensinya</h1>
          <p>
            Platform pusat informasi terpadu dan pemetaan potensi lokal pertanian, UMKM,
            pariwisata, serta transparansi layanan publik Desa Bendungan.
          </p>
          <div className="hero-actions">
            <Link to="/potensi-desa" className="btn btn-glass"><Compass size={16} /> Jelajahi Potensi</Link>
            <Link to="/peta-wilayah" className="btn btn-glass-ghost"><MapIcon size={16} /> Buka Peta Wilayah</Link>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PINTU AKSES ================= */}
      <section className="container akses-wrap">
        <div className="akses-card">
          <div className="akses-head">
            <div>
              <span className="eyebrow">Pintu Akses Terarah</span>
              <h2>Masuk Sesuai Kebutuhan Anda</h2>
            </div>
            <p>Akses panduan spesifik, dokumen administratif, perizinan usaha desa, atau informasi kunjungan ramah wisatawan.</p>
          </div>
          <div className="akses-grid">
            {akses.map((a) => (
              <article className="akses-item" key={a.judul}>
                <div className="akses-title">
                  <span className={`icon-box ${a.warna}`}><Icon name={a.icon} size={18} /></span>
                  <div><h3>{a.judul}</h3><small>{a.sub}</small></div>
                </div>
                <p>{a.desc}</p>
                <a href="#" className="link-arrow" onClick={(e) => e.preventDefault()}>{a.link} <ArrowRight size={13} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POTENSI UNGGULAN ================= */}
      <section className="container section">
        <div className="section-head">
          <div>
            <div className="tag-row"><span className="tag">Contoh data terverifikasi</span><span className="muted-sm">• Update Periode 2024</span></div>
            <h2 className="h-lg">Potensi Unggulan Desa Bendungan</h2>
            <p className="lead">Komoditas bumi, kerajinan tangan, dan objek daya tarik lokal binaan Badan Usaha Milik Desa (BUMDes).</p>
          </div>
          <Link to="/potensi-desa" className="link-arrow">Lihat Semua Potensi (18) <ArrowRight size={14} /></Link>
        </div>
        <div className="grid-3">
          {potensi.map((p) => (
            <article className="card potensi-card" key={p.judul}>
              <div className={`card-img ${p.gambar}`}>
                <span className="img-tag">{p.tag}</span>
                <span className="img-badge">{p.badge}</span>
              </div>
              <div className="card-body">
                <h3>{p.judul}</h3>
                <p>{p.desc}</p>
                <div className="card-foot">
                  <div><small>{p.metaLabel}</small><strong>{p.metaValue}</strong></div>
                  <button className="btn-soft">{p.tombol}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= PETA ================= */}
      <section className="band">
        <div className="container peta-grid">
          <div>
            <span className="tag"><MapPin size={12} /> Geospasial Wilayah Desa</span>
            <h2 className="h-xl">Peta Sebaran Potensi &amp; Zonasi Desa</h2>
            <p className="lead">Eksplorasi tata letak fasilitas publik, sentra komoditas pertanian, titik posko kesehatan, dan pusat UMKM secara interaktif berbasis pemetaan koordinat presisi.</p>
            <ul className="legend">
              {petaLegend.map((l) => (
                <li key={l.label}>
                  <span><i style={{ background: l.warna }} />{l.label}</span>
                  <em>{l.nilai}</em>
                </li>
              ))}
            </ul>
            <Link to="/peta-wilayah" className="btn btn-primary"><Maximize size={16} /> Buka Peta Lengkap Fullscreen</Link>
          </div>

          <div className="map-card">
            <div className="map-top"><span><i className="dot" /> PETA DIGITAL DESA BENDUNGAN</span><span className="muted-sm">△ Orientasi Utara</span></div>
            <div className="map-canvas">
              <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet" aria-label="Ilustrasi peta wilayah desa">
                <ellipse cx="200" cy="120" rx="150" ry="95" fill="#d5efe8" stroke="#0f7f6b" strokeWidth="2" strokeDasharray="6 5" />
                <path d="M135 70 C 100 110, 110 170, 160 190 C 190 160, 180 100, 135 70Z" fill="#8fd0c0" stroke="#0f7f6b" strokeWidth="2" />
                <path d="M205 55 C 270 50, 310 90, 295 140 C 270 175, 215 165, 195 120 C 190 90, 195 70, 205 55Z" fill="#8fd0c0" stroke="#0f7f6b" strokeWidth="2" />
                <path d="M15 120 C 100 135, 160 100, 260 135 S 360 120, 390 135" fill="none" stroke="#3fa58f" strokeWidth="3" />
                <circle cx="210" cy="95" r="14" fill="#0b5c4e" stroke="#fff" strokeWidth="3" />
                <circle cx="265" cy="68" r="12" fill="#3a5a5a" stroke="#fff" strokeWidth="3" />
                <circle cx="135" cy="150" r="14" fill="#b8643f" stroke="#fff" strokeWidth="3" />
              </svg>
              <div className="map-hint">
                <MousePointerClick size={18} />
                <div><strong>Pilih titik pin pada peta</strong><small>Arahkan kursor untuk melihat nama lokasi &amp; potensi</small></div>
                <em>3 Dusun Terdata</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BERITA & AGENDA ================= */}
      <section className="container section berita-grid">
        <div>
          <div className="section-head slim">
            <div><div className="tag-row"><span className="tag">Warta Terkini</span><span className="muted-sm"></span></div><h2 className="h-md">Kabar &amp; Pengumuman Desa</h2></div>
            <a href="#" className="link-arrow" onClick={(e) => e.preventDefault()}>Arsip Berita <ArrowRight size={13} /></a>
          </div>
          <div className="stack">
            {berita.map((b) => (
              <article className="card news" key={b.judul}>
                <div className={`news-img ${b.gambar}`} />
                <div className="news-body">
                  <div className="news-meta"><span className="tag">{b.kategori}</span><small>{b.tanggal}</small></div>
                  <h3>{b.judul}</h3>
                  <p>{b.desc}</p>
                  <div className="news-foot"><small>Dibaca {b.dibaca}</small><a href="#" className="link-arrow" onClick={(e) => e.preventDefault()}>Baca Selengkapnya <ArrowRight size={12} /></a></div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-head slim">
            <div><div className="tag-row"><span className="tag">Jadwal Komunitas</span><span className="muted-sm"></span></div><h2 className="h-md">Agenda Kegiatan</h2></div>
            <a href="#" className="link-arrow" onClick={(e) => e.preventDefault()}>Kalender <Calendar size={13} /></a>
          </div>
          <div className="stack">
            {agenda.map((a) => (
              <article className="card agenda" key={a.judul}>
                <div className={`date-box ${a.warna}`}><strong>{a.tgl}</strong><span>{a.bln}</span></div>
                <div>
                  <span className="tag">{a.tag}</span>
                  <h3>{a.judul}</h3>
                  <div className="agenda-meta"><span><Clock size={12} /> {a.jam}</span><span><MapPin size={12} /> {a.lokasi}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container section-tight">
        <div className="cta">
          <div>
            <span className="pill pill-glass"><Building2 size={13} /> Pusat Bantuan &amp; Pelayanan Desa</span>
            <h2>Butuh Bantuan atau Informasi Layanan Desa?</h2>
            <p>Petugas pelayanan Desa Bendungan siap membantu kebutuhan administrasi kependudukan, konsultasi potensi usaha, maupun informasi teknis perizinan secara terpadu.</p>
          </div>
          <Link to="/kontak" className="btn btn-glass"><Phone size={16} /> Hubungi Kontak Pelayanan Desa</Link>
        </div>
      </section>
    </>
  );
}
