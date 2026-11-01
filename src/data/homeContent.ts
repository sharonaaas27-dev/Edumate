export type BatchIcon = 'regular' | 'crash' | 'repeater' | 'foundation';

export interface BatchCourseImage {
  src: string;
  srcSet?: string;
  alt: string;
  width: number;
  height: number;
}

export interface BatchCourse {
  id: 'regular' | 'crash' | 'repeater' | 'foundation';
  number: string;
  name: string;
  title: string;
  eligibility: string;
  description: string;
  features: string[];
  image: BatchCourseImage;
  icon: BatchIcon;
  enquiryValue: string;
  featured?: boolean;
}

export const batchCourses: BatchCourse[] = [
  {
    id: 'regular',
    number: '01',
    name: 'Regular Batch',
    title: 'REGULAR BATCH',
    eligibility: 'For +1 and +2 Students',
    description:
      'Continuous academic and entrance exam preparation alongside school studies.',
    features: [
      'Consistent preparation.',
      'Academic and entrance exam support.',
    ],
    image: {
      src: '/images/classroom-learning-900.jpg',
      srcSet:
        '/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w',
      alt: 'Students attending a classroom coaching session at Edumate',
      width: 900,
      height: 600,
    },
    icon: 'regular',
    enquiryValue: 'Regular Batch',
    featured: true,
  },
  {
    id: 'crash',
    number: '02',
    name: 'Crash Course',
    title: 'CRASH COURSE',
    eligibility: 'For +1 and +2 Students',
    description:
      'Intensive entrance exam preparation with focused learning and exam-oriented practice.',
    features: [
      'Intensive preparation.',
      'Focused exam practice.',
    ],
    image: {
      src: '/images/student-library-focus-800.jpg',
      srcSet:
        '/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w',
      alt: 'A student concentrating while writing an examination and practising questions',
      width: 800,
      height: 533,
    },
    icon: 'crash',
    enquiryValue: 'Crash Course',
  },
  {
    id: 'repeater',
    number: '03',
    name: 'Repeater Batch',
    title: 'REPEATER BATCH',
    eligibility: 'For +2 Completed Students',
    description:
      'Dedicated preparation for students taking another attempt at entrance examinations.',
    features: [
      'Focused learning.',
      'Dedicated entrance exam preparation.',
    ],
    image: {
      src: '/images/library-discussion-900.jpg',
      srcSet:
        '/images/library-discussion-600.jpg 600w, /images/library-discussion-900.jpg 900w',
      alt: 'A student studying seriously with books and notebooks representing dedicated preparation',
      width: 900,
      height: 600,
    },
    icon: 'repeater',
    enquiryValue: 'Repeater Batch',
  },
  {
    id: 'foundation',
    number: '04',
    name: 'Foundation Course',
    title: 'FOUNDATION COURSE',
    eligibility: 'For Class 10 Students',
    description:
      'Build strong fundamentals and prepare early for future entrance examinations.',
    features: [
      'Strong academic foundation.',
      'Early entrance exam preparation.',
    ],
    image: {
      src: '/images/hero-students-classroom-960.jpg',
      srcSet:
        '/images/hero-students-classroom-960.jpg 960w, /images/hero-students-classroom-1920.jpg 1920w',
      alt: 'A group of school students learning in a classroom',
      width: 960,
      height: 640,
    },
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
  eligibility: string;
  description: string;
  image: {
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  };
  imagePhrase?: string;
  features: CourseFeature[];
}

export const courseModes: CourseMode[] = [
  {
    id: 'online',
    name: 'Online Regular Course',
    description:
      'Flexible and effective online learning with expert guidance, regular practice and continuous support.',
    eligibility: 'For +1 & +2 Students',
    image: {
      src: '/images/student-library-focus-1200.jpg',
      srcSet:
        '/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w',
      width: 1200,
      height: 800,
      alt: 'A student studying from a notebook at a desk',
    },
    imagePhrase: 'Learn Anytime, Anywhere',
    features: [
      {
        icon: 'video',
        title: 'Daily Live Classes',
        description: 'Classes conducted 5 days a week.',
      },
      {
        icon: 'exam',
        title: 'Daily Online Exams',
        description: '30-minute online examinations every day.',
      },
      {
        icon: 'doubt',
        title: 'Doubt Clearing Sessions',
        description: "Special sessions to clarify students' doubts.",
      },
      {
        icon: 'rewatch',
        title: 'Class Rewatch Facility',
        description: 'All classes can be re-watched for one year.',
      },
      {
        icon: 'print',
        title: 'Printed Study Materials',
        description: 'Printed study materials provided to students.',
      },
      {
        icon: 'mentor',
        title: 'Telephonic Mentor Support',
        description: 'Personal guidance and support through phone calls.',
      },
    ],
  },
  {
    id: 'offline',
    name: 'Offline Crash Course',
    description:
      'Intensive classroom learning with direct mentor support and focused exam preparation.',
    eligibility: 'For +1 & +2 Students',
    image: {
      src: '/images/classroom-learning-900.jpg',
      srcSet:
        '/images/classroom-learning-600.jpg 600w, /images/classroom-learning-900.jpg 900w',
      width: 900,
      height: 600,
      alt: 'Students taking notes together in a classroom',
    },
    features: [
      {
        icon: 'classroom',
        title: 'Full-Day Classroom Sessions',
        description: 'Intensive full-day classroom learning.',
      },
      {
        icon: 'exam',
        title: 'Daily Examinations',
        description: '30-minute daily examinations.',
      },
      {
        icon: 'doubt',
        title: 'Regular Doubt Clearing Sessions',
        description: 'Dedicated support to resolve doubts.',
      },
      {
        icon: 'student-id',
        title: 'Official Student ID Card',
        description: 'Edumate student ID card issued.',
      },
      {
        icon: 'print',
        title: 'Printed Study Materials',
        description: 'Printed study materials provided.',
      },
      {
        icon: 'mentor',
        title: 'Mentor Support',
        description: 'Guidance and support throughout the preparation.',
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
  {
    id: 'result-one',
    exam: 'NEET',
    image: {
      src: '/images/student-library-focus-800.jpg',
      srcSet:
        '/images/student-library-focus-800.jpg 800w, /images/student-library-focus-1200.jpg 1200w',
      width: 800,
      height: 533,
      alt: 'Photo placeholder for a NEET student achievement profile',
    },
  },
  {
    id: 'result-two',
    exam: 'KEAM',
    image: {
      src: '/images/students-collaborating-900.jpg',
      srcSet:
        '/images/students-collaborating-900.jpg 900w, /images/students-collaborating-1400.jpg 1400w',
      width: 900,
      height: 600,
      alt: 'Photo placeholder for a KEAM student achievement profile',
    },
  },
  {
    id: 'result-three',
    exam: 'JEE',
    image: {
      src: '/images/library-discussion-600.jpg',
      srcSet:
        '/images/library-discussion-600.jpg 600w, /images/library-discussion-900.jpg 900w',
      width: 600,
      height: 400,
      alt: 'Photo placeholder for a JEE student achievement profile',
    },
  },
  {
    id: 'result-four',
    exam: 'NDA',
    image: {
      src: '/images/hero-students-classroom-960.jpg',
      srcSet:
        '/images/hero-students-classroom-960.jpg 960w, /images/hero-students-classroom-1920.jpg 1920w',
      width: 960,
      height: 640,
      alt: 'Photo placeholder for an NDA student achievement profile',
    },
  },
];

export const facilities = [
  {
    icon: 'classroom',
    title: 'Spacious Classrooms',
    description:
      'Comfortable and well-equipped classrooms for focused learning.',
  },
  {
    icon: 'materials',
    title: 'Updated Study Materials',
    description: 'Well-researched and exam-oriented study resources.',
  },
  {
    icon: 'digital',
    title: 'Digital Learning Tools',
    description: 'Modern technology for interactive and effective learning.',
  },
  {
    icon: 'library',
    title: 'Library Facility',
    description: 'Access to a wide range of books and reference materials.',
  },
  {
    icon: 'practice',
    title: 'Test & Practice Labs',
    description: 'Regular tests and practice sessions for exam readiness.',
  },
  {
    icon: 'safe',
    title: 'Safe & Supportive Environment',
    description: 'A positive and secure space for your growth.',
  },
] as const;

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
