import type { CSSProperties } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import styles from './EnquiryCTA.module.css';

export function EnquiryCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="enquiry-cta-heading"
    >
      <span className={styles.bgWord} aria-hidden="true">
        ENQUIRE
      </span>

      <div className={`container ${styles.inner}`}>
        <div
          className={styles.copy}
          data-reveal
          style={{ '--reveal-delay': '40ms' } as CSSProperties}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Admissions &amp; enquiries
          </span>
          <h2 className={styles.title} id="enquiry-cta-heading">
            Ready to take the
            <span className={styles.serif}>next step?</span>
          </h2>
          <p className={styles.description}>
            Talk to Edumate about the NEET or NDA programme and find the right
            starting point for your preparation.
          </p>
        </div>

        <div
          className={styles.actions}
          data-reveal
          style={{ '--reveal-delay': '140ms' } as CSSProperties}
        >
          <a className={styles.primary} href="#contact">
            Start an enquiry
            <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
          </a>
          <a className={styles.secondary} href="#courses">
            View courses
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <span className={styles.note}>
            Course details are confirmed directly by Edumate.
          </span>
        </div>
      </div>
    </section>
  );
}
