import { restaurant } from '../data/restaurant.js';

const LINKS = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'menu', label: 'Menu', icon: '📖' },
  { id: 'more', label: 'More', icon: '☰' },
];

export default function Header({ tab, onNavigate }) {
  const click = (id) => (e) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={click('home')}>
            <span className="brand-mark" aria-hidden="true">E&amp;O</span>
            <span className="brand-name">{restaurant.name}</span>
          </a>

          {/* Top tabs: shown on tablets & laptops */}
          <nav className="tabs-top" aria-label="Main">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`tab-link ${tab === l.id ? 'active' : ''}`}
                aria-current={tab === l.id ? 'page' : undefined}
                onClick={click(l.id)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a href={`tel:${restaurant.phone.replace(/[^\d]/g, '')}`} className="btn btn-small header-cta">
            Call to book
          </a>
        </div>
      </header>

      {/* Bottom tab bar: shown on phones, easy to reach with a thumb */}
      <nav className="tabs-bottom" aria-label="Main (mobile)">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`bottom-link ${tab === l.id ? 'active' : ''}`}
            aria-current={tab === l.id ? 'page' : undefined}
            onClick={click(l.id)}
          >
            <span className="bottom-icon" aria-hidden="true">{l.icon}</span>
            <span>{l.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
