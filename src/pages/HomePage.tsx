import { useRef } from 'react';
import type { CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Calculator,
  CalendarRange,
  Camera,
  ChartNoAxesColumnIncreasing,
  Check,
  ClipboardList,
  Compass,
  GraduationCap,
  Headphones,
  HeartHandshake,
  IdCard,
  Info,
  Landmark,
  Laptop,
  MapPin,
  MessageCircleQuestion,
  Monitor,
  MonitorPlay,
  PhoneCall,
  PlayCircle,
  Presentation,
  Quote,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  School,
  ShieldCheck as ShieldOutline,
  Ship,
  Shield,
  ShieldCheck,
  Sprout,
  Star,
  Stethoscope,
  Target,
  Trophy,
  UserRound,
  UsersRound,
  Zap,
  FlaskConical,
  LibraryBig,
} from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { SectionHeading } from '../components/SectionHeading';
import { aboutStats } from '../data/content';
import {
  batchCourses,
  courseModes,
  entranceExams,
  facilities,
  resultSlots,
  testimonialSlots,
} from '../data/homeContent';
import { Link } from '../router';
import styles from './HomePage.module.css';

const batchIcons = {
  regular: CalendarRange,
  crash: Zap,
  repeater: RotateCcw,
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
  online: Laptop,
  offline: School,
} as const;

const featureIcons = {
  video: MonitorPlay,
  exam: ClipboardList,
  doubt: MessageCircleQuestion,
  rewatch: PlayCircle,
  print: BookOpen,
  mentor: PhoneCall,
  classroom: School,
  'student-id': IdCard,
} as const;

const facilityIcons = {
  classroom: Presentation,
  materials: BookOpen,
  digital: Monitor,
  library: LibraryBig,
  practice: FlaskConical,
  safe: ShieldOutline,
} as const;

const statIcons = [Target, BookOpen, Compass, MapPin] as const;

const achievementHighlights = [
  { title: 'Top Ranks', description: 'Across Entrance Examinations.', icon: GraduationCap },
  { title: 'Higher Education', description: 'In Leading Institutions.', icon: UsersRound },
  { title: 'Consistent Growth', description: 'Year After Year.', icon: ChartNoAxesColumnIncreasing },
  { title: 'Trusted By', description: 'Students & Parents.', icon: Star },
] as const;

const trustFeatures = [
  { label: 'Experienced Faculty', icon: GraduationCap },
  { label: 'Personalized Attention', icon: HeartHandshake },
  { label: 'Student Results', icon: Trophy },
  { label: 'Modern Facilities', icon: Building2 },
  { label: 'Support Beyond Classes', icon: Headphones },
] as const;

export function HomePage() {
  const resultCarouselRef = useRef<HTMLDivElement>(null);

  const scrollResults = (direction: 'previous' | 'next') => {
    const carousel = resultCarouselRef.current;
    if (!carousel) {
      return;
    }

    const card = carousel.querySelector<HTMLElement>('[data-result-card]');
    const distance = card ? card.offsetWidth + 16 : carousel.clientWidth;
    carousel.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  };

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

      <section className={`section ${styles.coursesSection}`} id="courses" aria-labelledby="courses-heading">
        <span className={styles.coursesShape} aria-hidden="true" />
        <div className={`container ${styles.coursesContainer}`}>
          <SectionHeading
            eyebrow="Our Courses"
            title={
              <>
                Find the Right Course for
                <span className={styles.accent}> Your Future</span>
              </>
            }
            description="Choose the right learning path and prepare confidently for your dream entrance examination."
            titleId="courses-heading"
            className={styles.coursesHeading}
          />

          <div className={styles.batchGrid}>
            {batchCourses.map((course, index) => {
              const Icon = batchIcons[course.icon];
              return (
                <article
                  className={styles.batchCard}
                  key={course.id}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
                >
                  <div className={styles.batchMedia}>
                    <img
                      src={course.image.src}
                      srcSet={course.image.srcSet}
                      sizes="(max-width: 640px) 92vw, (max-width: 1000px) 44vw, 22vw"
                      width={course.image.width}
                      height={course.image.height}
                      alt={course.image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className={styles.batchIcon} aria-hidden="true">
                      <Icon size={20} strokeWidth={2} />
                    </span>
                  </div>

                  <div className={styles.batchContent}>
                    <h3 className={styles.batchName}>{course.title}</h3>
                    <span className={styles.batchEligibility}>{course.eligibility}</span>
                    <p className={styles.batchDescription}>{course.description}</p>

                    <ul className={styles.batchFeatures}>
                      {course.features.map((feature) => (
                        <li key={feature}>
                          <span className={styles.batchCheck} aria-hidden="true">
                            <Check size={12} strokeWidth={2.8} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      className={styles.batchCta}
                      to={`/contact?course=${encodeURIComponent(course.enquiryValue)}`}
                    >
                      Explore Course
                      <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.featuresSection}`} aria-labelledby="features-heading">
        <div className="container">
          <div className={styles.featuresTop}>
            <SectionHeading
              eyebrow="Our Course Features"
              title={
                <>
                  Everything You Need to
                  <span className={styles.accent}> Succeed</span>
                </>
              }
              description="Comprehensive learning support designed to make your preparation effective and convenient."
              titleId="features-heading"
            />
            <p className={styles.featureMotto}>
              Better Learning, Brighter Future
              <span aria-hidden="true" />
            </p>
          </div>

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
                  <header className={styles.modeHeader}>
                    <div className={styles.modeTitleBlock}>
                      <div className={styles.modeBadgeRow}>
                        <h3 className={styles.modeBadge}>
                          <ModeIcon size={17} strokeWidth={2} aria-hidden="true" />
                          {mode.name}
                        </h3>
                        <span className={styles.modeEligibility}>{mode.eligibility}</span>
                      </div>
                      <p className={styles.modeDescription}>{mode.description}</p>
                    </div>
                  </header>

                  <div className={styles.modeContent}>
                    <ul className={styles.modeFeatures}>
                      {mode.features.map((feature) => {
                        const Icon = featureIcons[feature.icon];
                        return (
                          <li className={styles.modeFeature} key={feature.title}>
                            <span className={styles.modeFeatureIcon} aria-hidden="true">
                              <Icon size={17} strokeWidth={1.8} />
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

                    <figure className={styles.modeMedia}>
                      <img
                        src={mode.image.src}
                        srcSet={mode.image.srcSet}
                        sizes="(max-width: 760px) 90vw, (max-width: 1100px) 40vw, 22vw"
                        width={mode.image.width}
                        height={mode.image.height}
                        alt={mode.image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      {mode.imagePhrase ? (
                        <figcaption className={styles.modeImagePhrase}>
                          {mode.imagePhrase}
                          <span aria-hidden="true" />
                        </figcaption>
                      ) : null}
                      <span className={styles.modeImageAccent} aria-hidden="true" />
                    </figure>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      <section className={styles.examsSection} aria-labelledby="exams-heading">
        <div className={`container ${styles.examsLayout}`}>
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
          />

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
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <span className={styles.examName}>{exam.name}</span>
                  <span className={styles.examCategory}>{exam.category}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.resultsSection}`} aria-labelledby="results-heading">
        <span className={styles.resultsShape} aria-hidden="true" />
        <div className="container">
          <div className={styles.resultsHeader}>
            <SectionHeading
              eyebrow="Our Results"
              title={
                <>
                  Our Results.
                  <span className={styles.accent}> Their Success.</span>
                </>
              }
              description="Celebrating the hard work, dedication and achievements of Edumate students."
              titleId="results-heading"
            />
            <p className={styles.resultsMotto}>
              Real Students. Real Dreams. Real Results.
              <span aria-hidden="true" />
            </p>
          </div>

          <div className={styles.resultsShowcase}>
            <div className={styles.resultCarouselGroup} data-reveal>
              <div className={styles.resultCarouselHeader}>
                <p>Student achievement profiles</p>
                <div className={styles.resultCarouselControls}>
                  <button
                    className={styles.resultCarouselButton}
                    type="button"
                    aria-label="Show previous student achievements"
                    onClick={() => scrollResults('previous')}
                  >
                    <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
                  </button>
                  <button
                    className={styles.resultCarouselButton}
                    type="button"
                    aria-label="Show next student achievements"
                    onClick={() => scrollResults('next')}
                  >
                    <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div
                className={styles.resultGrid}
                ref={resultCarouselRef}
                role="region"
                aria-label="Student achievement placeholders by entrance examination"
                tabIndex={0}
              >
                {resultSlots.map((slot, index) => (
                  <article
                    className={styles.resultCard}
                    key={slot.id}
                    data-result-card
                    data-reveal
                    style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
                  >
                    <figure className={styles.resultPortrait}>
                      <img
                        src={slot.image.src}
                        srcSet={slot.image.srcSet}
                        sizes="(max-width: 640px) 80vw, (max-width: 1000px) 42vw, 15vw"
                        width={slot.image.width}
                        height={slot.image.height}
                        alt={slot.image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className={styles.resultExam}>{slot.exam}</span>
                      <figcaption className={styles.resultPhotoCaption}>
                        <Camera size={12} strokeWidth={2} aria-hidden="true" />
                        Photo placeholder
                      </figcaption>
                    </figure>
                    <div className={styles.resultBody}>
                      <h3>Student Name</h3>
                      <span className={styles.resultNameUnderline} aria-hidden="true" />
                      <p className={styles.resultExamName}>{slot.exam} Entrance Examination</p>
                      <div className={styles.resultDetails}>
                        <span>Rank / Score</span>
                        <span>Year</span>
                      </div>
                      <span className={styles.resultStatus}>Achievement Details</span>
                    </div>
                  </article>
                ))}
              </div>

              <p className={styles.resultsNote}>
                <ShieldCheck size={14} strokeWidth={2} aria-hidden="true" />
                Student details and photographs are placeholders until verified
                information is approved for publication.
              </p>
            </div>

            <aside className={styles.achievementBoard} data-reveal>
              <span className={styles.boardShape} aria-hidden="true" />
              <div className={styles.boardIllustration} aria-hidden="true">
                <span><Trophy size={38} strokeWidth={1.45} /></span>
                <GraduationCap size={46} strokeWidth={1.35} />
                <BookOpen size={36} strokeWidth={1.35} />
              </div>
              <p className={styles.boardEyebrow}>Top Achievers</p>
              <h3 className={styles.boardTitle}>Excellence in Every Exam</h3>
              <p className={styles.boardDescription}>
                Our students continue to achieve top ranks and make us proud
                across various entrance examinations.
              </p>
              <p className={styles.boardNote}>
                Verified student names, ranks and scores will be added after
                publication approval.
              </p>
              <Link className="btn btn--primary" to="/results">
                View All Results
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </aside>
          </div>

          <div className={styles.achievementStrip} data-reveal>
            <div className={styles.achievementIntro}>
              <p className={styles.achievementEyebrow}>Our Achievements</p>
              <h3>Building Brighter Futures</h3>
              <p>
                From classroom learning to top ranks, we take pride in every
                student's success story.
              </p>
            </div>
            <div className={styles.achievementHighlights}>
              {achievementHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    className={styles.achievementHighlight}
                    key={item.title}
                    data-reveal
                    style={{ '--reveal-delay': `${index * 65}ms` } as CSSProperties}
                  >
                    <span className={styles.achievementHighlightIcon} aria-hidden="true">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`section ${styles.facilitiesSection}`}
        aria-labelledby="facilities-heading"
      >
        <span className={styles.facilitiesShape} aria-hidden="true" />
        <div className="container">
          <div className={styles.facilitiesHeader}>
            <SectionHeading
              eyebrow="Our Facilities"
              title={
                <>
                  Learn Better.
                  <span className={styles.accent}> Grow Faster.</span>
                </>
              }
              description="State-of-the-art facilities and a supportive learning environment to help you achieve your goals."
              titleId="facilities-heading"
            />
            <p className={styles.facilitiesMotto}>
              Better Facilities, Brighter Future
              <span aria-hidden="true" />
            </p>
          </div>

          <div className={styles.facilitiesShowcase}>
            <div className={styles.facilityGrid}>
              {facilities.map((facility, index) => {
                const Icon = facilityIcons[facility.icon];
                return (
                  <article
                    className={styles.facilityCard}
                    key={facility.title}
                    data-reveal
                    style={{ '--reveal-delay': `${index * 65}ms` } as CSSProperties}
                  >
                    <span className={styles.facilityIcon} aria-hidden="true">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                  </article>
                );
              })}
            </div>

            <figure className={styles.facilityPhoto} data-reveal>
              <img
                src="/images/student-library-focus-1200.jpg"
                srcSet="/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w"
                sizes="(max-width: 760px) 92vw, (max-width: 1000px) 70vw, 30vw"
                width={1200}
                height={800}
                alt="Representative photograph of a student writing in a notebook; not a verified Edumate campus photo"
                loading="lazy"
                decoding="async"
              />
              <p className={styles.facilityPhotoMotto}>
                Your Goals, Our Priority
                <span aria-hidden="true" />
              </p>
              <figcaption>
                Representative classroom image. Edumate facility photography can
                replace this image when available.
              </figcaption>
              <span className={styles.facilityPhotoAccent} aria-hidden="true" />
            </figure>
          </div>

          <div className={styles.facilityCta} data-reveal>
            <span className={styles.facilityCtaIcon} aria-hidden="true">
              <Target size={31} strokeWidth={1.7} />
            </span>
            <span className={styles.facilityCtaDivider} aria-hidden="true" />
            <div className={styles.facilityCtaCopy}>
              <p>Achieve Your Goals</p>
              <h3>
                Join Edumate <span>Today.</span>
              </h3>
              <span>
                Get expert guidance, quality education and the right support to
                build your successful future.
              </span>
            </div>
            <Link className={styles.facilityCtaButton} to="/courses">
              Explore Our Courses
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
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
