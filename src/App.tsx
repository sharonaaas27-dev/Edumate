import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { IntroSplash } from './components/IntroSplash';
import { LineLink } from './components/LineLink';
import { Navbar } from './components/Navbar';
import { PageHero } from './components/PageHero';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useScrollReveal } from './hooks/useScrollReveal';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CoursesPage } from './pages/CoursesPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { ResultsPage } from './pages/ResultsPage';
import { RouterProvider, useRoute } from './router';

const pageMap = {
  '/': HomePage,
  '/about': AboutPage,
  '/courses': CoursesPage,
  '/facilities': FacilitiesPage,
  '/results': ResultsPage,
  '/gallery': GalleryPage,
  '/contact': ContactPage,
};

function NotFoundPage() {
  return (
    <PageHero
      eyebrow="404"
      crumb="Page Not Found"
      title={
        <>
          This page could
          <span style={{ color: 'var(--color-red)' }}> not be found.</span>
        </>
      }
      description="The page you are looking for may have moved or no longer exists. Use the links below to continue exploring Edumate."
      actions={
        <>
          <LineLink to="/">Back to home</LineLink>
          <LineLink to="/contact">Contact Edumate</LineLink>
        </>
      }
    />
  );
}

function SiteShell() {
  const { path } = useRoute();
  useScrollReveal(path);

  const Page = pageMap[path as keyof typeof pageMap] ?? NotFoundPage;

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div id="top">
        <AnnouncementBar />
        <Navbar />

        <main id="main-content" tabIndex={-1} key={path}>
          <Page />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <SiteShell />
      <IntroSplash />
    </RouterProvider>
  );
}
