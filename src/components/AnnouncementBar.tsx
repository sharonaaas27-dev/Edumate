import { ArrowUpRight } from 'lucide-react';
import { Link } from '../router';
import styles from './AnnouncementBar.module.css';

export function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.message}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.fullMessage}>
            Enquiries open for NEET &amp; NDA entrance coaching
          </span>
          <span className={styles.shortMessage}>NEET &amp; NDA enquiries open</span>
        </p>
        <Link className={styles.link} to="/contact">
          Enquire Now
          <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
