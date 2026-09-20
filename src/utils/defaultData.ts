import type { WeddingConfig, GuestWish } from '../types/invitation';

export const DEFAULT_WEDDING_CONFIG: WeddingConfig = {
  groomName: 'Rakesh',
  brideName: 'Archana',
  groomTitle: 'Son of Mr. Murugan & Mrs. Sujatha',
  brideTitle: 'Daughter of Mr. Nadarajan & Mrs. Sushama',
  groomParents: 'Mr. Murugan & Mrs. Sujatha',
  brideParents: 'Mr. Nadarajan & Mrs. Sushama',
  weddingDate: '2026-11-29T10:30:00',
  weddingTimeFormatted: 'Sunday, November 29, 2026 at 10:30 AM',
  tagline: 'Together With Their Families',
  welcomeMessage: 'We request the honour of your presence at the celebration of our sacred marriage union.',
  coupleBio: 'Two hearts, two souls, one beautiful journey starting forever.',
  howWeMet: 'With the blessings of our families, we take our step together into a lifetime of happiness, love, and togetherness.',
  groomBio: 'Gentle, loving, and ambitious.',
  brideBio: 'Graceful, creative, and joyful.',
  groomPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  bridePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  coupleHeroPhoto: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
  events: [
    {
      id: 'muhurtham',
      title: 'Sacred Wedding Ceremony (Muhurtham)',
      subtitle: 'The Shubh Muhurtham & Phere',
      date: 'Sunday, November 29, 2026',
      time: '10:30 AM (Auspicious Muhurtham)',
      location: 'Siva Sakthi Auditorium',
      address: 'Kaliyakkavilai',
      mapUrl: 'https://maps.app.goo.gl/eRbNHjLbFMDdgQT49',
      dressCode: 'Royal Traditional Indian Attire',
      iconName: 'sparkles'
    },
    {
      id: 'reception',
      title: 'Grand Wedding Reception',
      subtitle: 'Evening Celebrations & Dinner',
      date: 'Sunday, November 29, 2026',
      time: '06:30 PM Onwards',
      location: 'Imperial Auditorium',
      address: 'Nagercoil',
      mapUrl: 'https://maps.app.goo.gl/8e2YuSZCfpwRwf618?g_st=aw',
      dressCode: 'Formal Evening Wear / Festive Traditional',
      iconName: 'glass'
    }
  ],
  venue: {
    name: 'Siva Sakthi Auditorium (Wedding) & Imperial Auditorium (Reception)',
    address: 'Wedding: Kaliyakkavilai | Reception: Nagercoil',
    city: 'Kaliyakkavilai & Nagercoil, Tamil Nadu',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0!2d77.14!3d8.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTknMTIuMCJOIDc3wrAwOCczNi4wIkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    directionsUrl: 'https://maps.app.goo.gl/eRbNHjLbFMDdgQT49',
    googleCalendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rakesh+%26+Archana+Wedding&dates=20261129T050000Z/20261129T180000Z&details=Celebrating+the+marriage+of+Rakesh+and+Archana&location=Siva+Sakthi+Auditorium+Kaliyakkavilai'
  },
  gallery: [
    {
      id: 'g1',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800',
      caption: 'Golden Moments'
    },
    {
      id: 'g2',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
      caption: 'Laughter & Togetherness'
    },
    {
      id: 'g3',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800',
      caption: 'Eternal Promise'
    },
    {
      id: 'g4',
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
      caption: 'Blessings & Joy'
    }
  ],
  theme: 'royal-gold',
  bgMusicUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-acoustic-112191.mp3'
};

export const INITIAL_WISHES: GuestWish[] = [
  {
    id: 'w1',
    name: 'Uncle & Family',
    relation: 'Family',
    wish: 'Wishing Rakesh & Archana a blessed marriage filled with love, laughter, and lifelong togetherness!',
    timestamp: '2026-09-19T10:00:00'
  }
];
