import { useState } from 'react';
import type { CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  GraduationCap,
  Info,
  MapPin,
  MessageCircle,
  PenLine,
  Target,
  Users,
} from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { CourseDialog } from '../components/CourseDialog';
import { CtaSection } from '../components/CtaSection';
import { SectionHeading } from '../components/SectionHeading';
import { aboutStats, featureHighlights, learningSteps, updates } from '../data/content';
import { courses } from '../data/courses';
import type { Course } from '../data/courses';
import { Link } from '../router';
import styles from './HomePage.module.css';

const featureIcons = {
  focus: Target,
  structure: Compass,
  practice: PenLine,
  guidance: MessageCircle,
  support: Users,
} as const;

const updateIcons = {
  book: BookOpen,
  message: MessageCircle,
  pin: MapPin,
} as const;

const statIcons = [BookOpen, Compass, Target, MapPin] as const;

const successPillars = [
  {
    icon: Target,
    title: 'Concept clarity',
    description:
      'Build a strong foundation before moving on to more difficult questions.',
  },
  {
    icon: PenLine,
    title: 'Consistent practice',
    description:
      'Apply what you learn through questions that reinforce understanding.',
  },
  {
    icon: GraduationCap,
    title: 'Exam readiness',
    description:
      'Review weak areas and strengthen preparation before the examination.',
  },
];

export function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroDecor} aria-hidden="true" />
        <div className={styles.heroDots} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.tagline}>
              <span className={styles.taglineLine} aria-hidden="true" />
              Learn <span aria-hidden="true">·</span> Grow <span aria-hidden="true">·</span> Achieve
            </p>

            <h1 className={styles.heroTitle} id="hero-heading">
              Your Dream,
              <span className={styles.heroAccent}>Our Commitment</span>
            </h1>

            <p className={styles.heroLead}>
              Edumate Entrance Coaching Centre in Nilamel–Alummoodu, Neyyattinkara,
              offers focused preparation for NEET and NDA entrance examinations —
              built around clear concepts, consistent practice and review.
            </p>

            <div className={styles.heroActions}>
              <Link className="btn btn--primary" to="/courses">
                Explore Our Courses
                <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link className="btn btn--secondary" to="/contact">
                Contact Us
                <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <span className={styles.metaItem}>
                <MapPin size={15} strokeWidth={2.2} aria-hidden="true" />
                Nilamel–Alummoodu, Neyyattinkara
              </span>
              <span className={styles.metaDivider} aria-hidden="true" />
              <span className={styles.metaItem}>NEET &amp; NDA preparation</span>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <span className={styles.heroCircle} aria-hidden="true" />
            <span className={styles.heroSquare} aria-hidden="true" />
            <div className={styles.imageFrame}>
              <img
                src="/images/student-library-focus-1200.jpg"
                srcSet="/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w"
                sizes="(max-width: 900px) 92vw, 42vw"
                width={1200}
                height={800}
                alt="A student focused on studying with books in a library"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeIcon} aria-hidden="true">
                <GraduationCap size={18} strokeWidth={2} />
              </span>
              <span>
                <strong>NEET &amp; NDA</strong>
                <span>Entrance coaching</span>
              </span>
            </div>
            <div className={styles.heroLocation}>
              <MapPin size={15} strokeWidth={2.2} aria-hidden="true" />
              Neyyattinkara, Kerala
            </div>
            <span className={styles.heroFrameLine} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className={styles.features} aria-label="What Edumate focuses on">
        <div className="container">
          <div className={styles.featuresCard}>
            {featureHighlights.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <article className={styles.feature} key={feature.title}>
                  <span className={styles.featureIcon} aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h2 className={styles.featureTitle}>{feature.title}</h2>
                  <p className={styles.featureText}>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.coursesSection}`} id="courses">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <SectionHeading
              eyebrow="Courses We Offer"
              title={
                <>
                  Programmes built for
                  <span className={styles.accent}> focused preparation.</span>
                </>
              }
              description="Explore the entrance examination programmes offered by Edumate, with preparation themes for each pathway."
            />
            <Link className="text-link text-link--red" to="/courses">
              View all courses
              <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.courseGrid}>
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
                onLearnMore={setSelectedCourse}
              />
            ))}

            <aside className={styles.courseHelp}>
              <span className={styles.courseHelpIcon} aria-hidden="true">
                <MessageCircle size={22} strokeWidth={2} />
              </span>
              <h3>Not sure where to start?</h3>
              <p>
                Share your goals and Edumate can guide you to the right programme
                and next step.
              </p>
              <Link className="btn btn--primary" to="/contact">
                Talk to Edumate
                <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </aside>
          </div>

          <p className={styles.courseNote}>
            <Info size={15} strokeWidth={2} aria-hidden="true" />
            Course schedules, eligibility, fees and batch details are confirmed
            directly by Edumate. Additional programmes will be published once
            verified.
          </p>
        </div>

        <CourseDialog course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      </section>

      <section className={`section section--soft ${styles.aboutSection}`} id="about">
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutMedia} data-reveal>
            <span className={styles.aboutSoftShape} aria-hidden="true" />
            <span className={styles.aboutRedTop} aria-hidden="true" />
            <span className={styles.aboutRedBottom} aria-hidden="true" />

            <figure className={styles.aboutFigure}>
              <div className={styles.aboutFrame}>
                <img
                  src="/images/classroom-learning-900.jpg"
                  srcSet="/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w"
                  sizes="(max-width: 900px) 88vw, 42vw"
                  width={900}
                  height={600}
                  alt="Students learning together in a classroom, representative image"
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles.aboutImageTint} aria-hidden="true" />
              </div>
            </figure>

            <div className={styles.aboutNote} aria-hidden="true">
              <span className={styles.aboutNoteText}>More Than Just Coaching</span>
              <svg
                className={styles.aboutUnderline}
                viewBox="0 0 154 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8.2C29 2.8 58 1.6 86 4.2C107 6.2 130 8.6 152 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className={styles.aboutCaption}>
              <Info size={13} strokeWidth={2.2} aria-hidden="true" />
              Representative image
            </p>
          </div>

          <div className={styles.aboutCopy}>
            <SectionHeading
              eyebrow="About Us"
              title={
                <>
                  Why Choose
                  <span className={styles.accent}> Edumate?</span>
                </>
              }
            />

            <div className={styles.aboutText} data-reveal>
              <p>
                Competitive examinations demand more than memorising information.
                Students need to understand concepts, practise consistently,
                identify gaps, and learn how to approach challenging questions.
              </p>
              <p>
                Edumate is an entrance coaching centre in Nilamel–Alummoodu,
                Neyyattinkara, focused on preparation for NEET and NDA entrance
                examinations.
              </p>
            </div>

            <div className={styles.statsGrid}>
              {aboutStats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <div
                    className={styles.statCard}
                    key={stat.label}
                    data-reveal
                    style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
                  >
                    <span className={styles.statIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <span className={styles.statBody}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            <Link className={`text-link text-link--red ${styles.aboutLink}`} to="/about">
              Discover more about Edumate
              <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.successSection}`}>
        <div className={`container ${styles.successGrid}`}>
          <div className={styles.successCopy}>
            <SectionHeading
              eyebrow="Success Stories"
              title={
                <>
                  Every result begins with
                  <span className={styles.accent}> preparation.</span>
                </>
              }
              description="Student results and testimonials are published only after they are verified and shared with permission. Until then, here is the preparation approach that supports every learner."
            />
            <Link className={`text-link text-link--red ${styles.successLink}`} to="/results">
              See results &amp; achievements
              <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.successCards}>
            {successPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article
                  className={styles.successCard}
                  key={pillar.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
                >
                  <span className={styles.successIcon} aria-hidden="true">
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              );
            })}

            <div className={styles.successNote}>
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <p>
                Verified student stories will appear here as they are collected.
              </p>
              <span className={styles.successNoteLabel}>
                {learningSteps.length} preparation stages · one clear direction
              </span>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <section className={`section section--soft ${styles.updatesSection}`}>
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <SectionHeading
              eyebrow="Latest Updates"
              title={
                <>
                  News &amp; <span className={styles.accent}>information.</span>
                </>
              }
              description="Useful starting points for students and parents exploring Edumate."
            />
            <Link className="text-link text-link--red" to="/contact">
              Ask a question
              <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.updatesGrid}>
            {updates.map((update, index) => {
              const Icon = updateIcons[update.icon];
              return (
                <article
                  className={styles.updateCard}
                  key={update.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
                >
                  <div className={styles.updateTop}>
                    <span className={styles.updateIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <span className={styles.updateLabel}>{update.label}</span>
                  </div>
                  <h3>{update.title}</h3>
                  <p>{update.description}</p>
                  <Link className={styles.updateLink} to={update.href}>
                    {update.linkLabel}
                    <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
