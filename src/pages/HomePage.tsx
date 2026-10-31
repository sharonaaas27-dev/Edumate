import type { CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Calculator,
  CalendarRange,
  Camera,
  Compass,
  DraftingCompass,
  FileCheck2,
  GraduationCap,
  Headphones,
  HeartHandshake,
  IdCard,
  Info,
  Landmark,
  MapPin,
  MessageCircle,
  MessageCircleQuestion,
  MonitorPlay,
  Quote,
  Repeat2,
  RotateCcw,
  School,
  Ship,
  Shield,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Target,
  Trophy,
  UserRound,
  UsersRound,
  Video,
  Zap,
} from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { LineLink } from '../components/LineLink';
import { SectionHeading } from '../components/SectionHeading';
import { aboutStats } from '../data/content';
import {
  batchCourses,
  courseModes,
  entranceExams,
  resultSlots,
  resultsGroupPhoto,
  testimonialSlots,
} from '../data/homeContent';
import { Link } from '../router';
import styles from './HomePage.module.css';

const batchIcons = {
  regular: CalendarRange,
  crash: Zap,
  repeater: Repeat2,
  foundation: Sprout,
} as const;

const examIcons = {
  medical: Stethoscope,
  kerala: Landmark,
  engineering: Calculator,
  defence: Shield,
  university: GraduationCap,
  maritime: Ship,
} as const;

const modeIcons = {
  online: MonitorPlay,
  offline: School,
} as const;

const featureIcons = {
  video: Video,
  exam: FileCheck2,
  doubt: MessageCircleQuestion,
  rewatch: RotateCcw,
  print: BookOpen,
  mentor: Headphones,
  classroom: DraftingCompass,
  'student-id': IdCard,
} as const;

const statIcons = [Target, BookOpen, Compass, MapPin] as const;

const trustFeatures = [
  { label: 'Experienced Faculty', icon: GraduationCap },
  { label: 'Personalized Attention', icon: HeartHandshake },
  { label: 'Student Results', icon: Trophy },
  { label: 'Modern Facilities', icon: Building2 },
  { label: 'Support Beyond Classes', icon: Headphones },
] as const;

export function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <span className={`${styles.heroShape} ${styles.heroRing}`} aria-hidden="true" />
        <span className={`${styles.heroShape} ${styles.heroSlash}`} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.tagline}>
              <span className={styles.taglineLine} aria-hidden="true" />
              Learn
              <span className={styles.taglineDivider} aria-hidden="true">|</span>
              Grow
              <span className={styles.taglineDivider} aria-hidden="true">|</span>
              Achieve
            </p>

            <h1 className={styles.heroTitle} id="hero-heading">
              Your Dream,
              <span className={styles.heroAccent}>Our Commitment</span>
            </h1>

            <p className={styles.heroLead}>
              Edumate Coaching Centre, Neyyattinkara – Your trusted partner in
              academic success. We provide expert coaching and personalized
              guidance to help you achieve your dreams.
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

            <p className={styles.trustLine}>
              <span className={styles.trustIcon} aria-hidden="true">
                <UsersRound size={16} strokeWidth={2} />
              </span>
              Trusted by Students and Parents
            </p>
          </div>

          <div className={styles.heroVisual}>
            <span className={`${styles.visualShape} ${styles.visualDisc}`} aria-hidden="true" />
            <span className={`${styles.visualShape} ${styles.visualArc}`} aria-hidden="true" />
            <span className={`${styles.visualShape} ${styles.visualStripe}`} aria-hidden="true" />

            <figure className={styles.buildingFrame}>
              <img
                src="/images/edumate-building-1500.jpg"
                srcSet="/images/edumate-building-900.jpg 900w, /images/edumate-building-1500.jpg 1500w"
                sizes="(max-width: 760px) 92vw, 48vw"
                width={1500}
                height={844}
                alt="Edumate Coaching Centre building in Neyyattinkara"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <span className={styles.buildingFade} aria-hidden="true" />
            </figure>

            <p className={styles.handNote}>
              <span>More Than Just Coaching</span>
              <svg
                viewBox="0 0 190 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8.4C32 3.2 67 1.7 101 4.1C128 6 158 8.7 188 4.6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </p>

            <figure className={styles.studentFrame}>
              <img
                src="/images/student-library-focus-1200.jpg"
                srcSet="/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w"
                sizes="(max-width: 760px) 48vw, 18vw"
                width={1200}
                height={800}
                alt="A student preparing notes in a library, representative image"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <figcaption>Representative photo</figcaption>
            </figure>
          </div>
        </div>

        <div className={`container ${styles.heroFeatureWrap}`}>
          <ul className={styles.heroFeatureStrip}>
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <li className={styles.heroFeatureItem} key={feature.label}>
                  <span className={styles.heroFeatureIcon} aria-hidden="true">
                    <Icon size={18} strokeWidth={1.9} />
                  </span>
                  <span>{feature.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className={styles.examsSection} aria-labelledby="exams-heading">
        <div className="container">
          <div className={styles.examsTop}>
            <SectionHeading
              eyebrow="Entrance Examinations"
              title={
                <>
                  Your Dream Career
                  <span className={styles.accent}> Starts Here</span>
                </>
              }
              description="Expert preparation for competitive entrance examinations."
              titleId="exams-heading"
              tone="light"
            />
            <div className={styles.examsCount} aria-hidden="true">
              <strong>06</strong>
              <span>Exam pathways</span>
            </div>
          </div>

          <div className={styles.examGrid}>
            {entranceExams.map((exam, index) => {
              const Icon = examIcons[exam.icon];
              return (
                <Link
                  className={styles.examCard}
                  key={exam.id}
                  to={`/contact?course=${encodeURIComponent(exam.enquiryValue)}`}
                  aria-label={`Enquire about ${exam.name} preparation`}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 55}ms` } as CSSProperties}
                >
                  <span className={styles.examIcon} aria-hidden="true">
                    <Icon size={19} strokeWidth={1.9} />
                  </span>
                  <span className={styles.examArrow} aria-hidden="true">
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </span>
                  <span className={styles.examName}>{exam.name}</span>
                  <span className={styles.examCategory}>{exam.category}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.coursesSection}`} id="courses" aria-labelledby="courses-heading">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <SectionHeading
              eyebrow="Our Courses"
              title={
                <>
                  Find the Right Course
                  <span className={styles.accent}> for Your Future</span>
                </>
              }
              description="Choose the learning path that fits your academic stage and preparation goals."
              titleId="courses-heading"
            />
            <LineLink className={styles.headerLink} to="/courses">
              View entrance programmes
            </LineLink>
          </div>

          <div className={styles.batchGrid}>
            {batchCourses.map((course, index) => {
              const Icon = batchIcons[course.icon];
              return (
                <article
                  className={[
                    styles.batchCard,
                    course.featured ? styles.batchFeatured : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  key={course.id}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
                >
                  <span className={styles.batchNumber} aria-hidden="true">
                    {course.number}
                  </span>
                  <div className={styles.batchTop}>
                    <span className={styles.batchIcon} aria-hidden="true">
                      <Icon size={22} strokeWidth={1.9} />
                    </span>
                    <span className={styles.batchEligibility}>{course.eligibility}</span>
                  </div>

                  <div className={styles.batchContent}>
                    <h3 className={styles.batchName}>{course.name}</h3>
                    <p className={styles.batchDescription}>{course.description}</p>
                  </div>

                  <div className={styles.batchFooter}>
                    <Link
                      className={styles.batchCta}
                      to={`/contact?course=${encodeURIComponent(course.enquiryValue)}`}
                    >
                      Enquire Now
                      <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
                    </Link>
                  </div>

                  <Icon
                    className={styles.batchWatermark}
                    size={150}
                    strokeWidth={0.9}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>

          <div className={styles.courseHelpBar} data-reveal>
            <div className={styles.courseHelpCopy}>
              <span className={styles.courseHelpIcon} aria-hidden="true">
                <MessageCircle size={20} strokeWidth={2} />
              </span>
              <p>
                <strong>Not sure which course fits?</strong> Share your academic
                stage and goals with Edumate for guidance on the right batch.
              </p>
            </div>
            <Link className="btn btn--secondary" to="/contact">
              Talk to Edumate
              <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.featuresSection}`} aria-labelledby="features-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Course Features"
            title={
              <>
                Everything You Need
                <span className={styles.accent}> to Succeed</span>
              </>
            }
            description="Comprehensive learning support designed to make your preparation effective and convenient."
            titleId="features-heading"
            align="center"
          />

          <div className={styles.modeGrid}>
            {courseModes.map((mode, index) => {
              const ModeIcon = modeIcons[mode.id];
              return (
                <article
                  className={[
                    styles.modePanel,
                    mode.id === 'online' ? styles.modeOnline : styles.modeOffline,
                  ].join(' ')}
                  key={mode.id}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 100}ms` } as CSSProperties}
                >
                  <div className={styles.modeHeader}>
                    <span className={styles.modeIcon} aria-hidden="true">
                      <ModeIcon size={23} strokeWidth={1.9} />
                    </span>
                    <div>
                      <h3 className={styles.modeTitle}>{mode.name}</h3>
                      <p className={styles.modeDescription}>{mode.description}</p>
                    </div>
                  </div>

                  <div className={styles.modeHighlights}>
                    {mode.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>

                  <ul className={styles.modeFeatures}>
                    {mode.features.map((feature) => {
                      const Icon = featureIcons[feature.icon];
                      return (
                        <li className={styles.modeFeature} key={feature.title}>
                          <span className={styles.modeFeatureIcon} aria-hidden="true">
                            <Icon size={16} strokeWidth={2} />
                          </span>
                          <div>
                            <span className={styles.modeFeatureTitle}>
                              {feature.title}
                            </span>
                            <p className={styles.modeFeatureText}>
                              {feature.description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className={styles.featureNote}>
            <Info size={15} strokeWidth={2} aria-hidden="true" />
            Both formats include daily examinations, doubt clearing, printed
            study materials and mentor support.
          </p>
        </div>
      </section>

      <section className={`section ${styles.resultsSection}`} aria-labelledby="results-heading">
        <div className="container">
          <div className={styles.sectionHeaderRow}>
            <SectionHeading
              eyebrow="Student Results"
              title={
                <>
                  Our Results.
                  <span className={styles.accent}> Their Success.</span>
                </>
              }
              description="Celebrating the hard work, dedication and achievements of Edumate students."
              titleId="results-heading"
            />
            <LineLink className={styles.headerLink} to="/results">
              View All Results
            </LineLink>
          </div>

          <div className={styles.resultsShowcase}>
            <figure className={styles.resultsGroup} data-reveal>
              <img
                src={resultsGroupPhoto.src}
                srcSet={resultsGroupPhoto.srcSet}
                sizes="(max-width: 900px) 92vw, 55vw"
                width={resultsGroupPhoto.width}
                height={resultsGroupPhoto.height}
                alt={resultsGroupPhoto.alt}
                loading="lazy"
                decoding="async"
              />
              <span className={styles.resultsPhotoLabel}>
                <Camera size={14} strokeWidth={2.1} aria-hidden="true" />
                Group photograph placeholder
              </span>
              <figcaption>
                <strong>Group photograph</strong>
                A verified Edumate student group photo will replace this
                representative image.
              </figcaption>
            </figure>

            <aside className={styles.achievementBoard} data-reveal>
              <div className={styles.boardHeader}>
                <span className={styles.boardIcon} aria-hidden="true">
                  <Trophy size={21} strokeWidth={1.9} />
                </span>
                <div>
                  <p className={styles.boardEyebrow}>Top Achievers</p>
                  <h3 className={styles.boardTitle}>Achievement spotlight</h3>
                </div>
                <span className={styles.placeholderBadge}>Placeholder</span>
              </div>

              <ul className={styles.achievementList}>
                {entranceExams.map((exam) => (
                  <li className={styles.achievementRow} key={exam.id}>
                    <span className={styles.achievementExam}>{exam.name}</span>
                    <span className={styles.achievementName}>
                      Top achiever profile
                    </span>
                    <span
                      className={styles.achievementScore}
                      aria-label="Result pending"
                    >
                      —
                    </span>
                  </li>
                ))}
              </ul>

              <p className={styles.boardNote}>
                <Info size={14} strokeWidth={2} aria-hidden="true" />
                Verified student names, ranks and scores will be added after
                publication approval.
              </p>
            </aside>
          </div>

          <div className={styles.resultGrid}>
            {resultSlots.map((slot, index) => (
              <article
                className={styles.resultCard}
                key={slot.id}
                data-reveal
                style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
              >
                <div className={styles.resultPortrait} aria-hidden="true">
                  <span className={styles.resultPhotoIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <UserRound size={54} strokeWidth={1.15} />
                  <span className={styles.resultPhotoCaption}>
                    <Camera size={12} strokeWidth={2} />
                    Student photo
                  </span>
                </div>
                <div className={styles.resultBody}>
                  <span className={styles.resultExam}>{slot.exam}</span>
                  <h3>Student result</h3>
                  <p>
                    Name, rank, score and photograph will be added after
                    verification.
                  </p>
                  <span className={styles.resultStatus}>
                    Awaiting verified details
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.resultsNote}>
            <ShieldCheck size={15} strokeWidth={2} aria-hidden="true" />
            Results, photographs and testimonials are published only after
            verification and with permission. Placeholders will be replaced as
            confirmed information becomes available.
          </p>
        </div>
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
              eyebrow="Why Choose Edumate"
              title={
                <>
                  Why Choose
                  <span className={styles.accent}> Edumate?</span>
                </>
              }
              description="Focused preparation, consistent practice and clear guidance across six entrance pathways."
            />

            <div className={styles.aboutText} data-reveal>
              <p>
                Competitive examinations demand more than memorising information.
                Students need to understand concepts, practise consistently,
                identify gaps, and learn how to approach challenging questions.
              </p>
              <p>
                Edumate prepares students for NEET, KEAM, JEE, NDA, CUET and
                IMUCET from Nilamel–Alummoodu, Neyyattinkara, through regular,
                crash, repeater and foundation courses.
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

      <section
        className={`section ${styles.testimonialsSection}`}
        aria-labelledby="testimonials-heading"
      >
        <div className="container">
          <div className={styles.testimonialsHeader}>
            <SectionHeading
              eyebrow="Testimonials"
              title={
                <>
                  Student
                  <span className={styles.accent}> Testimonials</span>
                </>
              }
              description="Verified student experiences will be published here once the details and permission are confirmed."
              titleId="testimonials-heading"
              tone="light"
            />
            <p className={styles.testimonialsNote}>
              <ShieldCheck size={15} strokeWidth={2} aria-hidden="true" />
              Published only after verification and permission.
            </p>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonialSlots.map((slot, index) => (
              <article
                className={[
                  styles.testimonialCard,
                  index === 0 ? styles.testimonialFeatured : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={slot.id}
                data-reveal
                style={{ '--reveal-delay': `${index * 85}ms` } as CSSProperties}
              >
                <span className={styles.quoteIcon} aria-hidden="true">
                  <Quote size={20} strokeWidth={2} />
                </span>
                <span className={styles.testimonialPlaceholder}>{slot.label}</span>
                <p className={styles.testimonialText}>{slot.message}</p>
                <div className={styles.testimonialFooter}>
                  <span className={styles.testimonialAvatar} aria-hidden="true">
                    <UserRound size={18} strokeWidth={1.8} />
                  </span>
                  <span>
                    <strong>Student name</strong>
                    <small>Course and exam to be added</small>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.testimonialActions}>
            <Link className="btn btn--white" to="/contact">
              Ask about student experiences
              <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Take the Next Step."
        description="Talk to Edumate about the right course, batch format and admission details for NEET, KEAM, JEE, NDA, CUET or IMUCET."
        primaryLabel="Enquire About Admission"
        primaryTo="/contact?course=Not%20sure%20yet"
        secondaryLabel="Explore Courses"
        secondaryTo="/courses"
      />
    </>
  );
}
