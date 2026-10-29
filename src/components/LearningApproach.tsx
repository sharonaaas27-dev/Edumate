import type { CSSProperties } from 'react';
import { learningSteps } from '../data/content';
import { SectionHeading } from './SectionHeading';
import styles from './LearningApproach.module.css';

export function LearningApproach() {
  return (
    <section
      className={`section ${styles.section}`}
      id="approach"
      aria-labelledby="approach-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            eyebrow="Learning approach"
            title={
              <>
                A structured way to
                <span className="serif">prepare with purpose.</span>
              </>
            }
            titleId="approach-heading"
          />

          <div
            className={styles.headerAside}
            data-reveal
            style={{ '--reveal-delay': '100ms' } as CSSProperties}
          >
            <p>
              An approach to preparation that moves from understanding to
              practice, review and reinforcement.
            </p>
            <span className={styles.count}>Themes / 01 — 04</span>
          </div>
        </div>

        <div className={styles.steps}>
          <div className={styles.rail} aria-hidden="true" />

          {learningSteps.map((step, index) => (
            <article
              className={styles.step}
              key={step.number}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
            >
              <span className={styles.node} aria-hidden="true" />
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </article>
          ))}
        </div>

        <p
          className={styles.disclaimer}
          data-reveal
          style={{ '--reveal-delay': '160ms' } as CSSProperties}
        >
          These themes describe an approach to structured preparation. Specific
          programme details are confirmed by Edumate.
        </p>
      </div>
    </section>
  );
}
