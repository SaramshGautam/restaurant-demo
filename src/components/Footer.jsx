import { restaurant } from '../data/restaurant.js';

export default function Footer({ onNavigate }) {
  const click = (id) => (e) => {
    e.preventDefault();
    onNavigate(id);
  };
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{restaurant.name}</p>
          <p className="muted">{restaurant.tagline}</p>
        </div>
        <div>
          <p className="footer-head">Visit</p>
          <p className="muted">{restaurant.address}</p>
          <p className="muted">{restaurant.phone}</p>
        </div>
        <div>
          <p className="footer-head">Explore</p>
          <p><a href="#home" onClick={click('home')}>Home</a></p>
          <p><a href="#menu" onClick={click('menu')}>Menu</a></p>
          <p><a href="#more" onClick={click('more')}>Hours, FAQ &amp; Contact</a></p>
        </div>
      </div>
      <div className="container footer-note muted">
        © {new Date().getFullYear()} {restaurant.name}. Demo website — fictional restaurant.
      </div>
    </footer>
  );
}
