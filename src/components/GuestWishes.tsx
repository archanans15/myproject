import React, { useState } from 'react';
import { Heart, MessageSquare, Send } from 'lucide-react';
import type { GuestWish } from '../types/invitation';
import { getSavedWishes, saveWish } from '../utils/storage';

export const GuestWishes: React.FC = () => {
  const [wishes, setWishes] = useState<GuestWish[]>(getSavedWishes());
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Friend');
  const [wishText, setWishText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !wishText.trim()) return;

    const newWish = saveWish({
      name: name.trim(),
      relation: relation.trim() || 'Well Wisher',
      wish: wishText.trim()
    });

    setWishes([newWish, ...wishes]);
    setName('');
    setWishText('');
  };

  return (
    <section className="wishes-section section-padding" id="wishes">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow font-sub">BLESSINGS & LOVE</span>
          <h2 className="section-title">Digital Wishes Wall</h2>
          <div className="title-underline"></div>
        </div>

        <div className="wishes-grid">
          <div className="wish-form-card glass-morphism">
            <h3 className="wish-form-title font-sub">
              <MessageSquare size={20} className="gold-icon inline-icon" /> Leave Your Blessings
            </h3>
            <form onSubmit={handleSubmit} className="wish-form">
              <div className="form-group">
                <label className="form-label font-sub">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label font-sub">Relationship to Couple</label>
                <select
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="form-input"
                >
                  <option value="Family">Family</option>
                  <option value="Close Friend">Close Friend</option>
                  <option value="College Friend">College Friend</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Well Wisher">Well Wisher</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label font-sub">Your Wishes & Blessings *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Write a sweet congratulatory message for Groom & Bride..."
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  className="form-input textarea-input"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary-gold btn-full">
                <Send size={18} /> Post Blessing
              </button>
            </form>
          </div>

          <div className="wishes-feed">
            {wishes.map((item) => (
              <div key={item.id} className="wish-card glass-morphism animate-fade-in">
                <div className="wish-card-header">
                  <div className="wish-author-info">
                    <h4 className="wish-author-name">{item.name}</h4>
                    <span className="wish-relation-badge font-sub">{item.relation}</span>
                  </div>
                  <Heart size={16} fill="#d4af37" color="#d4af37" />
                </div>
                <p className="wish-content font-sub">“{item.wish}”</p>
                <span className="wish-time">
                  {new Date(item.timestamp).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
