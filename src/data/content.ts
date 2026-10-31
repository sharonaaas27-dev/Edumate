export interface NumberedStep {
  number: string;
  title: string;
  description: string;
}

export interface FeatureHighlight {
  icon: 'focus' | 'structure' | 'practice' | 'guidance' | 'support';
  title: string;
  description: string;
}

export interface UpdateItem {
  icon: 'book' | 'message' | 'pin';
  label: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

export const learningSteps: NumberedStep[] = [
  {
    number: '01',
    title: 'Understand the concepts',
    description: 'Build a strong foundation before progressing to difficult questions.',
  },
  {
    number: '02',
    title: 'Apply what you learn',
    description: 'Practise questions that reinforce the concepts you are studying.',
  },
  {
    number: '03',
    title: 'Identify knowledge gaps',
    description: 'Review errors and identify topics that need further attention.',
  },
  {
    number: '04',
    title: 'Strengthen preparation',
    description: 'Use revision and appropriate practice assessments before the examination.',
  },
];

export const preparationStages: NumberedStep[] = [
  {
    number: '01',
    title: 'Explore',
    description: 'Understand the examination and its requirements.',
  },
  {
    number: '02',
    title: 'Learn',
    description: 'Study the relevant concepts with clarity and consistency.',
  },
  {
    number: '03',
    title: 'Practise',
    description: 'Solve questions and revise what you have learned.',
  },
  {
    number: '04',
    title: 'Review',
    description: 'Identify weak areas and improve your approach.',
  },
  {
    number: '05',
    title: 'Prepare',
    description: 'Continue targeted practice before the examination.',
  },
];

export const whyPoints: NumberedStep[] = [
  {
    number: '01',
    title: 'Purposeful focus',
    description:
      'Preparation centred on the demands of entrance examinations and the academic goals of each student.',
  },
  {
    number: '02',
    title: 'Practice with intention',
    description:
      'An emphasis on learning, question practice, review, and the consistency that preparation requires.',
  },
  {
    number: '03',
    title: 'Clear next steps',
    description:
      'Prospective students and parents can enquire directly about courses, schedules, and admissions.',
  },
];

export const heroFeatures = [
  { label: 'Focused Preparation', detail: 'A clear direction for entrance exams' },
  { label: 'Practice & Progress', detail: 'Learning reinforced through questions' },
  { label: 'Student Support', detail: 'Guidance for students and parents' },
] as const;

export const featureHighlights: FeatureHighlight[] = [
  {
    icon: 'focus',
    title: 'Focused Preparation',
    description: 'A clear direction for NEET and NDA entrance examinations.',
  },
  {
    icon: 'structure',
    title: 'Structured Learning',
    description: 'A simple path from understanding concepts to applying them.',
  },
  {
    icon: 'practice',
    title: 'Practice with Purpose',
    description: 'Question practice and revision that reinforce understanding.',
  },
  {
    icon: 'guidance',
    title: 'Clear Guidance',
    description: 'Direct answers about courses, schedules and admissions.',
  },
  {
    icon: 'support',
    title: 'Student Support',
    description: 'Guidance for students and parents at every enquiry.',
  },
];

export const aboutStats = [
  { value: '06', label: 'Entrance exams' },
  { value: '04', label: 'Course formats' },
  { value: '05', label: 'Preparation stages' },
  { value: 'Kerala', label: 'Neyyattinkara centre' },
];

export const updates: UpdateItem[] = [
  {
    icon: 'book',
    label: 'Programmes',
    title: 'NEET & NDA preparation',
    description:
      'Explore the two entrance coaching programmes offered at Edumate, including focus areas and preparation themes.',
    linkLabel: 'View courses',
    href: '/courses',
  },
  {
    icon: 'message',
    label: 'Admissions',
    title: 'Enquiries are welcome',
    description:
      'Share your details and course of interest. Edumate can follow up about schedules, eligibility and admission information.',
    linkLabel: 'Start an enquiry',
    href: '/contact',
  },
  {
    icon: 'pin',
    label: 'Visit',
    title: 'Nilamel–Alummoodu, Neyyattinkara',
    description:
      'Find Edumate in Neyyattinkara, Kerala. Open the map search for directions to the locality.',
    linkLabel: 'Contact & directions',
    href: '/contact',
  },
];
