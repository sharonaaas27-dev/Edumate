import { useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { courses } from '../data/courses';
import type { Course } from '../data/courses';
import { CourseArtwork } from './CourseArtwork';
import { CourseDialog } from './CourseDialog';
import { SectionHeading } from './SectionHeading';
import styles from './CourseSection.module.css';

interface CourseSectionProps {
  onEnquire: (courseName: string) => void;
}

export function CourseSection({ onEnquire }: CourseSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section
      className={`section ${styles.section}`}
      id="courses"
      aria-labelledby="courses-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            eyebrow="Course overview"
            title={
              <>
                Find your path.
                <span className="serif">Prepare with purpose.</span>
              </>
            }
            titleId="courses-heading"
          />

          <div
            className={styles.headerAside}
            data-reveal
            style={{ '--reveal-delay': '100ms' } as CSSProperties}
          >
            <p>
              Explore the entrance examination programmes offered by Edumate.
            </p>
            <span className={styles.count}>Programmes / 02</span>
          </div>
        </div>

        <div className={styles.grid}>
          {courses.map((course, index) => (
            <article
              className={styles.card}
              key={course.id}
              data-reveal
              style={{ '--reveal-delay': `${index * 110}ms` } as CSSProperties}
            >
              <div className={styles.artWrap}>
                <CourseArtwork variant={course.id} className={styles.cardArt} />
                <div className={styles.artLabels}>
                  <span className={styles.category}>{course.category}</span>
                  <span className={styles.index}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <h3 className={styles.cardTitle}>{course.name}</h3>
                  <span className={styles.arrow} aria-hidden="true">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </span>
                </div>

                <p className={styles.description}>{course.description}</p>

                <div className={styles.metaRow}>
                  <span>Entrance exam preparation</span>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span>Details on enquiry</span>
                </div>

                <button
                  className={styles.learnMore}
                  type="button"
                  onClick={() => setSelectedCourse(course)}
                  aria-label={`Learn more about ${course.name}`}
                >
                  Learn More
                  <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div
          className={styles.note}
          data-reveal
          style={{ '--reveal-delay': '160ms' } as CSSProperties}
        >
          <Info size={16} strokeWidth={1.8} aria-hidden="true" />
          <p>
            Course schedules, eligibility, fees and batch details are confirmed
            directly by Edumate. Additional programmes will be published once
            verified.
          </p>
        </div>
      </div>

      <CourseDialog
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnquire={onEnquire}
      />
    </section>
  );
}
