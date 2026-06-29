export const site = {
  name: 'Skin Therapy Beauty and Spa',
  shortName: 'Skin Therapy',
  tagline: 'Where Skin Becomes Art',
  description:
    'Skin Therapy Beauty and Spa is a luxury beauty and wellness destination in Port Harcourt offering advanced facials, skin rejuvenation, body therapy, massage and aesthetic treatments in a serene private sanctuary.',
  city: 'Port Harcourt',
  region: 'Rivers State',
  country: 'Nigeria',
  address: '122c General Diriyai Lane, New GRA, Port Harcourt, Rivers State, Nigeria',
  phoneDisplay: '0912 828 6161',
  phoneIntl: '+2349128286161',
  whatsapp: '2349128286161',
  email: 'hello@skintherapybeauty.com',
  website: 'https://skintherapybeauty.com',
  mapsQuery: 'Skin Therapy Beauty and Spa Port Harcourt',
  mapsEmbed:
    'https://www.google.com/maps?q=Skin%20Therapy%20Beauty%20and%20Spa%20Port%20Harcourt&output=embed',
  hours: [
    { day: 'Monday', time: '10:00 — 19:00' },
    { day: 'Tuesday', time: '10:00 — 19:00' },
    { day: 'Wednesday', time: '10:00 — 19:00' },
    { day: 'Thursday', time: '10:00 — 19:00' },
    { day: 'Friday', time: '10:00 — 19:00' },
    { day: 'Saturday', time: '10:00 — 19:00' },
    { day: 'Sunday', time: 'By Appointment' },
  ],
  socials: {
    instagram: 'https://www.instagram.com/skintherapybeauty',
    facebook: 'https://www.facebook.com/people/Skin-therapy-beauty-and-spa/100090029742393/',
    tiktok: 'https://www.tiktok.com/@skintherapybeauty',
  },
};

// Cinematic hero footage (free stock, CDN hosted). Each falls back to a
// high quality poster photograph if the video fails to load, so the heroes
// always look beautiful. Swap these for the spa's own footage in one place.
export const media = {
  homeVideo:
    'https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-facial-treatment-with-a-towel-on-her-head-44537-large.mp4',
  pageVideo:
    'https://assets.mixkit.co/videos/preview/mixkit-hands-massaging-a-womans-shoulders-44539-large.mp4',
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

export const telLink = `tel:${site.phoneIntl}`;
export const mailLink = `mailto:${site.email}`;

export const nav: { label: string; href: string; children?: { label: string; href: string; desc: string }[] }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Treatments',
    href: '/treatments',
    children: [
      { label: 'All Treatments', href: '/treatments', desc: 'Explore the full menu of luxury services' },
      { label: 'Skin Care', href: '/skin-care', desc: 'Before and after transformations' },
      { label: 'Facials', href: '/facials', desc: 'Bespoke facial rituals for radiant skin' },
      { label: 'Body Therapy', href: '/body-therapy', desc: 'Contouring, polishing and renewal' },
      { label: 'Massage', href: '/massage', desc: 'Restorative bodywork and stillness' },
    ],
  },
  {
    label: 'Experience',
    href: '/gallery',
    children: [
      { label: 'Beauty Gallery', href: '/gallery', desc: 'A visual journey through the spa' },
      { label: 'Testimonials', href: '/testimonials', desc: 'Stories from our cherished guests' },
      { label: 'Blog', href: '/blog', desc: 'The Skin Therapy wellness journal' },
    ],
  },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
];
