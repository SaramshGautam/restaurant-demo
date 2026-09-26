import { useState } from 'react';
import { restaurant, faqs } from '../data/restaurant.js';

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '19:00', guests: '2', notes: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.date) errs.date = 'Please choose a date.';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true); // Demo only: nothing is sent anywhere
  };

  if (sent) {
    return (
      <div className="card confirm" role="status">
        <div className="confirm-icon" aria-hidden="true">✓</div>
        <h3>You’re booked, {form.name.split(' ')[0]}!</h3>
        <p className="muted">
          Table for {form.guests} on {new Date(form.date + 'T00:00').toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })} at {form.time}.
          A confirmation would be sent to {form.email}.
        </p>
        <p className="muted small">(This is a demo — no booking was actually made.)</p>
        <button className="btn btn-ghost" onClick={() => setSent(false)}>Make another booking</button>
      </div>
    );
  }

  return (
    <form className="card form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label className="field">
          <span>Name</span>
          <input value={form.name} onChange={update('name')} autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <em className="error">{errors.name}</em>}
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" value={form.email} onChange={update('email')} autoComplete="email" aria-invalid={!!errors.email} />
          {errors.email && <em className="error">{errors.email}</em>}
        </label>
        <label className="field">
          <span>Date</span>
          <input type="date" min={todayISO()} value={form.date} onChange={update('date')} aria-invalid={!!errors.date} />
          {errors.date && <em className="error">{errors.date}</em>}
        </label>
        <label className="field">
          <span>Time</span>
          <select value={form.time} onChange={update('time')}>
            {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Guests</span>
          <select value={form.guests} onChange={update('guests')}>
            {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
              <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>
            ))}
          </select>
        </label>
        <label className="field field-wide">
          <span>Special requests <small className="muted">(optional)</small></span>
          <textarea rows="3" value={form.notes} onChange={update('notes')} placeholder="Allergies, celebrations, high chair…" />
        </label>
      </div>
      <button className="btn btn-block" type="submit">Request reservation</button>
    </form>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div className={`faq-item ${open === i ? 'open' : ''}`} key={f.q}>
          <button
            className="faq-q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{f.q}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div className="faq-a" hidden={open !== i}>
            <p className="muted">{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function More() {
  const tel = restaurant.phone.replace(/[^\d]/g, '');
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Plan your visit</p>
          <h1>More</h1>
          <p className="muted">Reservations, hours, location, FAQs and everything else.</p>
          <nav className="chips scroll-x jump" aria-label="Jump to section">
            <a className="chip" href="#reserve" onClick={(e) => { e.preventDefault(); document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' }); }}>Reserve</a>
            <a className="chip" href="#visit" onClick={(e) => { e.preventDefault(); document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' }); }}>Hours &amp; location</a>
            <a className="chip" href="#events" onClick={(e) => { e.preventDefault(); document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }); }}>Private events</a>
            <a className="chip" href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }}>FAQ</a>
          </nav>
        </div>
      </section>

      <section className="section" id="reserve">
        <div className="container split split-form">
          <div>
            <p className="eyebrow">Reservations</p>
            <h2>Book a table</h2>
            <p className="muted">
              Parties of up to 10 can book online. For larger groups, call us at{' '}
              <a href={`tel:${tel}`}>{restaurant.phone}</a>.
            </p>
          </div>
          <Reservation />
        </div>
      </section>

      <section className="section section-alt" id="visit">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <h3>Opening hours</h3>
              <ul className="hours">
                {restaurant.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span className={h.time === 'Closed' ? 'closed' : ''}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Find us</h3>
              <div className="map-placeholder" aria-hidden="true">
                <span>📍</span>
              </div>
              <p>{restaurant.address}</p>
              <div className="contact-actions">
                <a className="btn btn-small" href={mapsUrl} target="_blank" rel="noreferrer">Directions</a>
                <a className="btn btn-small btn-ghost" href={`tel:${tel}`}>Call</a>
                <a className="btn btn-small btn-ghost" href={`mailto:${restaurant.email}`}>Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="events">
        <div className="container grid-3">
          <div className="card highlight">
            <span className="highlight-icon" aria-hidden="true">🎉</span>
            <h3>Private dining</h3>
            <p className="muted">Our back room seats 30 for birthdays, rehearsal dinners and team nights.</p>
          </div>
          <div className="card highlight">
            <span className="highlight-icon" aria-hidden="true">🥡</span>
            <h3>Takeout &amp; catering</h3>
            <p className="muted">Family-style trays for 10–100 people. Order 48 hours ahead.</p>
          </div>
          <div className="card highlight">
            <span className="highlight-icon" aria-hidden="true">🎁</span>
            <h3>Gift cards</h3>
            <p className="muted">Available in any amount at the host stand or by phone.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="faq">
        <div className="container narrow">
          <p className="eyebrow center">Questions</p>
          <h2 className="center">Frequently asked</h2>
          <Faq />
        </div>
      </section>
    </>
  );
}
