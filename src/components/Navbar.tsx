import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './Navbar.module.css';

const sectionIds = ['courses', 'approach', 'about', 'contact'] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    requestAnimationFrame(() => toggleRef.current?.focus({ preventScroll: true }));
  };

  return (
    <header
      className={[
        styles.header,
        isScrolled ? styles.scrolled : '',
        isMenuOpen ? styles.menuOpen : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={`container ${styles.inner}`}>
        <a
          className={styles.brand}
          href="#top"
          aria-label={`${siteConfig.name} — back to top`}
          onClick={closeMenu}
        >
          <span className={styles.wordmark}>
            {siteConfig.shortName}
            <span className={styles.brandDot} aria-hidden="true" />
          </span>
          <span className={styles.descriptor}>{siteConfig.descriptor}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.desktopList}>
            {siteConfig.navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    className={[styles.navLink, isActive ? styles.active : '']
                      .filter(Boolean)
                      .join(' ')}
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a className={`btn btn--primary ${styles.desktopCta}`} href="#contact">
            Enquire Now
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <a className={styles.mobileCta} href="#contact">
            Enquire
            <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
          </a>
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
              <X size={21} strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Menu size={21} strokeWidth={1.8} aria-hidden="true" />
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
                  <li key={item.href}>
                    <a className={styles.mobileLink} href={item.href} onClick={closeMenu}>
                      <span className={styles.mobileIndex}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className={styles.mobileArrow}
                        size={20}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.panelFooter}>
              <div>
                <p className={styles.panelLabel}>Visit</p>
                <p className={styles.panelAddress}>{siteConfig.address}</p>
              </div>
              <a
                className="btn btn--primary btn--block"
                href="#contact"
                onClick={closeMenu}
              >
                Enquire Now
                <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
