import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from '../router';
import { siteConfig } from '../data/siteConfig';
import styles from './CtaSection.module.css';

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CtaSection({
  title = 'Your Future Starts Here',
  description = 'Take the next step in your preparation. Talk to Edumate about the NEET or NDA programme and find the right starting point for your goals.',
  primaryLabel = 'Enroll Now',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Courses',
  secondaryTo = '/courses',
}: CtaSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.media} aria-hidden="true">
        <img
          src="/images/hero-students-classroom-1920.jpg"
          srcSet="/images/hero-students-classroom-960.jpg 960w, /images/hero-students-classroom-1920.jpg 1920w"
          sizes="100vw"
          width={1920}
          height={1280}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <span className={styles.accent} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy} data-reveal>
          <p className={styles.eyebrow}>Admissions &amp; Enquiries</p>
          <h2 className={styles.title} id="cta-heading">
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
          <p className={styles.location}>
            <MapPin size={15} strokeWidth={2.2} aria-hidden="true" />
            {siteConfig.location.locality}, {siteConfig.location.city}
          </p>
        </div>

        <div className={styles.actions} data-reveal>
          <Link className={`btn btn--primary ${styles.primary}`} to={primaryTo}>
            {primaryLabel}
            <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
          </Link>
          <Link className="btn btn--outline-white" to={secondaryTo}>
            {secondaryLabel}
            <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
