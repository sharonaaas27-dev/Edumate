import { useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Course } from '../data/courses';
import { CourseArtwork } from './CourseArtwork';
import styles from './CourseDialog.module.css';

interface CourseDialogProps {
  course: Course | null;
  onClose: () => void;
  onEnquire: (courseName: string) => void;
}

export function CourseDialog({ course, onClose, onEnquire }: CourseDialogProps) {
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

    const enquiryValue = course.enquiryValue;
    dialogRef.current?.close();
    window.setTimeout(() => onEnquire(enquiryValue), 120);
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
        <>
          <div className={styles.artWrap}>
            <CourseArtwork variant={course.id} className={styles.dialogArt} />
            <button
              className={styles.close}
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close course details"
            >
              <X size={19} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.content}>
            <p className="eyebrow eyebrow--plain">{course.category}</p>
            <h2 className={styles.title} id="course-dialog-title">
              {course.name}
            </h2>
            <p className={styles.description} id="course-dialog-description">
              {course.overview}
            </p>

            <div className={styles.focusBlock}>
              <p className={styles.focusLabel}>Illustrative focus areas</p>
              <ul className={styles.focusList}>
                {course.focusAreas.map((area, index) => (
                  <li className={styles.focusItem} key={area}>
                    <span className={styles.focusNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className={styles.note}>
              Course schedules, eligibility, fees and faculty details are
              confirmed directly by Edumate. These focus areas are general
              preparation themes, not a guaranteed curriculum.
            </p>

            <div className={styles.actions}>
              <button
                className="btn btn--primary btn--block"
                type="button"
                onClick={handleEnquire}
              >
                Enquire about {course.shortName}
                <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </dialog>
  );
}
