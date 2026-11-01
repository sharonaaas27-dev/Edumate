import type { ReactNode } from 'react';
import {
  ChevronRight,
  GraduationCap,
  UserRound,
  ChartNoAxesColumnIncreasing,
  Building2,
  Headset,
  Users,
  ArrowUpRight,
} from 'lucide-react';

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

  // New optional properties
  logo?: {
    src: string;
    alt: string;
  };

  handwrittenText?: string;
  showBreadcrumb?: boolean;
}

const heroFeatures = [
  {
    label: 'Experienced',
    secondLine: 'Faculty',
    icon: GraduationCap,
  },
  {
    label: 'Personalized',
    secondLine: 'Attention',
    icon: UserRound,
  },
  {
    label: 'Proven',
    secondLine: 'Results',
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    label: 'Modern',
    secondLine: 'Facilities',
    icon: Building2,
  },
  {
    label: 'Support Beyond',
    secondLine: 'Classes',
    icon: Headset,
  },
];

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  image,
  actions,
  note,
  logo,
  handwrittenText = 'More Than Just Coaching',
  showBreadcrumb = false,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      {/* Decorative background elements */}
      <div className={styles.decorOne} aria-hidden="true" />
      <div className={styles.decorTwo} aria-hidden="true" />
      <div className={styles.decorThree} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>

          {logo && (
            <Link to="/" className={styles.brand}>
              <img src={logo.src} alt={logo.alt} />
            </Link>
          )}

          {showBreadcrumb && (
            <nav className={styles.crumb} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight
                size={12}
                strokeWidth={2.4}
                aria-hidden="true"
              />
              <span aria-current="page">{crumb}</span>
            </nav>
          )}

          <p className={styles.eyebrow}>
            {eyebrow}
          </p>

          <h1 className={styles.title}>
            {title}
          </h1>

          <p className={styles.description}>
            {description}
          </p>

          {actions && (
            <div className={styles.actions}>
              {actions}
            </div>
          )}

          {note && (
            <div className={styles.note}>
              <Users size={19} strokeWidth={2.5} />
              <span>{note}</span>
            </div>
          )}

          {/* Floating feature strip */}
          <div className={styles.featureStrip}>
            {heroFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  className={styles.feature}
                  key={feature.label}
                >
                  <span className={styles.featureIcon}>
                    <Icon size={25} strokeWidth={1.8} />
                  </span>

                  <span className={styles.featureText}>
                    <strong>{feature.label}</strong>
                    <strong>{feature.secondLine}</strong>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        {image && (
          <div className={styles.visual}>

            <div
              className={styles.imageBackdrop}
              aria-hidden="true"
            />

            <div className={styles.handwritten}>
              {handwrittenText}
              <span />
            </div>

            <div className={styles.imageFrame}>
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes ?? '(max-width: 900px) 100vw, 58vw'}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            <div
              className={styles.redImageAccent}
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      <div className={styles.bottomAccent} aria-hidden="true">
        <ArrowUpRight size={25} />
      </div>
    </section>
  );
}