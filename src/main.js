import './style.css';

// Menu items database for dynamic rendering across Home and Menu pages
const MENU_ITEMS = [
  {
    id: 'velvet-latte',
    title: 'Velvet Latte',
    category: 'Coffee',
    price: 5.50,
    rating: 4.9,
    popularity: 98,
    isBestseller: true,
    isNew: false,
    dietary: ['GF', 'V'], // Gluten-free, Vegetarian
    description: 'Silky steamed milk poured over house espresso blend, finished with delicate latte art.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cold-brew',
    title: 'Dark & Creamy Cold Brew',
    category: 'Coffee',
    price: 6.00,
    rating: 4.8,
    popularity: 92,
    isBestseller: false,
    isNew: true,
    dietary: ['GF', 'DF'], // Gluten-free, Dairy-free
    description: 'Slow-steeped 16 hours, served over ice with a float of sweet cream.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'flat-white',
    title: 'Morning Flat White',
    category: 'Coffee',
    price: 4.80,
    rating: 4.7,
    popularity: 88,
    isBestseller: false,
    isNew: false,
    dietary: ['GF'], // Gluten-free
    description: 'Double ristretto with velvety micro-foam — rich, smooth, and satisfying.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'espresso-tonic',
    title: 'Espresso Tonic',
    category: 'Coffee',
    price: 5.25,
    rating: 4.5,
    popularity: 76,
    isBestseller: false,
    isNew: false,
    dietary: ['GF', 'Vegan', 'DF'],
    description: 'Espresso shot floating on premium tonic water, served with a twist of orange.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'butter-croissant',
    title: 'Butter Croissant',
    category: 'Pastries',
    price: 3.80,
    rating: 4.9,
    popularity: 95,
    isBestseller: true,
    isNew: false,
    dietary: ['V'], // Vegetarian
    description: 'Flaky, golden layers of laminated pastry dough, baked fresh every morning.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'almond-danish',
    title: 'Almond Danish',
    category: 'Pastries',
    price: 4.20,
    rating: 4.6,
    popularity: 80,
    isBestseller: false,
    isNew: true,
    dietary: ['V'],
    description: 'Feathery pastry shell filled with sweet almond cream and topped with toasted flakes.',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'blueberry-muffin',
    title: 'Blueberry Muffin',
    category: 'Pastries',
    price: 3.50,
    rating: 4.8,
    popularity: 89,
    isBestseller: false,
    isNew: false,
    dietary: ['V', 'NF'], // Vegetarian, Nut-free
    description: 'Plump blueberries folded into a moist vanilla batter with a brown sugar crumb topping.',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cinnamon-roll',
    title: 'Cinnamon Roll',
    category: 'Pastries',
    price: 4.50,
    rating: 4.9,
    popularity: 94,
    isBestseller: false,
    isNew: false,
    dietary: ['V'],
    description: 'Warm brioche dough swirled with cinnamon sugar, glazed with vanilla bean icing.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'avo-toast',
    title: 'Smashed Avo Toast',
    category: 'Brunch',
    price: 12.00,
    rating: 4.8,
    popularity: 97,
    isBestseller: true,
    isNew: false,
    dietary: ['V', 'DF'], // Vegetarian, Dairy-free
    description: 'Creamy avocado on sourdough with a poached egg, chili flakes, and cherry tomatoes.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pancakes',
    title: 'Buttermilk Pancakes',
    category: 'Brunch',
    price: 13.50,
    rating: 4.7,
    popularity: 85,
    isBestseller: false,
    isNew: false,
    dietary: ['V'],
    description: 'A stack of three fluffy pancakes with mixed berry compote and real maple syrup.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'shakshuka',
    title: 'Garden Shakshuka',
    category: 'Brunch',
    price: 14.00,
    rating: 4.8,
    popularity: 90,
    isBestseller: false,
    isNew: true,
    dietary: ['V', 'DF'],
    description: 'Eggs poached in a spiced tomato sauce with feta, fresh herbs, and crusty bread.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'smoked-salmon-bagel',
    title: 'Smoked Salmon Bagel',
    category: 'Brunch',
    price: 15.00,
    rating: 4.6,
    popularity: 82,
    isBestseller: false,
    isNew: false,
    dietary: ['NF'],
    description: 'Toasted bagel with herb cream cheese, capers, red onion, and smoked wild salmon.',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'matcha-latte',
    title: 'Matcha Latte',
    category: 'Tea & More',
    price: 5.75,
    rating: 4.7,
    popularity: 86,
    isBestseller: false,
    isNew: false,
    dietary: ['GF', 'V'],
    description: 'Stone-ground organic matcha whisked with steamed oat milk and vanilla.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'peach-oolong',
    title: 'Iced Peach Oolong',
    category: 'Tea & More',
    price: 4.50,
    rating: 4.4,
    popularity: 72,
    isBestseller: false,
    isNew: false,
    dietary: ['GF', 'Vegan', 'DF'],
    description: 'Fragrant cold-brewed oolong tea sweetened with natural peach nectar.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'golden-chai',
    title: 'Golden Milk Chai',
    category: 'Tea & More',
    price: 5.50,
    rating: 4.6,
    popularity: 78,
    isBestseller: false,
    isNew: false,
    dietary: ['GF', 'V'],
    description: 'Warm spices, turmeric, ginger, and black tea steamed with almond milk.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupBookingModal();
  setupToastNotification();
  setupNewsletterForm();
  setupCart();
  setupAmbientMixer();
  setupLightboxGallery();
  setupTypewriter();
  setupCountUpAnimations();
  setupRippleEffects();
  setupTimelineScrollProgress();
  setupPageTransition();
  
  // Page specific initializations
  const isHomePage = !!document.getElementById('home-signature-menu');
  const isMenuPage = !!document.getElementById('menu-items-grid');
  
  if (isHomePage) {
    initHomePage();
  }
  
  if (isMenuPage) {
    initMenuPage();
  }
  
  setupRevealOnScroll();
});

/* --- STICKY NAV & MOBILE MENU --- */
function setupNavigation() {
  const header = document.querySelector('header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navElement = document.querySelector('nav');
  
  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
  // Set initial sticky state (if refreshed mid-page)
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  }
  
  // Mobile menu toggle
  if (mobileMenuBtn && navElement) {
    mobileMenuBtn.addEventListener('click', () => {
      navElement.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      
      // Toggle burger line icons if menu is open
      const spans = mobileMenuBtn.querySelectorAll('span');
      if (navElement.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu when clicking links
    navElement.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navElement.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.querySelectorAll('span').forEach(span => span.style.transform = 'none');
        mobileMenuBtn.querySelectorAll('span')[1].style.opacity = '1';
      });
    });
  }
}

/* --- RESERVATION BOOKING SYSTEM & SEATING MAP --- */
const SEATING_MAP = {
  "Main Lounge": [
    { id: "T1", num: 1, seats: 2, status: "occupied" },
    { id: "T2", num: 2, seats: 2, status: "vacant" },
    { id: "T3", num: 3, seats: 4, status: "vacant" },
    { id: "T4", num: 4, seats: 4, status: "occupied" },
    { id: "T5", num: 5, seats: 2, status: "vacant" },
    { id: "T6", num: 6, seats: 6, status: "vacant" },
    { id: "T7", num: 7, seats: 2, status: "vacant" },
    { id: "T8", num: 8, seats: 4, status: "vacant" }
  ],
  "Window Nook": [
    { id: "W1", num: 9, seats: 2, status: "vacant" },
    { id: "W2", num: 10, seats: 2, status: "occupied" },
    { id: "W3", num: 11, seats: 2, status: "vacant" },
    { id: "W4", num: 12, seats: 2, status: "vacant" }
  ],
  "Quiet Study": [
    { id: "S1", num: 13, seats: 1, status: "vacant" },
    { id: "S2", num: 14, seats: 1, status: "vacant" },
    { id: "S3", num: 15, seats: 2, status: "occupied" },
    { id: "S4", num: 16, seats: 1, status: "vacant" }
  ],
  "Terrace": [
    { id: "TR1", num: 17, seats: 4, status: "vacant" },
    { id: "TR2", num: 18, seats: 4, status: "vacant" },
    { id: "TR3", num: 19, seats: 2, status: "occupied" },
    { id: "TR4", num: 20, seats: 6, status: "vacant" }
  ]
};

function setupBookingModal() {
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.btn-close-modal');
  const bookingForm = document.querySelector('.modal-form');
  const reserveButtons = document.querySelectorAll('.btn-reserve, .book-table-now');
  const zoneChips = document.querySelectorAll('.zone-chip');
  const seatingGrid = document.getElementById('reservation-seating-grid');
  const selectedTableInput = document.getElementById('selected-table-input');
  
  let currentZone = "Main Lounge";
  let selectedTableId = "";

  if (!modalOverlay) return;

  const renderSeatingGrid = (zone) => {
    if (!seatingGrid) return;
    seatingGrid.innerHTML = '';
    const tables = SEATING_MAP[zone];
    
    tables.forEach(table => {
      const tableBtn = document.createElement('div');
      tableBtn.className = `seating-table ${table.status}`;
      if (table.id === selectedTableId) {
        tableBtn.classList.add('selected');
      }
      
      tableBtn.innerHTML = `
        <div class="table-icon-rep"></div>
        <span class="table-number">Table ${table.num}</span>
        <span class="table-seats">${table.seats} Seats</span>
        <span class="table-status">${table.status === 'occupied' ? 'Reserved' : 'Select'}</span>
      `;
      
      if (table.status !== 'occupied') {
        tableBtn.addEventListener('click', () => {
          const prevSelected = seatingGrid.querySelector('.seating-table.selected');
          if (prevSelected) prevSelected.classList.remove('selected');
          
          if (selectedTableId === table.id) {
            selectedTableId = "";
            selectedTableInput.value = "";
          } else {
            selectedTableId = table.id;
            tableBtn.classList.add('selected');
            selectedTableInput.value = `Table ${table.num} (${zone})`;
          }
        });
      }
      
      seatingGrid.appendChild(tableBtn);
    });
  };

  // Set up zone chip toggle click listeners
  zoneChips.forEach(chip => {
    chip.addEventListener('click', () => {
      zoneChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentZone = chip.dataset.zone;
      renderSeatingGrid(currentZone);
    });
  });
  
  // Open modal on click
  reserveButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Stop page scrolling
      
      // Reset selections and draw seating map
      selectedTableId = "";
      if (selectedTableInput) selectedTableInput.value = "";
      zoneChips.forEach(c => c.classList.remove('active'));
      if (zoneChips[0]) zoneChips[0].classList.add('active');
      renderSeatingGrid("Main Lounge");
    });
  });
  
  // Close modal
  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Form submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('booking-name').value;
      const guests = document.getElementById('booking-guests').value;
      const date = document.getElementById('booking-date').value;
      const time = document.getElementById('booking-time').value;
      const tableText = selectedTableInput.value;

      if (!tableText) {
        showToast("Please choose a table on the map to complete your reservation!");
        return;
      }
      
      // Save details to localStorage to mock success persistence
      const reservation = { name, guests, date, time, table: tableText, timestamp: new Date().toISOString() };
      localStorage.setItem('brewed_co_booking', JSON.stringify(reservation));
      
      closeModal();
      
      // Form reset
      bookingForm.reset();
      selectedTableId = "";
      if (selectedTableInput) selectedTableInput.value = "";
      
      // Trigger toast
      showToast(`Confirmed! ${tableText} reserved for ${guests} guests on ${date} at ${time}! See you then, ${name}!`);
    });
  }
}

/* --- TOAST NOTIFICATIONS --- */
let toastTimeout;
function setupToastNotification() {
  // Create toast container dynamically if not present
  if (!document.querySelector('.toast-notification')) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
}

function showToast(message) {
  const toast = document.querySelector('.toast-notification');
  if (!toast) return;
  
  toast.textContent = message;
  toast.classList.add('active');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}

/* --- NEWSLETTER FORM --- */
function setupNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const email = input.value;
      if (email) {
        showToast(`Thank you for subscribing, we've sent a welcome email to ${email}!`);
        input.value = '';
      }
    });
  });
}

/* --- SCROLL REVEAL ANIMATIONS --- */
function setupRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters view
  });
  
  reveals.forEach(rev => revealObserver.observe(rev));
}

/* --- HOME PAGE TAB FILTERING --- */
function initHomePage() {
  const tabs = document.querySelectorAll('#home-menu-tabs .tab-btn');
  const menuGrid = document.getElementById('home-signature-menu');
  
  if (!tabs.length || !menuGrid) return;
  
  // Render signature items (3 cards)
  const renderHomeCards = (filterCategory = 'All') => {
    menuGrid.style.opacity = '0';
    
    setTimeout(() => {
      menuGrid.innerHTML = '';
      
      // Pick bestseller or first item of category to represent home signature menu
      let filtered = filterCategory === 'All' 
        ? MENU_ITEMS.filter(item => item.isBestseller).slice(0, 3)
        : MENU_ITEMS.filter(item => item.category === filterCategory).slice(0, 3);
      
      // Fallback if not enough items in filtered category
      if (filtered.length < 3) {
        const extra = MENU_ITEMS.filter(item => item.category !== filterCategory && !filtered.includes(item));
        filtered = [...filtered, ...extra].slice(0, 3);
      }
      
      filtered.forEach(item => {
        const card = createFoodCard(item);
        menuGrid.appendChild(card);
      });
      
      menuGrid.style.opacity = '1';
      menuGrid.style.transition = 'opacity 0.3s ease';
    }, 200);
  };
  
  // Click listener for tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderHomeCards(tab.dataset.category);
    });
  });
  
  // Initial render
  renderHomeCards('All');
}

/* --- MENU PAGE SEARCH / FILTER / SORT --- */
function initMenuPage() {
  const itemsGrid = document.getElementById('menu-items-grid');
  const resultsCountText = document.getElementById('results-count');
  const searchInput = document.getElementById('menu-search');
  const sortSelect = document.getElementById('menu-sort');
  const gridViewBtn = document.getElementById('view-grid');
  const listViewBtn = document.getElementById('view-list');
  const promoBtn = document.querySelector('.btn-promo');
  
  // Filters state
  let currentCategory = 'All';
  let activeDietaryFilters = []; // E.g., ['GF', 'V']
  let searchQuery = '';
  let currentSort = 'popular';
  
  if (!itemsGrid) return;
  
  // Apply Special Promo code
  if (promoBtn) {
    promoBtn.addEventListener('click', () => {
      showToast("Happy Hour Offer Claimed! 20% off added to order code: HAPPY20");
    });
  }
  
  // Initialize Sidebar Category Counters
  updateSidebarCounters();
  
  // Category Filtering
  const catButtons = document.querySelectorAll('.category-filter-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      applyAllFilters();
    });
  });
  
  // Dietary Filtering
  const dietButtons = document.querySelectorAll('.dietary-filter-btn');
  dietButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.diet;
      btn.classList.toggle('active');
      
      if (btn.classList.contains('active')) {
        activeDietaryFilters.push(filter);
      } else {
        activeDietaryFilters = activeDietaryFilters.filter(f => f !== filter);
      }
      applyAllFilters();
    });
  });
  
  // Search Box
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyAllFilters();
    });
  }
  
  // Sorting selector
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyAllFilters();
    });
  }
  
  // View switches
  if (gridViewBtn && listViewBtn) {
    gridViewBtn.addEventListener('click', () => {
      gridViewBtn.classList.add('active');
      listViewBtn.classList.remove('active');
      itemsGrid.classList.remove('list-view');
    });
    
    listViewBtn.addEventListener('click', () => {
      listViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
      itemsGrid.classList.add('list-view');
    });
  }
  
  // Master function to filter & sort & render
  function applyAllFilters() {
    itemsGrid.style.opacity = '0';
    
    setTimeout(() => {
      // 1. Filter by category
      let items = currentCategory === 'All'
        ? [...MENU_ITEMS]
        : MENU_ITEMS.filter(item => item.category === currentCategory);
      
      // 2. Filter by search query
      if (searchQuery) {
        items = items.filter(item => 
          item.title.toLowerCase().includes(searchQuery) ||
          item.description.toLowerCase().includes(searchQuery)
        );
      }
      
      // 3. Filter by dietary labels (matches ALL selected dietary filters)
      if (activeDietaryFilters.length > 0) {
        items = items.filter(item => {
          return activeDietaryFilters.every(diet => {
            // 'Vegan' matches item.dietary containing 'Vegan' OR 'V' if we treat V as vegetarian/vegan
            if (diet === 'Vegan') {
              return item.dietary.includes('Vegan') || item.dietary.includes('V');
            }
            return item.dietary.includes(diet);
          });
        });
      }
      
      // 4. Sorting
      if (currentSort === 'price-low') {
        items.sort((a, b) => a.price - b.price);
      } else if (currentSort === 'price-high') {
        items.sort((a, b) => b.price - a.price);
      } else if (currentSort === 'rating') {
        items.sort((a, b) => b.rating - a.rating);
      } else { // 'popular' or default
        items.sort((a, b) => b.popularity - a.popularity);
      }
      
      // 5. Render
      renderMenuCards(items);
      
      // Update count text
      if (resultsCountText) {
        resultsCountText.textContent = `Showing ${items.length} items across categories`;
      }
      
      itemsGrid.style.opacity = '1';
      itemsGrid.style.transition = 'opacity 0.25s ease';
    }, 150);
  }
  
  function renderMenuCards(items) {
    itemsGrid.innerHTML = '';
    
    if (items.length === 0) {
      itemsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" style="width: 48px; height: 48px; stroke: currentColor; fill:none; stroke-width:1.5; margin-bottom:1rem;" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No items match your criteria</h3>
          <p style="margin-top:0.5rem; font-size:0.9rem;">Try adjusting your filters or search keywords.</p>
        </div>
      `;
      return;
    }
    
    // Grouping: If All is selected, we group by Category title blocks as shown in the screenshot!
    if (currentCategory === 'All' && !searchQuery && activeDietaryFilters.length === 0) {
      const categories = ['Coffee', 'Pastries', 'Brunch', 'Tea & More'];
      
      categories.forEach(cat => {
        const catItems = items.filter(item => item.category === cat);
        if (catItems.length === 0) return;
        
        // Create category wrapper
        const catSection = document.createElement('div');
        catSection.className = 'menu-category-section';
        catSection.style.gridColumn = '1 / -1';
        
        // Title block matching screenshot
        let descText = '';
        let svgIcon = '';
        
        if (cat === 'Coffee') {
          descText = 'Expertly pulled shots, steamed to order';
          svgIcon = `<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`;
        } else if (cat === 'Pastries') {
          descText = 'Baked fresh in-house every morning';
          svgIcon = `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`;
        } else if (cat === 'Brunch') {
          descText = 'Served daily until 3pm';
          svgIcon = `<svg viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path><path d="M12 6v6l4 2"></path></svg>`;
        } else {
          descText = 'Soothing blends and refreshing iced drinks';
          svgIcon = `<svg viewBox="0 0 24 24"><path d="M2 22h20"></path><path d="M12 2v20"></path><path d="M5 12h14"></path></svg>`;
        }
        
        catSection.innerHTML = `
          <h3 class="category-section-title">${svgIcon} ${cat}</h3>
          <p class="category-section-desc">${descText}</p>
          <div class="menu-items-inner-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;"></div>
        `;
        
        const innerGrid = catSection.querySelector('.menu-items-inner-grid');
        
        // Handle list view within categories
        if (itemsGrid.classList.contains('list-view')) {
          innerGrid.style.gridTemplateColumns = '1fr';
        }
        
        catItems.forEach(item => {
          const card = createFoodCard(item);
          innerGrid.appendChild(card);
        });
        
        itemsGrid.appendChild(catSection);
      });
    } else {
      // Just render plain grid/list of filtered items
      const innerGridWrapper = document.createElement('div');
      innerGridWrapper.style.gridColumn = '1 / -1';
      innerGridWrapper.style.display = 'grid';
      innerGridWrapper.style.gap = '2rem';
      
      if (itemsGrid.classList.contains('list-view')) {
        innerGridWrapper.style.gridTemplateColumns = '1fr';
      } else {
        innerGridWrapper.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
      }
      
      items.forEach(item => {
        const card = createFoodCard(item);
        innerGridWrapper.appendChild(card);
      });
      itemsGrid.appendChild(innerGridWrapper);
    }
  }
  
  function updateSidebarCounters() {
    const totalCount = document.querySelector('.category-filter-btn[data-category="All"] .category-count');
    if (totalCount) totalCount.textContent = MENU_ITEMS.length;
    
    ['Coffee', 'Tea & More', 'Pastries', 'Brunch'].forEach(cat => {
      const el = document.querySelector(`.category-filter-btn[data-category="${cat}"] .category-count`);
      if (el) {
        el.textContent = MENU_ITEMS.filter(item => item.category === cat).length;
      }
    });
  }
  
  // Initial draw
  applyAllFilters();
}

/* --- FOOD CARD DOM CREATION --- */
function createFoodCard(item) {
  const card = document.createElement('article');
  card.className = 'food-card';
  card.dataset.id = item.id;
  
  // Badges (Bestseller / New)
  let badgeHTML = '';
  if (item.isBestseller) {
    badgeHTML = `<span class="card-badge badge-bestseller">Bestseller</span>`;
  } else if (item.isNew) {
    badgeHTML = `<span class="card-badge badge-new">New</span>`;
  }
  
  // Dietary tags
  const dietaryHTML = item.dietary.map(d => `<span class="dietary-tag">${d}</span>`).join(' ');

  // Rating stars
  const starSVG = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
  const ratingHTML = `
    <div class="food-card-rating">
      ${starSVG}
      <span class="rating-value">${item.rating.toFixed(1)}</span>
    </div>
  `;
  
  card.innerHTML = `
    <div class="food-card-img-container">
      <img src="${item.image}" alt="${item.title}" class="food-card-img" loading="lazy">
      <div class="badge-container">
        ${badgeHTML}
      </div>
      <button class="btn-favorite" aria-label="Favorite this item">
        <svg viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
    <div class="food-card-info">
      <span class="food-card-category">${item.category}</span>
      <div class="food-card-title-row">
        <h4 class="food-card-title">${item.title}</h4>
      </div>
      ${ratingHTML}
      <div class="dietary-icons" style="margin-top: 0.5rem;">
        ${dietaryHTML}
      </div>
      <p class="food-card-desc">${item.description}</p>
      <div class="food-card-footer">
        <span class="food-card-price">$${item.price.toFixed(2)}</span>
        <button class="btn-card-add">Add</button>
      </div>
    </div>
  `;
  
  // Add button click feedback — with animation
  const addBtn = card.querySelector('.btn-card-add');
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(item);
    addBtn.textContent = '✓ Added!';
    addBtn.classList.add('added');
    setTimeout(() => {
      addBtn.textContent = 'Add';
      addBtn.classList.remove('added');
    }, 1500);
  });
  
  // Favorite button toggle
  const favBtn = card.querySelector('.btn-favorite');
  favBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    favBtn.classList.toggle('active');
    if (favBtn.classList.contains('active')) {
      showToast(`❤️ Added ${item.title} to your favorites!`);
    } else {
      showToast(`Removed ${item.title} from favorites.`);
    }
  });
  
  return card;
}

/* --- SHOPPING CART STATE & LOGIC --- */
let cart = JSON.parse(localStorage.getItem('brewed_co_cart')) || [];

function setupCart() {
  const cartOverlay = document.querySelector('.cart-drawer-overlay');
  const closeCartBtn = document.querySelector('.btn-close-cart');
  const cartBtns = document.querySelectorAll('.btn-cart');
  const checkoutBtn = document.querySelector('.btn-checkout');
  const notesTextarea = document.getElementById('cart-special-instructions');

  if (!cartOverlay) return;

  // Toggle cart drawer open
  cartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      updateCartUI();
    });
  });

  // Toggle cart drawer close
  const closeCart = () => {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }

  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
      closeCart();
    }
  });

  // Checkout order submission
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast("Your order list is empty. Add items from the Menu first!");
        return;
      }

      const instructions = notesTextarea ? notesTextarea.value.trim() : "";
      const instMsg = instructions ? ` Special requests: "${instructions}"` : "";
      
      const orderId = Math.floor(100000 + Math.random() * 900000);
      showToast(`Order #${orderId} received!${instMsg} We are brewing your fresh coffee and pastries now.`);
      
      // Clear cart
      cart = [];
      localStorage.removeItem('brewed_co_instructions');
      if (notesTextarea) notesTextarea.value = "";
      saveCart();
      closeCart();
    });
  }

  // Save special instructions to localStorage on change
  if (notesTextarea) {
    notesTextarea.value = localStorage.getItem('brewed_co_instructions') || "";
    notesTextarea.addEventListener('input', (e) => {
      localStorage.setItem('brewed_co_instructions', e.target.value);
    });
  }

  // Initial draw
  updateCartUI();
}

function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1
    });
  }
  saveCart();
  showToast(`${item.title} added to your order!`);
}

function saveCart() {
  localStorage.setItem('brewed_co_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const badges = document.querySelectorAll('.cart-badge');
  const container = document.querySelector('.cart-items-container');
  const subtotalEl = document.querySelector('.cart-subtotal');
  const deliveryEl = document.querySelector('.cart-delivery');
  const totalEl = document.querySelector('.cart-total');
  
  const progressFill = document.getElementById('delivery-progress-fill');
  const deliveryNeeded = document.getElementById('delivery-needed');
  const progressText = document.querySelector('.cart-delivery-progress .progress-text');

  if (!container) return;

  // Calculate total item count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badges.forEach(b => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? 'flex' : 'none';
  });

  // Empty state check
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p>Your cart is empty.</p>
        <a href="./menu.html" class="btn-primary" style="margin-top: 1rem; font-size: 0.85rem; padding: 0.6rem 1.5rem;">Explore Menu</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (deliveryEl) deliveryEl.textContent = '$0.00';
    if (totalEl) totalEl.textContent = '$0.00';
    
    // Reset progress tracker
    if (progressFill) progressFill.style.width = '0%';
    if (deliveryNeeded) deliveryNeeded.textContent = '$30.00';
    if (progressText) progressText.innerHTML = `Add <span class="highlight">$30.00</span> for <span class="highlight">FREE Delivery!</span>`;
    return;
  }

  // Draw items
  container.innerHTML = '';
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <div class="cart-item-controls">
          <div class="cart-item-qty">
            <button class="qty-btn minus-qty" data-id="${item.id}">&minus;</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn plus-qty" data-id="${item.id}">&plus;</button>
          </div>
          <button class="btn-remove-item" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;

    // Quantity events
    itemEl.querySelector('.minus-qty').addEventListener('click', () => {
      const target = cart.find(c => c.id === item.id);
      if (target.quantity > 1) {
        target.quantity -= 1;
      } else {
        cart = cart.filter(c => c.id !== item.id);
      }
      saveCart();
    });

    itemEl.querySelector('.plus-qty').addEventListener('click', () => {
      const target = cart.find(c => c.id === item.id);
      target.quantity += 1;
      saveCart();
    });

    itemEl.querySelector('.btn-remove-item').addEventListener('click', () => {
      cart = cart.filter(c => c.id !== item.id);
      saveCart();
    });

    container.appendChild(itemEl);
  });

  // Calculate totals & progress
  const threshold = 30.00;
  const deliveryFee = subtotal >= threshold ? 0 : 3.00;
  const total = subtotal + deliveryFee;

  if (progressFill && progressText) {
    if (subtotal >= threshold) {
      progressFill.style.width = '100%';
      progressText.innerHTML = `Congrats! You've unlocked <span class="highlight">FREE Delivery!</span>`;
    } else {
      const needed = threshold - subtotal;
      const pct = (subtotal / threshold) * 100;
      progressFill.style.width = `${pct}%`;
      progressText.innerHTML = `Add <span class="highlight" id="delivery-needed">$${needed.toFixed(2)}</span> for <span class="highlight">FREE Delivery!</span>`;
    }
  }

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (deliveryEl) {
    deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`;
    deliveryEl.style.color = deliveryFee === 0 ? '#2e7d32' : 'inherit';
  }
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

/* --- CAFE MUSIC PLAYER (YouTube Audio-Only, Autoplay Muted) --- */
function setupAmbientMixer() {
  setupMusicPlayer();
}

function setupMusicPlayer() {
  const triggerBtn = document.getElementById('music-trigger-btn');
  const panel = document.getElementById('music-player-panel');
  const iframe = document.getElementById('cafe-yt-iframe');
  const unmuteBtn = document.getElementById('music-unmute-btn');

  if (!triggerBtn || !panel) return;

  // Auto-open the panel briefly then close after 4s to draw attention
  setTimeout(() => {
    panel.classList.add('active');
    triggerBtn.classList.add('active');
    showToast('🎵 Cafe vibes are playing — click the music button to control it!');
    setTimeout(() => {
      panel.classList.remove('active');
      triggerBtn.classList.remove('active');
    }, 4000);
  }, 2000);

  // Toggle panel open/close
  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('active');
    triggerBtn.classList.toggle('active');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (panel.classList.contains('active') &&
        !panel.contains(e.target) &&
        !triggerBtn.contains(e.target)) {
      panel.classList.remove('active');
      triggerBtn.classList.remove('active');
    }
  });

  // Unmute button logic
  let isMuted = true;
  if (unmuteBtn && iframe) {
    unmuteBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      // YouTube iframe URL swap to toggle mute
      const currentSrc = iframe.src;
      if (isMuted) {
        iframe.src = currentSrc.replace('mute=0', 'mute=1');
        unmuteBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> Unmute`;
        unmuteBtn.classList.remove('unmuted');
      } else {
        iframe.src = currentSrc.replace('mute=1', 'mute=0');
        unmuteBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Mute`;
        unmuteBtn.classList.add('unmuted');
        showToast('🔊 Music unmuted!');
      }
    });
  }

  // Animate visualizer bars continuously
  const vizBars = document.querySelectorAll('.music-visualizer-bars span');
  if (vizBars.length) {
    vizBars.forEach((bar, i) => {
      bar.style.animationDelay = `${i * 0.15}s`;
    });
  }
}

/* --- IMAGE LIGHTBOX GALLERY (with Prev/Next Navigation) --- */
function setupLightboxGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('btn-close-lightbox');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!lightbox || !lightboxImg || !lightboxCaption) return;

  // Build an array of gallery images for navigation
  const galleryImages = [];
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    if (img) {
      galleryImages.push({ src: img.src, alt: img.alt || 'Brewed & Co. Experience' });
    }
  });

  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = Math.max(0, Math.min(index, galleryImages.length - 1));
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = galleryImages[currentIndex].src;
      lightboxCaption.textContent = galleryImages[currentIndex].alt;
      lightboxImg.style.opacity = '1';
    }, 150);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Show/hide nav buttons
    if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
    if (nextBtn) nextBtn.style.opacity = currentIndex === galleryImages.length - 1 ? '0.3' : '1';
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex > 0) openLightbox(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex < galleryImages.length - 1) openLightbox(currentIndex + 1);
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft' && currentIndex > 0) openLightbox(currentIndex - 1);
    if (e.key === 'ArrowRight' && currentIndex < galleryImages.length - 1) openLightbox(currentIndex + 1);
    if (e.key === 'Escape') closeLightbox();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Add transition style to lightbox img
  if (lightboxImg) {
    lightboxImg.style.transition = 'opacity 0.15s ease';
  }
}

/* --- TYPEWRITER EFFECT --- */
function setupTypewriter() {
  const target = document.querySelector('.hero-typewriter');
  if (!target) return;

  const words = target.dataset.words ? target.dataset.words.split('|') : [target.textContent];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  };

  type();
}

/* --- COUNT-UP ANIMATION --- */
function setupCountUpAnimations() {
  const counters = document.querySelectorAll('.number-count');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const isDecimal = el.dataset.decimal === 'true';
    // For display: if target >= 1000, we show as "target/1000" (e.g. 200000 -> 200)
    const displayTarget = target >= 1000 ? target / 1000 : target;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      const current = displayTarget * ease;

      if (isDecimal) {
        el.textContent = current.toFixed(1) + suffix;
      } else {
        el.textContent = Math.floor(current) + suffix;
      }

      if (step >= steps) {
        clearInterval(timer);
        if (isDecimal) {
          el.textContent = displayTarget.toFixed(1) + suffix;
        } else {
          el.textContent = displayTarget + suffix;
        }
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* --- BUTTON RIPPLE EFFECT --- */
function setupRippleEffects() {
  const rippleTargets = document.querySelectorAll('.btn-primary, .btn-reserve, .btn-submit-booking, .btn-checkout, .btn-card-add');

  rippleTargets.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* --- TIMELINE SCROLL PROGRESS LINE --- */
function setupTimelineScrollProgress() {
  const timelineContainer = document.querySelector('.timeline-container');
  if (!timelineContainer) return;

  const progressLine = document.createElement('div');
  progressLine.className = 'timeline-progress-line';
  timelineContainer.appendChild(progressLine);

  const updateProgress = () => {
    const rect = timelineContainer.getBoundingClientRect();
    const windowH = window.innerHeight;
    const total = rect.height;
    const visible = Math.min(windowH, rect.bottom) - Math.max(0, rect.top);
    const pct = Math.max(0, Math.min(100, (visible / total) * 100 + ((windowH - rect.top) / total) * 40));
    progressLine.style.height = Math.min(pct, 100) + '%';
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/* --- PAGE FADE-IN TRANSITION --- */
function setupPageTransition() {
  document.body.classList.add('page-loaded');

  document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
    if (link.href && !link.href.startsWith('#') && link.href.includes(window.location.host)) {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel')) {
          e.preventDefault();
          document.body.classList.remove('page-loaded');
          setTimeout(() => { window.location.href = href; }, 300);
        }
      });
    }
  });
}

