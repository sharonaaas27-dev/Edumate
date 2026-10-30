import { useState } from 'react';
import type { CSSProperties } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ClipboardList,
  Info,
  PenLine,
  SearchCheck,
} from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { CtaSection } from '../components/CtaSection';
import { LineLink } from '../components/LineLink';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { courses } from '../data/courses';
import type { Course, CourseArt } from '../data/courses';
import { Link } from '../router';
import styles from './CoursesPage.module.css';

type Filter = 'all' | CourseArt;

const filters: { value: Filter; label: string; count: number }[] = [
  { value: 'all', label: 'All Programmes', count: courses.length },
  {
    value: 'neet',
    label: 'Medical Entrance',
    count: courses.filter((course) => course.id === 'neet').length,
  },
  {
    value: 'nda',
    label: 'Defence Entrance',
    count: courses.filter((course) => course.id === 'nda').length,
  },
];

const includedItems = [
  {
    icon: BookOpen,
    title: 'Concept foundations',
    description:
      'Understand the core ideas before moving on to more difficult questions.',
  },
  {
    icon: PenLine,
    title: 'Question practice',
    description:
      'Apply what you learn through questions that reinforce understanding.',
  },
  {
    icon: SearchCheck,
    title: 'Review & revision',
    description:
      'Identify weak areas, revisit topics and strengthen preparation.',
  },
];

export function CoursesPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const visibleCourses = courses.filter(
    (course) => filter === 'all' || course.id === filter,
  );

  const handleLearnMore = (course: Course) => {
    setFilter(course.id);
    window.setTimeout(() => {
      document
        .getElementById(`programme-${course.id}`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <>
      <PageHero
        eyebrow="Courses"
        crumb="Courses"
        title={
          <>
            Explore Our
            <span className={styles.accent}> Courses.</span>
          </>
        }
        description="Choose the entrance examination pathway that matches your goals. Explore NEET and NDA preparation themes, subjects and the next step for your enquiry."
        image={{
          src: '/images/students-collaborating-1400.jpg',
          srcSet:
            '/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w',
          sizes: '(max-width: 900px) 92vw, 42vw',
          alt: 'Students working together around a table',
          width: 1400,
          height: 933,
        }}
        actions={
          <>
            <LineLink to="/contact">Enquire about admission</LineLink>
            <LineLink to="/facilities">See the learning environment</LineLink>
          </>
        }
      />

      <section className={`section ${styles.cardsSection}`}>
        <div className="container">
          <div className={styles.filterRow}>
            <div className={styles.filterTabs} role="group" aria-label="Filter courses">
              {filters.map((item) => (
                <button
                  className={[
                    styles.filterTab,
                    filter === item.value ? styles.filterActive : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  aria-pressed={filter === item.value}
                >
                  {item.label}
                  <span className={styles.filterCount}>
                    {String(item.count).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
            <p className={styles.filterNote}>
              <Info size={14} strokeWidth={2} aria-hidden="true" />
              Course details are confirmed directly by Edumate.
            </p>
          </div>

          <div className={styles.courseGrid}>
            {visibleCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
                onLearnMore={handleLearnMore}
              />
            ))}

            <aside className={styles.helpCard}>
              <span className={styles.helpIcon} aria-hidden="true">
                <ClipboardList size={22} strokeWidth={2} />
              </span>
              <h2>Need help choosing?</h2>
              <p>
                Share your academic goals and questions. Edumate can guide you on
                the programme and next step.
              </p>
              <Link className="btn btn--primary" to="/contact">
                Talk to Edumate
                <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className={`section section--soft ${styles.detailsSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Course Details"
            title={
              <>
                A closer look at each
                <span className={styles.accent}> preparation pathway.</span>
              </>
            }
            description="Each programme is built around core preparation themes. Schedules, eligibility, fees and batch timings are shared directly by Edumate."
          />

          <div className={styles.details}>
            {visibleCourses.map((course, index) => (
              <article
                className={[
                  styles.detail,
                  index % 2 === 1 ? styles.detailReverse : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                id={`programme-${course.id}`}
                key={course.id}
              >
                <div className={styles.detailMedia}>
                  <img
                    src={course.image.src}
                    srcSet={course.image.srcSet}
                    sizes="(max-width: 900px) 92vw, 44vw"
                    width={course.image.width}
                    height={course.image.height}
                    alt={course.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.detailBadge}>{course.category}</span>
                  <span className={styles.detailAccent} aria-hidden="true" />
                </div>

                <div className={styles.detailContent}>
                  <p className={styles.detailEyebrow}>
                    Programme {String(index + 1).padStart(2, '0')} · {course.shortName}
                  </p>
                  <h3 className={styles.detailTitle}>{course.name}</h3>
                  <p className={styles.detailOverview}>{course.overview}</p>

                  <div className={styles.detailBlock}>
                    <span className={styles.detailLabel}>Subjects</span>
                    <ul className={styles.subjectList}>
                      {course.subjects.map((subject) => (
                        <li className="tag" key={subject}>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailBlock}>
                    <span className={styles.detailLabel}>Preparation focus</span>
                    <ul className={styles.focusList}>
                      {course.focusAreas.map((area) => (
                        <li className={styles.focusItem} key={area}>
                          <span className={styles.focusIcon} aria-hidden="true">
                            <Check size={12} strokeWidth={2.6} />
                          </span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailMeta}>
                    <span>
                      <strong>Format</strong>
                      Entrance exam preparation
                    </span>
                    <span>
                      <strong>Details</strong>
                      Shared on enquiry
                    </span>
                  </div>

                  <div className={styles.detailActions}>
                    <Link
                      className="btn btn--primary"
                      to={`/contact?course=${encodeURIComponent(course.enquiryValue)}`}
                    >
                      Enquire about {course.shortName}
                      <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
                    </Link>
                    <LineLink to="/results">See achievements</LineLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.note}>
            <Info size={15} strokeWidth={2} aria-hidden="true" />
            Course schedules, eligibility, fees and batch details are confirmed
            directly by Edumate. Additional programmes will be published once
            verified.
          </p>
        </div>
      </section>

      <section className={`section ${styles.includedSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="What Every Programme Includes"
            title={
              <>
                The habits that make
                <span className={styles.accent}> preparation count.</span>
              </>
            }
            description="Across both programmes, the focus remains on understanding, practice and review."
            align="center"
          />

          <div className={styles.includedGrid}>
            {includedItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  className={styles.includedCard}
                  key={item.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
                >
                  <span className={styles.includedIcon} aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        title="Find Your Starting Point"
        description="Talk to Edumate about the NEET or NDA programme, schedules and admission information."
        primaryLabel="Enquire About a Course"
      />
    </>
  );
}
