import { restaurant, highlights, featured, testimonials } from '../data/restaurant.js';

export default function Home({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">{restaurant.tagline}</p>
          <h1>
            Fire, olive oil <br className="hide-sm" />& good company.
          </h1>
          <p className="hero-lead">{restaurant.description}</p>
          <div className="hero-actions">
            <button className="btn" onClick={() => onNavigate('menu')}>View the menu</button>
            <button className="btn btn-ghost" onClick={() => onNavigate('more')}>Reserve a table</button>
          </div>
          <div className="hero-meta">
            <span>📍 {restaurant.address}</span>
            <span>🕔 Tue–Sun from 5 PM · Sunday brunch</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {highlights.map((h) => (
              <div className="card highlight" key={h.title}>
                <span className="highlight-icon" aria-hidden="true">{h.icon}</span>
                <h3>{h.title}</h3>
                <p className="muted">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">From the hearth</p>
              <h2>Guest favorites</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => onNavigate('menu')}>Full menu →</button>
          </div>
          <div className="grid-3">
            {featured.map((f) => (
              <article className="card dish" key={f.name}>
                <div className="dish-art" aria-hidden="true">{f.emoji}</div>
                <div className="dish-body">
                  <span className="pill">{f.note}</span>
                  <div className="dish-row">
                    <h3>{f.name}</h3>
                    <span className="price">${f.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>A neighborhood kitchen since 2014</h2>
            <p className="muted">
              Chef Elena Marris grew up cooking over open fires in her grandmother’s village in Crete.
              Ember &amp; Olive brings that same simplicity to the city: great ingredients, real fire,
              and a table that always has room for one more.
            </p>
            <button className="btn btn-ghost" onClick={() => onNavigate('more')}>Learn more</button>
          </div>
          <div className="story-art" aria-hidden="true">
            <span>🫒</span><span>🔥</span><span>🍋</span><span>🍷</span>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow center">Kind words</p>
          <h2 className="center">What guests are saying</h2>
          <div className="grid-3">
            {testimonials.map((t) => (
              <figure className="card quote" key={t.name}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption className="muted">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band">
          <h2>Ready for dinner?</h2>
          <p>Book a table in under a minute, or just walk in — we keep seats at the bar.</p>
          <button className="btn btn-light" onClick={() => onNavigate('more')}>Book a table</button>
        </div>
      </section>
    </>
  );
}
