import type { CourseArt } from '../data/courses';
import styles from './CourseArtwork.module.css';

interface CourseArtworkProps {
  variant: CourseArt;
  className?: string;
}

export function CourseArtwork({ variant, className }: CourseArtworkProps) {
  const isNeet = variant === 'neet';

  return (
    <div
      className={[styles.art, styles[variant], className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <span className={styles.ghost}>{isNeet ? 'NEET' : 'NDA'}</span>

      {isNeet ? (
        <svg
          className={styles.drawing}
          viewBox="0 0 640 400"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="505" cy="96" r="126" stroke="rgba(245,239,231,0.08)" />
          <circle
            cx="505"
            cy="96"
            r="96"
            stroke="rgba(255,90,0,0.18)"
            strokeDasharray="2 8"
          />
          <g stroke="rgba(245,239,231,0.2)" strokeWidth="1">
            <path d="M390 132 448 100l58 32v66l-58 32-58-32v-66Z" />
            <path d="M448 100V44M506 132l48-26M506 198l48 26M390 132l-48-26M390 198l-48 26" />
            <path d="M448 232v52" />
          </g>
          <g fill="#FF5A00">
            <circle cx="390" cy="132" r="4" />
            <circle cx="506" cy="132" r="4" />
            <circle cx="448" cy="232" r="4" />
          </g>
          <g fill="rgba(245,239,231,0.45)">
            <circle cx="448" cy="44" r="3" />
            <circle cx="554" cy="106" r="3" />
            <circle cx="554" cy="224" r="3" />
            <circle cx="342" cy="106" r="3" />
          </g>
          <path
            d="M44 322c74-86 136 36 210-40s138-42 210 24 90 10 132-24"
            stroke="rgba(255,90,0,0.4)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M44 350c74-86 136 36 210-40s138-42 210 24 90 10 132-24"
            stroke="rgba(245,239,231,0.12)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="254" cy="282" r="3" fill="#FF5A00" />
          <circle cx="505" cy="96" r="5" fill="rgba(255,90,0,0.7)" />
        </svg>
      ) : (
        <svg
          className={styles.drawing}
          viewBox="0 0 640 400"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="472" cy="114" r="118" stroke="rgba(245,239,231,0.08)" />
          <circle
            cx="472"
            cy="114"
            r="86"
            stroke="rgba(255,90,0,0.18)"
            strokeDasharray="2 8"
          />
          <path
            d="m472 34 31 70 70 31-70 31-31 70-31-70-70-31 70-31 31-70Z"
            stroke="rgba(245,239,231,0.24)"
            strokeWidth="1"
          />
          <path d="M472 70v174M414 114h116" stroke="rgba(245,239,231,0.12)" />
          <circle cx="472" cy="114" r="6" fill="#FF5A00" />
          <path
            d="M270 314 472 170l202 144"
            stroke="rgba(255,90,0,0.42)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M314 314 472 202l158 112"
            stroke="rgba(245,239,231,0.14)"
            strokeLinecap="round"
          />
          <path d="M44 314h184M484 314h112" stroke="rgba(245,239,231,0.1)" strokeDasharray="2 8" />
          <circle cx="472" cy="114" r="12" stroke="rgba(255,90,0,0.35)" />
          <circle cx="270" cy="314" r="3" fill="#FF5A00" />
          <circle cx="674" cy="314" r="3" fill="#FF5A00" />
          <circle cx="472" cy="314" r="2.5" fill="rgba(245,239,231,0.5)" />
        </svg>
      )}
    </div>
  );
}
