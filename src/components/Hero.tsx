import { ArrowRight, ArrowUpRight, LineChart, MapPin, Target, Users } from 'lucide-react';
import { heroFeatures } from '../data/content';
import styles from './Hero.module.css';

const featureIcons = [Target, LineChart, Users];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.media}>
        <img
          className={styles.image}
          src="/images/hero-students-classroom-1920.jpg"
          srcSet="/images/hero-students-classroom-960.jpg 960w, /images/hero-students-classroom-1920.jpg 1920w"
          sizes="100vw"
          width={1920}
          height={1280}
          alt="Students preparing together in a warmly lit classroom"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.warmTint} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            Edumate Entrance Coaching Centre
          </p>

          <h1 className={styles.title} id="hero-heading">
            <span className={styles.titleLine}>Your Ambition.</span>
            <span className={`${styles.titleLine} ${styles.serifLine}`}>
              Your Next Chapter<span className={styles.period}>.</span>
            </span>
          </h1>

          <p className={styles.copy}>
            Focused preparation, structured learning, and consistent practice for
            students working toward their academic goals.
          </p>

          <div className={styles.actions}>
            <a className="btn btn--primary" href="#courses">
              Explore Courses
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
            </a>
            <a className="btn btn--secondary" href="#contact">
              Enquire Now
              <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
              Nilamel–Alummoodu, Neyyattinkara
            </span>
            <span className={styles.metaDivider} aria-hidden="true" />
            <span className={styles.metaItem}>NEET &amp; NDA preparation</span>
          </div>
        </div>

        <div className={styles.featureCluster} aria-label="What Edumate focuses on">
          {heroFeatures.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div className={styles.featureCard} key={feature.label}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <span className={styles.featureText}>
                  <span className={styles.featureLabel}>{feature.label}</span>
                  <span className={styles.featureDetail}>{feature.detail}</span>
                </span>
              </div>
            );
          })}
        </div>

        <p className={styles.sideNote} aria-hidden="true">
          Neyyattinkara · Kerala
        </p>
      </div>
    </section>
  );
}
