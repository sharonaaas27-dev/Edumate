import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Copy,
  Info,
  Loader2,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { courses } from '../data/courses';
import { batchCourses, entranceExams } from '../data/homeContent';
import { siteConfig } from '../data/siteConfig';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  initialCourse?: string;
}

interface FormValues {
  name: string;
  phone: string;
  course: string;
  contactTime: string;
  message: string;
  consent: boolean;
  website: string;
}

type FormStatus = 'idle' | 'submitting' | 'prepared' | 'success' | 'error';
type FieldErrors = Partial<Record<keyof FormValues, string>>;
type CopyState = 'idle' | 'copied' | 'failed';

const initialValues: FormValues = {
  name: '',
  phone: '',
  course: '',
  contactTime: '',
  message: '',
  consent: false,
  website: '',
};

const contactTimes = ['Morning', 'Afternoon', 'Evening', 'Any time'];

const additionalExamOptions = entranceExams.filter(
  (exam) => !courses.some((course) => course.enquiryValue === exam.enquiryValue),
);

const fieldIds: Record<keyof FormValues, string> = {
  name: 'enquiry-name',
  phone: 'enquiry-phone',
  course: 'enquiry-course',
  contactTime: 'enquiry-time',
  message: 'enquiry-message',
  consent: 'enquiry-consent',
  website: 'enquiry-website',
};

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  const phoneDigits = values.phone.replace(/\D/g, '');

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!values.course) {
    errors.course = 'Please select a course.';
  }

  if (!values.contactTime) {
    errors.contactTime = 'Please choose a preferred contact time.';
  }

  if (values.message.length > 600) {
    errors.message = 'Please keep your message under 600 characters.';
  }

  if (!values.consent) {
    errors.consent = 'Please confirm that Edumate may contact you.';
  }

  return errors;
}

function buildPreparedText(values: FormValues) {
  const lines = [
    'Enquiry for Edumate Entrance Coaching Centre',
    '',
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Course: ${values.course}`,
    `Preferred contact time: ${values.contactTime}`,
  ];

  if (values.message.trim()) {
    lines.push('', `Message: ${values.message.trim()}`);
  }

  return lines.join('\n');
}

async function copyToClipboard(text: string) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // Fall back to a temporary textarea when clipboard access is unavailable.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '-9999px';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(textarea);

  if (!copied) {
    throw new Error('Copy command was rejected.');
  }
}

export function ContactSection({ initialCourse }: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [preparedText, setPreparedText] = useState('');
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const panelRef = useRef<HTMLDivElement>(null);
  const copyTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!initialCourse) {
      return;
    }

    setValues((current) => ({ ...current, course: initialCourse }));
    setErrors((current) => ({ ...current, course: undefined }));
  }, [initialCourse]);

  useEffect(() => {
    if (status === 'prepared' || status === 'success') {
      panelRef.current?.focus();
    }
  }, [status]);

  useEffect(
    () => () => {
      if (copyTimer.current !== null) {
        window.clearTimeout(copyTimer.current);
      }
    },
    [],
  );

  function setField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));

    if (status === 'error') {
      setStatus('idle');
    }
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setPreparedText('');
    setCopyState('idle');
    setStatus('idle');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (values.website) {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0] as keyof FormValues;
      document.getElementById(fieldIds[firstField])?.focus();
      return;
    }

    const payload = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      course: values.course,
      preferredContactTime: values.contactTime,
      message: values.message.trim(),
      consent: true,
      source: 'website',
    };

    const endpoint = siteConfig.enquiryEndpoint;

    if (!endpoint) {
      setPreparedText(buildPreparedText(values));
      setCopyState('idle');
      setStatus('prepared');
      return;
    }

    setStatus('submitting');
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setValues(initialValues);
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  async function handleCopy() {
    if (!preparedText) {
      return;
    }

    try {
      await copyToClipboard(preparedText);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }

    if (copyTimer.current !== null) {
      window.clearTimeout(copyTimer.current);
    }

    copyTimer.current = window.setTimeout(() => setCopyState('idle'), 2600);
  }

  return (
    <div className={styles.layout}>
      <div className={styles.formCard}>
        {status === 'prepared' ? (
          <div className={styles.panel} ref={panelRef} tabIndex={-1}>
            <span className={styles.panelIcon}>
              <ClipboardCheck size={22} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <h3 className={styles.panelTitle}>Your enquiry is ready.</h3>
            <p className={styles.panelText}>
              Online submission is not connected yet, so nothing has been sent. Copy
              your enquiry below and contact Edumate directly.
            </p>

            <textarea
              className={styles.preparedText}
              value={preparedText}
              readOnly
              rows={8}
              aria-label="Prepared enquiry text"
              onFocus={(event) => event.currentTarget.select()}
            />

            <div className={styles.panelActions}>
              <button className={styles.panelPrimary} type="button" onClick={handleCopy}>
                <Copy size={15} strokeWidth={2.2} aria-hidden="true" />
                {copyState === 'copied' ? 'Copied' : 'Copy enquiry'}
              </button>
              <button
                className={styles.panelSecondary}
                type="button"
                onClick={() => {
                  setCopyState('idle');
                  setStatus('idle');
                }}
              >
                Edit details
              </button>
            </div>

            <p
              className={`${styles.panelHint} ${
                copyState === 'failed' ? styles.panelHintError : ''
              }`}
            >
              {copyState === 'failed'
                ? 'Copy failed. Select the text above and copy it manually.'
                : 'Nothing has been sent automatically.'}
            </p>
            <span className="sr-only" role="status" aria-live="polite">
              {copyState === 'copied'
                ? 'Enquiry copied to clipboard.'
                : copyState === 'failed'
                  ? 'Copy failed. Select the text and copy it manually.'
                  : ''}
            </span>
          </div>
        ) : status === 'success' ? (
          <div className={styles.panel} ref={panelRef} tabIndex={-1}>
            <span className={styles.panelIcon}>
              <CheckCircle2 size={22} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <h3 className={styles.panelTitle}>Enquiry submitted.</h3>
            <p className={styles.panelText}>
              Your enquiry has been sent. Edumate can follow up using the details you
              provided.
            </p>
            <div className={styles.panelActions}>
              <button className={styles.panelPrimary} type="button" onClick={resetForm}>
                Send another enquiry
                <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.formHeader}>
              <div>
                <span className={styles.formEyebrow}>Enquiry Form</span>
                <h3 className={styles.formTitle}>Tell us what you are looking for.</h3>
              </div>
              <span className={styles.requiredNote}>
                <span aria-hidden="true">*</span> Required
              </span>
            </div>

            {!siteConfig.enquiryEndpoint ? (
              <p className={styles.modeNote}>
                <Info size={15} strokeWidth={2} aria-hidden="true" />
                <span>
                  Online submission is not connected yet. This form prepares your
                  enquiry so you can copy it.
                </span>
              </p>
            ) : null}

            {status === 'error' ? (
              <div className={styles.alert} role="alert">
                <AlertCircle size={16} strokeWidth={2} aria-hidden="true" />
                <p>We could not send your enquiry. Please try again in a moment.</p>
              </div>
            ) : null}

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fields}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="enquiry-name">
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    id="enquiry-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={values.name}
                    onChange={(event) => setField('name', event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                    required
                  />
                  {errors.name ? (
                    <p className={styles.error} id="enquiry-name-error">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="enquiry-phone">
                    Phone <span className={styles.required}>*</span>
                  </label>
                  <input
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Phone number"
                    value={values.phone}
                    onChange={(event) => setField('phone', event.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
                    required
                  />
                  {errors.phone ? (
                    <p className={styles.error} id="enquiry-phone-error">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="enquiry-course">
                    Course or batch of interest <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      className={`${styles.select} ${
                        errors.course ? styles.inputError : ''
                      }`}
                      id="enquiry-course"
                      name="course"
                      value={values.course}
                      onChange={(event) => setField('course', event.target.value)}
                      aria-invalid={Boolean(errors.course)}
                      aria-describedby={errors.course ? 'enquiry-course-error' : undefined}
                      required
                    >
                      <option value="" disabled>
                        Select a course or batch
                      </option>
                      <optgroup label="Entrance programmes">
                        {courses.map((course) => (
                          <option key={course.id} value={course.enquiryValue}>
                            {course.name}
                          </option>
                        ))}
                        {additionalExamOptions.map((exam) => (
                          <option key={exam.id} value={exam.enquiryValue}>
                            {exam.name} Entrance Coaching
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Batch programmes">
                        {batchCourses.map((course) => (
                          <option key={course.id} value={course.enquiryValue}>
                            {course.name}
                          </option>
                        ))}
                      </optgroup>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                    <ChevronDown
                      className={styles.selectIcon}
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                  {errors.course ? (
                    <p className={styles.error} id="enquiry-course-error">
                      {errors.course}
                    </p>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="enquiry-time">
                    Preferred contact time <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      className={`${styles.select} ${
                        errors.contactTime ? styles.inputError : ''
                      }`}
                      id="enquiry-time"
                      name="contactTime"
                      value={values.contactTime}
                      onChange={(event) => setField('contactTime', event.target.value)}
                      aria-invalid={Boolean(errors.contactTime)}
                      aria-describedby={
                        errors.contactTime ? 'enquiry-time-error' : undefined
                      }
                      required
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      {contactTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className={styles.selectIcon}
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                  {errors.contactTime ? (
                    <p className={styles.error} id="enquiry-time-error">
                      {errors.contactTime}
                    </p>
                  ) : null}
                </div>

                <div className={`${styles.field} ${styles.fieldFull}`}>
                  <div className={styles.labelRow}>
                    <label className={styles.label} htmlFor="enquiry-message">
                      Message <span className={styles.optional}>Optional</span>
                    </label>
                    <span className={styles.counter}>{values.message.length}/600</span>
                  </div>
                  <textarea
                    className={`${styles.textarea} ${
                      errors.message ? styles.inputError : ''
                    }`}
                    id="enquiry-message"
                    name="message"
                    placeholder="Share any questions about courses, schedules or admissions."
                    value={values.message}
                    onChange={(event) => setField('message', event.target.value)}
                    maxLength={600}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                  />
                  {errors.message ? (
                    <p className={styles.error} id="enquiry-message-error">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className={styles.consentField}>
                <label className={styles.consentLabel} htmlFor="enquiry-consent">
                  <input
                    className={styles.checkbox}
                    id="enquiry-consent"
                    name="consent"
                    type="checkbox"
                    checked={values.consent}
                    onChange={(event) => setField('consent', event.target.checked)}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'enquiry-consent-error' : undefined}
                    required
                  />
                  <span>I agree to be contacted by Edumate about this enquiry.</span>
                </label>
                {errors.consent ? (
                  <p className={styles.error} id="enquiry-consent-error">
                    {errors.consent}
                  </p>
                ) : null}
              </div>

              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="enquiry-website">Website</label>
                <input
                  id="enquiry-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={(event) => setField('website', event.target.value)}
                />
              </div>

              <div className={styles.submitRow}>
                <button
                  className={styles.submit}
                  type="submit"
                  disabled={status === 'submitting'}
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2
                        className={styles.spinner}
                        size={16}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      {siteConfig.enquiryEndpoint ? 'Send enquiry' : 'Prepare enquiry'}
                      <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className={styles.privacy}>
                  <ShieldCheck size={14} strokeWidth={2} aria-hidden="true" />
                  Your details are used only to respond to this enquiry.
                </p>
              </div>
            </form>
          </>
        )}
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.sideCardDark}>
          <span className={styles.sideEyebrow}>What happens next</span>
          <h3 className={styles.sideTitleDark}>A simple enquiry process.</h3>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNumber}>01</span>
              <div>
                <span className={styles.stepTitle}>Share your details</span>
                <p className={styles.stepText}>
                  Tell us your name, phone number and course of interest.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNumber}>02</span>
              <div>
                <span className={styles.stepTitle}>Edumate follows up</span>
                <p className={styles.stepText}>
                  The centre can contact you at your preferred time.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNumber}>03</span>
              <div>
                <span className={styles.stepTitle}>Plan the next step</span>
                <p className={styles.stepText}>
                  Discuss schedules, eligibility and admission information.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className={styles.sideCard}>
          <span className={styles.sideEyebrow}>Find the centre</span>
          <h3 className={styles.sideTitle}>Nilamel–Alummoodu, Neyyattinkara</h3>
          <p className={styles.address}>
            <MapPin size={15} strokeWidth={2} aria-hidden="true" />
            {siteConfig.address}
          </p>
          <a
            className={styles.mapLink}
            href={siteConfig.mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open map search
            <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
          </a>
          {!siteConfig.contact.phone || !siteConfig.contact.email ? (
            <p className={styles.sideNote}>
              Phone and email details will be published once confirmed. The map link
              opens a Google Maps search.
            </p>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
