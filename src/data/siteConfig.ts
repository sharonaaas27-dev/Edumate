const env = import.meta.env;

const normalise = (value: string | undefined) => (value ?? '').trim();

// TODO(content): Confirm every contact detail with Edumate before launch.
// Never publish an invented phone number, email address, WhatsApp number,
// social profile, map pin, or office-hours claim.
const contactPhone = normalise(env.VITE_CONTACT_PHONE);
const contactEmail = normalise(env.VITE_CONTACT_EMAIL);
const whatsappNumber = normalise(env.VITE_WHATSAPP_NUMBER).replace(/\D/g, '');

export const siteConfig = {
  name: 'Edumate Entrance Coaching Centre',
  shortName: 'EDUMATE',
  descriptor: 'Entrance Coaching Centre',
  tagline: 'Learn · Grow · Achieve',
  description:
    'Entrance examination preparation for NEET, KEAM, JEE, NDA, CUET and IMUCET, located in Nilamel–Alummoodu, Neyyattinkara, Kerala.',
  location: {
    locality: 'Nilamel–Alummoodu',
    city: 'Neyyattinkara',
    state: 'Kerala',
    country: 'India',
  },
  address: 'Nilamel–Alummoodu, Neyyattinkara, Kerala, India',
  // A map search link is used rather than an embedded pin because an exact
  // campus pin has not been verified. TODO(content): replace with the verified
  // Google Maps place link when supplied by Edumate.
  mapSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Edumate%20Entrance%20Coaching%20Centre%2C%20Nilamel%2C%20Neyyattinkara%2C%20Kerala',
  contact: {
    phone: contactPhone,
    email: contactEmail,
    whatsappNumber,
    telHref: contactPhone ? `tel:${contactPhone.replace(/\s+/g, '')}` : null,
    mailtoHref: contactEmail ? `mailto:${contactEmail}` : null,
    whatsappHref: whatsappNumber ? `https://wa.me/${whatsappNumber}` : null,
  },
  enquiryEndpoint: normalise(env.VITE_ENQUIRY_ENDPOINT),
  navigation: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Courses', to: '/courses' },
    { label: 'Facilities', to: '/facilities' },
    { label: 'Results', to: '/results' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
