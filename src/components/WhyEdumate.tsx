import type { CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { whyPoints } from '../data/content';
import { SectionHeading } from './SectionHeading';
import styles from './WhyEdumate.module.css';

export function WhyEdumate() {
  return (
    <section
      className={`section ${styles.section}`}
      id="why"
      aria-labelledby="why-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.copyCol}>
          <SectionHeading
            eyebrow="Why Edumate"
            title={
              <>
                Built around the work of
                <span className="serif">getting ready.</span>
              </>
            }
            titleId="why-heading"
          />

          <p
            className={styles.lead}
            data-reveal
            style={{ '--reveal-delay': '80ms' } as CSSProperties}
          >
            Edumate focuses on entrance examination preparation, with NEET and
            NDA programmes for students working toward their academic goals.
          </p>

          <ol className={styles.points}>
            {whyPoints.map((point, index) => (
              <li
                className={styles.point}
                key={point.number}
                data-reveal
                style={{ '--reveal-delay': `${100 + index * 80}ms` } as CSSProperties}
              >
                <span className={styles.pointNumber}>{point.number}</span>
                <div>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointDescription}>{point.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            className={`text-link ${styles.enquireLink}`}
            href="#contact"
            data-reveal
            style={{ '--reveal-delay': '320ms' } as CSSProperties}
          >
            Enquire about courses
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </a>

          <p className={styles.footnote} data-reveal>
            Institutional information is confirmed directly by Edumate.
          </p>
        </div>

        <figure className={styles.mediaWrap} data-reveal>
          <div className={styles.media}>
            <img
              src="/images/student-library-focus-1200.jpg"
              srcSet="/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w"
              sizes="(max-width: 1024px) 90vw, 45vw"
              width={1200}
              height={800}
              alt="A student focused on reading in a library"
              loading="lazy"
              decoding="async"
            />
            <div className={styles.mediaOverlay} aria-hidden="true" />
            <figcaption className={styles.caption}>
              <span className={styles.captionLabel}>Representative image</span>
              <span>Study &amp; focus</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
