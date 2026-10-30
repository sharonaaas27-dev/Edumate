import type { CSSProperties } from 'react';
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  GraduationCap,
  Info,
  MessageCircle,
  PenLine,
  Quote,
  SearchCheck,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { LineLink } from '../components/LineLink';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { learningSteps } from '../data/content';
import { Link } from '../router';
import styles from './ResultsPage.module.css';

const stepIcons = [BookOpen, PenLine, SearchCheck, GraduationCap];

const verificationPoints = [
  'Results are published only after verification.',
  'Student stories are shared with permission.',
  'Current information is available directly from the centre.',
];

const examCards = [
  {
    icon: Target,
    label: 'Medical Entrance',
    title: 'NEET',
    description:
      'NEET preparation details and current result information are available directly from Edumate.',
  },
  {
    icon: ShieldCheck,
    label: 'Defence Entrance',
    title: 'NDA',
    description:
      'NDA preparation details and current result information are available directly from Edumate.',
  },
];

export function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        crumb="Results"
        title={
          <>
            Student
            <span className={styles.accent}> Achievements.</span>
          </>
        }
        description="Edumate publishes student results, ranks and testimonials only after they are verified and shared with permission. This page will be updated as verified achievements become available."
        image={{
          src: '/images/student-library-focus-1200.jpg',
          srcSet:
            '/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w',
          sizes: '(max-width: 900px) 92vw, 42vw',
          alt: 'A student focused on reading in a library',
          width: 1200,
          height: 800,
        }}
        actions={
          <>
            <LineLink to="/contact">Ask about current results</LineLink>
            <LineLink to="/courses">Explore the programmes</LineLink>
          </>
        }
      />

      <section className={`section ${styles.verificationSection}`}>
        <div className={`container ${styles.verificationGrid}`}>
          <div className={styles.verificationCard} data-reveal>
            <span className={styles.verificationIcon} aria-hidden="true">
              <Award size={26} strokeWidth={1.9} />
            </span>
            <h2>Verified results, published honestly.</h2>
            <p>
              We believe achievements should be shared accurately. Result details
              and student stories are added here only when they have been confirmed
              by Edumate and shared with permission.
            </p>
            <div className={styles.verificationActions}>
              <Link className="btn btn--primary" to="/contact">
                Contact the centre
                <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link className="btn btn--secondary" to="/courses">
                View courses
              </Link>
            </div>
          </div>

          <div className={styles.verificationPanel} data-reveal>
            <p className={styles.panelLabel}>Our publishing standard</p>
            <ul className={styles.verificationList}>
              {verificationPoints.map((point) => (
                <li key={point}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <Check size={12} strokeWidth={2.6} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className={styles.panelNote}>
              <Info size={14} strokeWidth={2} aria-hidden="true" />
              No result, rank, mark or testimonial is invented or estimated on this
              website.
            </p>
          </div>
        </div>
      </section>

      <section className={`section section--soft ${styles.examsSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Examination Categories"
            title={
              <>
                Preparation for
                <span className={styles.accent}> two entrance pathways.</span>
              </>
            }
            description="Edumate focuses on NEET and NDA entrance examination preparation. Current result information for each pathway is available on enquiry."
            align="center"
          />

          <div className={styles.examGrid}>
            {examCards.map((exam, index) => {
              const Icon = exam.icon;
              return (
                <article
                  className={styles.examCard}
                  key={exam.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
                >
                  <div className={styles.examTop}>
                    <span className={styles.examIcon} aria-hidden="true">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <span className={styles.examLabel}>{exam.label}</span>
                  </div>
                  <h3>{exam.title}</h3>
                  <p>{exam.description}</p>
                  <Link
                    className={styles.examLink}
                    to={`/contact?course=${encodeURIComponent(`${exam.title} Entrance Coaching`)}`}
                  >
                    Enquire about {exam.title}
                    <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.preparationSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="The Preparation Behind Every Result"
            title={
              <>
                Results begin with
                <span className={styles.accent}> the right habits.</span>
              </>
            }
            description="A clear preparation approach supports students through understanding, practice, review and reinforcement."
          />

          <div className={styles.stepsGrid}>
            {learningSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <article
                  className={styles.stepCard}
                  key={step.number}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
                >
                  <span className={styles.stepIcon} aria-hidden="true">
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.storiesSection}`}>
        <div className={`container ${styles.storiesGrid}`}>
          <div className={styles.storiesMedia} data-reveal>
            <img
              src="/images/library-discussion-900.jpg"
              srcSet="/images/library-discussion-600.jpg 600w, /images/library-discussion-900.jpg 900w"
              sizes="(max-width: 900px) 92vw, 44vw"
              width={900}
              height={600}
              alt="Students discussing their work in a library"
              loading="lazy"
              decoding="async"
            />
            <span className={styles.storiesBadge}>
              <BadgeCheck size={16} strokeWidth={2.2} aria-hidden="true" />
              Shared with permission
            </span>
          </div>

          <div className={styles.storiesCopy}>
            <span className={styles.quoteIcon} aria-hidden="true">
              <Quote size={26} strokeWidth={2} />
            </span>
            <SectionHeading
              eyebrow="Student Stories"
              title={
                <>
                  Stories worth
                  <span className={styles.accent}> telling properly.</span>
                </>
              }
              description="Testimonials are published only when a student or parent has given permission and the details are verified. Ask the centre about current student experiences."
            />

            <div className={styles.storiesNote}>
              <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
              <p>
                Want to hear about a student's experience? Contact Edumate directly
                for current information.
              </p>
            </div>

            <Link className="btn btn--primary" to="/contact">
              Ask Edumate
              <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Start Writing Your Story"
        description="Focused preparation, consistent practice and clear guidance — talk to Edumate about the next step in your academic journey."
        primaryLabel="Enquire About Admission"
      />
    </>
  );
}
