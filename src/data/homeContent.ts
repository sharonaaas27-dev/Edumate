export type BatchIcon = 'regular' | 'crash' | 'repeater' | 'foundation';

export interface BatchCourse {
  id: 'regular' | 'crash' | 'repeater' | 'foundation';
  number: string;
  name: string;
  eligibility: string;
  description: string;
  icon: BatchIcon;
  enquiryValue: string;
  featured?: boolean;
}

export const batchCourses: BatchCourse[] = [
  {
    id: 'regular',
    number: '01',
    name: 'Regular Batch',
    eligibility: 'For +1 and +2 Students',
    description:
      'Continuous academic and entrance exam preparation, suitable for consistent preparation alongside school studies.',
    icon: 'regular',
    enquiryValue: 'Regular Batch',
    featured: true,
  },
  {
    id: 'crash',
    number: '02',
    name: 'Crash Course',
    eligibility: 'For +1 and +2 Students',
    description:
      'Intensive entrance exam preparation with focused learning and exam-oriented practice.',
    icon: 'crash',
    enquiryValue: 'Crash Course',
  },
  {
    id: 'repeater',
    number: '03',
    name: 'Repeater Batch',
    eligibility: 'For +2 Completed Students',
    description:
      'Dedicated preparation for another attempt after completing +2.',
    icon: 'repeater',
    enquiryValue: 'Repeater Batch',
  },
  {
    id: 'foundation',
    number: '04',
    name: 'Foundation Course',
    eligibility: 'For Class 10 Students',
    description:
      'Build strong academic fundamentals and begin entrance exam preparation early.',
    icon: 'foundation',
    enquiryValue: 'Foundation Course',
  },
];

export type ExamIcon =
  | 'medical'
  | 'kerala'
  | 'engineering'
  | 'defence'
  | 'university'
  | 'maritime';

export interface EntranceExam {
  id: 'neet' | 'keam' | 'jee' | 'nda' | 'cuet' | 'imucet';
  name: string;
  category: string;
  icon: ExamIcon;
  enquiryValue: string;
}

export const entranceExams: EntranceExam[] = [
  {
    id: 'neet',
    name: 'NEET',
    category: 'Medical',
    icon: 'medical',
    enquiryValue: 'NEET Entrance Coaching',
  },
  {
    id: 'keam',
    name: 'KEAM',
    category: 'Kerala',
    icon: 'kerala',
    enquiryValue: 'KEAM Entrance Coaching',
  },
  {
    id: 'jee',
    name: 'JEE',
    category: 'Engineering',
    icon: 'engineering',
    enquiryValue: 'JEE Entrance Coaching',
  },
  {
    id: 'nda',
    name: 'NDA',
    category: 'Defence',
    icon: 'defence',
    enquiryValue: 'NDA Entrance Coaching',
  },
  {
    id: 'cuet',
    name: 'CUET',
    category: 'University',
    icon: 'university',
    enquiryValue: 'CUET Entrance Coaching',
  },
  {
    id: 'imucet',
    name: 'IMUCET',
    category: 'Maritime',
    icon: 'maritime',
    enquiryValue: 'IMUCET Entrance Coaching',
  },
];

export type CourseFeatureIcon =
  | 'video'
  | 'exam'
  | 'doubt'
  | 'rewatch'
  | 'print'
  | 'mentor'
  | 'classroom'
  | 'student-id';

export interface CourseFeature {
  icon: CourseFeatureIcon;
  title: string;
  description: string;
}

export interface CourseMode {
  id: 'online' | 'offline';
  name: string;
  description: string;
  highlights: string[];
  features: CourseFeature[];
}

export const courseModes: CourseMode[] = [
  {
    id: 'online',
    name: 'Online Regular Course',
    description:
      'Live online classes, daily exams and one year of class access.',
    highlights: ['5 Days a Week', '30-Minute Daily Exams', '1-Year Class Rewatch'],
    features: [
      {
        icon: 'video',
        title: 'Daily Live Classes',
        description: 'Classes conducted 5 days a week.',
      },
      {
        icon: 'exam',
        title: 'Daily Online Exams',
        description: '30-minute examinations every day.',
      },
      {
        icon: 'doubt',
        title: 'Dedicated Doubt Clearing',
        description: 'Dedicated sessions for academic doubts.',
      },
      {
        icon: 'rewatch',
        title: 'Class Rewatch',
        description: 'All classes re-watchable for one year.',
      },
      {
        icon: 'print',
        title: 'Printed Study Materials',
        description: 'Printed materials provided for study.',
      },
      {
        icon: 'mentor',
        title: 'Telephonic Mentor Support',
        description: 'Personal guidance over the phone.',
      },
    ],
  },
  {
    id: 'offline',
    name: 'Offline Crash Course',
    description:
      'Full-day classroom preparation with daily exams and direct support.',
    highlights: ['Full-Day Sessions', '30-Minute Daily Exams', 'Student ID Card'],
    features: [
      {
        icon: 'classroom',
        title: 'Full-Day Classroom Sessions',
        description: 'Classroom learning held through the day.',
      },
      {
        icon: 'exam',
        title: 'Daily Examinations',
        description: '30-minute examinations every day.',
      },
      {
        icon: 'doubt',
        title: 'Regular Doubt Clearing',
        description: 'Regular doubt-clearing sessions.',
      },
      {
        icon: 'student-id',
        title: 'Official Student ID Card',
        description: 'An official student ID card is provided.',
      },
      {
        icon: 'print',
        title: 'Printed Study Materials',
        description: 'Printed materials provided for study.',
      },
      {
        icon: 'mentor',
        title: 'Mentor Support',
        description: 'Personal mentor support for students.',
      },
    ],
  },
];

export const resultsGroupPhoto = {
  src: '/images/students-collaborating-1400.jpg',
  srcSet:
    '/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w',
  width: 1400,
  height: 933,
  alt: 'Students working together around a table, representative group photograph',
};

export const resultSlots = [
  { id: 'result-one', exam: 'NEET' },
  { id: 'result-two', exam: 'KEAM' },
  { id: 'result-three', exam: 'JEE' },
];

export const testimonialSlots = [
  {
    id: 'student-voice-one',
    label: 'Student voice 01',
    message:
      'A verified student testimonial will appear here once it has been shared with permission.',
  },
  {
    id: 'student-voice-two',
    label: 'Student voice 02',
    message:
      'This space is reserved for a verified student experience.',
  },
  {
    id: 'student-voice-three',
    label: 'Student voice 03',
    message:
      'Student feedback will be added after verification and permission.',
  },
];
