// All restaurant content lives here — edit this file to rebrand the demo.

export const restaurant = {
  name: 'Ember & Olive',
  tagline: 'Wood-fired Mediterranean kitchen',
  description:
    'Seasonal plates cooked over an open flame, house-made breads, and a wine list built for sharing. Come hungry, stay late.',
  phone: '(555) 214-7788',
  email: 'hello@emberandolive.example',
  address: '128 Market Street, Springfield',
  hours: [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tue – Thu', time: '5:00 PM – 10:00 PM' },
    { days: 'Fri – Sat', time: '5:00 PM – 11:30 PM' },
    { days: 'Sunday', time: '11:00 AM – 9:00 PM (Brunch until 3)' },
  ],
};

export const highlights = [
  { icon: '🔥', title: 'Open-flame cooking', text: 'Everything touches our oak & olive-wood hearth.' },
  { icon: '🌿', title: 'Local & seasonal', text: 'Produce from farms within 60 miles, menu changes monthly.' },
  { icon: '🍷', title: '80+ wines', text: 'Small producers from Greece, Italy, Spain and Lebanon.' },
];

export const featured = [
  { name: 'Charred Octopus', price: 24, emoji: '🐙', note: 'Chef’s signature' },
  { name: 'Lamb Kofta Skewers', price: 26, emoji: '🍢', note: 'Most ordered' },
  { name: 'Burnt Honey Baklava', price: 11, emoji: '🍯', note: 'Don’t skip dessert' },
];

export const testimonials = [
  { quote: 'The best octopus I’ve had outside of Greece. The bread alone is worth the trip.', name: 'Maya R.' },
  { quote: 'Warm staff, fantastic wine suggestions, and a patio that feels like vacation.', name: 'Daniel K.' },
  { quote: 'We come every anniversary. It never disappoints.', name: 'Priya & Sam' },
];

// tags: v = vegetarian, vg = vegan, gf = gluten-free, s = spicy
export const menu = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      { name: 'Hearth Bread & Dips', desc: 'Warm flatbread, whipped feta, smoky hummus, olive tapenade.', price: 12, tags: ['v'] },
      { name: 'Charred Octopus', desc: 'Fava purée, pickled shallot, lemon-caper oil.', price: 24, tags: ['gf'], popular: true },
      { name: 'Crispy Halloumi', desc: 'Hot honey, sesame, fresh mint.', price: 14, tags: ['v', 's'] },
      { name: 'Roasted Beet Salad', desc: 'Labneh, pistachio dukkah, blood orange.', price: 13, tags: ['v', 'gf'] },
      { name: 'Falafel Bites', desc: 'Tahini, herb salad, pickled turnip.', price: 11, tags: ['vg'] },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      { name: 'Lamb Kofta Skewers', desc: 'Saffron rice, charred tomato, garlic toum.', price: 26, tags: ['gf'], popular: true },
      { name: 'Whole Grilled Branzino', desc: 'Salsa verde, fire-roasted lemon, potatoes.', price: 34, tags: ['gf'] },
      { name: 'Chicken Shawarma Plate', desc: 'Spiced thigh, pita, pickles, amba sauce.', price: 23, tags: ['s'] },
      { name: 'Wood-fired Cauliflower', desc: 'Harissa glaze, tahini, pomegranate, herbs.', price: 19, tags: ['vg', 'gf', 's'] },
      { name: 'Short Rib Moussaka', desc: 'Braised beef, eggplant, béchamel crust.', price: 29, tags: [] },
      { name: 'Wild Mushroom Orzo', desc: 'Parmesan, thyme, truffle oil.', price: 21, tags: ['v'] },
    ],
  },
  {
    id: 'sides',
    label: 'Sides',
    items: [
      { name: 'Olive-oil Potatoes', desc: 'Oregano, lemon, sea salt.', price: 8, tags: ['vg', 'gf'] },
      { name: 'Grilled Greens', desc: 'Broccolini, chili, garlic.', price: 9, tags: ['vg', 'gf', 's'] },
      { name: 'Saffron Rice', desc: 'Toasted almonds, currants.', price: 7, tags: ['vg', 'gf'] },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Burnt Honey Baklava', desc: 'Walnut, cinnamon, orange-blossom syrup.', price: 11, tags: ['v'], popular: true },
      { name: 'Olive Oil Cake', desc: 'Citrus curd, whipped mascarpone.', price: 10, tags: ['v'] },
      { name: 'Dark Chocolate Tahini Pot', desc: 'Sesame brittle, sea salt.', price: 10, tags: ['v', 'gf'] },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      { name: 'Fig & Thyme Spritz', desc: 'Aperitivo, fig, prosecco.', price: 13, tags: [] },
      { name: 'Smoked Rosemary Old Fashioned', desc: 'Bourbon, demerara, bitters.', price: 15, tags: [] },
      { name: 'House Lemonade', desc: 'Mint, rose water. Non-alcoholic.', price: 6, tags: ['vg'] },
      { name: 'Wine by the Glass', desc: 'Ask your server for today’s pours.', price: 12, tags: [] },
    ],
  },
];

export const tagInfo = {
  v: { label: 'Vegetarian', short: 'V' },
  vg: { label: 'Vegan', short: 'VG' },
  gf: { label: 'Gluten-free', short: 'GF' },
  s: { label: 'Spicy', short: '🌶' },
};

export const faqs = [
  { q: 'Do you take reservations?', a: 'Yes — book online on this page or call us. We also keep a few tables for walk-ins every night.' },
  { q: 'Can you accommodate allergies?', a: 'Absolutely. Let your server know and our kitchen will adapt most dishes. Menu items are labelled for common diets.' },
  { q: 'Is there parking?', a: 'Free street parking after 6 PM, plus a public garage one block away on 2nd Ave.' },
  { q: 'Do you host private events?', a: 'Our back room seats up to 30 guests. Use the contact form to ask about availability and menus.' },
  { q: 'Are kids welcome?', a: 'Of course! We have high chairs and a small kids’ menu on request.' },
];
