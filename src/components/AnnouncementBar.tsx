import { ArrowUpRight } from 'lucide-react';
import styles from './AnnouncementBar.module.css';

export function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.message}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.fullMessage}>
            Explore courses at Edumate Entrance Coaching Centre
          </span>
          <span className={styles.shortMessage}>Explore courses at Edumate</span>
        </p>
        <a className={styles.link} href="#contact">
          Enquire Now
          <ArrowUpRight size={13} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
