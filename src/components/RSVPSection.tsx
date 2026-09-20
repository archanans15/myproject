import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, HeartHandshake } from 'lucide-react';
import type { WeddingConfig, RSVPResponse } from '../types/invitation';
import { getSavedRSVPs, saveRSVP } from '../utils/storage';

interface RSVPSectionProps {
  config: WeddingConfig;
  defaultGuestName?: string | null;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ config, defaultGuestName }) => {
  const [guestName, setGuestName] = useState(defaultGuestName || '');
  const [attending, setAttending] = useState<'yes' | 'no' | 'maybe'>('yes');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEvents, setSelectedEvents] = useState<string[]>(
    config.events.map((e) => e.id)
  );

  const [submitted, setSubmitted] = useState(false);
  const [rsvpsList, setRsvpsList] = useState<RSVPResponse[]>(getSavedRSVPs());

  const handleEventToggle = (eventId: string) => {
    if (selectedEvents.includes(eventId)) {
      setSelectedEvents(selectedEvents.filter((id) => id !== eventId));
    } else {
      setSelectedEvents([...selectedEvents, eventId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const newRsvp = saveRSVP({
      guestName,
      attending,
      guestCount,
      eventsAttending: selectedEvents,
      phone,
      message
    });

    setRsvpsList([newRsvp, ...rsvpsList]);
    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="rsvp-section section-padding" id="rsvp">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow font-sub">ARE YOU ATTENDING?</span>
          <h2 className="section-title">RSVP & Confirmation</h2>
          <div className="title-underline"></div>
        </div>

        <div className="rsvp-card glass-morphism">
          {submitted ? (
            <div className="rsvp-success-box text-center">
              <CheckCircle2 size={56} className="gold-icon icon-glow animate-bounce-slow" />
              <h3 className="rsvp-success-title">Thank You, {guestName}!</h3>
              <p className="rsvp-success-msg">
                Your RSVP response has been successfully received. We cannot wait to celebrate with you!
              </p>
              <button
                className="btn-secondary-gold margin-top-md"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rsvp-form">
              <div className="form-group">
                <label className="form-label font-sub">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar & Family"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label className="form-label font-sub">Will you attend? *</label>
                  <select
                    value={attending}
                    onChange={(e) => setAttending(e.target.value as 'yes' | 'no' | 'maybe')}
                    className="form-input"
                  >
                    <option value="yes">🎉 Yes, Joyfully Attending!</option>
                    <option value="maybe">🤔 Regretfully Uncertain</option>
                    <option value="no">🙏 Unable to Attend</option>
                  </select>
                </div>

                {attending === 'yes' && (
                  <div className="form-group flex-1">
                    <label className="form-label font-sub">Number of Guests</label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={guestCount}
                      onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
                      className="form-input"
                    />
                  </div>
                )}
              </div>

              {attending === 'yes' && (
                <div className="form-group">
                  <label className="form-label font-sub">Which events will you join?</label>
                  <div className="events-checkbox-grid">
                    {config.events.map((evt) => (
                      <label key={evt.id} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={selectedEvents.includes(evt.id)}
                          onChange={() => handleEventToggle(evt.id)}
                        />
                        <span>{evt.title}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="form-group">
                <label className="form-label font-sub">Phone Number (Optional)</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label font-sub">Special Notes / Dietary Wishes</label>
                <textarea
                  rows={3}
                  placeholder="Any dietary preferences or special wishes for the couple..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-input textarea-input"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary-gold btn-full">
                <Send size={18} /> Confirm My RSVP
              </button>
            </form>
          )}

          {rsvpsList.length > 0 && (
            <div className="rsvp-count-summary font-sub text-center margin-top-md">
              <HeartHandshake size={16} className="inline-icon gold-icon" />
              <span> {rsvpsList.filter(r => r.attending === 'yes').length} Guests Confirmed Attending!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
