import { createContext, useContext, useEffect, useState } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface RouteState {
  path: string;
  query: URLSearchParams;
}

interface RouteMeta {
  title: string;
  navLabel: string;
}

export const routeMeta: Record<string, RouteMeta> = {
  '/': { title: 'Edumate Entrance Coaching Centre | NEET & NDA Preparation', navLabel: 'Home' },
  '/about': { title: 'About Us | Edumate Entrance Coaching Centre', navLabel: 'About Us' },
  '/courses': { title: 'Courses | Edumate Entrance Coaching Centre', navLabel: 'Courses' },
  '/facilities': { title: 'Facilities | Edumate Entrance Coaching Centre', navLabel: 'Facilities' },
  '/results': { title: 'Results & Achievements | Edumate Entrance Coaching Centre', navLabel: 'Results' },
  '/gallery': { title: 'Gallery | Edumate Entrance Coaching Centre', navLabel: 'Gallery' },
  '/contact': { title: 'Contact | Edumate Entrance Coaching Centre', navLabel: 'Contact' },
};

const legacyRoutes: Record<string, string> = {
  courses: '/courses',
  about: '/about',
  approach: '/about',
  why: '/about',
  journey: '/results',
  campus: '/facilities',
  facilities: '/facilities',
  results: '/results',
  gallery: '/gallery',
  contact: '/contact',
};

function readRoute(): RouteState {
  const raw = window.location.hash.replace(/^#/, '');

  if (!raw) {
    return { path: '/', query: new URLSearchParams() };
  }

  const [pathPart, queryPart = ''] = raw.split('?');
  let path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
  path = path.replace(/\/+$/, '') || '/';

  const legacyKey = path.slice(1);
  if (legacyRoutes[legacyKey]) {
    path = legacyRoutes[legacyKey];
  }

  return { path, query: new URLSearchParams(queryPart) };
}

const RouteContext = createContext<RouteState>({
  path: '/',
  query: new URLSearchParams(),
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<RouteState>(readRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const meta = routeMeta[route.path];
    document.title = meta ? meta.title : 'Page Not Found | Edumate Entrance Coaching Centre';
  }, [route.path]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [route.path, route.query.toString()]);

  return <RouteContext.Provider value={route}>{children}</RouteContext.Provider>;
}

export function useRoute() {
  return useContext(RouteContext);
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={`#${to}`} {...rest}>
      {children}
    </a>
  );
}

export function navigate(to: string) {
  window.location.hash = to;
}
