import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

export default function Segera({ judul }) {
  return (
    <section className="container segera">
      <Construction size={40} />
      <h1>{judul}</h1>
      <p>Halaman ini sedang dalam pengembangan dan akan tersedia pada tahap berikutnya.</p>
      <Link to="/" className="btn btn-primary">Kembali ke Beranda</Link>
    </section>
  );
}
