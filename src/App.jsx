import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import More from './pages/More.jsx';

const TABS = ['home', 'menu', 'more'];

// Tabs are synced with the URL hash (#home, #menu, #more) so the
// browser back button and shared links work without a router library.
function readHash() {
  const h = window.location.hash.replace('#', '').toLowerCase();
  return TABS.includes(h) ? h : 'home';
}

export default function App() {
  const [tab, setTab] = useState(readHash);

  useEffect(() => {
    const onHash = () => setTab(readHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  const go = (next) => {
    if (next === tab) return;
    window.location.hash = next;
  };

  return (
    <div className="app">
      <Header tab={tab} onNavigate={go} />
      <main id="main" key={tab} className="page-enter">
        {tab === 'home' && <Home onNavigate={go} />}
        {tab === 'menu' && <Menu />}
        {tab === 'more' && <More />}
      </main>
      <Footer onNavigate={go} />
    </div>
  );
}
