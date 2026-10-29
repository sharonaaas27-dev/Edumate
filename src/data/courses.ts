export type CourseArt = 'neet' | 'nda';

export interface Course {
  id: CourseArt;
  name: string;
  shortName: string;
  category: string;
  description: string;
  overview: string;
  enquiryValue: string;
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
    focusAreas: [
      'Building subject knowledge',
      'Working through examination-style questions',
      'Using revision to reinforce understanding',
    ],
  },
];
