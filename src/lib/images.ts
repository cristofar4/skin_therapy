// Central registry of real, high quality photography (Unsplash CDN).
// Authentic spa, skincare, wellness, massage, facial and luxury interior imagery.
// Centralised so art direction can be refined in one place.

export const img = (id: string, w = 1400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  hero: '1540555700478-4be289fbecef', // serene spa towel and orchid
  heroAlt: '1515377905703-c4788e51af15', // back massage
  storytelling1: '1600334129128-685c5582fd35', // luxury spa interior
  storytelling2: '1571019613454-1cb2f99b2d8b', // wellness stretch
  storytelling3: '1556760544-74068565f05c', // facial massage
  philosophy: '1519415510236-718bdfcd89c8', // candle and stones
  // Treatments
  hydrafacial: '1570172619644-dfd03ed5d881',
  deepCleansing: '1556228578-0d85b1a4d571',
  chemicalPeel: '1612908689659-3a4d6e3e5e75',
  microneedling: '1598440947619-2c35fc9aa908',
  bodyPolish: '1519823551278-64ac92734fb1',
  massageTherapy: '1544161515-4ab6ce6db874',
  aromatherapy: '1600618528240-fb9fc964b853',
  hotStone: '1556228841-a3c527ebefe5',
  skinBrightening: '1620916566398-39f1143ab7be',
  acne: '1612817288484-6f916006741a',
  antiAging: '1487412947147-5cebf100ffc2',
  bodySculpting: '1571019614242-c5c5dee9f50b',
  waxing: '1633681926022-84c23e8cb2d6',
  eyebrow: '1583001931096-959e9a1a6223',
  makeup: '1457972729786-0411a3b2b626',
  // Spaces
  reception: '1600334129128-685c5582fd35',
  treatmentRoom: '1629896456000-1d4b1c1d4f4a',
  massageSuite: '1583416750470-965b2707b355',
  facialRoom: '1570172619644-dfd03ed5d881',
  lounge: '1531112094471-93ba3a4f3a8d',
  steamRoom: '1591343395082-e120087004b4',
  products: '1608248543803-ba4f8c70ae0b',
  // People / portraits (authentic, professional)
  therapist1: '1594824476967-48c8b964273f',
  therapist2: '1598960370392-9d96f7e62a3a',
  client1: '1531123897727-8f129e1688ce',
  client2: '1488426862026-3ee34a7d66df',
  client3: '1607746882042-944635dfe10e',
  // Gallery
  g1: '1570172619644-dfd03ed5d881',
  g2: '1540555700478-4be289fbecef',
  g3: '1519823551278-64ac92734fb1',
  g4: '1544161515-4ab6ce6db874',
  g5: '1608248543803-ba4f8c70ae0b',
  g6: '1556228578-0d85b1a4d571',
  g7: '1620916566398-39f1143ab7be',
  g8: '1583416750470-965b2707b355',
  g9: '1531112094471-93ba3a4f3a8d',
  g10: '1457972729786-0411a3b2b626',
  g11: '1598440947619-2c35fc9aa908',
  g12: '1600618528240-fb9fc964b853',
  // Blog
  blog1: '1556228720-195a672e8a03',
  blog2: '1612908689659-3a4d6e3e5e75',
  blog3: '1571019613454-1cb2f99b2d8b',
  blog4: '1620916566398-39f1143ab7be',
  blog5: '1556760544-74068565f05c',
  blog6: '1487412947147-5cebf100ffc2',
};
