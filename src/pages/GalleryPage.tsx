import { useEffect, useState } from 'react';
import { Expand, Info } from 'lucide-react';
import { CtaSection } from '../components/CtaSection';
import { GalleryLightbox } from '../components/GalleryLightbox';
import type { GalleryImage } from '../components/GalleryLightbox';
import { LineLink } from '../components/LineLink';
import { PageHero } from '../components/PageHero';
import styles from './GalleryPage.module.css';

const galleryImages: GalleryImage[] = [
  {
    src: '/images/classroom-learning-900.jpg',
    srcSet: '/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w',
    width: 900,
    height: 600,
    alt: 'Students listening and taking notes in a classroom',
    label: 'Classroom learning',
    category: 'Classroom',
  },
  {
    src: '/images/hero-students-classroom-1920.jpg',
    srcSet:
      '/images/hero-students-classroom-960.jpg 960w, /images/hero-students-classroom-1920.jpg 1920w',
    width: 1920,
    height: 1280,
    alt: 'Students preparing together in a classroom',
    label: 'Learning together',
    category: 'Classroom',
  },
  {
    src: '/images/library-discussion-900.jpg',
    srcSet:
      '/images/library-discussion-600.jpg 600w, /images/library-discussion-900.jpg 900w',
    width: 900,
    height: 600,
    alt: 'Students discussing their work in a library',
    label: 'Library discussion',
    category: 'Library',
  },
  {
    src: '/images/students-collaborating-1400.jpg',
    srcSet:
      '/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w',
    width: 1400,
    height: 933,
    alt: 'Students working together around a table',
    label: 'Collaborative study',
    category: 'Collaboration',
  },
  {
    src: '/images/student-library-focus-1200.jpg',
    srcSet:
      '/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w',
    width: 1200,
    height: 800,
    alt: 'A student focused on reading in a library',
    label: 'Focused study',
    category: 'Focus',
  },
];

const categories = ['All', 'Classroom', 'Library', 'Collaboration', 'Focus'];

export function GalleryPage() {
  const [category, setCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleImages =
    category === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === category);

  useEffect(() => {
    setActiveIndex(null);
  }, [category]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        crumb="Gallery"
        title={
          <>
            Moments of
            <span className={styles.accent}> learning.</span>
          </>
        }
        description="A visual glimpse of the learning environments that support focus, discussion and preparation. Images are representative and do not depict the Edumate campus."
        image={{
          src: '/images/library-discussion-900.jpg',
          srcSet:
            '/images/library-discussion-600.jpg 600w, /images/library-discussion-900.jpg 900w',
          sizes: '(max-width: 900px) 92vw, 42vw',
          alt: 'Students discussing their work in a library',
          width: 900,
          height: 600,
        }}
        actions={
          <>
            <LineLink to="/facilities">Explore facilities</LineLink>
            <LineLink to="/contact">Visit Edumate</LineLink>
          </>
        }
      />

      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.filterRow}>
            <div className={styles.filters} role="group" aria-label="Filter gallery">
              {categories.map((item) => (
                <button
                  className={[
                    styles.filter,
                    category === item ? styles.filterActive : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className={styles.count}>
              {String(visibleImages.length).padStart(2, '0')} images
            </p>
          </div>

          <div
            className={[styles.grid, category === 'All' ? '' : styles.gridFiltered]
              .filter(Boolean)
              .join(' ')}
          >
            {visibleImages.map((image, index) => (
              <button
                className={styles.tile}
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${image.label} image`}
              >
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes="(max-width: 760px) 92vw, 50vw"
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles.tileOverlay} aria-hidden="true" />
                <span className={styles.tileContent}>
                  <span className={styles.tileCategory}>{image.category}</span>
                  <span className={styles.tileLabel}>{image.label}</span>
                </span>
                <span className={styles.expand} aria-hidden="true">
                  <Expand size={16} strokeWidth={2.2} />
                </span>
              </button>
            ))}
          </div>

          <p className={styles.note}>
            <Info size={15} strokeWidth={2} aria-hidden="true" />
            Images are representative and do not depict the Edumate campus. Facility
            details are confirmed directly by Edumate.
          </p>
        </div>

        <GalleryLightbox
          images={visibleImages}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      </section>

      <CtaSection
        title="See It For Yourself"
        description="Talk to Edumate about courses, facilities and admission information — or plan a visit to the centre."
        primaryLabel="Plan a Visit"
        secondaryLabel="Explore Courses"
      />
    </>
  );
}
