import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, User, Menu, X, Droplets } from 'lucide-react';
import { navLinks } from '../data/content.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-logo"><Droplets size={20} /></span>
          <span className="brand-text">
            <strong>BENDUNGAN</strong>
            <small>Informasi & Potensi Desa</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/peta-wilayah" className="btn btn-primary btn-sm">
            <Compass size={16} /> Jelajahi Peta
          </Link>
          <button className="icon-btn" aria-label="Akun"><User size={16} /></button>
          <button className="icon-btn menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
