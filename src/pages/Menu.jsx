import { useMemo, useState } from 'react';
import { menu, tagInfo } from '../data/restaurant.js';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'v', label: 'Vegetarian' },
  { id: 'vg', label: 'Vegan' },
  { id: 'gf', label: 'Gluten-free' },
];

export default function Menu() {
  const [category, setCategory] = useState('all');
  const [diet, setDiet] = useState('all');
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu
      .filter((s) => category === 'all' || s.id === category)
      .map((s) => ({
        ...s,
        items: s.items.filter((i) => {
          // Vegan dishes also count as vegetarian
          const dietOk =
            diet === 'all' ||
            i.tags.includes(diet) ||
            (diet === 'v' && i.tags.includes('vg'));
          const textOk = !q || `${i.name} ${i.desc}`.toLowerCase().includes(q);
          return dietOk && textOk;
        }),
      }))
      .filter((s) => s.items.length > 0);
  }, [category, diet, query]);

  const reset = () => {
    setCategory('all');
    setDiet('all');
    setQuery('');
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Seasonal · Updated monthly</p>
          <h1>Our Menu</h1>
          <p className="muted">Built for sharing. We recommend 2–3 plates per person.</p>
        </div>
      </section>

      <div className="menu-toolbar">
        <div className="container">
          <div className="chips scroll-x" role="tablist" aria-label="Menu categories">
            <button
              role="tab"
              aria-selected={category === 'all'}
              className={`chip ${category === 'all' ? 'active' : ''}`}
              onClick={() => setCategory('all')}
            >
              Everything
            </button>
            {menu.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={category === s.id}
                className={`chip ${category === s.id ? 'active' : ''}`}
                onClick={() => setCategory(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="menu-controls">
            <label className="search">
              <span className="sr-only">Search the menu</span>
              <span aria-hidden="true">🔍</span>
              <input
                type="search"
                placeholder="Search dishes…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <label className="select">
              <span className="sr-only">Dietary filter</span>
              <select value={diet} onChange={(e) => setDiet(e.target.value)}>
                {FILTERS.map((f) => (
                  <option key={f.id} value={f.id}>{f.id === 'all' ? 'All diets' : f.label}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <section className="section menu-section">
        <div className="container">
          {sections.length === 0 && (
            <div className="empty card">
              <p>No dishes match those filters.</p>
              <button className="btn btn-small" onClick={reset}>Clear filters</button>
            </div>
          )}

          {sections.map((s) => (
            <div className="menu-group" key={s.id}>
              <h2 className="menu-group-title">{s.label}</h2>
              <div className="menu-grid">
                {s.items.map((i) => (
                  <article className="menu-item" key={i.name}>
                    <div className="menu-item-top">
                      <h3>
                        {i.name}
                        {i.popular && <span className="pill pill-accent">Popular</span>}
                      </h3>
                      <span className="leader" aria-hidden="true" />
                      <span className="price">${i.price}</span>
                    </div>
                    <p className="muted">{i.desc}</p>
                    {i.tags.length > 0 && (
                      <div className="tags">
                        {i.tags.map((t) => (
                          <span key={t} className={`tag tag-${t}`} title={tagInfo[t].label}>
                            {tagInfo[t].short}
                            <span className="sr-only"> {tagInfo[t].label}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}

          <p className="legend muted">
            V Vegetarian · VG Vegan · GF Gluten-free · 🌶 Spicy — Please tell your server about any allergies.
          </p>
        </div>
      </section>
    </>
  );
}
