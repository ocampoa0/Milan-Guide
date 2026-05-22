const data = [
  {
    id: 'bene-bene',
    title: 'Bene bene',
    category: 'Nightlife',
    subtitle: 'Nightlife – Bars',
    subtype: 'Bars',
    description: 'A listening bar with cool music, fancy drinks and a chill vibe. Ideal for people who like late evenings and relaxed conversations.',
    tips: 'Best visited after 9 PM, this spot is ideal for a relaxed drink and good music in Porta Venezia.',
    zone: 'Porta Venezia',
    address: 'Via Giovanni Battista Morgagni, 31, 20129 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Bene+Bene+Bar+Milan',
    images: [
      'https://images.unsplash.com/photo-1543933129-7995f256f8f1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'futura',
    title: 'Futura',
    category: 'Nightlife',
    subtitle: 'Nightlife – Bars',
    subtype: 'Bars',
    description: 'A listening bar with ambient music, delightful drinks and a chill vibe. Perfect for unwinding after a day of exploring Milan.',
    tips: 'Try to arrive early to catch a table in the cosy lounge and enjoy the cocktail selection.',
    zone: 'Porta Venezia',
    details: 'The interior is warm and modern, with an intimate lounge feel and a menu that changes with the seasons.',
    address: 'Via Nino Bixio, 6, 20129 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Futura+Bar+Milan',
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529603991442-8d54fa0d3d53?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'duomo',
    title: 'Duomo di Milano',
    category: 'Attractions',
    subtitle: 'Attractions',
    subtype: 'Monuments',
    description: 'Milan’s iconic gothic cathedral with its intricate details, dreamy rooftop views, and timeless grandeur.',
    tips: 'Book your rooftop ticket ahead and arrive early to avoid long lines, especially on sunny days.',
    zone: 'Duomo',
    details: 'The cathedral is a symbol of the city and offers panoramic roof access for unforgettable skyline views.',
    address: 'Piazza del Duomo, 20122 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Duomo+di+Milano',
    images: [
      'https://images.unsplash.com/photo-1576831726454-57c9b5f7b157?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1548667558-6d4b9dfe74b5?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'galleria',
    title: 'Galleria Vittorio Emanuele II',
    category: 'Attractions',
    subtitle: 'Attractions',
    subtype: 'Museums',
    description: 'A historic shopping arcade with glass ceilings, luxury boutiques, and iconic Milanese charm.',
    tips: 'Admire the mosaics on the floor and try the classic panino or espresso at one of the cafes inside.',
    zone: 'Duomo',
    details: 'This elegant arcade connects Piazza del Duomo and Piazza della Scala, and it is a must-see for architecture lovers.',
    address: 'Piazza del Duomo, 20123 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Galleria+Vittorio+Emanuele+II',
    images: [
      'https://images.unsplash.com/photo-1581091870622-3a28d6a990f7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'luini',
    title: 'Luini',
    category: 'Food',
    subtitle: 'Food – Street bites',
    subtype: 'Grab & Go',
    description: 'A historic bakery famous for panzerotti, the perfect quick bite while exploring Milan.',
    tips: 'Order the classic tomato and mozzarella panzerotto and enjoy it fresh while walking through the city centre.',
    zone: 'Duomo',
    details: 'A short walk from the Duomo, Luini serves warm, savory pockets with melted cheese and tomato.',
    address: 'Via Santa Radegonda, 16, 20121 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Luini+Milan',
    images: [
      'https://images.unsplash.com/photo-1547777411-7d0cc25f10e7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'eataly',
    title: 'Eataly Smeraldo',
    category: 'Food',
    subtitle: 'Food – Market experience',
    subtype: 'Markets',
    description: 'A gourmet food marketplace with premium Italian produce, wine and casual restaurants.',
    tips: 'Sample artisanal cheeses and shop for a picnic to enjoy in the nearby park.',
    zone: 'Garibaldi',
    details: 'Enjoy a range of tasting counters, fresh pasta, and local specialties in a bright, modern venue.',
    address: 'Piazza XXV Aprile, 10, 20121 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Eataly+Smeraldo',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'quadrilatero',
    title: 'Quadrilatero della Moda',
    category: 'Shopping',
    subtitle: 'Shopping – Luxury',
    subtype: 'Malls',
    description: 'Milan’s fashion district with high-end boutiques, designer stores, and elegant window displays.',
    tips: 'Look for window displays on Via Montenapoleone and save time by visiting early in the afternoon.',
    zone: 'Quadrilatero della Moda',
    details: 'A stylish area around Via Montenapoleone, perfect for luxury shopping and people-watching.',
    address: 'Via Montenapoleone, 20121 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Quadrilatero+della+Moda',
    images: [
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d9?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'corso-buenos-aires',
    title: 'Corso Buenos Aires',
    category: 'Shopping',
    subtitle: 'Shopping – High street',
    subtype: 'Zones',
    description: 'A busy shopping street with familiar brands, cafés, and a lively city atmosphere.',
    tips: 'Browse the sidewalks for small souvenir shops and stop at a café for a quick espresso.',
    zone: 'Corso Buenos Aires',
    details: 'Enjoy long pedestrian-friendly streets and easy shopping for fashion, accessories, and gifts.',
    address: 'Corso Buenos Aires, 20124 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Corso+Buenos+Aires+Milan',
    images: [
      'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'navigli',
    title: 'Navigli',
    category: 'Instagramable',
    subtitle: 'Instagramable – Canals',
    subtype: 'Free spots',
    description: 'A charming canal neighborhood with colourful bridges, cafés and evening lights.',
    tips: 'Visit at sunset for the best photos and stay for an aperitivo along the canal.',
    zone: 'Navigli',
    details: 'Perfect for a sunset stroll, vibrant aperitivos, and Instagrammable reflections along the water.',
    address: 'Navigli, 20123 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Navigli+Milan',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'porta-nuova',
    title: 'Porta Nuova',
    category: 'Instagramable',
    subtitle: 'Instagramable – Modern skyline',
    subtype: 'Pay spots',
    description: 'A modern district with architectural landmarks and reflective towers that shine at night.',
    tips: 'Walk along Piazza Gae Aulenti for dramatic skyscraper reflections and late-night photo spots.',
    zone: 'Porta Nuova',
    details: 'Great for evening photography and enjoying Milan’s contemporary side with rooftop views.',
    address: 'Porta Nuova, 20121 Milano MI',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Porta+Nuova+Milan',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470506028287-3225ba7b3efa?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

const state = {
  activePage: 'spots',
  activeCategory: null,
  activeSubtopic: null,
  favourites: new Set(JSON.parse(localStorage.getItem('milanFavourites') || '[]'))
};

const topics = [
  {
    category: 'Attractions',
    title: 'Attractions',
    description: 'Monuments, museums and Milan’s timeless architecture.',
    image: 'https://images.unsplash.com/photo-1576831726454-57c9b5f7b157?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Nightlife',
    title: 'Nightlife',
    description: 'Bars, discotecas, aperitivo moments and late-night events.',
    image: 'https://images.unsplash.com/photo-1543933129-7995f256f8f1?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Food',
    title: 'Food',
    description: 'Restaurant culture, grab-and-go bites, markets and aperitivo stops.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Shopping',
    title: 'Shopping',
    description: 'Malls, design districts and style-led neighbourhood zones.',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d9?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Instagramable',
    title: 'Instagramable',
    description: 'Free and paid photo-worthy spots across the city.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  }
];

const categoryTitle = document.getElementById('category-title');
const spotCards = document.getElementById('spot-cards');
const favouriteCards = document.getElementById('favourite-cards');
const favouriteEmpty = document.getElementById('favourite-empty');
const topicGrid = document.getElementById('topic-grid');
const categorySection = document.getElementById('category-section');
const addForm = document.getElementById('add-form');
const formMessage = document.getElementById('form-message');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const mapFilter = document.getElementById('map-filter');
const mapLocations = document.getElementById('map-locations');
const galleryModal = document.getElementById('gallery-modal');
const galleryImage = document.getElementById('gallery-image');
const galleryCaption = document.getElementById('gallery-caption');
const galleryCount = document.getElementById('gallery-count');
const galleryClose = document.getElementById('gallery-close');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
const navButtons = document.querySelectorAll('.nav-link');
const categoryButtons = document.querySelectorAll('.category-button');

let galleryState = {
  images: [],
  index: 0,
  title: ''
};

function renderTopicGrid() {
  topicGrid.innerHTML = topics.map(createTopicCard).join('');
}

function createTopicCard(topic) {
  return `
    <article class="topic-card" data-category="${topic.category}">
      <img src="${topic.image}" alt="${topic.title}" loading="lazy" />
      <div class="topic-card-content">
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
        <button type="button" data-category="${topic.category}">Enter</button>
      </div>
    </article>
  `;
}

function renderSpotCards() {
  if (!state.activeCategory) {
    categorySection.classList.add('hidden');
    spotCards.classList.add('hidden');
    spotCards.innerHTML = '';
    return;
  }

  const spots = data.filter(item => item.category === state.activeCategory && (!state.activeSubtopic || item.subtype === state.activeSubtopic));
  categorySection.classList.remove('hidden');
  spotCards.classList.remove('hidden');
  categoryTitle.textContent = state.activeSubtopic ? `${state.activeCategory} — ${state.activeSubtopic}` : state.activeCategory;
  spotCards.innerHTML = spots.length
    ? spots.map(item => createSpotCard(item)).join('')
    : `<p>No places found for this topic yet.</p>`;
}

function createSpotCard(item) {
  const isFav = state.favourites.has(item.id);
  return `
    <article class="card">
      <div class="card-info">
        <div class="card-title-row">
          <div>
            <h2>${item.title}</h2>
            <small>${item.subtitle}</small>
            <span class="path-label">Spots — ${item.category}${item.subtype ? ` • ${item.subtype}` : ''}</span>
          </div>
          <button class="star-button ${isFav ? 'favourite' : ''}" data-action="toggle-fav" data-id="${item.id}" aria-label="${isFav ? 'Remove from favourites' : 'Add to favourites'}">
            ${createStarIcon(isFav)}
          </button>
        </div>
        <div class="card-body">
          <p>${item.description}</p>
          <p class="tips"><strong>Tips:</strong> ${item.tips}</p>
        </div>
        <div class="card-location">
          <p class="address">Located in <strong>${item.zone}</strong>.</p>
          <a href="${item.mapLink}" target="_blank" rel="noreferrer">${item.address}</a>
        </div>
      </div>
      <div class="card-image">
        <img src="${item.images[0]}" alt="${item.title}" loading="lazy" />
        <button data-action="open-gallery" data-id="${item.id}" aria-label="Zoom image"></button>
      </div>
    </article>
  `;
}

function createStarIcon(isFilled) {
  if (isFilled) {
    return '<svg viewBox="0 0 24 24" fill="currentColor" class="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
  }
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
}

function renderFavourites() {
  const favourites = data.filter(item => state.favourites.has(item.id));
  favouriteCards.innerHTML = favourites.map(item => createSpotCard(item)).join('');
  favouriteEmpty.classList.toggle('hidden', favourites.length > 0);
}

function renderMapFilters() {
  const categories = [...new Set(data.map(item => item.category))];
  mapFilter.innerHTML = categories.map(category => `
    <button class="pill ${category === state.activeCategory ? 'active' : ''}" data-filter="${category}">${category}</button>
  `).join('');
}

function renderMapLocations() {
  const locations = data.filter(item => item.category === state.activeCategory);
  mapLocations.innerHTML = locations.map(item => `
    <article class="map-card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.mapLink}" target="_blank" rel="noreferrer">Open in map</a>
    </article>
  `).join('');
}

function setActivePage(page) {
  state.activePage = page;
  document.querySelectorAll('.page').forEach(section => {
    section.classList.toggle('active', section.dataset.page === page);
  });
  navButtons.forEach(button => button.classList.toggle('active', button.dataset.page === page));
  if (page === 'spots') {
    renderTopicGrid();
  }
}

function setActiveCategory(category, subtopic = null) {
  state.activeCategory = category;
  state.activeSubtopic = subtopic;
  categoryButtons.forEach(button => button.classList.toggle('active', button.dataset.category === category));
  renderSpotCards();
  renderMapFilters();
  renderMapLocations();
}

function toggleFavourite(id) {
  if (state.favourites.has(id)) {
    state.favourites.delete(id);
  } else {
    state.favourites.add(id);
  }
  localStorage.setItem('milanFavourites', JSON.stringify([...state.favourites]));
  renderSpotCards();
  renderFavourites();
}

function openGallery(id) {
  const spot = data.find(item => item.id === id);
  if (!spot) return;
  galleryState.images = spot.images;
  galleryState.index = 0;
  galleryState.title = spot.title;
  updateGallery();
  galleryModal.classList.remove('hidden');
  galleryModal.setAttribute('aria-hidden', 'false');
}

function closeGallery() {
  galleryModal.classList.add('hidden');
  galleryModal.setAttribute('aria-hidden', 'true');
}

function updateGallery() {
  const imageUrl = galleryState.images[galleryState.index];
  galleryImage.src = imageUrl;
  galleryCaption.textContent = `${galleryState.title} — Image ${galleryState.index + 1} of ${galleryState.images.length}`;
  galleryCount.textContent = `${galleryState.index + 1}/${galleryState.images.length}`;
}

function handleCardAction(event) {
  const action = event.target.closest('[data-action]');
  if (!action) return;
  const id = action.dataset.id;
  if (action.dataset.action === 'toggle-fav') {
    toggleFavourite(id);
  }
  if (action.dataset.action === 'open-gallery') {
    openGallery(id);
  }
}

function handleAddSubmit(event) {
  event.preventDefault();
  const formData = new FormData(addForm);
  const newSpot = {
    id: `user-${Date.now()}`,
    title: formData.get('title').trim(),
    category: formData.get('category'),
    subtitle: `${formData.get('category')} – ${formData.get('subtopic')}`,
    subtype: formData.get('subtopic').trim(),
    description: formData.get('description').trim(),
    tips: 'Added to your personal list.',
    zone: formData.get('address').trim(),
    address: formData.get('address').trim(),
    mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formData.get('address').trim())}`,
    images: [formData.get('image').trim()]
  };
  data.push(newSpot);
  addForm.reset();
  formMessage.textContent = `Saved ${newSpot.title} to your personal guide.`;
  formMessage.classList.remove('hidden');
  setActivePage('spots');
  setActiveCategory(newSpot.category, newSpot.subtype);
}

function bindEvents() {
  const navGroup = document.querySelector('.nav-group');
  const navParent = document.querySelector('.nav-parent');

  document.body.addEventListener('click', event => {
    const pageButton = event.target.closest('[data-page]');
    if (pageButton && pageButton.classList.contains('nav-link')) {
      if (pageButton.classList.contains('nav-parent')) {
        navGroup.classList.toggle('open');
        const expanded = navGroup.classList.contains('open');
        pageButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        setActivePage('spots');
      } else {
        setActivePage(pageButton.dataset.page);
      }
    }

    const categoryControl = event.target.closest('.category-button, .submenu-button, .topic-card');
    if (categoryControl) {
      setActiveCategory(categoryControl.dataset.category, categoryControl.dataset.subtopic || null);
      if (navGroup) {
        navGroup.classList.remove('open');
        navParent?.setAttribute('aria-expanded', 'false');
      }
      setActivePage('spots');
    }

    const pillButton = event.target.closest('.pill');
    if (pillButton) {
      setActiveCategory(pillButton.dataset.filter);
      setActivePage('map');
    }
    handleCardAction(event);
    if (event.target.closest('.gallery-backdrop')) {
      closeGallery();
    }

    if (navGroup && !event.target.closest('.nav-group')) {
      navGroup.classList.remove('open');
      navParent?.setAttribute('aria-expanded', 'false');
    }
  });

  addForm.addEventListener('submit', handleAddSubmit);

  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const expanded = sidebar.classList.contains('collapsed') ? 'false' : 'true';
    sidebarToggle.setAttribute('aria-expanded', expanded);
    sidebarToggle.textContent = sidebar.classList.contains('collapsed') ? 'Show' : 'Hide';
  });

  galleryClose.addEventListener('click', closeGallery);
  galleryPrev.addEventListener('click', () => {
    galleryState.index = (galleryState.index - 1 + galleryState.images.length) % galleryState.images.length;
    updateGallery();
  });
  galleryNext.addEventListener('click', () => {
    galleryState.index = (galleryState.index + 1) % galleryState.images.length;
    updateGallery();
  });
  document.addEventListener('keydown', event => {
    if (galleryModal.classList.contains('hidden')) return;
    if (event.key === 'Escape') closeGallery();
    if (event.key === 'ArrowLeft') galleryPrev.click();
    if (event.key === 'ArrowRight') galleryNext.click();
  });
}

function init() {
  setActivePage(state.activePage);
  renderTopicGrid();
  renderFavourites();
  setActivePage(state.activePage);
  bindEvents();
}

init();
