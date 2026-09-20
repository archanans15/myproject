import type { WeddingConfig, RSVPResponse, GuestWish } from '../types/invitation';
import { DEFAULT_WEDDING_CONFIG, INITIAL_WISHES } from './defaultData';

const RSVP_KEY = 'wedding_invitation_rsvps_v2';
const WISHES_KEY = 'wedding_invitation_wishes_v2';

export function getSavedConfig(): WeddingConfig {
  return DEFAULT_WEDDING_CONFIG;
}

export function getSavedRSVPs(): RSVPResponse[] {
  try {
    const saved = localStorage.getItem(RSVP_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load RSVPs', e);
  }
  return [];
}

export function saveRSVP(rsvp: Omit<RSVPResponse, 'id' | 'timestamp'>): RSVPResponse {
  const rsvps = getSavedRSVPs();
  const newRsvp: RSVPResponse = {
    ...rsvp,
    id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString()
  };
  const updated = [newRsvp, ...rsvps];
  try {
    localStorage.setItem(RSVP_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save RSVP', e);
  }
  return newRsvp;
}

export function getSavedWishes(): GuestWish[] {
  try {
    const saved = localStorage.getItem(WISHES_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load wishes', e);
  }
  return INITIAL_WISHES;
}

export function saveWish(wish: Omit<GuestWish, 'id' | 'timestamp'>): GuestWish {
  const wishes = getSavedWishes();
  const newWish: GuestWish = {
    ...wish,
    id: `wish_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString()
  };
  const updated = [newWish, ...wishes];
  try {
    localStorage.setItem(WISHES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save wish', e);
  }
  return newWish;
}

export function getGuestNameFromUrl(): string | null {
  const searchParams = new URLSearchParams(window.location.search);
  const guest = searchParams.get('guest') || searchParams.get('to') || searchParams.get('name');
  if (guest) {
    return decodeURIComponent(guest).trim();
  }
  return null;
}
