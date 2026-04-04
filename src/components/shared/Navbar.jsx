import { Link, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  // Create refs for each nav link
  const linkRefs = {
    '/': useRef(null),
    '/about': useRef(null),
    '/contact': useRef(null),
  };

  // Track floating underline position and dimensions
  const [underline, setUnderline] = useState({ left: 0, width: 0, ready: false });

  // Update underline position when route changes
  useEffect(() => {
    const currentRef = linkRefs[location.pathname];
    if (currentRef?.current) {
      const { offsetLeft, offsetWidth } = currentRef.current;
      setUnderline({ left: offsetLeft, width: offsetWidth, ready: true });
    }
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1F4E] relative">
      <div className="flex items-center justify-center gap-48 px-8 py-4">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/logos/gesalem_logo_nobg.png"
            alt="Gesalem Group"
            className="h-16 w-auto"
          />
          <span className="font-display font-black text-[2.8125rem] text-white tracking-wide">
            Gesalem Group
          </span>
        </Link>

        {/* Nav Links */}
        <div className="relative flex gap-8">
          {/* Floating underline */}
          {underline.ready && (
            <div
              className="absolute bottom-0 h-[2px] bg-color-gold"
              style={{
                left: `${underline.left}px`,
                width: `${underline.width}px`,
                transition: 'left 300ms ease, width 300ms ease',
              }}
            />
          )}

          {navLinks.map(({ label, path }) => (
            <span
              key={path}
              ref={linkRefs[path]}
              className="relative"
            >
              <Link
                to={path}
                className={`block font-body text-white text-[1.25rem] transition-all ${
                  isActive(path)
                    ? ''
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                {label}
              </Link>
            </span>
          ))}
        </div>
      </div>
      <div key={location.pathname} className="nav-border-line" />
    </nav>
  );
}
