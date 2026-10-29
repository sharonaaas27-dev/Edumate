import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import styles from './Footer.module.css';

const footerLinks = [
  { label: 'Courses', href: '#courses' },
  { label: 'Learning approach', href: '#approach' },
  { label: 'Preparation journey', href: '#journey' },
  { label: 'Campus & learning', href: '#campus' },
  { label: 'Why Edumate', href: '#why' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a className={styles.brand} href="#top" aria-label="Edumate, back to top">
              <span className={styles.brandName}>EDUMATE</span>
              <span className={styles.brandDescriptor}>
                {siteConfig.descriptor}
              </span>
            </a>

            <p className={styles.statement}>
              Prepared for
              <span className="serif">what comes next.</span>
            </p>

            <p className={styles.description}>
              Entrance examination preparation for students working toward
              NEET and NDA, located in Nilamel–Alummoodu, Neyyattinkara,
              Kerala.
            </p>

            <a className={`text-link ${styles.enquireLink}`} href="#contact">
              Start an enquiry
              <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <nav className={styles.navCol} aria-label="Footer navigation">
            <span className={styles.columnTitle}>Explore</span>
            <ul className={styles.linkList}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a className={styles.footerLink} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.visitCol}>
            <span className={styles.columnTitle}>Visit</span>
            <address className={styles.address}>{siteConfig.address}</address>
            <a
              className={styles.mapLink}
              href={siteConfig.mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open map search
              <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
            </a>

            <div className={styles.contactBlock}>
              {siteConfig.contact.telHref ? (
                <a className={styles.footerLink} href={siteConfig.contact.telHref}>
                  {siteConfig.contact.phone}
                </a>
              ) : null}
              {siteConfig.contact.mailtoHref ? (
                <a
                  className={styles.footerLink}
                  href={siteConfig.contact.mailtoHref}
                >
                  {siteConfig.contact.email}
                </a>
              ) : null}
              {!siteConfig.contact.phone && !siteConfig.contact.email ? (
                <p className={styles.pendingNote}>
                  Phone and email details will be published once confirmed.
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {siteConfig.name}.
          </p>
          <a className={styles.backToTop} href="#top">
            Back to top
            <ArrowUp size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
