import type { CSSProperties } from 'react';
import {
  BookOpen,
  Check,
  Compass,
  Eye,
  GraduationCap,
  HandHeart,
  Landmark,
  MessagesSquare,
  Target,
  Users,
} from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { LineLink } from '../components/LineLink';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { learningSteps, whyPoints } from '../data/content';
import styles from './AboutPage.module.css';

const approachIcons = [BookOpen, Compass, Target, GraduationCap];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Edumate"
        crumb="About Us"
        title={
          <>
            A focused place to
            <span className={styles.accent}> prepare and grow.</span>
          </>
        }
        description="Edumate Entrance Coaching Centre supports students preparing for NEET, KEAM, JEE, NDA, CUET and IMUCET with structured preparation, consistent practice and clear guidance for students and parents."
        image={{
          src: '/images/classroom-learning-900.jpg',
          srcSet:
            '/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w',
          sizes: '(max-width: 900px) 92vw, 42vw',
          alt: 'Students listening and taking notes in a classroom',
          width: 900,
          height: 600,
        }}
        actions={
          <>
            <LineLink to="/courses">Explore our courses</LineLink>
            <LineLink to="/contact">Talk to Edumate</LineLink>
          </>
        }
      />

      <section className={`section ${styles.introSection}`}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introMedia} data-reveal>
            <span className={styles.introAccent} aria-hidden="true" />
            <div className={styles.introFrame}>
              <img
                src="/images/students-collaborating-1400.jpg"
                srcSet="/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w"
                sizes="(max-width: 900px) 92vw, 46vw"
                width={1400}
                height={933}
                alt="Students working together around a table"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.introBadge}>
              <Landmark size={18} strokeWidth={2} aria-hidden="true" />
              <span>
                <strong>Neyyattinkara</strong>
                <span>Nilamel–Alummoodu, Kerala</span>
              </span>
            </div>
          </div>

          <div className={styles.introCopy}>
            <SectionHeading
              eyebrow="Our Centre"
              title={
                <>
                  An entrance coaching centre
                  <span className={styles.accent}> built around preparation.</span>
                </>
              }
            />

            <div className={styles.copyBlock} data-reveal>
              <p>
                Competitive examinations demand more than memorising information.
                Students need to understand concepts, practise consistently,
                identify gaps, and learn how to approach challenging questions.
              </p>
              <p>
                Edumate is an entrance coaching centre in Nilamel–Alummoodu,
                Neyyattinkara, preparing students for NEET, KEAM, JEE, NDA, CUET
                and IMUCET through regular, crash, repeater and foundation
                courses. The centre supports students and parents with direct
                information about programmes, schedules and admissions.
              </p>
            </div>

            <ul className={styles.factList} data-reveal>
              <li>
                <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                Six entrance examination pathways
              </li>
              <li>
                <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                Regular, crash, repeater and foundation course formats
              </li>
              <li>
                <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                Structured learning and direct enquiry support
              </li>
            </ul>

            <LineLink to="/contact" className={styles.introLink}>
              Ask about admissions
            </LineLink>
          </div>
        </div>
      </section>

      <section className={`section section--soft ${styles.missionSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Mission & Vision"
            title={
              <>
                Clear direction for
                <span className={styles.accent}> the next step.</span>
              </>
            }
            description="Our mission and vision guide how Edumate approaches preparation and student support."
            align="center"
          />

          <div className={styles.missionGrid}>
            <article className={styles.missionCard} data-reveal>
              <span className={styles.missionIcon} aria-hidden="true">
                <Target size={24} strokeWidth={2} />
              </span>
              <h3>Our Mission</h3>
              <p>
                To support students preparing for NEET, KEAM, JEE, NDA, CUET and
                IMUCET with focused preparation, structured learning and
                consistent practice — while keeping students and parents informed
                about the next step.
              </p>
              <span className={styles.missionNumber} aria-hidden="true">
                01
              </span>
            </article>

            <article className={styles.missionCard} data-reveal>
              <span className={styles.missionIcon} aria-hidden="true">
                <Eye size={24} strokeWidth={2} />
              </span>
              <h3>Our Vision</h3>
              <p>
                To be a dependable entrance coaching centre in Neyyattinkara where
                students can build confidence through clear concepts, purposeful
                practice and steady guidance.
              </p>
              <span className={styles.missionNumber} aria-hidden="true">
                02
              </span>
            </article>
          </div>
        </div>
      </section>

      <section className={`section ${styles.approachSection}`}>
        <div className="container">
          <div className={styles.approachHeader}>
            <SectionHeading
              eyebrow="Our Teaching Approach"
              title={
                <>
                  Learn with purpose.
                  <span className={styles.accent}> Improve with practice.</span>
                </>
              }
              description="A structured approach that moves from understanding to practice, review and reinforcement."
            />
          </div>

          <div className={styles.approachGrid}>
            {learningSteps.map((step, index) => {
              const Icon = approachIcons[index];
              return (
                <article
                  className={styles.approachCard}
                  key={step.number}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
                >
                  <span className={styles.approachTop}>
                    <span className={styles.approachIcon} aria-hidden="true">
                      <Icon size={19} strokeWidth={2} />
                    </span>
                    <span className={styles.approachNumber}>{step.number}</span>
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.facultySection}`}>
        <div className={`container ${styles.facultyGrid}`}>
          <div className={styles.facultyCopy}>
            <SectionHeading
              eyebrow="Guidance & Support"
              title={
                <>
                  Support for students
                  <span className={styles.accent}> and parents.</span>
                </>
              }
              description="Edumate keeps communication direct and practical, so families can make informed decisions about preparation."
            />

            <div className={styles.supportCards}>
              <article className={styles.supportCard} data-reveal>
                <span className={styles.supportIcon} aria-hidden="true">
                  <HandHeart size={19} strokeWidth={2} />
                </span>
                <div>
                  <h3>Student guidance</h3>
                  <p>
                    Guidance for students working through concepts, practice and
                    revision.
                  </p>
                </div>
              </article>
              <article className={styles.supportCard} data-reveal>
                <span className={styles.supportIcon} aria-hidden="true">
                  <Users size={19} strokeWidth={2} />
                </span>
                <div>
                  <h3>Parent communication</h3>
                  <p>
                    Parents can enquire directly about courses, schedules and
                    admissions.
                  </p>
                </div>
              </article>
              <article className={styles.supportCard} data-reveal>
                <span className={styles.supportIcon} aria-hidden="true">
                  <MessagesSquare size={19} strokeWidth={2} />
                </span>
                <div>
                  <h3>Programme information</h3>
                  <p>
                    Course details, eligibility and batch information are confirmed
                    directly by Edumate.
                  </p>
                </div>
              </article>
            </div>

            <p className={styles.facultyNote}>
              Faculty names, qualifications and batch allocations will be
              published once verified by Edumate. For current details, please
              contact the centre.
            </p>
          </div>

          <div className={styles.facultyMedia} data-reveal>
            <div className={styles.facultyFrame}>
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
            </div>
            <span className={styles.facultyAccent} aria-hidden="true" />
            <div className={styles.facultyQuote}>
              <span aria-hidden="true">&ldquo;</span>
              <p>Direct guidance, clear next steps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section section--soft ${styles.whySection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Edumate"
            title={
              <>
                Built around the work of
                <span className={styles.accent}> getting ready.</span>
              </>
            }
            align="center"
          />

          <div className={styles.whyGrid}>
            {whyPoints.map((point, index) => (
              <article
                className={styles.whyCard}
                key={point.number}
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
              >
                <span className={styles.whyNumber}>{point.number}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.whyCta}>
            <LineLink to="/courses">Explore the programmes</LineLink>
          </div>
        </div>
      </section>

      <CtaSection
        title="Prepare With Purpose"
        description="Speak with Edumate about entrance exam preparation and find a clear starting point for your academic goals."
        primaryLabel="Enquire About Admission"
      />
    </>
  );
}
