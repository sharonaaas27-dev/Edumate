import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import styles from './WhatsAppButton.module.css';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const [pendingOpen, setPendingOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const whatsappHref = siteConfig.contact.whatsappHref;

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 480);

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  useEffect(() => {
    const contact = document.getElementById('contact');

    if (!contact) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setContactInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          setPendingOpen(false);
        }
      },
      { threshold: 0.04 },
    );

    observer.observe(contact);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!pendingOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPendingOpen(false);
      }
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (
        wrapRef.current &&
        !wrapRef.current.contains(event.target as Node)
      ) {
        setPendingOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [pendingOpen]);

  if (!visible || contactInView) {
    return null;
  }

  return (
    <div className={styles.wrap} ref={wrapRef}>
      {whatsappHref ? (
        <a
          className={styles.button}
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Edumate on WhatsApp (opens in a new tab)"
        >
          <MessageCircle size={22} strokeWidth={1.9} aria-hidden="true" />
        </a>
      ) : (
        <button
          className={styles.button}
          type="button"
          onClick={() => setPendingOpen((open) => !open)}
          aria-label="WhatsApp contact status: pending verification"
          aria-expanded={pendingOpen}
          aria-controls="whatsapp-pending-panel"
        >
          <MessageCircle size={22} strokeWidth={1.9} aria-hidden="true" />
          <span className={styles.badge} aria-hidden="true">
            !
          </span>
        </button>
      )}

      {!whatsappHref && pendingOpen ? (
        <div className={styles.panel} id="whatsapp-pending-panel">
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>WhatsApp contact</p>
              <p className={styles.panelText} role="status">
                A verified WhatsApp number is not available yet. Please use the
                enquiry form in the meantime.
              </p>
            </div>
            <button
              className={styles.close}
              type="button"
              onClick={() => setPendingOpen(false)}
              aria-label="Close WhatsApp status"
            >
              <X size={13} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
          <a
            className={styles.panelLink}
            href="#contact"
            onClick={() => setPendingOpen(false)}
          >
            Go to enquiry form
            <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      ) : null}
    </div>
  );
}
