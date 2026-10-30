export type CourseArt = 'neet' | 'nda';

export interface CourseImage {
  src: string;
  srcSet?: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
}

export interface Course {
  id: CourseArt;
  name: string;
  shortName: string;
  category: string;
  description: string;
  overview: string;
  enquiryValue: string;
  image: CourseImage;
  subjects: string[];
  // Illustrative preparation themes, not a confirmed Edumate curriculum.
  focusAreas: string[];
}

// TODO(content): Course duration, fees, eligibility, batch timings, faculty
// details and outcomes are intentionally omitted until verified by Edumate.
export const courses: Course[] = [
  {
    id: 'neet',
    name: 'NEET Entrance Coaching',
    shortName: 'NEET',
    category: 'Medical Entrance',
    description:
      'Preparation for students working toward the National Eligibility cum Entrance Test.',
    overview:
      'A focused preparation pathway for students working toward NEET, built around understanding concepts and applying them to examination-style questions.',
    enquiryValue: 'NEET Entrance Coaching',
    image: {
      src: '/images/classroom-learning-900.jpg',
      srcSet: '/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w',
      sizes: '(max-width: 900px) 92vw, 30vw',
      width: 900,
      height: 600,
      alt: 'Students listening and taking notes in a classroom',
    },
    subjects: ['Physics', 'Chemistry', 'Biology'],
    focusAreas: [
      'Strengthening conceptual foundations',
      'Practising questions across core subjects',
      'Reviewing errors and revising consistently',
    ],
  },
  {
    id: 'nda',
    name: 'NDA Entrance Coaching',
    shortName: 'NDA',
    category: 'Defence Entrance',
    description:
      'Preparation for students exploring entry into the National Defence Academy.',
    overview:
      'A focused preparation pathway for students exploring the National Defence Academy, with attention to the academic demands of the entrance examination.',
    enquiryValue: 'NDA Entrance Coaching',
    image: {
      src: '/images/students-collaborating-1400.jpg',
      srcSet:
        '/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w',
      sizes: '(max-width: 900px) 92vw, 30vw',
      width: 1400,
      height: 933,
      alt: 'Students working together around a table',
    },
    subjects: ['Mathematics', 'General Ability'],
    focusAreas: [
      'Building subject knowledge',
      'Working through examination-style questions',
      'Using revision to reinforce understanding',
    ],
  },
];
