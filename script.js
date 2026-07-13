// Dancel family dataset — clear, flattened structure
const familyData = {
  "rolando": {
    id: "rolando",
    name: "Rolando D. Dancel",
    relationship: "Patriarch",
    roleGroup: "parent",
    generation: 1,
    dates: "Nov 17, 1962",
    birthPlace: "Balut Tondo, Manila, Philippines",
    occupation: "Tricycle Driver",
    tagline: "Mamatay kung mamatay",
    bio: "Rolando is very hardworking and has been the backbone of the family, ensuring that all his children have access to education and opportunities.",
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
    dates: "Dec 25, 1966",
    birthPlace: "Ilo-ilo City, Philippines",
    occupation: "House Wife",
    tagline: "Education is the greatest heritage we can give to our children.",
    bio: "Juvilyn is very loving and hardworking mother who keeps the large family connected.",
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
    dates: "Oct 3, 1984",
    birthPlace: "Victorina, Lolomboy, Bulacan, Philippines",
    occupation: "Bike Technnician",
    tagline: "Hard work pays off, but family is the real reward.",
    bio: "Manuelito builds software and keeps the family's digital archives running.",
    image: null,
    spouse: "jonna",
    parents: ["rolando", "juvilyn"],
    children: ["alexandra", "altheo"],
    gallery: [
      { title: "Bike Maintenance Workshop", date: "2019", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600" },
      { title: "Family Tech Setup Project", date: "2021", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600" }
    ]
  },
  "mary_jane": {
    id: "mary_jane",
    name: "Mary Jane D. Dancel",
    relationship: "Eldest Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "Dec 4, 1985",
    birthPlace: "Victorina Lolomboy, Bulacan, Philippines",
    occupation: "Head Pediatric Nurse",
    tagline: "Care is about treating the person, not just the symptom.",
    bio: "Mary Jane leads pediatric care and supports family health initiatives.",
    image: null,
    spouse: "rommel",
    parents: ["rolando", "juvilyn"],
    children: ["loloy"],
    gallery: [
      { title: "Pediatric Care Excellence Award", date: "2018", image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?q=80&w=600" },
      { title: "Family Health Wellness Initiative", date: "2022", image: "https://images.unsplash.com/photo-1631217314830-d13cf78d3cc0?q=80&w=600" }
    ]
  },
  "rommel": {
    id: "rommel",
    name: "Rommel Bajaro",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "Rommel is the caring husband of Mary Jane Dancel.",
    image: null,
    spouse: "mary_jane",
    parents: [],
    children: ["loloy"],
    gallery: []
  },
  "loloy": {
    id: "loloy",
    name: "Loloy",
    relationship: "Pet Dog",
    roleGroup: "pet",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "Family Companion",
    tagline: "A beloved furry member of the Dancel-Bajaro family.",
    bio: "Loloy is the cherished family dog who brings joy and companionship to Mary Jane and Rommel's home.",
    image: null,
    spouse: null,
    parents: ["mary_jane", "rommel"],
    children: [],
    gallery: []
  },
  "mary_joy": {
    id: "mary_joy",
    name: "Mary Joy D. Dancel",
    relationship: "Second Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "March 9, 1988",
    birthPlace: "Lolomboy, Bulacan, Philippines",
    occupation: "Operations Manager",
    tagline: "Efficiency is doing things right; effectiveness is doing the right things.",
    bio: "Mary Joy manages logistics for an international retail brand.",
    image: null,
    spouse: "brian_navarro",
    parents: ["rolando", "juvilyn"],
    children: ["jhian_d_navarro", "josh_d_navarro", "yhan_e_navarro", "brianna_d_navarro"],
    gallery: [
      { title: "Supply Chain Optimization Project", date: "2020", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600" },
      { title: "Logistics Team Recognition", date: "2023", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600" }
    ]
  },
  "brian_navarro": {
    id: "brian_navarro",
    name: "Brian Navarro",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "Brian is the loving husband of Mary Joy Dancel.",
    image: null,
    spouse: "mary_joy",
    parents: [],
    children: ["jhian_d_navarro", "josh_d_navarro", "yhan_e_navarro", "brianna_d_navarro"],
    gallery: []
  },
  "jhian_d_navarro": {
    id: "jhian_d_navarro",
    name: "Jhian D. Navarro",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["mary_joy", "brian_navarro"],
    children: [],
    gallery: []
  },
  "josh_d_navarro": {
    id: "josh_d_navarro",
    name: "Josh D. Navarro",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["mary_joy", "brian_navarro"],
    children: [],
    gallery: []
  },
  "yhan_e_navarro": {
    id: "yhan_e_navarro",
    name: "Yhan-E D. Navarro",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["mary_joy", "brian_navarro"],
    children: [],
    gallery: []
  },
  "brianna_d_navarro": {
    id: "brianna_d_navarro",
    name: "Brianna D. Navarro",
    relationship: "Daughter",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["mary_joy", "brian_navarro"],
    children: [],
    gallery: []
  },
  "mary_grace": {
    id: "mary_grace",
    name: "Mary Grace D. Dancel",
    relationship: "Third Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "Dec 10, 1990",
    birthPlace: "Banlok Lolomboy, Bulacan, Philippines",
    occupation: "Certified Public Accountant",
    tagline: "Numbers speak truth if you listen with precision.",
    bio: "Mary Grace works in finance and helps manage family finances for reunions.",
    image: null,
    spouse: "bj_maularde",
    parents: ["rolando", "juvilyn"],
    children: ["john_marvin_dancel"],
    gallery: [
      { title: "Financial Planning Seminar", date: "2019", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600" },
      { title: "Family Reunion Budget Management", date: "2022", image: "https://images.unsplash.com/photo-1579621970563-430f63602566?q=80&w=600" }
    ]
  },
  "bj_maularde": {
    id: "bj_maularde",
    name: "Bj Maularde",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "Bj is the loving husband of Mary Grace D. Dancel.",
    image: null,
    spouse: "mary_grace",
    parents: [],
    children: ["john_marvin_dancel"],
    gallery: []
  },
  "john_marvin_dancel": {
    id: "john_marvin_dancel",
    name: "John Marvin Dancel",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["mary_grace", "bj_maularde"],
    children: [],
    gallery: []
  },
  "r_jay": {
    id: "r_jay",
    name: "R-Jay Dancel",
    relationship: "Second Son",
    roleGroup: "sibling",
    generation: 2,
    dates: "May 25, 1993",
    birthPlace: "Banlok Lolomboy, Bulacan, Philippines",
    occupation: "Lead UI/UX Designer",
    tagline: "Design is not just what it looks like, but how it works.",
    bio: "R-Jay is a creative lead in digital product design.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: [
      { title: "Digital Product Design Showcase", date: "2021", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600" },
      { title: "UI/UX Design Awards", date: "2023", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a5?q=80&w=600" }
    ]
  },
  "cherry_anne": {
    id: "cherry_anne",
    name: "Cherry Anne D. Dancel",
    relationship: "Fourth Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "July 18, 1994",
    birthPlace: "Banlok Lolomboy, Bulacan, Philippines",
    occupation: "Clinical Pharmacist",
    tagline: "Science combined with care yields the best remedies.",
    bio: "Cherry Anne works in clinical research evaluating drug interactions.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: ["lhian_d_lobendino", "andrew_d_lobendino", "levy_ace_d_lobendino"],
    gallery: [
      { title: "Clinical Research Presentation", date: "2020", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600" },
      { title: "Pharmacy Innovation Project", date: "2022", image: "https://images.unsplash.com/photo-1585461231042-528ee7d0d75b?q=80&w=600" }
    ]
  },
  "lhian_d_lobendino": {
    id: "lhian_d_lobendino",
    name: "Lhian D. Lobendino",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["cherry_anne"],
    children: [],
    gallery: []
  },
  "andrew_d_lobendino": {
    id: "andrew_d_lobendino",
    name: "Andrew D. Lobendino",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["cherry_anne"],
    children: [],
    gallery: []
  },
  "levy_ace_d_lobendino": {
    id: "levy_ace_d_lobendino",
    name: "Levy Ace D. Lobendino",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["cherry_anne"],
    children: [],
    gallery: []
  },
  "rolando_jr": {
    id: "rolando_jr",
    name: "Rolando D. Dancel Jr.",
    relationship: "Third Son / Namesake",
    roleGroup: "sibling",
    generation: 2,
    dates: "July 6, 1997",
    birthPlace: "Abangan Sur Marilao, Bulacan, Philippines",
    occupation: "Civil Engineer",
    tagline: "We build structures that stand the test of time and weather.",
    bio: "Rolando Jr. is a civil engineer working on infrastructure projects.",
    image: null,
    spouse: "marian_solijon",
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: [
      { title: "Infrastructure Development Project", date: "2019", image: "https://images.unsplash.com/photo-1581092162562-40038f60aa14?q=80&w=600" },
      { title: "Bridge Construction Achievement", date: "2023", image: "https://images.unsplash.com/photo-1581092162562-40038f60aa14?q=80&w=600" }
    ]
  },
  "marian_solijon": {
    id: "marian_solijon",
    name: "Marian Solijon Dancel",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "Marian is the loving wife of Rolando Dancel Jr.",
    image: null,
    spouse: "rolando_jr",
    parents: [],
    children: [],
    gallery: []
  },
  "olivia": {
    id: "olivia",
    name: "Olivia D. Dancel",
    relationship: "Fifth Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "Feb 9, 1999",
    birthPlace: "Abangan Sur Marilao, Bulaca, Philippines",
    occupation: "Copywriter & Journalist",
    tagline: "Words are lenses that bring the truths of human nature into focus.",
    bio: "Olivia writes about culture and food history.",
    image: null,
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: [
      { title: "Published Articles Collection", date: "2021", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600" },
      { title: "Food Culture Documentary Feature", date: "2023", image: "https://images.unsplash.com/photo-1504674900612-b3a27d06cd87?q=80&w=600" }
    ]
  },
  "troy_lits": {
    id: "troy_lits",
    name: "Troy Lits D. Dancel",
    relationship: "Fourth Son",
    roleGroup: "sibling",
    generation: 2,
    dates: "August 22, 2004",
    birthPlace: "Igulot, Bocaue, Bulacan, Philippines",
    occupation: "Bachelor of Science in Information Technology Student",
    tagline: "Building tomorrow's solutions, one line of code at a time.",
    bio: "Troy Lits bridging the gap between complex data and elegant solutions.",
    image: "1x1ko.jpg",
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: [
      { title: "My 1x1 picture hehe", date: "2022", image: "1x1ko.jpg" },
      { title: "Coding Project Portfolio", date: "2024", image: "https://images.unsplash.com/photo-1517694712642-f529300b5a3f?q=80&w=600" }
    ]
  },
  "angelyn": {
    id: "angelyn",
    name: "Angelyn D. Dancel",
    relationship: "Youngest Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "June 8, 2007",
    birthPlace: "Northville 5, Batia, Bocaue, Bulacan, Philippines",
    occupation: "Tourism Management Student",
    tagline: "Connecting cultures, crafting unforgettable journeys.",
    bio: "Angelyn is dedicated to sustainable hospitality, destination branding, and seamless guest relations.",
    image: "ang.jpe",
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: [
      { title: "Tourism Program Capstone Project", date: "2023", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600" },
      { title: "Hospitality Management Studies", date: "2024", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600" }
    ]
  },
  "jonna": {
    id: "jonna",
    name: "Jonna Francisco Dancel",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: "manuelito",
    parents: [],
    children: ["alexandra", "altheo"],
    gallery: []
  },
  "alexandra": {
    id: "alexandra",
    name: "Alexandra Louise Dancel",
    relationship: "First Daughter",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["manuelito", "jonna"],
    children: [],
    gallery: []
  },
  "altheo": {
    id: "altheo",
    name: "Altheo Lucas Dancel",
    relationship: "Youngest Son",
    roleGroup: "child",
    generation: 3,
    dates: "",
    birthPlace: "",
    occupation: "",
    tagline: "",
    bio: "",
    image: null,
    spouse: null,
    parents: ["manuelito", "jonna"],
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
            relationLabel: familyData[pId].relationship.includes("Patriarch") || familyData[pId].relationship.includes("Father") ? "Father" : "Mother"
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
                relationLabel: familyData[cId].relationship.toLowerCase().includes("daughter") || familyData[cId].relationship.toLowerCase().includes("sister") ? "Sister" : "Brother"
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
  
  // Initialize theme toggle
  initThemeToggle();
});

// Theme Toggle Functionality
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  
  // Load saved theme or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  // Toggle theme on button click
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}