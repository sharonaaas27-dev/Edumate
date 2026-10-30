import { useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './GalleryLightbox.module.css';

export interface GalleryImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  category: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (activeIndex !== null) {
      if (!dialog.open) {
        dialog.showModal();
      }
      document.body.classList.add('is-locked');
    } else if (dialog.open) {
      dialog.close();
      document.body.classList.remove('is-locked');
    }
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('is-locked');
    };
  }, []);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close();
    }
  };

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const goToPrevious = () => {
    if (activeIndex === null) {
      return;
    }
    onChange((activeIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (activeIndex === null) {
      return;
    }
    onChange((activeIndex + 1) % images.length);
  };

  return (
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          goToPrevious();
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          goToNext();
        }
      }}
      aria-label="Image viewer"
    >
      {activeImage && activeIndex !== null ? (
        <div className={styles.viewer}>
          <div className={styles.topBar}>
            <p className={styles.caption}>
              <span className={styles.label}>{activeImage.label}</span>
              <span className={styles.count}>
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(images.length).padStart(2, '0')}
              </span>
            </p>
            <button
              className={styles.close}
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close image viewer"
            >
              <X size={20} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          <div className={styles.stage}>
            <button
              className={styles.navButton}
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} strokeWidth={2.2} aria-hidden="true" />
            </button>

            <img
              className={styles.image}
              src={activeImage.src}
              srcSet={activeImage.srcSet}
              sizes="92vw"
              width={activeImage.width}
              height={activeImage.height}
              alt={activeImage.alt}
            />

            <button
              className={styles.navButton}
              type="button"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight size={22} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
