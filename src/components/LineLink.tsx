import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../router';
import styles from './LineLink.module.css';

interface LineLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export function LineLink({ to, children, className }: LineLinkProps) {
  return (
    <Link className={[styles.link, className].filter(Boolean).join(' ')} to={to}>
      {children}
      <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
    </Link>
  );
}
