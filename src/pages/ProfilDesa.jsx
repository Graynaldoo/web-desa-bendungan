import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Building, ShieldCheck, MapPin, Ruler, Mountain, Compass, Map as MapIcon, Flag, User, Layers, ArrowRight, CircleCheck, Info } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { profilTabs, dataWilayah, misi, staf, lembaga, galeri } from '../data/content.js';

function PersonCard({ nama, placeholder, tugas }) {
  return (
    <div className="person">
      <div className="avatar"><User size={20} /></div>
      <strong>{nama}</strong>
      <em>{placeholder}</em>
      <small>{tugas}</small>
    </div>
  );
}

export default function ProfilDesa() {
  // State tab aktif: menandai tab dan melompat ke bagian yang dipilih
  const [aktif, setAktif] = useState('tentang');

  const pilihTab = (id) => {
    setAktif(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* ================= HEADER HALAMAN ================= */}
      <section className="page-head">
        <div className="container">
          <div className="breadcrumb"><Home size={12} /> <Link to="/">Beranda</Link> <ChevronRight size={12} /> <strong>Profil Desa</strong></div>
          <div className="page-head-row">
            <div>
              <span className="tag"><Building size={12} /> Identitas Wilayah Desa Bendungan</span>
              <h1>Profil Desa Bendungan</h1>
              <p>Mengenal sejarah, letak geografis, visi misi pembangunan, dan potensi kemasyarakatan Desa Bendungan, Kecamatan Gondang, Kabupaten Tulungagung.</p>
            </div>
            <div className="status-box"><ShieldCheck size={16} /><div><small>Status Portal</small><strong>Informasi Publik Resmi</strong></div></div>
          </div>
          <div className="tabs" role="tablist">
            {profilTabs.map((t) => (
              <button key={t.id} role="tab" aria-selected={aktif === t.id} className={`tab ${aktif === t.id ? 'active' : ''}`} onClick={() => pilihTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TENTANG & GEOGRAFIS ================= */}
      <section id="tentang" className="container section tentang-grid">
        <div>
          <span className="eyebrow">Sekilas Wilayah</span>
          <h2 className="h-md">Bentang Alam Agraris &amp; Kearifan Sosial Gondang</h2>
          <p className="para">Desa Bendungan terletak strategis di jantung Kecamatan Gondang, Kabupaten Tulungagung. Diapit oleh hamparan persawahan berteras hijau dan jalur penghubung antar-kecamatan, desa ini tumbuh dengan denyut nadi masyarakat yang bertumpu pada produktivitas agraria dan kegiatan usaha skala mikro rumahan.</p>
          <p className="para">Karakteristik tanah aluvial yang subur serta pasokan perairan irigasi terpadu menjadikan Desa Bendungan sebagai salah satu lumbung pangan andalan di kawasan Gondang timur. Selain komoditas padi dan palawija, interaksi sosial masyarakat dipelihara melalui tradisi gotong royong, musyawarah dusun, dan kerukunan warga lintas generasi yang senantiasa terjaga.</p>
          <div className="duo">
            <div className="photo img-sawah"><span>Kawasan Persawahan Terpadu</span></div>
            <div className="photo img-rapat"><span>Guyub Rukun Kemasyarakatan</span></div>
          </div>
        </div>

        <aside className="card data-wilayah">
          <div className="dw-head"><span className="icon-box teal"><MapPin size={18} /></span><div><h3>Data Wilayah</h3><small>Parameter Geografis Desa</small></div><span className="tag">Contoh Data Terverifikasi</span></div>
          <div className="dw-row"><span><Ruler size={14} /> Luas Wilayah</span><div><strong>{dataWilayah.luas}</strong><small>Contoh data estimasi</small></div></div>
          <div className="dw-block">
            <div className="dw-row plain"><span><Layers size={14} /> Pembagian Dusun</span><strong>{dataWilayah.dusun.length} Dusun</strong></div>
            <div className="chips">{dataWilayah.dusun.map((d) => <span key={d}>{d}</span>)}</div>
          </div>
          <div className="dw-block">
            <div className="dw-row plain"><span><Compass size={14} /> Batas Administratif Wilayah</span></div>
            <div className="batas">{dataWilayah.batas.map((b) => (<div key={b.arah}><small>{b.arah}:</small><strong>{b.desa}</strong></div>))}</div>
          </div>
          <div className="dw-row"><span><Mountain size={14} /> Topografi</span><div><strong>{dataWilayah.topografi}</strong><small>{dataWilayah.ketinggian}</small></div></div>
          <Link to="/peta-wilayah" className="btn-soft wide"><MapIcon size={14} /> Telusuri Batas di Peta Spasial</Link>
        </aside>
      </section>

      {/* ================= VISI & MISI ================= */}
      <section id="visimisi" className="section-band">
        <div className="container">
          <div className="center-head">
            <span className="eyebrow">Arah Pembangunan Jangka Panjang</span>
            <h2 className="h-md">Visi &amp; Misi Desa Bendungan</h2>
            <p>Landasan terpadu perencanaan program kerja, alokasi anggaran, dan pelayanan kemasyarakatan berkelanjutan.</p>
          </div>
          <div className="visi">
            <span className="visi-icon"><Flag size={22} /></span>
            <div>
              <small>VISI PEMBANGUNAN DESA</small>
              <blockquote>“Mewujudkan Desa Bendungan yang Maju, Mandiri, Berdaya Saing, dan Sejahtera Berbasis Potensi Lokal dan Teknologi.”</blockquote>
            </div>
          </div>
          <div className="grid-4">
            {misi.map((m) => (
              <article className="card misi" key={m.no}>
                <span className="icon-box light"><Icon name={m.icon} size={18} /></span>
                <small>MISI {m.no}</small>
                <h3>{m.judul}</h3>
                <p>{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PEMERINTAH DESA ================= */}
      <section id="pemerintah" className="container section">
        <span className="eyebrow">Aparatur &amp; Tata Kerja Desa</span>
        <h2 className="h-md">Bagan Struktur Pemerintah Desa</h2>
        <p className="lead">Struktur Organisasi &amp; Tata Kerja (SOTK) Pemerintah Desa Bendungan dalam penyelenggaraan tata pamong publik terpadu.</p>

        <div className="card org">
          <div className="org-top">
            <div className="org-main dark"><span className="avatar light"><User size={22} /></span><small className="pill-sm">{staf.kades.jabatan}</small><h3>{staf.kades.nama}</h3><em>{staf.kades.placeholder}</em><p>{staf.kades.tugas}</p></div>
            <div className="org-line" />
            <div className="org-main"><span className="avatar"><User size={22} /></span><small className="pill-sm soft">{staf.sekdes.jabatan}</small><h3>{staf.sekdes.nama}</h3><em>{staf.sekdes.placeholder}</em><p>{staf.sekdes.tugas}</p></div>
          </div>

          <div className="org-two">
            {[staf.kaur, staf.kasi].map((grp) => (
              <div className="org-group" key={grp.judul}>
                <h4>{grp.judul}</h4><small>{grp.sub}</small>
                <div className="org-people">{grp.item.map((p) => <PersonCard key={p.nama} {...p} />)}</div>
              </div>
            ))}
          </div>

          <div className="org-kasun-head"><h4><Layers size={16} /> Pelaksana Kewilayahan (Kepala Dusun)</h4><span className="tag">Total 2 Wilayah Dusun</span></div>
          <div className="org-kasun">
            {staf.kasun.map((k) => (
              <div className="kasun" key={k.judul}>
                <div className="avatar sm"><User size={16} /></div>
                <div><small>{k.wilayah} · Desa Bendungan</small><h5>{k.judul}</h5><em>{k.placeholder}</em><p>{k.tugas}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEMBAGA ================= */}
      <section id="lembaga" className="container section">
        <div className="section-head slim">
          <div><span className="eyebrow">Tata Kelola Desa</span><h2 className="h-md">Lembaga Kemasyarakatan Desa</h2><p className="lead">Unsur kolaboratif penunjang penyelenggaraan pembangunan dan pemberdayaan masyarakat Desa Bendungan.</p></div>
          <span className="tag warn"><Info size={12} /> SK Definitif Terbaru Sedang Ditata Laksana</span>
        </div>
        <div className="grid-4">
          {lembaga.map((l) => (
            <article className="card lembaga" key={l.judul}>
              <span className="icon-plain"><Icon name={l.icon} size={18} /></span>
              <h3>{l.judul}</h3>
              <p>{l.desc}</p>
              <div className="peran"><span>Peran: {l.peran}</span><CircleCheck size={14} /></div>
            </article>
          ))}
        </div>
        <div className="note"><Info size={16} /><div><strong>Catatan Redaksi Tata Kelola</strong><p>Struktur kepengurusan dan nama pejabat resmi akan diperbarui sesuai SK penetapan definitif oleh Kepala Desa Bendungan pasca-verifikasi administrasi berkala tahun anggaran berjalan.</p></div></div>
      </section>

      {/* ================= GALERI ================= */}
      <section id="galeri" className="container section">
        <div className="section-head slim">
          <div><span className="eyebrow">Dokumentasi Lapangan</span><h2 className="h-md">Galeri Potensi &amp; Kegiatan Warga</h2><p className="lead">Kilas balik aktivitas komunal, kerja bersama, dan pesona bentang alam pedesaan Bendungan.</p></div>
          <a href="#" className="link-arrow" onClick={(e) => e.preventDefault()}>Lihat Seluruh Liputan Warta <ArrowRight size={13} /></a>
        </div>
        <div className="grid-4">
          {galeri.map((g) => (
            <article className="card gal" key={g.judul}>
              <div className={`gal-img ${g.gambar}`}><span className="img-tag">{g.tag}</span></div>
              <div className="card-body"><h3>{g.judul}</h3><p>{g.desc}</p></div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container section-tight">
        <div className="cta">
          <div>
            <span className="eyebrow light">Keterbukaan Data Spasial &amp; Ekonomi</span>
            <h2>Ingin Mengetahui Sebaran Potensi &amp; Wilayah Desa Bendungan?</h2>
            <p>Jelajahi pemetaan komoditas pertanian, titik UMKM warga, dan rincian batas administratif wilayah secara interaktif dan transparan.</p>
          </div>
          <div className="cta-btns">
            <Link to="/potensi-desa" className="btn btn-glass">Lihat Katalog Potensi Desa</Link>
            <Link to="/peta-wilayah" className="btn btn-primary">Buka Peta Interaktif</Link>
          </div>
        </div>
      </section>
    </>
  );
}
