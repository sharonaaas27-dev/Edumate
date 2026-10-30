import { ArrowUp, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Link } from '../router';
import styles from './Footer.module.css';

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Results', to: '/results' },
  { label: 'Gallery', to: '/gallery' },
];

const programmeLinks = [
  { label: 'NEET Entrance Coaching', to: '/courses' },
  { label: 'NDA Entrance Coaching', to: '/courses' },
  { label: 'Admission Enquiry', to: '/contact' },
  { label: 'Contact & Directions', to: '/contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link className={styles.brand} to="/" aria-label="Edumate, go to homepage">
              <img
                className={styles.brandLogo}
                src="/logo.jpg"
                alt=""
                width={56}
                height={56}
                loading="lazy"
              />
              <span className={styles.brandText}>
                <span className={styles.brandName}>EDUMATE</span>
                <span className={styles.brandDescriptor}>{siteConfig.descriptor}</span>
              </span>
            </Link>

            <p className={styles.description}>
              Entrance examination preparation for students working toward NEET and
              NDA, located in Nilamel–Alummoodu, Neyyattinkara, Kerala.
            </p>

            <p className={styles.tagline}>
              Learn. Grow. Achieve.
            </p>
          </div>

          <nav className={styles.linkCol} aria-label="Explore">
            <span className={styles.columnTitle}>Explore</span>
            <ul className={styles.linkList}>
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link className={styles.footerLink} to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linkCol} aria-label="Programmes">
            <span className={styles.columnTitle}>Programmes</span>
            <ul className={styles.linkList}>
              {programmeLinks.map((link) => (
                <li key={link.label}>
                  <Link className={styles.footerLink} to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.visitCol}>
            <span className={styles.columnTitle}>Visit Us</span>
            <address className={styles.address}>
              <MapPin size={15} strokeWidth={2} aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </address>

            <div className={styles.contactBlock}>
              {siteConfig.contact.telHref ? (
                <a className={styles.contactLink} href={siteConfig.contact.telHref}>
                  <Phone size={15} strokeWidth={2} aria-hidden="true" />
                  {siteConfig.contact.phone}
                </a>
              ) : null}
              {siteConfig.contact.mailtoHref ? (
                <a className={styles.contactLink} href={siteConfig.contact.mailtoHref}>
                  <Mail size={15} strokeWidth={2} aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              ) : null}
              {!siteConfig.contact.phone && !siteConfig.contact.email ? (
                <p className={styles.pendingNote}>
                  Phone and email details will be published once confirmed.
                </p>
              ) : null}
            </div>

            <a
              className={styles.mapLink}
              href={siteConfig.mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open map search
              <ArrowUpRight size={13} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <button
            className={styles.backToTop}
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                  ? 'auto'
                  : 'smooth',
              })
            }
          >
            Back to top
            <ArrowUp size={14} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
