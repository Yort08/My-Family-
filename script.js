// Dancel family dataset — clear, flattened structure
const familyData = {
  "rolando": {
    id: "rolando",
    name: "Rolando D. Dancel",
    relationship: "Patriarch",
    roleGroup: "parent",
    generation: 1,
    dates: "b. 1960",
    birthPlace: "Tarlac, Philippines",
    occupation: "Agricultural Consultant & Farmer",
    tagline: "The soil yields to those who treat it with patience and respect.",
    bio: "Rolando is the patriarch of the Dancel family. An agronomy consultant dedicated to sustainable farming and community development.",
    image: "assets/rolando.jpg",
    spouse: "juvilyn",
    parents: [],
    children: ["manuelito", "mary_jane", "mary_joy", "mary_grace", "r_jay", "cherry_anne", "rolando_jr", "olivia", "troy_lits", "angelyn"],
    gallery: [
      { title: "Rolando's Farm Journal", date: "2008", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c3a9?q=80&w=600" },
      { title: "Agricultural Consulting Fieldwork", date: "1994", image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600" }
    ]
  },
  "juvilyn": {
    id: "juvilyn",
    name: "Juvilyn D. Dancel",
    relationship: "Matriarch",
    roleGroup: "parent",
    generation: 1,
    dates: "b. 1963",
    birthPlace: "Pangasinan, Philippines",
    occupation: "High School Educator",
    tagline: "Education is the greatest heritage we can give to our children.",
    bio: "Juvilyn is a dedicated educator and organizer who keeps the large family connected.",
    image: null,
    spouse: "rolando",
    parents: [],
    children: ["manuelito", "mary_jane", "mary_joy", "mary_grace", "r_jay", "cherry_anne", "rolando_jr", "olivia", "troy_lits", "angelyn"],
    gallery: [
      { title: "Teaching Commendation Ceremony", date: "2001", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600" },
      { title: "Cooking for the family feast", date: "2015", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600" }
    ]
  },
  "manuelito": {
    id: "manuelito",
    name: "Manuelito D. Dancel",
    relationship: "Eldest Son",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1980",
    birthPlace: "Tarlac, Philippines",
    occupation: "Senior Software Architect",
    tagline: "Clean code and strong connections make complex systems work.",
    bio: "Manuelito builds software and keeps the family's digital archives running.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "mary_jane": {
    id: "mary_jane",
    name: "Mary Jane D. Dancel",
    relationship: "Eldest Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1982",
    birthPlace: "Tarlac, Philippines",
    occupation: "Head Pediatric Nurse",
    tagline: "Care is about treating the person, not just the symptom.",
    bio: "Mary Jane leads pediatric care and supports family health initiatives.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "mary_joy": {
    id: "mary_joy",
    name: "Mary Joy D. Dancel",
    relationship: "Second Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1984",
    birthPlace: "Tarlac, Philippines",
    occupation: "Operations Manager",
    tagline: "Efficiency is doing things right; effectiveness is doing the right things.",
    bio: "Mary Joy manages logistics for an international retail brand.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "mary_grace": {
    id: "mary_grace",
    name: "Mary Grace D. Dancel",
    relationship: "Third Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1986",
    birthPlace: "Tarlac, Philippines",
    occupation: "Certified Public Accountant",
    tagline: "Numbers speak truth if you listen with precision.",
    bio: "Mary Grace works in finance and helps manage family finances for reunions.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "r_jay": {
    id: "r_jay",
    name: "R-Jay Dancel",
    relationship: "Second Son",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1991",
    birthPlace: "Tarlac, Philippines",
    occupation: "Lead UI/UX Designer",
    tagline: "Design is not just what it looks like, but how it works.",
    bio: "R-Jay is a creative lead in digital product design.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "cherry_anne": {
    id: "cherry_anne",
    name: "Cherry Anne D. Dancel",
    relationship: "Fourth Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1993",
    birthPlace: "Tarlac, Philippines",
    occupation: "Clinical Pharmacist",
    tagline: "Science combined with care yields the best remedies.",
    bio: "Cherry Anne works in clinical research evaluating drug interactions.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "rolando_jr": {
    id: "rolando_jr",
    name: "Rolando D. Dancel Jr.",
    relationship: "Third Son / Namesake",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1995",
    birthPlace: "Tarlac, Philippines",
    occupation: "Civil Engineer",
    tagline: "We build structures that stand the test of time and weather.",
    bio: "Rolando Jr. is a civil engineer working on infrastructure projects.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "olivia": {
    id: "olivia",
    name: "Olivia D. Dancel",
    relationship: "Fifth Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1997",
    birthPlace: "Tarlac, Philippines",
    occupation: "Copywriter & Journalist",
    tagline: "Words are lenses that bring the truths of human nature into focus.",
    bio: "Olivia writes about culture and food history.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "troy_lits": {
    id: "troy_lits",
    name: "Troy Lits D. Dancel",
    relationship: "Fourth Son",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 1999",
    birthPlace: "Tarlac, Philippines",
    occupation: "Environmental Scientist",
    tagline: "To preserve our ecosystems is to protect our future.",
    bio: "Troy Lits researches soil quality and watershed preservation.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "angelyn": {
    id: "angelyn",
    name: "Angelyn D. Dancel",
    relationship: "Youngest Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "b. 2002",
    birthPlace: "Tarlac, Philippines",
    occupation: "Architecture Student",
    tagline: "Design is where science, engineering, and fine arts intersect.",
    bio: "Angelyn is studying architecture and focuses on eco-friendly design.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  }
};
// Common initial helper to construct a Monogram/Avatar Fallback
function createAvatarHTML(member) {
  // Calculate initials for fallback
  const initials = (member && member.name)
    ? member.name
        .split(' ')
        .filter(n => n.length > 0 && !n.includes('(') && !n.includes("'") && n.toLowerCase() !== 'nee' && n !== 'Jr.')
        .slice(0, 2)
        .map(n => n[0].toUpperCase())
        .join('')
    : '';

  if (member && member.image) {
    return `
      <img src="${member.image}" alt="${member.name}" class="cameo-image" onerror="this.style.display='none'; if(this.nextElementSibling){ this.nextElementSibling.style.display='flex'; }">
      <div class="avatar-fallback fallback-${member.roleGroup}" style="display:none;align-items:center;justify-content:center;font-size:0.95rem;font-weight:700;color:#fff">${initials}</div>
    `;
  }

  return `
    <div class="avatar-fallback fallback-${(member && member.roleGroup) || 'default'}">
      ${initials}
    </div>
  `;
}
// ==========================================================================
// INDEX PAGE: Family Tree Rendering & Filters
// ==========================================================================
function initIndexPage() {
  const searchInput = document.getElementById('search-input');
  const filterSelect = document.getElementById('filter-select');
  const suggestionPopup = document.getElementById('suggestions-popup');
  const cards = document.querySelectorAll('.member-card');
  
  // Populate Card contents dynamically on load to keep HTML clean
  cards.forEach(card => {
    const id = card.getAttribute('data-id');
    const member = familyData[id];
    if (member) {
      // Add data attributes for filters
      card.setAttribute('data-generation', member.generation);
      card.setAttribute('data-rolegroup', member.roleGroup);
      
      const frame = card.querySelector('.cameo-frame');
      const nameEl = card.querySelector('.member-name');
      const datesEl = card.querySelector('.member-dates');
      const relationEl = card.querySelector('.member-relation');
      
      if (frame) frame.innerHTML = createAvatarHTML(member);
      if (nameEl) nameEl.textContent = member.name;
      if (datesEl) datesEl.textContent = member.dates;
      if (relationEl) relationEl.textContent = member.relationship.split(' / ')[0];
      
      card.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.opacity = 0;
        document.body.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          window.location.href = `profile.html?id=${id}`;
        }, 300);
      });
    }
  });
  // Highlight specific member via search or autocomplete selection
  function highlightMember(id) {
    cards.forEach(card => {
      card.classList.remove('highlighted', 'dimmed');
      if (id) {
        if (card.getAttribute('data-id') === id) {
          card.classList.add('highlighted');
          card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
          card.classList.add('dimmed');
        }
      }
    });
  }
  // Handle Search Input & Live filtering
  function handleFilterAndSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const activeGen = filterSelect.value;
    
    cards.forEach(card => {
      const id = card.getAttribute('data-id');
      const member = familyData[id];
      if (!member) return;
      
      const matchQuery = member.name.toLowerCase().includes(query) || 
                         member.relationship.toLowerCase().includes(query) ||
                         member.occupation.toLowerCase().includes(query) ||
                         member.dates.includes(query);
                         
      const matchGen = activeGen === 'all' || member.generation.toString() === activeGen;
      
      if (matchQuery && matchGen) {
        card.classList.remove('dimmed');
      } else {
        card.classList.add('dimmed');
      }
      card.classList.remove('highlighted');
    });
  }
  searchInput.addEventListener('input', () => {
    handleFilterAndSearch();
    showSuggestions();
  });
  
  filterSelect.addEventListener('change', () => {
    handleFilterAndSearch();
  });
  // Autocomplete Suggestions
  function showSuggestions() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      suggestionPopup.style.display = 'none';
      return;
    }
    
    const matches = Object.values(familyData).filter(member => 
      member.name.toLowerCase().includes(query) || 
      member.relationship.toLowerCase().includes(query)
    );
    
    if (matches.length === 0) {
      suggestionPopup.style.display = 'none';
      return;
    }
    
    suggestionPopup.innerHTML = '';
    matches.slice(0, 5).forEach(m => {
      const item = document.createElement('div');
      item.className = 'suggestion-item';
      
      const avatarHTML = m.image ? 
        `<img src="${m.image}" class="suggestion-avatar">` : 
        `<div class="suggestion-avatar avatar-fallback fallback-${m.roleGroup}" style="display:flex;align-items:center;justify-content:center;font-size:0.8rem;font-weight:700;color:#fff">${m.name.split(' ')[0][0]}</div>`;
        
      item.innerHTML = `
        ${avatarHTML}
        <div class="suggestion-details">
          <div class="suggestion-name">${m.name}</div>
          <div class="suggestion-relation">${m.relationship}</div>
        </div>
      `;
      
      item.addEventListener('click', () => {
        searchInput.value = m.name;
        suggestionPopup.style.display = 'none';
        highlightMember(m.id);
      });
      
      suggestionPopup.appendChild(item);
    });
    
    suggestionPopup.style.display = 'block';
  }
  // Close suggestion popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.controls-container')) {
      suggestionPopup.style.display = 'none';
    }
  });
}
// ==========================================================================
// PROFILE PAGE: Dynamic rendering & Family relations logic
// ==========================================================================
function initProfilePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  
  const mainLayout = document.getElementById('profile-layout');
  const errorContainer = document.getElementById('error-container');
  
  if (!id || !familyData[id]) {
    // Show error state
    if (mainLayout) mainLayout.style.display = 'none';
    if (errorContainer) errorContainer.style.display = 'block';
    return;
  }
  
  // Member exists, populate DOM
  const member = familyData[id];
  if (errorContainer) errorContainer.style.display = 'none';
  
  // 1. Hero Card details
  const heroFrame = document.getElementById('hero-frame');
  const heroName = document.getElementById('hero-name');
  const heroRole = document.getElementById('hero-role');
  const heroLifespan = document.getElementById('hero-lifespan');
  const heroBirthplace = document.getElementById('hero-birthplace');
  const heroOccupation = document.getElementById('hero-occupation');
  const heroQuote = document.getElementById('hero-quote');
  
  if (heroFrame) heroFrame.innerHTML = createAvatarHTML(member);
  if (heroName) heroName.textContent = member.name;
  if (heroRole) heroRole.textContent = member.relationship;
  if (heroLifespan) heroLifespan.textContent = member.dates;
  if (heroBirthplace) heroBirthplace.textContent = member.birthPlace;
  if (heroOccupation) heroOccupation.textContent = member.occupation;
  
  if (heroQuote && member.tagline) {
    heroQuote.textContent = `“${member.tagline}”`;
    heroQuote.style.display = 'block';
  } else if (heroQuote) {
    heroQuote.style.display = 'none';
  }
  
  // 2. Biography
  const bioContainer = document.getElementById('bio-container');
  if (bioContainer) {
    bioContainer.innerHTML = member.bio
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');
  }
  
  // 3. Immediate Family Unit Grid
  const familyGrid = document.getElementById('family-grid');
  if (familyGrid) {
    familyGrid.innerHTML = '';
    let relationalMembers = [];
    
    // Spouse relationship
    if (member.spouse && familyData[member.spouse]) {
      relationalMembers.push({
        member: familyData[member.spouse],
        relationLabel: "Spouse"
      });
    }
    
    // Parents relationship
    if (member.parents && member.parents.length > 0) {
      member.parents.forEach(pId => {
        if (familyData[pId]) {
          relationalMembers.push({
            member: familyData[pId],
            relationLabel: familyData[pId].relationship.includes("Father") ? "Father" : "Mother"
          });
        }
      });
    }
    
    // Siblings relationship (siblings share at least one parent)
    if (member.parents && member.parents.length > 0) {
      const checkedSiblings = new Set();
      member.parents.forEach(pId => {
        if (familyData[pId]) {
          familyData[pId].children.forEach(cId => {
            if (cId !== member.id && !checkedSiblings.has(cId) && familyData[cId]) {
              checkedSiblings.add(cId);
              relationalMembers.push({
                member: familyData[cId],
                relationLabel: familyData[cId].relationship.toLowerCase().includes("sister") ? "Sister" : "Brother"
              });
            }
          });
        }
      });
    }
    
    // Children relationship
    if (member.children && member.children.length > 0) {
      member.children.forEach(cId => {
        if (familyData[cId]) {
          relationalMembers.push({
            member: familyData[cId],
            relationLabel: familyData[cId].relationship.toLowerCase().includes("daughter") ? "Daughter" : "Son"
          });
        }
      });
    }
    
    if (relationalMembers.length === 0) {
      familyGrid.innerHTML = `<p class="bio-text" style="grid-column: 1/-1; font-style: italic; color: var(--color-text-muted);">Immediate family records are currently being cataloged.</p>`;
    } else {
      relationalMembers.forEach(entry => {
        const m = entry.member;
        const card = document.createElement('a');
        card.href = `profile.html?id=${m.id}`;
        card.className = 'family-unit-card';
        
        card.innerHTML = `
          <div class="cameo-frame">
            ${createAvatarHTML(m)}
          </div>
          <div class="member-name">${m.name}</div>
          <div class="member-relation">${entry.relationLabel}</div>
        `;
        
        // Dynamic click transitions
        card.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.style.opacity = 0;
          document.body.style.transition = 'opacity 0.3s ease';
          setTimeout(() => {
            window.location.href = `profile.html?id=${m.id}`;
          }, 300);
        });
        
        familyGrid.appendChild(card);
      });
    }
  }
  
  // 4. Gallery Section
  const galleryGrid = document.getElementById('gallery-grid');
  const gallerySection = document.getElementById('gallery-section');
  if (galleryGrid) {
    galleryGrid.innerHTML = '';
    if (member.gallery && member.gallery.length > 0) {
      if (gallerySection) gallerySection.style.display = 'block';
      member.gallery.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item';
        wrapper.innerHTML = `
          <div class="gallery-img-wrapper">
            <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
          </div>
          <div class="gallery-caption">
            <h4 class="gallery-title">${item.title}</h4>
            <span class="gallery-date">${item.date}</span>
          </div>
        `;
        galleryGrid.appendChild(wrapper);
      });
    } else {
      if (gallerySection) gallerySection.style.display = 'none';
    }
  }
}
// Global page load router
document.addEventListener('DOMContentLoaded', () => {
  // Reveal document on load
  document.body.classList.add('animate-fade-in');
  
  if (document.getElementById('tree-container')) {
    initIndexPage();
  } else if (document.getElementById('profile-layout') || document.getElementById('error-container')) {
    initProfilePage();
  }
});