import type { CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import styles from './IntroSection.module.css';

const journeySteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Build conceptual foundations.',
  },
  {
    number: '02',
    title: 'Practise',
    description: 'Apply knowledge to questions.',
  },
  {
    number: '03',
    title: 'Improve',
    description: 'Review mistakes and strengthen understanding.',
  },
];

export function IntroSection() {
  return (
    <section className={`section ${styles.section}`} id="about" aria-labelledby="about-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copyCol}>
          <SectionHeading
            eyebrow="The Edumate approach"
            title={
              <>
                Preparation is more than studying.
                <span className="serif">It’s learning to move forward.</span>
              </>
            }
            titleId="about-heading"
          />

          <div className={styles.copy} data-reveal style={{ '--reveal-delay': '80ms' } as CSSProperties}>
            <p>
              Competitive examinations demand more than memorising information.
              Students need to understand concepts, practise consistently, identify
              gaps, and learn how to approach challenging questions.
            </p>
            <p>
              Edumate is an entrance coaching centre in Nilamel–Alummoodu,
              Neyyattinkara, focused on preparation for NEET and NDA entrance
              examinations.
            </p>
          </div>

          <div
            className={styles.framework}
            data-reveal
            style={{ '--reveal-delay': '160ms' } as CSSProperties}
          >
            <span className={styles.frameworkLabel}>A simple framework</span>
            <p className={styles.frameworkWords}>
              <span>Understand.</span>
              <span>Practise.</span>
              <span>Improve.</span>
            </p>
          </div>

          <a
            className={`text-link ${styles.approachLink}`}
            href="#approach"
            data-reveal
            style={{ '--reveal-delay': '220ms' } as CSSProperties}
          >
            See the learning approach
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.panelWrap} data-reveal>
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <p className="eyebrow eyebrow--plain">The preparation journey</p>
              <span className={styles.panelIndex}>01 — 03</span>
            </div>

            <svg
              className={styles.orbit}
              viewBox="0 0 160 160"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="80"
                cy="80"
                r="60"
                stroke="rgba(245,239,231,0.1)"
                strokeDasharray="2 7"
              />
              <circle cx="80" cy="80" r="38" stroke="rgba(255,90,0,0.22)" />
              <path
                d="M80 20A60 60 0 0 1 134.4 110"
                stroke="rgba(255,90,0,0.42)"
                strokeLinecap="round"
              />
              <circle cx="80" cy="20" r="3.5" fill="#FF5A00" />
              <circle cx="134.4" cy="110" r="2.5" fill="rgba(245,239,231,0.45)" />
              <circle cx="80" cy="80" r="2" fill="rgba(245,239,231,0.3)" />
            </svg>

            <ol className={styles.steps}>
              {journeySteps.map((step) => (
                <li className={styles.step} key={step.number}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className={styles.note}>
              <span className={styles.noteDot} aria-hidden="true" />
              A recommended learning framework, not a promise of results.
            </p>
          </div>

          <a className={`text-link ${styles.panelLink}`} href="#courses">
            Explore the programmes
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
