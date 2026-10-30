import { ArrowUpRight, BookOpen } from 'lucide-react';
import type { Course } from '../data/courses';
import styles from './CourseCard.module.css';

interface CourseCardProps {
  course: Course;
  index: number;
  onLearnMore: (course: Course) => void;
}

export function CourseCard({ course, index, onLearnMore }: CourseCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          src={course.image.src}
          srcSet={course.image.srcSet}
          sizes={course.image.sizes}
          width={course.image.width}
          height={course.image.height}
          alt={course.image.alt}
          loading="lazy"
          decoding="async"
        />
        <span className={styles.category}>{course.category}</span>
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.icon} aria-hidden="true">
            <BookOpen size={16} strokeWidth={2} />
          </span>
          <h3 className={styles.title}>{course.name}</h3>
        </div>

        <p className={styles.description}>{course.description}</p>

        <ul className={styles.tags} aria-label={`${course.shortName} subjects`}>
          {course.subjects.map((subject) => (
            <li className="tag" key={subject}>
              {subject}
            </li>
          ))}
        </ul>

        <button
          className={styles.learnMore}
          type="button"
          onClick={() => onLearnMore(course)}
        >
          Learn More
          <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
