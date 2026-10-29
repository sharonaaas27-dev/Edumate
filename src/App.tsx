import { useRef, useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { CampusGallery } from './components/CampusGallery';
import { ContactSection } from './components/ContactSection';
import type { CourseSelection } from './components/ContactSection';
import { CourseSection } from './components/CourseSection';
import { EnquiryCTA } from './components/EnquiryCTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { LearningApproach } from './components/LearningApproach';
import { Navbar } from './components/Navbar';
import { PreparationJourney } from './components/PreparationJourney';
import { WhatsAppButton } from './components/WhatsAppButton';
import { WhyEdumate } from './components/WhyEdumate';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  const [courseSelection, setCourseSelection] = useState<CourseSelection | null>(
    null,
  );
  const selectionToken = useRef(0);

  const handleCourseEnquiry = (course: string) => {
    selectionToken.current += 1;
    setCourseSelection({ course, token: selectionToken.current });

    const contact = document.getElementById('contact');

    if (!contact) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    contact.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    window.setTimeout(
      () => contact.focus({ preventScroll: true }),
      prefersReducedMotion ? 0 : 500,
    );
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div id="top">
        <AnnouncementBar />
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <Hero />
          <IntroSection />
          <CourseSection onEnquire={handleCourseEnquiry} />
          <LearningApproach />
          <WhyEdumate />
          <PreparationJourney />
          <CampusGallery />
          <EnquiryCTA />
          <ContactSection courseSelection={courseSelection} />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
