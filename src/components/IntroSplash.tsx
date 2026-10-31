import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Atom, GraduationCap, Lightbulb, Pencil, Sigma } from 'lucide-react';
import styles from './IntroSplash.module.css';

const STORAGE_KEY = 'edumate:intro-seen';
const AUTO_EXIT_MS = 5200;
const AUTO_CLOSE_MS = 5950;
const SKIP_CLOSE_MS = 420;

type ExitMode = 'auto' | 'skip' | null;

function canPlayIntro() {
  if (typeof window === 'undefined') {
    return false;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  try {
    return window.sessionStorage.getItem(STORAGE_KEY) !== 'seen';
  } catch {
    return true;
  }
}

function rememberIntro() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, 'seen');
  } catch {
    // Storage can be unavailable in private browsing contexts.
  }
}

export function IntroSplash() {
  const [active, setActive] = useState(canPlayIntro);
  const [exitMode, setExitMode] = useState<ExitMode>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const skipIntro = useCallback(() => {
    setExitMode((mode) => mode ?? 'skip');
    window.setTimeout(() => setActive(false), SKIP_CLOSE_MS);
  }, []);

  useEffect(() => {
    rememberIntro();
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }

    const body = document.body;
    const wasLocked = body.classList.contains('is-locked');
    const site = document.getElementById('top');
    const skipLink = document.querySelector<HTMLElement>('.skip-link');

    if (!wasLocked) {
      body.classList.add('is-locked');
    }
    site?.setAttribute('inert', '');
    skipLink?.setAttribute('inert', '');
    overlayRef.current?.focus({ preventScroll: true });

    const autoExit = window.setTimeout(() => {
      setExitMode((mode) => mode ?? 'auto');
    }, AUTO_EXIT_MS);
    const autoClose = window.setTimeout(() => {
      setActive(false);
    }, AUTO_CLOSE_MS);

    return () => {
      window.clearTimeout(autoExit);
      window.clearTimeout(autoClose);

      if (!wasLocked) {
        body.classList.remove('is-locked');
      }
      site?.removeAttribute('inert');
      skipLink?.removeAttribute('inert');
    };
  }, [active]);

  useEffect(() => {
    if (!active || exitMode) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        skipIntro();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, exitMode, skipIntro]);

  if (!active) {
    return null;
  }

  const overlayClassName = [
    styles.overlay,
    exitMode ? styles.isLeaving : '',
    exitMode === 'skip' ? styles.isSkipping : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={overlayRef}
      className={overlayClassName}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Edumate"
      tabIndex={-1}
    >
      <button
        className={styles.skip}
        type="button"
        onClick={skipIntro}
        disabled={Boolean(exitMode)}
      >
        Skip intro
        <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
      </button>

      <div className={styles.stage}>
        <div className={styles.logoWrap}>
          <span className={`${styles.icon} ${styles.iconCap}`} aria-hidden="true">
            <GraduationCap />
          </span>
          <span className={`${styles.icon} ${styles.iconBulb}`} aria-hidden="true">
            <Lightbulb />
          </span>
          <span className={`${styles.icon} ${styles.iconSigma}`} aria-hidden="true">
            <Sigma />
          </span>
          <span className={`${styles.icon} ${styles.iconAtom}`} aria-hidden="true">
            <Atom />
          </span>
          <span className={`${styles.icon} ${styles.iconPencil}`} aria-hidden="true">
            <Pencil />
          </span>

          <svg
            className={styles.mark}
            viewBox="80 0 750 635"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="intro-grey" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#999a9e" />
                <stop offset="1" stopColor="#7e7f83" />
              </linearGradient>
              <linearGradient id="intro-green" x1="0" y1="0" x2="0.5" y2="1">
                <stop offset="0" stopColor="#00b25a" />
                <stop offset="1" stopColor="#009b4c" />
              </linearGradient>
              <linearGradient id="intro-yellow" x1="0" y1="0" x2="0.4" y2="1">
                <stop offset="0" stopColor="#d5a012" />
                <stop offset="1" stopColor="#c08d0c" />
              </linearGradient>
              <linearGradient id="intro-red" x1="0.1" y1="0" x2="0.85" y2="1">
                <stop offset="0" stopColor="#f02730" />
                <stop offset="1" stopColor="#e31922" />
              </linearGradient>
              <filter id="intro-shadow" x="-25%" y="-20%" width="150%" height="160%">
                <feDropShadow
                  dx="0"
                  dy="14"
                  stdDeviation="12"
                  floodColor="#252525"
                  floodOpacity="0.12"
                />
              </filter>
            </defs>

            <g filter="url(#intro-shadow)">
              <path
                className={`${styles.page} ${styles.pageGrey}`}
                d="M198 175L271 186L196 498L557 616L120 560Z"
                fill="url(#intro-grey)"
              />
              <path
                className={`${styles.page} ${styles.pageGreen}`}
                d="M323 100L397 115L321 436L554 576L245 472Z"
                fill="url(#intro-green)"
              />
              <path
                className={`${styles.page} ${styles.pageYellow}`}
                d="M447 46L514 85L444 413L619 570L369 424Z"
                fill="url(#intro-yellow)"
              />
              <path
                className={`${styles.page} ${styles.pageRed}`}
                d="M561 33L778 230L704 588L483 402Z"
                fill="url(#intro-red)"
              />
            </g>
          </svg>
        </div>

        <div className={styles.brand}>
          <h1 className={styles.wordmark}>EDUMATE</h1>
          <p className={styles.subtitle}>Entrance Coaching Centre</p>
          <p className={styles.location}>Neyyattinkara</p>

          <div className={styles.taglineRow}>
            <span className={styles.rule} aria-hidden="true" />
            <p className={styles.tagline}>Learn · Grow · Achieve</p>
            <span className={styles.rule} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
