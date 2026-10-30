import type { CSSProperties } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Info,
  Library,
  School,
  Sun,
  Users,
} from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { LineLink } from '../components/LineLink';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Link } from '../router';
import styles from './FacilitiesPage.module.css';

const facilityRows = [
  {
    label: 'Classroom Learning',
    title: 'A focused space for concepts and discussion.',
    description:
      'Classroom learning is presented as a space for listening, taking notes and working through concepts with clarity. Sessions are supported by question practice and review.',
    bullets: [
      'Structured concept sessions',
      'Note-taking and explanation',
      'Questions and discussion',
    ],
    image: {
      src: '/images/classroom-learning-900.jpg',
      srcSet:
        '/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w',
      alt: 'Students listening and taking notes in a classroom',
      width: 900,
      height: 600,
    },
  },
  {
    label: 'Library & Discussion',
    title: 'Read, discuss and work through questions.',
    description:
      'A library setting supports reading, reference and discussion. Students can use quiet study time and conversation to strengthen understanding.',
    bullets: [
      'Reading and reference',
      'Group discussion',
      'Concept clarification',
    ],
    image: {
      src: '/images/library-discussion-900.jpg',
      srcSet:
        '/images/library-discussion-600.jpg 600w, /images/library-discussion-900.jpg 900w',
      alt: 'Students discussing their work in a library',
      width: 900,
      height: 600,
    },
  },
  {
    label: 'Collaborative Study',
    title: 'Learning reinforced through shared practice.',
    description:
      'Collaborative study gives students the opportunity to work through problems together, explain ideas and learn from different approaches.',
    bullets: [
      'Peer discussion',
      'Shared problem-solving',
      'Learning from different approaches',
    ],
    image: {
      src: '/images/students-collaborating-1400.jpg',
      srcSet:
        '/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w',
      alt: 'Students working together around a table',
      width: 1400,
      height: 933,
    },
  },
  {
    label: 'Focused Study',
    title: 'Quiet time to read, revise and improve.',
    description:
      'Focused study is an important part of preparation. Independent reading and revision help students consolidate what they have learned.',
    bullets: [
      'Independent reading',
      'Revision and review',
      'Preparation at your own pace',
    ],
    image: {
      src: '/images/student-library-focus-1200.jpg',
      srcSet:
        '/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w',
      alt: 'A student focused on reading in a library',
      width: 1200,
      height: 800,
    },
  },
];

const facilityCards = [
  {
    icon: School,
    title: 'Modern classrooms',
    description: 'Learning environments designed for focused sessions and discussion.',
  },
  {
    icon: Library,
    title: 'Library',
    description: 'A space associated with reading, reference and quiet study.',
  },
  {
    icon: BookOpen,
    title: 'Learning resources',
    description: 'Support for concept learning, question practice and revision.',
  },
  {
    icon: Sun,
    title: 'Study environment',
    description: 'Settings that encourage focus, consistency and independent work.',
  },
  {
    icon: Users,
    title: 'Faculty support',
    description: 'Guidance for students and parents, with details confirmed on enquiry.',
  },
];

export function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus & Learning"
        crumb="Facilities"
        title={
          <>
            Facilities &amp;
            <span className={styles.accent}> learning spaces.</span>
          </>
        }
        description="A glimpse of the learning environments that support focus, discussion and preparation at Edumate. Images are representative; facility details are confirmed directly by the centre."
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
            <LineLink to="/contact">Enquire about the centre</LineLink>
            <LineLink to="/gallery">View the gallery</LineLink>
          </>
        }
      />

      <section className={`section ${styles.introSection}`}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <SectionHeading
              eyebrow="An Environment for Focus"
              title={
                <>
                  Spaces that support
                  <span className={styles.accent}> the work of learning.</span>
                </>
              }
            />
          </div>
          <div className={styles.introCopy} data-reveal>
            <p>
              Good preparation needs more than content. It needs an environment
              where students can listen, ask questions, read, discuss and revise.
              Edumate's approach connects classroom learning with independent study
              and consistent practice.
            </p>
            <p className={styles.disclaimer}>
              <Info size={15} strokeWidth={2} aria-hidden="true" />
              Images are representative and do not depict the Edumate campus.
              Facility details and availability are confirmed directly by Edumate.
            </p>
          </div>
        </div>
      </section>

      <section className={`section section--soft ${styles.rowsSection}`}>
        <div className="container">
          <div className={styles.rows}>
            {facilityRows.map((row, index) => (
              <article
                className={[
                  styles.row,
                  index % 2 === 1 ? styles.rowReverse : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={row.label}
              >
                <div className={styles.rowMedia} data-reveal>
                  <img
                    src={row.image.src}
                    srcSet={row.image.srcSet}
                    sizes="(max-width: 900px) 92vw, 46vw"
                    width={row.image.width}
                    height={row.image.height}
                    alt={row.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.rowIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.rowAccent} aria-hidden="true" />
                </div>

                <div className={styles.rowCopy} data-reveal>
                  <p className={styles.rowLabel}>{row.label}</p>
                  <h2>{row.title}</h2>
                  <p className={styles.rowText}>{row.description}</p>
                  <ul className={styles.rowBullets}>
                    {row.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span className={styles.bulletIcon} aria-hidden="true">
                          <Check size={12} strokeWidth={2.6} />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.cardsSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="At a Glance"
            title={
              <>
                Learning facilities
                <span className={styles.accent}> at Edumate.</span>
              </>
            }
            description="Facility availability and campus arrangements are confirmed directly by the centre."
            align="center"
          />

          <div className={styles.facilityGrid}>
            {facilityCards.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <article
                  className={styles.facilityCard}
                  key={facility.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
                >
                  <span className={styles.facilityIcon} aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section section--soft ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <SectionHeading
              eyebrow="A Visual Glimpse"
              title={
                <>
                  Learning, discussion
                  <span className={styles.accent}> and focus.</span>
                </>
              }
            />
            <Link className="text-link text-link--red" to="/gallery">
              Open full gallery
              <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.galleryStrip}>
            <Link className={styles.galleryItem} to="/gallery">
              <img
                src="/images/library-discussion-900.jpg"
                srcSet="/images/library-discussion-600.jpg 600w, /images/library-discussion-900.jpg 900w"
                sizes="(max-width: 760px) 92vw, 30vw"
                width={900}
                height={600}
                alt="Students discussing their work in a library"
                loading="lazy"
                decoding="async"
              />
              <span>Library discussion</span>
            </Link>
            <Link className={styles.galleryItem} to="/gallery">
              <img
                src="/images/students-collaborating-1400.jpg"
                srcSet="/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w"
                sizes="(max-width: 760px) 92vw, 30vw"
                width={1400}
                height={933}
                alt="Students working together around a table"
                loading="lazy"
                decoding="async"
              />
              <span>Collaborative study</span>
            </Link>
            <Link className={styles.galleryItem} to="/gallery">
              <img
                src="/images/student-library-focus-1200.jpg"
                srcSet="/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w"
                sizes="(max-width: 760px) 92vw, 30vw"
                width={1200}
                height={800}
                alt="A student focused on reading in a library"
                loading="lazy"
                decoding="async"
              />
              <span>Focused study</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Visit Edumate"
        description="Talk to the centre about courses, the learning environment and admission information. Directions are available through the map search."
        primaryLabel="Plan a Visit"
        secondaryLabel="View Gallery"
        secondaryTo="/gallery"
      />
    </>
  );
}
