import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  titleId?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <header
      className={[styles.header, align === 'center' ? styles.center : '', className]
        .filter(Boolean)
        .join(' ')}
      data-reveal
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`display-heading ${styles.title}`} id={titleId}>
        {title}
      </h2>
      {description ? <div className={styles.description}>{description}</div> : null}
    </header>
  );
}
