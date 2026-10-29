import type { CSSProperties } from 'react';
import { preparationStages } from '../data/content';
import { SectionHeading } from './SectionHeading';
import styles from './PreparationJourney.module.css';

export function PreparationJourney() {
  return (
    <section
      className={`section ${styles.section}`}
      id="journey"
      aria-labelledby="journey-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            eyebrow="The preparation journey"
            title={
              <>
                A path from curiosity
                <span className="serif">to readiness.</span>
              </>
            }
            titleId="journey-heading"
          />

          <div
            className={styles.headerAside}
            data-reveal
            style={{ '--reveal-delay': '100ms' } as CSSProperties}
          >
            <p>
              An illustrative view of the stages students may move through while
              preparing for a competitive examination.
            </p>
            <span className={styles.count}>Illustrative / 05 stages</span>
          </div>
        </div>

        <div className={styles.journeyWrap}>
          <span className={styles.bgWord} aria-hidden="true">
            JOURNEY
          </span>

          <div className={styles.rail} aria-hidden="true" />

          <ol className={styles.stages}>
            {preparationStages.map((stage, index) => (
              <li
                className={styles.stage}
                key={stage.number}
                data-reveal
                style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
              >
                <span className={styles.node} aria-hidden="true" />
                <span className={styles.number}>{stage.number}</span>
                <h3 className={styles.title}>{stage.title}</h3>
                <p className={styles.description}>{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <p
          className={styles.note}
          data-reveal
          style={{ '--reveal-delay': '160ms' } as CSSProperties}
        >
          An illustrative journey, not a guaranteed programme or outcome.
        </p>
      </div>
    </section>
  );
}
