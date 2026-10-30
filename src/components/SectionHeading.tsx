import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  titleId?: string;
  align?: 'left' | 'center';
  tone?: 'default' | 'light';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  align = 'left',
  tone = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={[
        styles.header,
        align === 'center' ? styles.center : '',
        tone === 'light' ? styles.light : '',
        className,
      ]
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
