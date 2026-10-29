import type { CSSProperties } from 'react';
import { SectionHeading } from './SectionHeading';
import styles from './CampusGallery.module.css';

const galleryImages = [
  {
    src: '/images/classroom-learning-900.jpg',
    srcSet:
      '/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w',
    sizes: '(max-width: 900px) 92vw, 38vw',
    width: 900,
    height: 600,
    alt: 'Students listening and taking notes in a classroom',
    label: 'Classroom learning',
    number: '01',
    tall: true,
  },
  {
    src: '/images/students-collaborating-1400.jpg',
    srcSet:
      '/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w',
    sizes: '(max-width: 900px) 92vw, 52vw',
    width: 1400,
    height: 933,
    alt: 'Students working together around a table',
    label: 'Collaborative study',
    number: '02',
    tall: false,
  },
  {
    src: '/images/library-discussion-900.jpg',
    srcSet:
      '/images/library-discussion-600.jpg 600w, /images/library-discussion-900.jpg 900w',
    sizes: '(max-width: 900px) 92vw, 52vw',
    width: 900,
    height: 600,
    alt: 'Students discussing their work in a library',
    label: 'Library discussion',
    number: '03',
    tall: false,
  },
];

export function CampusGallery() {
  return (
    <section
      className={`section ${styles.section}`}
      id="campus"
      aria-labelledby="campus-heading"
    >
      <div className="container">
        <div className={styles.header}>
          <SectionHeading
            eyebrow="Campus & learning"
            title={
              <>
                A place to
                <span className="serif">learn and grow.</span>
              </>
            }
            titleId="campus-heading"
          />

          <div
            className={styles.headerAside}
            data-reveal
            style={{ '--reveal-delay': '100ms' } as CSSProperties}
          >
            <p>
              An illustrative glimpse of learning environments that support
              focused study, discussion and preparation.
            </p>
            <span className={styles.count}>Representative imagery</span>
          </div>
        </div>

        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <figure
              className={`${styles.figure} ${image.tall ? styles.figureTall : ''}`}
              key={image.src}
              data-reveal
              style={{ '--reveal-delay': `${index * 100}ms` } as CSSProperties}
            >
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className={styles.caption}>
                <span className={styles.number}>{image.number}</span>
                <span className={styles.label}>{image.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p
          className={styles.disclaimer}
          data-reveal
          style={{ '--reveal-delay': '160ms' } as CSSProperties}
        >
          Images are representative and do not depict the Edumate campus.
          Facility details are confirmed directly by Edumate.
        </p>
      </div>
    </section>
  );
}
