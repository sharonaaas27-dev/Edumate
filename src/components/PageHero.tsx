import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '../router';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  crumb: string;
  image?: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
    width: number;
    height: number;
  };
  actions?: ReactNode;
  note?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  image,
  actions,
  note,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.decorOne} aria-hidden="true" />
      <div className={styles.decorTwo} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <nav className={styles.crumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={12} strokeWidth={2.4} aria-hidden="true" />
            <span aria-current="page">{crumb}</span>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          {actions ? <div className={styles.actions}>{actions}</div> : null}
          {note ? <p className={styles.note}>{note}</p> : null}
        </div>

        {image ? (
          <div className={styles.media}>
            <span className={styles.mediaBackdrop} aria-hidden="true" />
            <div className={styles.frame}>
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes ?? '(max-width: 900px) 92vw, 42vw'}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="eager"
                decoding="async"
              />
            </div>
            <span className={styles.frameAccent} aria-hidden="true" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
