export interface EventDetails {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapUrl: string;
  dressCode?: string;
  iconName: 'heart' | 'sparkles' | 'ring' | 'glass' | 'music' | 'calendar';
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
}

export interface WeddingConfig {
  groomName: string;
  brideName: string;
  groomTitle?: string;
  brideTitle?: string;
  groomParents: string;
  brideParents: string;
  weddingDate: string; // e.g. "2026-11-28T10:30:00"
  weddingTimeFormatted: string;
  tagline: string;
  welcomeMessage: string;
  coupleBio: string;
  howWeMet: string;
  groomBio: string;
  brideBio: string;
  groomPhoto: string;
  bridePhoto: string;
  coupleHeroPhoto: string;
  events: EventDetails[];
  venue: {
    name: string;
    address: string;
    city: string;
    mapEmbedUrl: string;
    directionsUrl: string;
    googleCalendarUrl: string;
  };
  gallery: GalleryPhoto[];
  theme: 'royal-gold' | 'rose-gold' | 'emerald-gold' | 'midnight-luxury';
  bgMusicUrl: string;
}

export interface RSVPResponse {
  id: string;
  guestName: string;
  attending: 'yes' | 'no' | 'maybe';
  guestCount: number;
  eventsAttending: string[];
  phone: string;
  message: string;
  timestamp: string;
}

export interface GuestWish {
  id: string;
  name: string;
  relation: string;
  wish: string;
  timestamp: string;
}
