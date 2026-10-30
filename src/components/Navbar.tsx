import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Link, useRoute } from '../router';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { path } = useRoute();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const panel = panelRef.current;
    const focusableElements = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      : [];

    document.body.classList.add('is-locked');
    focusableElements[0]?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsMenuOpen(false);
        toggleRef.current?.focus({ preventScroll: true });
        return;
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={[styles.header, isScrolled ? styles.scrolled : '', isMenuOpen ? styles.menuOpen : '']
        .filter(Boolean)
        .join(' ')}
    >
      <div className={`container ${styles.inner}`}>
        <Link
          className={styles.brand}
          to="/"
          aria-label={`${siteConfig.name} — home`}
          onClick={closeMenu}
        >
          <img
            className={styles.brandLogo}
            src="/logo.jpg"
            alt=""
            width={48}
            height={48}
            loading="eager"
          />
          <span className={styles.brandText}>
            <span className={styles.wordmark}>EDUMATE</span>
            <span className={styles.descriptor}>{siteConfig.descriptor}</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.desktopList}>
            {siteConfig.navigation.map((item) => {
              const isActive = path === item.to;
              return (
                <li key={item.to}>
                  <Link
                    className={[styles.navLink, isActive ? styles.active : '']
                      .filter(Boolean)
                      .join(' ')}
                    to={item.to}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link className={`btn btn--primary ${styles.desktopCta}`} to="/contact">
            Enquire Now
            <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            className={styles.toggle}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X size={22} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <>
          <div className={styles.backdrop} aria-hidden="true" onClick={closeMenu} />
          <div className={styles.panel} id="mobile-menu" ref={panelRef}>
            <nav aria-label="Mobile">
              <ul className={styles.mobileList}>
                {siteConfig.navigation.map((item, index) => (
                  <li key={item.to}>
                    <Link
                      className={[
                        styles.mobileLink,
                        path === item.to ? styles.mobileActive : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      to={item.to}
                      onClick={closeMenu}
                    >
                      <span className={styles.mobileIndex}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className={styles.mobileArrow}
                        size={19}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.panelFooter}>
              <div>
                <p className={styles.panelLabel}>Visit</p>
                <p className={styles.panelAddress}>{siteConfig.address}</p>
              </div>
              <Link
                className="btn btn--primary btn--block"
                to="/contact"
                onClick={closeMenu}
              >
                Enquire Now
                <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
