import { useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import type { Course } from '../data/courses';
import { navigate } from '../router';
import styles from './CourseDialog.module.css';

interface CourseDialogProps {
  course: Course | null;
  onClose: () => void;
}

export function CourseDialog({ course, onClose }: CourseDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (course) {
      if (!dialog.open) {
        dialog.showModal();
      }
      document.body.classList.add('is-locked');
    } else if (dialog.open) {
      dialog.close();
    }

    return () => {
      if (dialog.open) {
        dialog.close();
      }
      document.body.classList.remove('is-locked');
    };
  }, [course]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close();
    }
  };

  const handleEnquire = () => {
    if (!course) {
      return;
    }

    const target = `/contact?course=${encodeURIComponent(course.enquiryValue)}`;
    dialogRef.current?.close();
    window.setTimeout(() => navigate(target), 120);
  };

  return (
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby={course ? 'course-dialog-title' : undefined}
      aria-describedby={course ? 'course-dialog-description' : undefined}
    >
      {course ? (
        <div className={styles.layout}>
          <div className={styles.media}>
            <img
              src={course.image.src}
              srcSet={course.image.srcSet}
              sizes="(max-width: 760px) 92vw, 44vw"
              width={course.image.width}
              height={course.image.height}
              alt={course.image.alt}
            />
            <span className={styles.mediaLabel}>{course.category}</span>
          </div>

          <div className={styles.content}>
            <button
              className={styles.close}
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close course details"
            >
              <X size={19} strokeWidth={2} aria-hidden="true" />
            </button>

            <p className={styles.eyebrow}>{course.shortName} Programme</p>
            <h2 className={styles.title} id="course-dialog-title">
              {course.name}
            </h2>
            <p className={styles.description} id="course-dialog-description">
              {course.overview}
            </p>

            <div className={styles.subjects}>
              <span className={styles.subjectsLabel}>Subjects covered</span>
              <ul className={styles.subjectList}>
                {course.subjects.map((subject) => (
                  <li className="tag" key={subject}>
                    {subject}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.focusBlock}>
              <p className={styles.focusLabel}>Preparation focus</p>
              <ul className={styles.focusList}>
                {course.focusAreas.map((area) => (
                  <li className={styles.focusItem} key={area}>
                    <span className={styles.focusIcon} aria-hidden="true">
                      <Check size={12} strokeWidth={2.6} />
                    </span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className={styles.note}>
              Course schedules, eligibility, fees and faculty details are confirmed
              directly by Edumate. These focus areas are general preparation themes,
              not a guaranteed curriculum.
            </p>

            <div className={styles.actions}>
              <button
                className="btn btn--primary btn--block"
                type="button"
                onClick={handleEnquire}
              >
                Enquire about {course.shortName}
                <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
