import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { CtaSection } from '../components/CtaSection';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { courses } from '../data/courses';
import { siteConfig } from '../data/siteConfig';
import { useRoute } from '../router';
import styles from './ContactPage.module.css';

export function ContactPage() {
  const { query } = useRoute();
  const requestedCourse = query.get('course') ?? '';
  const initialCourse =
    courses.some((course) => course.enquiryValue === requestedCourse) ||
    requestedCourse === 'Not sure yet'
      ? requestedCourse
      : undefined;

  const contactCards = [
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.contact.phone || 'Not yet published',
      href: siteConfig.contact.telHref ?? undefined,
      note: siteConfig.contact.phone
        ? 'Call Edumate directly.'
        : 'Phone details will be published once confirmed.',
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.contact.email || 'Not yet published',
      href: siteConfig.contact.mailtoHref ?? undefined,
      note: siteConfig.contact.email
        ? 'Send an email enquiry.'
        : 'Email details will be published once confirmed.',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.address,
      href: siteConfig.mapSearchUrl,
      external: true,
      note: 'Open a Google Maps search for directions.',
    },
    {
      icon: Clock,
      label: 'Visits',
      value: 'By enquiry',
      note: 'Contact the centre to confirm a convenient visit time.',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumb="Contact"
        title={
          <>
            Get in
            <span className={styles.accent}> Touch.</span>
          </>
        }
        description="Have a question about courses, schedules or admissions? Share your details and Edumate can follow up about the next step."
        image={{
          src: '/images/classroom-learning-900.jpg',
          srcSet:
            '/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w',
          sizes: '(max-width: 900px) 92vw, 42vw',
          alt: 'Students listening and taking notes in a classroom',
          width: 900,
          height: 600,
        }}
        note={
          !siteConfig.contact.phone || !siteConfig.contact.email
            ? 'Phone and email details will be published once confirmed by Edumate. The enquiry form remains available.'
            : undefined
        }
      />

      <section className={`section ${styles.infoSection}`}>
        <div className="container">
          <div className={styles.infoGrid}>
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className={styles.infoCard} key={card.label}>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className={styles.infoLabel}>{card.label}</span>
                  {card.href ? (
                    <a
                      className={styles.infoValue}
                      href={card.href}
                      {...(card.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {card.value}
                      <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className={styles.infoValueStatic}>{card.value}</span>
                  )}
                  <p className={styles.infoNote}>{card.note}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section section--soft ${styles.formSection}`} id="enquiry">
        <div className="container">
          <div className={styles.formHeader}>
            <SectionHeading
              eyebrow="Enquiry Form"
              title={
                <>
                  Send an
                  <span className={styles.accent}> enquiry.</span>
                </>
              }
              description="Share a few details and the course you are interested in. This is an enquiry, not an admission application."
            />
            <span className={styles.formHeaderIcon} aria-hidden="true">
              <Send size={24} strokeWidth={1.9} />
            </span>
          </div>

          <ContactSection initialCourse={initialCourse} />
        </div>
      </section>

      <section className={`section ${styles.mapSection}`}>
        <div className={`container ${styles.mapGrid}`}>
          <div className={styles.mapPanel} data-reveal>
            <span className={styles.mapGridPattern} aria-hidden="true" />
            <span className={styles.mapPin} aria-hidden="true">
              <MapPin size={26} strokeWidth={2} />
            </span>
            <div className={styles.mapCard}>
              <span className={styles.mapLabel}>Edumate</span>
              <p>{siteConfig.address}</p>
              <a
                className={styles.mapLink}
                href={siteConfig.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open map search
                <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.mapCopy}>
            <SectionHeading
              eyebrow="Visit the Centre"
              title={
                <>
                  Find Edumate in
                  <span className={styles.accent}> Neyyattinkara.</span>
                </>
              }
              description="Edumate is located at Nilamel–Alummoodu, Neyyattinkara, Kerala. The map search opens Google Maps for directions to the locality."
            />
            <p className={styles.mapNote}>
              An exact campus pin has not been published. Please confirm the
              location directly with Edumate before visiting.
            </p>
            <a
              className="btn btn--secondary"
              href={siteConfig.mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Google Maps
              <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Begin?"
        description="Talk to Edumate about NEET or NDA preparation, schedules and admission information."
        primaryLabel="Start an Enquiry"
        secondaryLabel="Explore Courses"
      />
    </>
  );
}
