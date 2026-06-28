import { images } from './images';

export type Treatment = {
  slug: string;
  name: string;
  category: 'Skin Care' | 'Facials' | 'Body Therapy' | 'Massage' | 'Beauty';
  tagline: string;
  image: string;
  overview: string;
  benefits: string[];
  duration: string;
  recovery: string;
  priceFrom: number;
};

export const treatments: Treatment[] = [
  {
    slug: 'hydra-facial',
    name: 'Hydra Facial',
    category: 'Facials',
    tagline: 'Deep hydration and instant luminosity',
    image: images.hydrafacial,
    overview:
      'A signature multi step ritual that cleanses, exfoliates, extracts and infuses skin with intensely hydrating serums. The result is a luminous, plumped complexion with visibly refined pores and a dewy, lit from within glow.',
    benefits: ['Instant radiance and hydration', 'Refines pores and texture', 'Plumps fine lines', 'Zero downtime'],
    duration: '60 minutes',
    recovery: 'None. Return to your day glowing.',
    priceFrom: 45000,
  },
  {
    slug: 'deep-cleansing-facial',
    name: 'Deep Cleansing Facial',
    category: 'Facials',
    tagline: 'A reset for congested, tired skin',
    image: images.deepCleansing,
    overview:
      'A purifying facial designed to decongest pores, lift away impurities and rebalance the complexion. Gentle steam, careful extractions and a calming mask leave skin clarified, soft and beautifully clean.',
    benefits: ['Clears congestion and blackheads', 'Balances oil', 'Soothes and softens', 'Brightens dull skin'],
    duration: '75 minutes',
    recovery: 'Mild warmth that settles within an hour.',
    priceFrom: 38000,
  },
  {
    slug: 'chemical-peel',
    name: 'Chemical Peel',
    category: 'Skin Care',
    tagline: 'Resurface for smoother, brighter skin',
    image: images.chemicalPeel,
    overview:
      'A medical grade resurfacing treatment that gently dissolves dull surface cells to reveal fresher, more even skin beneath. Tailored to your concern, from pigmentation to texture, for a refined and radiant finish.',
    benefits: ['Evens tone and pigmentation', 'Smooths texture', 'Softens fine lines', 'Boosts cell renewal'],
    duration: '45 minutes',
    recovery: 'Light flaking for two to four days.',
    priceFrom: 50000,
  },
  {
    slug: 'microneedling',
    name: 'Microneedling',
    category: 'Skin Care',
    tagline: 'Collagen renewal for firmer skin',
    image: images.microneedling,
    overview:
      'Precision micro channelling stimulates the skin to rebuild collagen and elastin. Ideal for scarring, enlarged pores and loss of firmness, it gradually reveals a smoother, tighter and more youthful complexion.',
    benefits: ['Firms and tightens', 'Softens scarring', 'Refines pores', 'Improves product absorption'],
    duration: '75 minutes',
    recovery: 'Redness for twenty four to forty eight hours.',
    priceFrom: 65000,
  },
  {
    slug: 'body-polish',
    name: 'Body Polish',
    category: 'Body Therapy',
    tagline: 'Silken, glowing skin head to toe',
    image: images.bodyPolish,
    overview:
      'A full body exfoliation ritual using fine mineral scrubs and nourishing oils to slough away dullness. Skin is left impossibly soft, luminous and deeply conditioned, wrapped in a veil of subtle fragrance.',
    benefits: ['Silky smooth skin', 'Even, glowing tone', 'Deeply nourishing', 'Relaxing and sensorial'],
    duration: '60 minutes',
    recovery: 'None.',
    priceFrom: 42000,
  },
  {
    slug: 'massage-therapy',
    name: 'Massage Therapy',
    category: 'Massage',
    tagline: 'Release tension, restore balance',
    image: images.massageTherapy,
    overview:
      'A bespoke therapeutic massage tailored to your body. Skilled hands ease muscular tension, improve circulation and quiet the mind, guiding you into a state of deep, restorative calm.',
    benefits: ['Relieves muscle tension', 'Improves circulation', 'Reduces stress', 'Restores deep calm'],
    duration: '60 to 90 minutes',
    recovery: 'None.',
    priceFrom: 40000,
  },
  {
    slug: 'aromatherapy',
    name: 'Aromatherapy',
    category: 'Massage',
    tagline: 'Healing through scent and touch',
    image: images.aromatherapy,
    overview:
      'A sensorial journey blending essential oils with gentle, flowing massage. Each botanical is chosen to soothe the nervous system, lift the mood and leave you grounded, balanced and beautifully at ease.',
    benefits: ['Calms the nervous system', 'Lifts mood', 'Eases tension', 'Deeply grounding'],
    duration: '75 minutes',
    recovery: 'None.',
    priceFrom: 44000,
  },
  {
    slug: 'hot-stone-massage',
    name: 'Hot Stone Massage',
    category: 'Massage',
    tagline: 'Warmth that melts away tension',
    image: images.hotStone,
    overview:
      'Smooth, heated volcanic stones glide over the body to release deep muscular tension and improve circulation. The radiant warmth penetrates tired muscles for a profoundly relaxing and restorative experience.',
    benefits: ['Melts deep tension', 'Improves circulation', 'Eases stiffness', 'Profoundly relaxing'],
    duration: '90 minutes',
    recovery: 'None.',
    priceFrom: 52000,
  },
  {
    slug: 'skin-brightening',
    name: 'Skin Brightening',
    category: 'Skin Care',
    tagline: 'Luminous, even, radiant tone',
    image: images.skinBrightening,
    overview:
      'A targeted brightening protocol that fades pigmentation, evens skin tone and restores natural radiance. Active vitamin rich serums and gentle resurfacing reveal a clearer, more luminous complexion over time.',
    benefits: ['Fades dark spots', 'Evens skin tone', 'Restores radiance', 'Hydrates and protects'],
    duration: '60 minutes',
    recovery: 'None.',
    priceFrom: 48000,
  },
  {
    slug: 'acne-treatment',
    name: 'Acne Treatment',
    category: 'Skin Care',
    tagline: 'Clear, calm, confident skin',
    image: images.acne,
    overview:
      'A clinical approach to active breakouts and congestion. We calm inflammation, clear pores and rebalance the skin with targeted actives, guiding you toward clearer, healthier and more resilient skin.',
    benefits: ['Clears active breakouts', 'Calms inflammation', 'Reduces oil', 'Prevents future flare ups'],
    duration: '75 minutes',
    recovery: 'Mild redness that settles quickly.',
    priceFrom: 40000,
  },
  {
    slug: 'anti-aging-therapy',
    name: 'Anti Aging Therapy',
    category: 'Skin Care',
    tagline: 'Lift, firm and rejuvenate',
    image: images.antiAging,
    overview:
      'An advanced rejuvenation ritual combining firming actives, sculpting massage and collagen boosting technology. Designed to smooth fine lines, restore firmness and reveal a visibly younger, more radiant complexion.',
    benefits: ['Smooths fine lines', 'Firms and lifts', 'Boosts collagen', 'Restores luminosity'],
    duration: '90 minutes',
    recovery: 'None.',
    priceFrom: 70000,
  },
  {
    slug: 'body-sculpting',
    name: 'Body Sculpting',
    category: 'Body Therapy',
    tagline: 'Contour, tone and refine',
    image: images.bodySculpting,
    overview:
      'A non invasive contouring treatment that targets stubborn areas, smooths the appearance of the skin and helps define your natural silhouette. A confidence ritual that pairs technology with expert hands.',
    benefits: ['Defines contours', 'Smooths skin', 'Targets stubborn areas', 'No downtime'],
    duration: '60 minutes',
    recovery: 'None.',
    priceFrom: 60000,
  },
  {
    slug: 'waxing',
    name: 'Waxing',
    category: 'Beauty',
    tagline: 'Smooth, cared for skin',
    image: images.waxing,
    overview:
      'Gentle, precise waxing using premium soothing formulas that respect sensitive skin. Expert technique ensures a smooth, clean and comfortable finish that lasts, with minimal irritation.',
    benefits: ['Long lasting smoothness', 'Gentle on skin', 'Precise and hygienic', 'Soothing aftercare'],
    duration: '20 to 45 minutes',
    recovery: 'Mild sensitivity for a few hours.',
    priceFrom: 12000,
  },
  {
    slug: 'eyebrow-services',
    name: 'Eyebrow Services',
    category: 'Beauty',
    tagline: 'Framed to perfection',
    image: images.eyebrow,
    overview:
      'Bespoke brow shaping, tinting and lamination that frames the face and elevates your natural features. Our artists craft brows that suit your unique bone structure for an effortlessly polished look.',
    benefits: ['Defines and frames the face', 'Tailored to your features', 'Long lasting shape', 'Polished finish'],
    duration: '30 to 45 minutes',
    recovery: 'None.',
    priceFrom: 10000,
  },
  {
    slug: 'professional-makeup',
    name: 'Professional Makeup',
    category: 'Beauty',
    tagline: 'Radiance for every occasion',
    image: images.makeup,
    overview:
      'Editorial and bridal makeup artistry using luxury products and flawless technique. Whether a soft natural glow or full glamour, our artists create a look that celebrates you and lasts all day and night.',
    benefits: ['Flawless, lasting finish', 'Tailored to your event', 'Luxury products', 'Photo ready glow'],
    duration: '60 to 90 minutes',
    recovery: 'None.',
    priceFrom: 35000,
  },
];

export const treatmentsByCategory = (cat: Treatment['category']) =>
  treatments.filter((t) => t.category === cat);

export const stats = [
  { value: 12, suffix: '+', label: 'Professional Therapists' },
  { value: 8, suffix: '', label: 'Luxury Treatment Rooms' },
  { value: 40, suffix: '+', label: 'Premium Products' },
  { value: 9500, suffix: '+', label: 'Satisfied Clients' },
  { value: 11, suffix: '', label: 'Years Of Experience' },
];

export const trustIndicators = [
  { label: 'Professional Therapists', value: 'Certified experts' },
  { label: 'Luxury Treatment Rooms', value: 'Private sanctuaries' },
  { label: 'Premium Products', value: 'World class brands' },
  { label: 'Personalized Care', value: 'Bespoke to you' },
];

export const philosophy = [
  {
    no: '01',
    title: 'The Arrival',
    text: 'From the moment you step through our doors, the world softens. Warm light, gentle fragrance and absolute calm welcome you into a sanctuary made entirely for you.',
    image: images.storytelling1,
  },
  {
    no: '02',
    title: 'The Ritual',
    text: 'Every treatment begins with listening. We study your skin, understand your story and craft a ritual that is yours alone, performed by hands that have perfected their art.',
    image: images.storytelling3,
  },
  {
    no: '03',
    title: 'The Renewal',
    text: 'You leave not only more beautiful, but more yourself. Restored, radiant and quietly confident, carrying the calm of the sanctuary out into the world.',
    image: images.storytelling2,
  },
];

export const spaces = [
  { name: 'Reception', desc: 'A serene welcome wrapped in warm light and soft fragrance.', image: images.reception },
  { name: 'Treatment Rooms', desc: 'Private sanctuaries designed for absolute calm and care.', image: images.treatmentRoom },
  { name: 'Massage Suites', desc: 'Intimate spaces where tension dissolves into stillness.', image: images.massageSuite },
  { name: 'Facial Rooms', desc: 'Where skin is studied, nurtured and revealed at its finest.', image: images.facialRoom },
  { name: 'Relaxation Lounge', desc: 'Linger a little longer in cushioned, candlelit comfort.', image: images.lounge },
  { name: 'Steam Room', desc: 'Cleansing warmth that softens the body and clears the mind.', image: images.steamRoom },
  { name: 'Luxury Products', desc: 'A curated wall of the worlds finest skincare and oils.', image: images.products },
];

export type Membership = {
  name: string;
  price: number;
  period: string;
  blurb: string;
  featured?: boolean;
  perks: string[];
};

export const memberships: Membership[] = [
  {
    name: 'Monthly Wellness',
    price: 65000,
    period: 'per month',
    blurb: 'A gentle monthly rhythm of self care to keep your skin glowing.',
    perks: [
      'One signature facial each month',
      'Ten percent off additional treatments',
      'Priority booking window',
      'Complimentary skin consultation',
    ],
  },
  {
    name: 'Premium Wellness',
    price: 120000,
    period: 'per month',
    blurb: 'A deeper devotion to your skin and body, beautifully balanced.',
    perks: [
      'Two signature treatments each month',
      'Fifteen percent off all services',
      'Complimentary body polish quarterly',
      'Welcome gift and seasonal rituals',
      'Priority booking window',
    ],
  },
  {
    name: 'Luxury Wellness',
    price: 220000,
    period: 'per month',
    blurb: 'The full sanctuary experience for the truly devoted.',
    featured: true,
    perks: [
      'Four premium treatments each month',
      'Twenty percent off all services',
      'Monthly massage and facial',
      'Dedicated personal therapist',
      'Exclusive member events',
      'Complimentary refreshment ritual',
    ],
  },
  {
    name: 'VIP Wellness',
    price: 420000,
    period: 'per month',
    blurb: 'Unlimited indulgence with white glove, private attention.',
    perks: [
      'Unlimited signature treatments',
      'Twenty five percent off premium services',
      'Private suite access',
      'On call concierge booking',
      'Bespoke seasonal skin programmes',
      'Two guest passes each month',
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
  video?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Adaeze Okwu',
    role: 'Hydra Facial Member',
    rating: 5,
    quote:
      'I have never felt so cared for. My skin has completely transformed and the entire experience feels like a private retreat. Skin Therapy is the only place I trust with my face.',
    image: images.client1,
    video: true,
  },
  {
    name: 'Ifeoma Bassey',
    role: 'Luxury Wellness Member',
    rating: 5,
    quote:
      'The moment you walk in, the world goes quiet. Every therapist is an artist. I leave glowing every single time and people always ask what I am doing differently.',
    image: images.client2,
  },
  {
    name: 'Tamara Wokoma',
    role: 'Bridal Glow Client',
    rating: 5,
    quote:
      'They prepared my skin for my wedding and I have never looked more radiant. The care, the calm, the attention to detail. This is luxury done properly in Port Harcourt.',
    image: images.client3,
    video: true,
  },
  {
    name: 'Zainab Lawal',
    role: 'Anti Aging Therapy Client',
    rating: 5,
    quote:
      'After years of searching, I finally found a spa that delivers real results. My fine lines have softened and my confidence has soared. Truly world class hands.',
    image: images.client1,
  },
  {
    name: 'Chioma Nwankwo',
    role: 'Monthly Wellness Member',
    rating: 5,
    quote:
      'My monthly visit is sacred. It is the one hour where I belong completely to myself. The space is breathtaking and the results speak for themselves.',
    image: images.client2,
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'How do I book an appointment?',
    a: 'You can book instantly through our online booking experience, send us a message on WhatsApp, or call the spa directly. Our concierge will help you choose the perfect treatment for your needs.',
  },
  {
    q: 'Where is Skin Therapy located?',
    a: 'We are located at 122c General Diriyai Lane, New GRA, Port Harcourt, Rivers State. Private parking is available and our reception will guide you from the moment you arrive.',
  },
  {
    q: 'How early should I arrive for my treatment?',
    a: 'We recommend arriving fifteen minutes before your appointment so you can settle in, enjoy a welcome refreshment and begin your ritual feeling completely at ease.',
  },
  {
    q: 'Do you offer consultations before treatments?',
    a: 'Yes. Every advanced treatment begins with a complimentary skin consultation so we can tailor the experience precisely to your skin and your goals.',
  },
  {
    q: 'Can I purchase a gift card?',
    a: 'Absolutely. Our luxury gift cards are a beautiful gesture for someone you cherish. They can be redeemed against any treatment or membership and never feel ordinary.',
  },
  {
    q: 'What products do you use?',
    a: 'We work exclusively with premium, results driven professional skincare from world class brands, selected for their purity, performance and proven results.',
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-art-of-glass-skin',
    title: 'The Art of Glass Skin',
    excerpt:
      'A complete guide to achieving the luminous, dewy complexion everyone is talking about, built on real skin health rather than filters.',
    category: 'Skin Care Tips',
    date: 'June 2026',
    readTime: '6 minute read',
    image: images.blog1,
    body: [
      'Glass skin is not about perfection. It is about health. The luminous, almost translucent quality comes from skin that is deeply hydrated, gently exfoliated and consistently protected.',
      'It begins with cleansing that respects your barrier, never strips it. Follow with hydrating layers, a treatment serum suited to your concern and a moisturiser that seals everything in.',
      'The non negotiable final step is daily sun protection. Nothing undoes radiance faster than unprotected exposure. Pair your home ritual with a monthly professional facial and the glow becomes effortless.',
    ],
  },
  {
    slug: 'why-your-skin-needs-professional-facials',
    title: 'Why Your Skin Needs Professional Facials',
    excerpt:
      'Home care matters, but there is a reason a professional facial transforms your skin in ways no routine can replicate.',
    category: 'Beauty Advice',
    date: 'May 2026',
    readTime: '5 minute read',
    image: images.blog2,
    body: [
      'Your daily routine maintains your skin. A professional facial elevates it. The difference lies in expertise, technology and ingredients that simply are not available over the counter.',
      'A trained therapist reads your skin in real time, adjusting every step to what your complexion needs that day. Deep yet safe extractions, medical grade actives and sculpting massage deliver results you can see and feel.',
      'Booked monthly, professional facials keep your skin balanced through every season and every stage of life. Think of it as essential maintenance for your most visible asset.',
    ],
  },
  {
    slug: 'building-a-luxury-skincare-ritual',
    title: 'Building a Luxury Skincare Ritual',
    excerpt:
      'Turn your daily routine into a sensorial ritual that nourishes both your skin and your state of mind.',
    category: 'Healthy Lifestyle',
    date: 'May 2026',
    readTime: '7 minute read',
    image: images.blog3,
    body: [
      'Luxury is not measured by the number of products. It is measured by intention. A considered ritual of a few exceptional steps will always outperform a crowded shelf used without thought.',
      'Begin and end each day slowly. Warm your cleanser between your palms. Apply serums with a moment of facial massage. Let each step be a small act of devotion to yourself.',
      'When your skincare becomes a ritual rather than a chore, consistency follows naturally, and consistency is the true secret to beautiful skin.',
    ],
  },
  {
    slug: 'understanding-hyperpigmentation',
    title: 'Understanding Hyperpigmentation',
    excerpt:
      'Dark spots and uneven tone are among the most common concerns we treat. Here is how to fade them safely.',
    category: 'Professional Articles',
    date: 'April 2026',
    readTime: '6 minute read',
    image: images.blog4,
    body: [
      'Hyperpigmentation occurs when areas of skin produce excess melanin, often triggered by sun, inflammation or hormonal shifts. It is common, treatable and best approached with patience.',
      'A professional protocol combines gentle resurfacing, targeted brightening actives and diligent sun protection. Results build gradually, and consistency is essential.',
      'Avoid harsh, unregulated products that promise overnight miracles. They frequently worsen pigmentation. Trust a considered, professional approach for safe, lasting clarity.',
    ],
  },
  {
    slug: 'the-power-of-touch',
    title: 'The Power of Touch in Wellness',
    excerpt:
      'Massage is far more than indulgence. Explore the science of why therapeutic touch heals the body and the mind.',
    category: 'Healthy Lifestyle',
    date: 'April 2026',
    readTime: '5 minute read',
    image: images.blog5,
    body: [
      'Therapeutic touch lowers stress hormones, eases muscular tension and activates the bodys natural rest and restore response. The benefits reach far beyond the treatment room.',
      'Regular massage improves circulation, supports better sleep and quiets a busy mind. In a fast moving world, it is one of the most effective forms of self care available.',
      'At Skin Therapy, every massage is tailored to you, blending technique with intuition to leave you genuinely restored.',
    ],
  },
  {
    slug: 'skincare-through-the-seasons',
    title: 'Skincare Through the Seasons',
    excerpt:
      'Your skin changes with the climate. Learn how to adapt your ritual through the year for lasting balance.',
    category: 'Skin Care Tips',
    date: 'March 2026',
    readTime: '6 minute read',
    image: images.blog6,
    body: [
      'Your skin is responsive. Heat, humidity and changing routines all influence how it behaves, so your ritual should evolve with the seasons rather than stay fixed.',
      'In warmer, humid months, lean toward lightweight hydration and diligent cleansing. When the air is drier, layer richer moisture and protect your barrier.',
      'A seasonal consultation with your therapist ensures your regimen always matches your skins current needs, keeping it balanced and radiant all year.',
    ],
  },
];

export const galleryItems = [
  { image: images.g1, category: 'Facials', span: 'tall' },
  { image: images.g2, category: 'Spa', span: 'wide' },
  { image: images.g3, category: 'Skin Care', span: 'normal' },
  { image: images.g4, category: 'Skin Care', span: 'normal' },
  { image: images.g5, category: 'Products', span: 'tall' },
  { image: images.g6, category: 'Facials', span: 'normal' },
  { image: images.g7, category: 'Products', span: 'normal' },
  { image: images.g8, category: 'Massage', span: 'wide' },
  { image: images.g9, category: 'Spa', span: 'normal' },
  { image: images.g10, category: 'Beauty', span: 'tall' },
  { image: images.g11, category: 'Skin Care', span: 'normal' },
  { image: images.g12, category: 'Massage', span: 'normal' },
] as const;

export const galleryCategories = ['All', 'Facials', 'Skin Care', 'Massage', 'Spa', 'Products', 'Beauty'];

export const therapists = [
  { name: 'Amara Diobu', role: 'Lead Aesthetician', image: images.therapist1, specialty: 'Advanced Facials' },
  { name: 'Ngozi Wari', role: 'Senior Skin Therapist', image: images.therapist2, specialty: 'Skin Rejuvenation' },
  { name: 'Belema Ada', role: 'Massage Specialist', image: images.client3, specialty: 'Therapeutic Bodywork' },
];

export const beforeAfter = [
  {
    title: 'Acne Clarity Programme',
    before: images.acne,
    after: images.skinBrightening,
    weeks: 'Twelve weeks',
    note: 'Active breakouts calmed and clarity restored through our clinical acne protocol.',
  },
  {
    title: 'Brightening Journey',
    before: images.deepCleansing,
    after: images.hydrafacial,
    weeks: 'Eight weeks',
    note: 'Pigmentation softened and tone evened with targeted brightening rituals.',
  },
  {
    title: 'Anti Aging Renewal',
    before: images.antiAging,
    after: images.microneedling,
    weeks: 'Sixteen weeks',
    note: 'Firmer, smoother skin through collagen renewal and sculpting therapy.',
  },
];
