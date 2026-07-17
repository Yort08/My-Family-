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
    image: "photos/Rolando.jpe",
    spouse: "juvilyn",
    parents: [],
    children: ["manuelito", "mary_jane", "mary_joy", "mary_grace", "r_jay", "cherry_anne", "russll", "rolando_jr", "olivia", "troy_lits", "angelyn"],
    gallery: [
      { title: "Signature Chin-Pose at Dinner", date: "Dinner Gathering", image: "papa_photos/b538d9f2-4a98-4fa0-bd9f-24ff9fe8bd5c.jpe" },
      { title: "Sweet Moments with Grandchild", date: "Family Time", image: "papa_photos/29378b7f-d7df-4661-9491-7f6a7068a352.jpe" },
      { title: "Family Restaurant Outing", date: "Dinner Gathering", image: "papa_photos/37142029-bfd8-4def-bf4f-4c128e75c71f.jpe" },
      { title: "The Dancel Family Selfie", date: "Home Gathering", image: "papa_photos/e61131a9-c874-4fce-8b3f-780211de1e40.jpe" },
      { title: "Relaxed Selfie at Home", date: "Selfie", image: "papa_photos/e70fe8ea-4502-4ec1-9cb2-fb559a816a40.jpe" }
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
    image: "photos/Juvilyn Dancel.jpe",
    spouse: "rolando",
    parents: [],
    children: ["manuelito", "mary_jane", "mary_joy", "mary_grace", "r_jay", "cherry_anne", "russll", "rolando_jr", "olivia", "troy_lits", "angelyn"],
    gallery: [
      { title: "Cherished Smile", date: "Mama's Memory", image: "mama/0cbf87d0-af2f-460f-9add-7ea4ba515814.jpe" },
      { title: "Warm Moments", date: "Mama's Memory", image: "mama/0f729537-6d74-4654-8c78-19a907f9d629.jpe" },
      { title: "Candid Portrait", date: "Mama's Memory", image: "mama/11734599-1e7a-4cd9-a9c8-9914f67e6462.jpe" },
      { title: "Happy Gathering", date: "Mama's Memory", image: "mama/13dfb3cb-09e0-466a-b9ee-9d61547c126a.jpe" },
      { title: "Loving Mother", date: "Mama's Memory", image: "mama/1ea4da5b-4051-47af-8a11-1b9746e03f44.jpe" },
      { title: "Sweet Smiles", date: "Mama's Memory", image: "mama/3bb8c2e1-b91d-4098-b911-501710952549.jpe" },
      { title: "Family Feast", date: "Mama's Memory", image: "mama/3fe5a80b-9303-41c1-ad7f-47ea0743414a.jpe" },
      { title: "Special Celebration", date: "Mama's Memory", image: "mama/44083458-7cf9-4f7e-a925-508e9915b4eb.jpe" },
      { title: "Bright Day", date: "Mama's Memory", image: "mama/4f3067b2-1d72-465c-bb9d-8847dfb470af.jpe" },
      { title: "Mama's Portrait", date: "Mama's Memory", image: "mama/694f72b2-3375-4daf-b144-7c098beb5991.jpe" },
      { title: "Joyful Gathering", date: "Mama's Memory", image: "mama/736dbf58-49fe-4ffb-8883-6bb0538bd37c.jpe" },
      { title: "Warm Portrait", date: "Mama's Memory", image: "mama/75bf8234-9331-4888-9570-3ed700670d82.jpe" },
      { title: "Lovely Day", date: "Mama's Memory", image: "mama/8eaab62d-d458-4954-880b-0a27b074c583.jpe" },
      { title: "Candid Smile", date: "Mama's Memory", image: "mama/951f17c5-4417-4c61-b611-69620965b373.jpe" },
      { title: "Happy Memories", date: "Mama's Memory", image: "mama/9a81b265-da08-4d4c-a147-4236df5f79cc.jpe" },
      { title: "Family Portrait", date: "Mama's Memory", image: "mama/c2aca60b-66a5-45c7-91f0-75512aeba728.jpe" },
      { title: "Beautiful Moment", date: "Mama's Memory", image: "mama/caac5735-c46c-49ea-9c0b-3b7b0c3065dd.jpe" },
      { title: "Happy Time", date: "Mama's Memory", image: "mama/d87caa59-6061-41e8-aa44-2cbc326ba41b.jpe" },
      { title: "Sweetest Memories", date: "Mama's Memory", image: "mama/ee7c7d46-0c32-43f8-8acb-9a7620c14e41.jpe" }
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
    image: "photos/kuya.jpg",
    spouse: "jonna",
    parents: ["rolando", "juvilyn"],
    children: ["alexandra", "altheo"],
    gallery: [
      { title: "Sweet Moment", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/31562402_2085735124773156_7617457801803071488_n.jpg" },
      { title: "Beautiful Smile", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/43522890_2316406191706047_7596374301268246528_n.jpg" },
      { title: "Joyful Gathering", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/43538276_2316597608353572_4639490511420260352_n.jpg" },
      { title: "Happy Time", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/467306674_9453534531326475_240617842625270639_n.jpg" },
      { title: "Lovely Portrait", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/467307574_9447529298593665_2493673521119225490_n.jpg" },
      { title: "Candid Shot", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/467335770_9450894254923836_1955047487087608836_n.jpg" },
      { title: "Cherished Moment", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/471149758_9660850577261535_6579316820863272319_n.jpg" },
      { title: "Sweet Memories", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/48426473_2430398416973490_4566168405995945984_n.jpg" },
      { title: "Joyful Day", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/57597603_2616880898325240_1413892887266983936_n.jpg" },
      { title: "Lovely Gathering", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/58381098_2616894621657201_7044199789432406016_n.jpg" },
      { title: "Family Photo", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/Screenshot 2026-07-17 223322.png" },
      { title: "Cherished Moment", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/507160936_24133002649636960_1156913212155968834_n.jpg" },
      { title: "Warm Gathering", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/516486757_24297285526542004_3234688603875886038_n.jpg" }
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
    occupation: "Home Business Owner",
    tagline: "Care is about treating the person, not just the symptom.",
    bio: "Mary Jane leads pediatric care and supports family health initiatives.",
    image: "jane/jane.jpe",
    spouse: "rommel",
    parents: ["rolando", "juvilyn"],
    children: ["loloy"],
    gallery: [
      { title: "Jane's Profile Photo", date: "Jane's Memory", image: "jane/jane.jpe" },
      { title: "Rommel's Profile Photo", date: "Jane's Memory", image: "jane/rommel.jpe" },
      { title: "Loloy's Profile Photo", date: "Jane's Memory", image: "jane/loy.jpe" },
    ]
  },
  "rommel": {
    id: "rommel",
    name: "Rommel Bajaro",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "March 15, 1985",
    birthPlace: "Irosin, Sorsogon, Philippines",
    occupation: "Welder",
    tagline: "",
    bio: "Rommel is the caring husband of Mary Jane Dancel.",
    image: "jane/rommel.jpe",
    spouse: "mary_jane",
    parents: [],
    children: ["loloy"],
    gallery: [
      { title: "Jane's Profile Photo", date: "Jane's Memory", image: "jane/jane.jpe" },
      { title: "Rommel's Profile Photo", date: "Jane's Memory", image: "jane/rommel.jpe" },
      { title: "Loloy's Profile Photo", date: "Jane's Memory", image: "jane/loy.jpe" }
    ]
  },
  "loloy": {
    id: "loloy",
    name: "Loloy",
    relationship: "Pet Dog",
    roleGroup: "pet",
    generation: 3,
    dates: "Dec 3, 2025",
    birthPlace: "PNP, Batia, Bocaue, Bulacan, Philippines",
    occupation: "Family Dog",
    tagline: "A beloved furry member of the Dancel-Bajaro family.",
    bio: "Loloy is the cherished family dog who brings joy and companionship to Mary Jane and Rommel's home.",
    image: "jane/loy.jpe",
    spouse: null,
    parents: ["mary_jane", "rommel"],
    children: [],
    gallery: [
      { title: "Jane's Profile Photo", date: "Jane's Memory", image: "jane/jane.jpe" },
      { title: "Rommel's Profile Photo", date: "Jane's Memory", image: "jane/rommel.jpe" },
      { title: "Loloy's Profile Photo", date: "Jane's Memory", image: "jane/loy.jpe" }
    ]
  },
  "mary_joy": {
    id: "mary_joy",
    name: "Mary Joy D. Dancel",
    relationship: "Second Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "March 9, 1988",
    birthPlace: "Lolomboy, Bulacan, Philippines",
    occupation: "Tailor",
    tagline: "Efficiency is doing things right; effectiveness is doing the right things.",
    bio: "Mary Joy loves creating beautiful garments and connecting with her family.",
    image: "photos/Mary Joy.jpe",
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
    dates: "Aug 22, 1991",
    birthPlace: "Pandi, Bulacan, Philippines",
    occupation: "Rooof Contractor",
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
    name: "Jian D. Navarro",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "Dec 27, 2010",
    birthPlace: "Batia, Bocaue, Bulacan, Philippines",
    occupation: "Student",
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
    name: "Brian Josh D. Navarro",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "Oct 26, 2012",
    birthPlace: "Batia, Bocaue, Bulacan, Philippines",
    occupation: "Student",
    tagline: "",
    bio: "",
    image: "photos/josh.jpe",
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
    dates: "Dec 21, 2014",
    birthPlace: "Batia, Bocaue, Bulacan, Philippines",
    occupation: "Student",
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
    name: "Brianna Joy D. Navarro",
    relationship: "Daughter",
    roleGroup: "child",
    generation: 3,
    dates: "June 22, 2020",
    birthPlace: "Batia, Bocaue, Bulacan, Philippines",
    occupation: "Student",
    tagline: "",
    bio: "",
    image: "photos/brianna.jpe",
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
    occupation: "Tailor",
    tagline: "Numbers speak truth if you listen with precision.",
    bio: "Mary Grace works in tailoring shops and is a dedicated mother to her son, John Marvin Dancel.",
    image: "photos/gracia.jpe",
    spouse: "bj_maularde",
    parents: ["rolando", "juvilyn"],
    children: ["john_marvin_dancel"],
    gallery: [
      { title: "Aling Grace", date: "2026", image: "photos/Mary Grace.jpe" },
      { title: "Doña Grace", date: "2026", image: "photos/gracia.jpe" }
    ]
  },
  "bj_maularde": {
    id: "bj_maularde",
    name: "Jonard Maularde",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "July 21, 1976",
    birthPlace: "Claveria, Cagayan De Oro, Philippines",
    occupation: "Driver",
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
    dates: "Oct 9, 2010",
    birthPlace: "Northville 5, Batia, Bocaue, Bulacan, Philippines",
    occupation: "Student",
    tagline: "",
    bio: "",
    image: "photos/jm.jpe",
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
    occupation: "Delivery Rider/Bike Technician",
    tagline: "Deliver your parcel safely. Make your bike better",
    bio: "R-Jay is ahardworking delivery rider and bike technician who ensures timely deliveries and smooth rides.",
    image: "photos/R-Jay.jpe",
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: ["kholeen_khate", "cheska_sofia"],
    gallery: [
      { title: "Family Moment", date: "R-Jay's Memory", image: "Rjay Family/3d7d1258-0cf7-4154-93d6-c33c42021459.jpe" },
      { title: "Joyful Day", date: "R-Jay's Memory", image: "Rjay Family/5f8022a7-b30b-45bc-bea9-2fb267e34789.jpe" },
      { title: "Beautiful Smile", date: "R-Jay's Memory", image: "Rjay Family/7d643df9-47a5-415c-b1af-a3655acdfb56.jpe" },
      { title: "Lovely Gathering", date: "R-Jay's Memory", image: "Rjay Family/9b8af5da-cdb3-4f47-be6f-9746d03d8b4d.jpe" },
      { title: "Cherished Moment", date: "R-Jay's Memory", image: "Rjay Family/c8606fd0-cbc7-4eb2-9617-fe61e9a50fea.jpe" },
      { title: "Happy Times", date: "R-Jay's Memory", image: "Rjay Family/dd859851-3c8b-4db2-98d1-2a11e4885a38.jpe" },
      { title: "Sweet Memories", date: "R-Jay's Memory", image: "Rjay Family/de7198bf-3d60-4e39-922e-ac3961f5d8c6.jpe" },
      { title: "Family Photo", date: "R-Jay's Memory", image: "Rjay Family/ffdf88e3-9307-48ee-847d-d02506b31f75.jpe" }
    ]
  },
  "kholeen_khate": {
    id: "kholeen_khate",
    name: "Kholeen Khate Dancel",
    relationship: "Daughter",
    roleGroup: "child",
    generation: 3,
    dates: "Nov 20, 2016",
    birthPlace: "Batia, Bocaue, Bulacan, Philippines",
    occupation: "Student",
    tagline: "",
    bio: "Kholeen Khate is the beloved daughter of R-Jay Dancel.",
    image: "photos/khate.jpe",
    spouse: null,
    parents: ["r_jay"],
    children: [],
    gallery: [
      { title: "Family Moment", date: "R-Jay's Memory", image: "Rjay Family/3d7d1258-0cf7-4154-93d6-c33c42021459.jpe" },
      { title: "Joyful Day", date: "R-Jay's Memory", image: "Rjay Family/5f8022a7-b30b-45bc-bea9-2fb267e34789.jpe" },
      { title: "Beautiful Smile", date: "R-Jay's Memory", image: "Rjay Family/7d643df9-47a5-415c-b1af-a3655acdfb56.jpe" },
      { title: "Lovely Gathering", date: "R-Jay's Memory", image: "Rjay Family/9b8af5da-cdb3-4f47-be6f-9746d03d8b4d.jpe" },
      { title: "Cherished Moment", date: "R-Jay's Memory", image: "Rjay Family/c8606fd0-cbc7-4eb2-9617-fe61e9a50fea.jpe" },
      { title: "Happy Times", date: "R-Jay's Memory", image: "Rjay Family/dd859851-3c8b-4db2-98d1-2a11e4885a38.jpe" },
      { title: "Sweet Memories", date: "R-Jay's Memory", image: "Rjay Family/de7198bf-3d60-4e39-922e-ac3961f5d8c6.jpe" },
      { title: "Family Photo", date: "R-Jay's Memory", image: "Rjay Family/ffdf88e3-9307-48ee-847d-d02506b31f75.jpe" }
    ]
  },
  "cheska_sofia": {
    id: "cheska_sofia",
    name: "Cheska Sofia Dancel",
    relationship: "Daughter",
    roleGroup: "child",
    generation: 3,
    dates: "Dec 27, 2023",
    birthPlace: "Batia, Bocaue, Bulacan, Philippines",
    occupation: "",
    tagline: "",
    bio: "Cheska Sofia is the beloved daughter of R-Jay Dancel.",
    image: "photos/cheska.jpe",
    spouse: null,
    parents: ["r_jay"],
    children: [],
    gallery: [
      { title: "Family Moment", date: "R-Jay's Memory", image: "Rjay Family/3d7d1258-0cf7-4154-93d6-c33c42021459.jpe" },
      { title: "Joyful Day", date: "R-Jay's Memory", image: "Rjay Family/5f8022a7-b30b-45bc-bea9-2fb267e34789.jpe" },
      { title: "Beautiful Smile", date: "R-Jay's Memory", image: "Rjay Family/7d643df9-47a5-415c-b1af-a3655acdfb56.jpe" },
      { title: "Lovely Gathering", date: "R-Jay's Memory", image: "Rjay Family/9b8af5da-cdb3-4f47-be6f-9746d03d8b4d.jpe" },
      { title: "Cherished Moment", date: "R-Jay's Memory", image: "Rjay Family/c8606fd0-cbc7-4eb2-9617-fe61e9a50fea.jpe" },
      { title: "Happy Times", date: "R-Jay's Memory", image: "Rjay Family/dd859851-3c8b-4db2-98d1-2a11e4885a38.jpe" },
      { title: "Sweet Memories", date: "R-Jay's Memory", image: "Rjay Family/de7198bf-3d60-4e39-922e-ac3961f5d8c6.jpe" },
      { title: "Family Photo", date: "R-Jay's Memory", image: "Rjay Family/ffdf88e3-9307-48ee-847d-d02506b31f75.jpe" }
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
    occupation: "Fireworks",
    tagline: "Making a light in the darkness, one spark at a time.",
    bio: "Cherry Anne works in clinical research evaluating drug interactions.",
    image: "photos/che.jpe",
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: ["lhian_d_lobendino", "andrew_d_lobendino", "levy_ace_d_lobendino"],
    gallery: [
      { title: "Clinical Research Presentation", date: "2020", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600" },
      { title: "Pharmacy Innovation Project", date: "2022", image: "https://images.unsplash.com/photo-1585461231042-528ee7d0d75b?q=80&w=600" }
    ]
  },
  "russll": {
    id: "russll",
    name: "Russll Lu Caisido",
    relationship: "Adopted Son",
    roleGroup: "sibling",
    generation: 2,
    dates: "August 4, 1994",
    birthPlace: "",
    occupation: "Bikeshop Owner",
    tagline: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    bio: "Russll is the beloved adopted son of Rolando and Juvilyn Dancel. He runs a local bikeshop.",
    image: "photos/russ.jpe",
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: []
  },
  "lhian_d_lobendino": {
    id: "lhian_d_lobendino",
    name: "Lhian D. Lobendino",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "Dec 25, 2012 ",
    birthPlace: "Batia, Bocaue, Bulacan, Philippines",
    occupation: "Student",
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
    dates: "Dec 21, 2014",
    birthPlace: "Igulot, Bocaue, Bulacan, Philippines",
    occupation: "Student",
    tagline: "",
    bio: "",
    image: "photos/adoy.jpe",
    spouse: null,
    parents: ["cherry_anne"],
    children: [],
    gallery: []
  },
  "levy_ace_d_lobendino": {
    id: "levy_ace_d_lobendino",
    name: "Levi Ace D. Lobendino",
    relationship: "Son",
    roleGroup: "child",
    generation: 3,
    dates: "Sept 17, 2020",
    birthPlace: "Igulot, Bocaue, Bulacan, Philippines",
    occupation: "Student",
    tagline: "",
    bio: "",
    image: "photos/levi.jpe",
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
    occupation: "Bike Technician",
    tagline: "We build bicycles that roll with style.",
    bio: "Rolando Jr. is a bicycle technician who loves to ride and maintain bikes.",
    image: "photos/RolandoJR.jpe",
    spouse: "marian_solijon",
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: [
      { title: "Cherished Memory", date: "Special Memory", image: "photos/marloy.jpe" }
    ]
  },
  "marian_solijon": {
    id: "marian_solijon",
    name: "Marian Solijon Dancel",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "Aug 8, 1999",
    birthPlace: "Wawa, Balagtas, Bulacan, Philippines",
    occupation: "Accounting",
    tagline: "",
    bio: "Marian is the loving wife of Rolando Dancel Jr.",
    image: "photos/marian.jpe",
    spouse: "rolando_jr",
    parents: [],
    children: [],
    gallery: [
      { title: "Cherished Memory", date: "Special Memory", image: "photos/marloy.jpe" }
    ]
  },
  "olivia": {
    id: "olivia",
    name: "Olivia D. Dancel",
    relationship: "Fifth Daughter",
    roleGroup: "sibling",
    generation: 2,
    dates: "Feb 9, 1999",
    birthPlace: "Igulot, Bocaue, Bulacan, Philippines",
    occupation: "House Wife",
    tagline: "Do not let your heart be troubled.",
    bio: "Olivia writes about culture and food history.",
    image: "photos/viaa.jpe",
    spouse: "jeffrey_agohar",
    parents: ["rolando", "juvilyn"],
    children: ["nasya_amari"],
    gallery: [
      { title: "Sweet Moment", date: "Vhia's Memory", image: "Vhia/282193fd-32e1-4f1a-aa22-af4e51025fbd.jpe" },
      { title: "Beautiful Smile", date: "Vhia's Memory", image: "Vhia/7c35f35d-455f-4e49-bd2a-e176d102d710.jpe" },
      { title: "Joyful Day", date: "Vhia's Memory", image: "Vhia/8c2a6520-2828-4302-a3eb-a0dfeb72fe2e.jpe" },
      { title: "Lovely Portrait", date: "Vhia's Memory", image: "Vhia/8d095c02-d04c-406c-9d90-fe011e170262.jpe" },
      { title: "Cherished Moment", date: "Vhia's Memory", image: "Vhia/c6a5090a-d3d2-4335-b2dd-b5c4ecd13143.jpe" },
      { title: "Happy Time", date: "Vhia's Memory", image: "Vhia/c9444fd1-9148-4736-af73-636eaac85fe1.jpe" },
      { title: "Candid Smile", date: "Vhia's Memory", image: "Vhia/e3ae7679-f883-4586-9ac2-0476182bf0b5.jpe" },
      { title: "Warm Memories", date: "Vhia's Memory", image: "Vhia/e6c49f28-bb54-4ff4-85c9-79cc1a5b8869.jpe" }
    ]
  },
  "jeffrey_agohar": {
    id: "jeffrey_agohar",
    name: "Jeffrey Agohar",
    relationship: "Spouse",
    roleGroup: "spouse",
    generation: 2,
    dates: "May 16, 1989",
    birthPlace: "Bohol, Philippines",
    occupation: "Gas Station Attendant",
    tagline: "",
    bio: "Jeffrey is the loving husband of Olivia D. Dancel.",
    image: "photos/jef.jpe",
    spouse: "olivia",
    parents: [],
    children: ["nasya_amari"],
    gallery: [
      { title: "Sweet Moment", date: "Vhia's Memory", image: "Vhia/282193fd-32e1-4f1a-aa22-af4e51025fbd.jpe" },
      { title: "Beautiful Smile", date: "Vhia's Memory", image: "Vhia/7c35f35d-455f-4e49-bd2a-e176d102d710.jpe" },
      { title: "Joyful Day", date: "Vhia's Memory", image: "Vhia/8c2a6520-2828-4302-a3eb-a0dfeb72fe2e.jpe" },
      { title: "Lovely Portrait", date: "Vhia's Memory", image: "Vhia/8d095c02-d04c-406c-9d90-fe011e170262.jpe" },
      { title: "Cherished Moment", date: "Vhia's Memory", image: "Vhia/c6a5090a-d3d2-4335-b2dd-b5c4ecd13143.jpe" },
      { title: "Happy Time", date: "Vhia's Memory", image: "Vhia/c9444fd1-9148-4736-af73-636eaac85fe1.jpe" },
      { title: "Candid Smile", date: "Vhia's Memory", image: "Vhia/e3ae7679-f883-4586-9ac2-0476182bf0b5.jpe" },
      { title: "Warm Memories", date: "Vhia's Memory", image: "Vhia/e6c49f28-bb54-4ff4-85c9-79cc1a5b8869.jpe" }
    ]
  },
  "nasya_amari": {
    id: "nasya_amari",
    name: "Nasya Amari Agohar",
    relationship: "Daughter",
    roleGroup: "child",
    generation: 3,
    dates: "March 21, 2026",
    birthPlace: "Batia, Bocaue, Bulacan",
    occupation: "",
    tagline: "",
    bio: "Nasya Amari is the beloved daughter of Jeffrey and Olivia.",
    image: "photos/nami.jpe",
    spouse: null,
    parents: ["olivia", "jeffrey_agohar"],
    children: [],
    gallery: [
      { title: "Sweet Angel", date: "Baby Memory", image: "nasya/008ee834-4dbb-4979-963a-2d4debaa81cb.jpe" },
      { title: "Precious Smile", date: "Baby Memory", image: "nasya/0ef8f241-a3f4-40a7-85fa-e82c10019c92.jpe" },
      { title: "Little Wonder", date: "Baby Memory", image: "nasya/82c4afc8-4b4e-4d4d-a1e7-14abe721695f.jpe" },
      { title: "Sweet Dreamer", date: "Baby Memory", image: "nasya/a6e85597-6cb2-4b7d-ab8a-9224fafdcfbc.jpe" },
      { title: "Cute Moments", date: "Baby Memory", image: "nasya/b9284b5c-0c3d-4c26-995b-44fe799b06ee.jpe" },
      { title: "Beloved Daughter", date: "Baby Memory", image: "nasya/e3ae7679-f883-4586-9ac2-0476182bf0b5 (1).jpe" },
      { title: "Tiny Blessing", date: "Baby Memory", image: "nasya/edde8c7e-64d3-4102-9710-a077a38940b4.jpe" }
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
    image: "photos/1x1ko.jpg",
    spouse: null,
    parents: ["rolando", "juvilyn"],
    children: [],
    gallery: [
      { title: "My 1x1 picture hehe", date: "2022", image: "photos/1x1ko.jpg" },
      { title: "Throwback", date: "2015", image: "photos/yort.jpe" }
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
    image: "photos/ang.jpe",
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
    occupation: "House Wife",
    tagline: "",
    bio: "",
    image: "photos/jonna.jpg",
    spouse: "manuelito",
    parents: [],
    children: ["alexandra", "altheo"],
    gallery: [
      { title: "Sweet Moment", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/31562402_2085735124773156_7617457801803071488_n.jpg" },
      { title: "Beautiful Smile", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/43522890_2316406191706047_7596374301268246528_n.jpg" },
      { title: "Joyful Gathering", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/43538276_2316597608353572_4639490511420260352_n.jpg" },
      { title: "Happy Time", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/467306674_9453534531326475_240617842625270639_n.jpg" },
      { title: "Lovely Portrait", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/467307574_9447529298593665_2493673521119225490_n.jpg" },
      { title: "Candid Shot", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/467335770_9450894254923836_1955047487087608836_n.jpg" },
      { title: "Cherished Moment", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/471149758_9660850577261535_6579316820863272319_n.jpg" },
      { title: "Sweet Memories", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/48426473_2430398416973490_4566168405995945984_n.jpg" },
      { title: "Joyful Day", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/57597603_2616880898325240_1413892887266983936_n.jpg" },
      { title: "Lovely Gathering", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/58381098_2616894621657201_7044199789432406016_n.jpg" },
      { title: "Family Photo", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/Screenshot 2026-07-17 223322.png" },
      { title: "Cherished Moment", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/507160936_24133002649636960_1156913212155968834_n.jpg" },
      { title: "Warm Gathering", date: "Manuelito & Jonna's Memory", image: "Manuelito_Jonna/516486757_24297285526542004_3234688603875886038_n.jpg" }
    ]
  },
  "alexandra": {
    id: "alexandra",
    name: "Alexandra Louise Dancel",
    relationship: "First Daughter",
    roleGroup: "child",
    generation: 3,
    dates: "Dec 1, 2013",
    birthPlace: "Valenzuela, Philippines",
    occupation: "Student",
    tagline: "",
    bio: "",
    image: "photos/alex.jpg",
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
    dates: "Oct 11, 2018",
    birthPlace: "Valenzuela, Philippines",
    occupation: "Student",
    tagline: "",
    bio: "",
    image: "photos/Theo.jpg",
    spouse: null,
    parents: ["manuelito", "jonna"],
    children: [],
    gallery: []
  }
};
// Helper function to calculate age dynamically based on birth date/year
function calculateAge(datesStr) {
  if (!datesStr) return null;
  const cleanStr = datesStr.replace(/^(b\.|d\.|born|died)\s+/i, '').trim();
  
  // Try to parse as a full date
  const birthDate = new Date(cleanStr);
  if (!isNaN(birthDate.getTime())) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  // Try to extract a 4-digit birth year
  const match = cleanStr.match(/\b(19\d\d|20\d\d)\b/);
  if (match) {
    const birthYear = parseInt(match[1]);
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  
  return null;
}

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
      if (datesEl) {
        const age = calculateAge(member.dates);
        datesEl.textContent = age !== null ? `${member.dates} (Age ${age})` : member.dates;
      }
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

  // Auto-focus search input if requested via URL params
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('focus') === 'search') {
    setTimeout(() => {
      if (searchInput) {
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        searchInput.focus();
      }
    }, 300);
  }
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
  if (heroLifespan) {
    const age = calculateAge(member.dates);
    heroLifespan.textContent = age !== null ? `${member.dates} (Age ${age})` : member.dates;
  }
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
    
    let spouses = [];
    let children = [];
    let parents = [];
    let siblings = [];
    
    // Spouse relationship
    if (member.spouse && familyData[member.spouse]) {
      spouses.push({
        member: familyData[member.spouse],
        relationLabel: "Spouse"
      });
    }
    
    // Children relationship
    if (member.children && member.children.length > 0) {
      member.children.forEach(cId => {
        if (familyData[cId]) {
          const childMember = familyData[cId];
          let relationLabel = "Son";
          const relLower = childMember.relationship ? childMember.relationship.toLowerCase() : "";
          const groupLower = childMember.roleGroup ? childMember.roleGroup.toLowerCase() : "";
          if (relLower.includes("daughter")) {
            relationLabel = "Daughter";
          } else if (relLower.includes("dog") || groupLower === "pet") {
            relationLabel = childMember.relationship || "Pet";
          } else if (relLower.includes("son")) {
            relationLabel = "Son";
          }
          children.push({
            member: childMember,
            relationLabel: relationLabel
          });
        }
      });
    }
    
    // Parents relationship (Mother first, then Father)
    if (member.parents && member.parents.length > 0) {
      let tempParents = [];
      member.parents.forEach(pId => {
        if (familyData[pId]) {
          const parentMember = familyData[pId];
          const isFather = parentMember.relationship.includes("Father") || 
                           ["rolando", "manuelito", "rommel", "brian_navarro", "bj_maularde", "jeffrey_agohar", "r_jay"].includes(parentMember.id);
          tempParents.push({
            member: parentMember,
            relationLabel: isFather ? "Father" : "Mother"
          });
        }
      });
      // Sort: Mother first, then Father
      tempParents.sort((a, b) => {
        if (a.relationLabel === "Mother" && b.relationLabel === "Father") return -1;
        if (a.relationLabel === "Father" && b.relationLabel === "Mother") return 1;
        return 0;
      });
      parents = tempParents;
    }
    
    // Siblings relationship (siblings share at least one parent)
    if (member.parents && member.parents.length > 0) {
      const checkedSiblings = new Set();
      member.parents.forEach(pId => {
        if (familyData[pId]) {
          familyData[pId].children.forEach(cId => {
            if (cId !== member.id && !checkedSiblings.has(cId) && familyData[cId]) {
              checkedSiblings.add(cId);
              const sibMember = familyData[cId];
              const isSister = sibMember.relationship.toLowerCase().includes("daughter") || 
                               sibMember.relationship.toLowerCase().includes("sister") || 
                               sibMember.relationship.toLowerCase().includes("youngest daughter");
              siblings.push({
                member: sibMember,
                relationLabel: isSister ? "Sister" : "Brother"
              });
            }
          });
        }
      });
    }
    
    // Grandchildren relationship (children of children of Rolando and Juvilyn)
    let grandchildren = [];
    if (id === "rolando" || id === "juvilyn") {
      if (member.children && member.children.length > 0) {
        member.children.forEach(childId => {
          const childMember = familyData[childId];
          if (childMember && childMember.children && childMember.children.length > 0) {
            childMember.children.forEach(grandchildId => {
              const grandchildMember = familyData[grandchildId];
              if (grandchildMember) {
                const groupLower = grandchildMember.roleGroup ? grandchildMember.roleGroup.toLowerCase() : "";
                const relLower = grandchildMember.relationship ? grandchildMember.relationship.toLowerCase() : "";
                if (groupLower === "pet" || relLower.includes("dog")) {
                  return; // Skip pets
                }

                let relationLabel = "Grandson";
                if (relLower.includes("daughter")) {
                  relationLabel = "Granddaughter";
                } else if (relLower.includes("son")) {
                  relationLabel = "Grandson";
                }
                
                if (!grandchildren.some(g => g.member.id === grandchildId)) {
                  grandchildren.push({
                    member: grandchildMember,
                    relationLabel: relationLabel
                  });
                }
              }
            });
          }
        });
      }
      
      // Sort grandchildren from eldest to youngest (by precise birthdate)
      grandchildren.sort((a, b) => {
        const dateA = a.member.dates ? Date.parse(a.member.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
        const dateB = b.member.dates ? Date.parse(b.member.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
        
        const hasA = !isNaN(dateA);
        const hasB = !isNaN(dateB);
        
        if (hasA && hasB) {
          return dateA - dateB; // Earlier birthdate timestamp means older, so sort ascending
        }
        if (hasA) return -1; // Place members with dates first
        if (hasB) return 1;
        return 0;
      });
    }

    // Nieces and Nephews relationship (children of siblings, excluding own children and pets)
    let niecesNephews = [];
    const isSiblingOfThisGeneration = member.parents && member.parents.some(p => p === "rolando" || p === "juvilyn");
    if (isSiblingOfThisGeneration) {
      member.parents.forEach(pId => {
        if (familyData[pId]) {
          familyData[pId].children.forEach(sibId => {
            if (sibId !== member.id && familyData[sibId]) {
              const siblingMember = familyData[sibId];
              if (siblingMember.children && siblingMember.children.length > 0) {
                siblingMember.children.forEach(childId => {
                  const childMember = familyData[childId];
                  if (childMember) {
                    const groupLower = childMember.roleGroup ? childMember.roleGroup.toLowerCase() : "";
                    const relLower = childMember.relationship ? childMember.relationship.toLowerCase() : "";
                    if (groupLower === "pet" || relLower.includes("dog")) {
                      return;
                    }
                    if (member.children && member.children.includes(childId)) {
                      return;
                    }
                    
                    let relationLabel = "Nephew";
                    if (relLower.includes("daughter")) {
                      relationLabel = "Niece";
                    } else if (relLower.includes("son")) {
                      relationLabel = "Nephew";
                    }
                    
                    if (!niecesNephews.some(n => n.member.id === childId)) {
                      niecesNephews.push({
                        member: childMember,
                        relationLabel: relationLabel
                      });
                    }
                  }
                });
              }
            }
          });
        }
      });

      // Sort nieces and nephews from eldest to youngest (by precise birthdate)
      niecesNephews.sort((a, b) => {
        const dateA = a.member.dates ? Date.parse(a.member.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
        const dateB = b.member.dates ? Date.parse(b.member.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
        
        const hasA = !isNaN(dateA);
        const hasB = !isNaN(dateB);
        
        if (hasA && hasB) {
          return dateA - dateB;
        }
        if (hasA) return -1;
        if (hasB) return 1;
        return 0;
      });
    }

    // Aunts/Uncles and Cousins relationship (for grandchildren generation)
    let auntsUncles = [];
    let cousins = [];
    const isGrandchild = member.generation === 3;
    if (isGrandchild) {
      let bloodParents = [];
      member.parents.forEach(pId => {
        const pMember = familyData[pId];
        if (pMember && pMember.parents && pMember.parents.some(gp => gp === "rolando" || gp === "juvilyn")) {
          bloodParents.push(pId);
        }
      });
      
      if (bloodParents.length === 0) {
        bloodParents = member.parents;
      }
      
      const auntsUnclesSet = new Set();
      const cousinsSet = new Set();
      
      bloodParents.forEach(pId => {
        const parentMember = familyData[pId];
        if (parentMember && parentMember.parents && parentMember.parents.length > 0) {
          parentMember.parents.forEach(gpId => {
            if (familyData[gpId]) {
              familyData[gpId].children.forEach(sibId => {
                if (sibId !== pId && familyData[sibId]) {
                  const siblingMember = familyData[sibId];
                  
                  if (!auntsUnclesSet.has(sibId)) {
                    auntsUnclesSet.add(sibId);
                    const isAunt = siblingMember.relationship.toLowerCase().includes("daughter") || 
                                    siblingMember.relationship.toLowerCase().includes("sister");
                    auntsUncles.push({
                      member: siblingMember,
                      relationLabel: isAunt ? "Aunt" : "Uncle",
                      isSpouse: false
                    });
                  }
                  
                  if (siblingMember.spouse && familyData[siblingMember.spouse]) {
                    const spouseId = siblingMember.spouse;
                    if (!auntsUnclesSet.has(spouseId)) {
                      auntsUnclesSet.add(spouseId);
                      const spouseMember = familyData[spouseId];
                      
                      const isSpouseOfAunt = siblingMember.relationship.toLowerCase().includes("daughter") || 
                                             siblingMember.relationship.toLowerCase().includes("sister") ||
                                             siblingMember.relationship.toLowerCase().includes("youngest daughter") ||
                                             siblingMember.relationship.toLowerCase().includes("fourth daughter") ||
                                             siblingMember.relationship.toLowerCase().includes("fifth daughter") ||
                                             siblingMember.relationship.toLowerCase().includes("third daughter") ||
                                             siblingMember.relationship.toLowerCase().includes("second daughter") ||
                                             siblingMember.relationship.toLowerCase().includes("eldest daughter");
                      
                      const getShortName = (fullName) => {
                        if (!fullName) return '';
                        const parts = fullName.split(' ');
                        if (parts[0] === 'Mary' && parts[1]) {
                          return parts[0] + ' ' + parts[1];
                        }
                        return parts[0];
                      };
                      const shortName = siblingMember.name.includes("Olivia") ? "Vhia" : getShortName(siblingMember.name);
                      const label = isSpouseOfAunt ? `Uncle by Aunt ${shortName}` : `Aunt by Uncle ${shortName}`;
                      
                      auntsUncles.push({
                        member: spouseMember,
                        relationLabel: label,
                        isSpouse: true
                      });
                    }
                  }
                  
                  if (siblingMember.children && siblingMember.children.length > 0) {
                    siblingMember.children.forEach(cId => {
                      if (familyData[cId]) {
                        const cousinMember = familyData[cId];
                        const groupLower = cousinMember.roleGroup ? cousinMember.roleGroup.toLowerCase() : "";
                        const relLower = cousinMember.relationship ? cousinMember.relationship.toLowerCase() : "";
                        
                        if (groupLower === "pet" || relLower.includes("dog")) return;
                        if (cId === member.id) return;
                        if (member.parents.some(parent => cousinMember.parents.includes(parent))) return;
                        
                        if (!cousinsSet.has(cId)) {
                          cousinsSet.add(cId);
                          cousins.push({
                            member: cousinMember,
                            relationLabel: "Cousin"
                          });
                        }
                      }
                    });
                  }
                }
              });
            }
          });
        }
      });

      cousins.sort((a, b) => {
        const dateA = a.member.dates ? Date.parse(a.member.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
        const dateB = b.member.dates ? Date.parse(b.member.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
        
        const hasA = !isNaN(dateA);
        const hasB = !isNaN(dateB);
        
        if (hasA && hasB) {
          return dateA - dateB;
        }
        if (hasA) return -1;
        if (hasB) return 1;
        return 0;
      });

      // Sort aunts/uncles: blood relatives first, spouses last
      auntsUncles.sort((a, b) => {
        if (a.isSpouse !== b.isSpouse) {
          return a.isSpouse ? 1 : -1;
        }
        return 0;
      });
    }

    // Ordered: Spouse -> Children -> Parents (Mother first, then Father) -> Siblings -> Grandchildren -> Nieces/Nephews -> Aunts/Uncles -> Cousins
    let relationalMembers = [
      ...spouses,
      ...children,
      ...parents,
      ...siblings,
      ...grandchildren,
      ...niecesNephews,
      ...auntsUncles,
      ...cousins
    ];
    
    if (relationalMembers.length === 0) {
      familyGrid.innerHTML = `<p class="bio-text" style="grid-column: 1/-1; font-style: italic; color: var(--color-text-muted);">Immediate family records are currently being cataloged.</p>`;
    } else {
      relationalMembers.forEach(entry => {
        const m = entry.member;
        const card = document.createElement('a');
        card.href = `profile.html?id=${m.id}`;
        card.className = 'family-unit-card';
        
        const age = calculateAge(m.dates);
        const relationText = age !== null ? `${entry.relationLabel} (Age ${age})` : entry.relationLabel;
        card.innerHTML = `
          <div class="cameo-frame">
            ${createAvatarHTML(m)}
          </div>
          <div class="member-name">${m.name}</div>
          <div class="member-relation">${relationText}</div>
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
      initLightbox();
    } else {
      if (gallerySection) gallerySection.style.display = 'none';
    }
  }
}

// Lightbox modal functionality for media gallery
function initLightbox() {
  console.log("initLightbox: Initializing...");
  let modal = document.getElementById('lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <button class="lightbox-back-btn" id="lightbox-close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Gallery
      </button>
      <div class="lightbox-content">
        <img class="lightbox-img" id="lightbox-img" src="" alt="">
        <div class="lightbox-caption">
          <div class="lightbox-title" id="lightbox-title"></div>
          <div class="lightbox-desc" id="lightbox-desc"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    const closeBtn = document.getElementById('lightbox-close');
    const closeModal = () => {
      console.log("initLightbox: Closing modal");
      modal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Exit browser fullscreen mode
      try {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      } catch (err) {
        console.error("Fullscreen exit error:", err);
      }
    };
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lightbox-content')) {
        closeModal();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Automatically close the modal when exiting fullscreen via Escape key or browser controls
    const onFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (modal.classList.contains('active')) {
          closeModal();
        }
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    document.addEventListener('msfullscreenchange', onFullscreenChange);
  }
  
  const galleryItems = document.querySelectorAll('.gallery-item');
  console.log(`initLightbox: Found ${galleryItems.length} gallery items`);
  galleryItems.forEach((item, index) => {
    const imgWrapper = item.querySelector('.gallery-img-wrapper');
    const img = item.querySelector('.gallery-img');
    const titleEl = item.querySelector('.gallery-title');
    const dateEl = item.querySelector('.gallery-date');
    
    const title = titleEl ? titleEl.textContent : '';
    const date = dateEl ? dateEl.textContent : '';
    
    if (imgWrapper && img) {
      const newImgWrapper = imgWrapper.cloneNode(true);
      imgWrapper.parentNode.replaceChild(newImgWrapper, imgWrapper);
      
      newImgWrapper.addEventListener('click', () => {
        console.log(`initLightbox: Item ${index} clicked, opening ${img.src}`);
        const modalImg = document.getElementById('lightbox-img');
        const modalTitle = document.getElementById('lightbox-title');
        const modalDesc = document.getElementById('lightbox-desc');
        
        if (modalImg) {
          modalImg.src = img.src;
          modalImg.alt = img.alt || '';
        }
        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.textContent = date;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Trigger browser fullscreen mode on the modal container
        try {
          if (modal.requestFullscreen) {
            modal.requestFullscreen();
          } else if (modal.webkitRequestFullscreen) {
            modal.webkitRequestFullscreen();
          } else if (modal.msRequestFullscreen) {
            modal.msRequestFullscreen();
          }
        } catch (err) {
          console.error("Fullscreen request error:", err);
        }
      });
    }
  });
}
// Global page load router
document.addEventListener('DOMContentLoaded', () => {
  // Reveal document on load
  document.body.classList.add('animate-fade-in');
  
  if (document.getElementById('tree-container')) {
    initIndexPage();
    initIndexGallery();
  } else if (document.getElementById('profile-layout') || document.getElementById('error-container')) {
    initProfilePage();
  } else if (document.getElementById('genealogy-layout')) {
    initGenealogyPage();
  }
  
  // Initialize theme toggle
  initThemeToggle();
});

// Dancel Family main gallery dataset
const familyGalleryData = [
  { title: "The Dancel Family Selfie", date: "Family Gathering", image: "papa_photos/e61131a9-c874-4fce-8b3f-780211de1e40.jpe" },
  { title: "Family Feast & Gathering", date: "Dinner Gathering", image: "mama/3fe5a80b-9303-41c1-ad7f-47ea0743414a.jpe" },
  { title: "Big Family Portrait", date: "Special Celebration", image: "mama/c2aca60b-66a5-45c7-91f0-75512aeba728.jpe" },
  { title: "Joyful Moments Together", date: "Home Gathering", image: "mama/736dbf58-49fe-4ffb-8883-6bb0538bd37c.jpe" },
  { title: "Sweet Grandchild Moments", date: "Loving Family", image: "papa_photos/29378b7f-d7df-4661-9491-7f6a7068a352.jpe" },
  { title: "Papa's Signature Pose", date: "Restaurant Dinner", image: "papa_photos/b538d9f2-4a98-4fa0-bd9f-24ff9fe8bd5c.jpe" },
  { title: "Family Memory", date: "Dancel Archive", image: "DancelPhotos/45de1dbb-05cd-48fc-bdff-907860bd703f.jpe" },
  { title: "Joyful Gathering", date: "Dancel Archive", image: "DancelPhotos/91fc2bd9-ec7d-4067-9742-9121a29489cc.jpe" },
  { title: "Cherished Moment", date: "Dancel Archive", image: "DancelPhotos/97a6a302-2764-4da8-acba-4aeee3666d63.jpe" },
  { title: "Happy Times", date: "Dancel Archive", image: "DancelPhotos/f091fb0e-9819-44bc-abae-dccf543649b8.jpe" },
  { title: "Sweet Portrait", date: "Dancel Archive", image: "DancelPhotos/fe8c744b-f582-4a39-878c-3b73f71f2b56.jpe" },
  { title: "Family Celebration", date: "Dancel Archive", image: "DancelPhotos/499281368_23914610338142860_8596101370137219419_n.jpg" }
];

function initIndexGallery() {
  const familyGrid = document.getElementById('family-gallery-grid');
  if (familyGrid) {
    familyGrid.innerHTML = '';
    familyGalleryData.forEach(item => {
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
      familyGrid.appendChild(wrapper);
    });
    initLightbox();
  }
}

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

// ==========================================================================
// GENEALOGY PAGE: Text Table & Search Logic
// ==========================================================================
function initGenealogyPage() {
  const tableBody = document.getElementById('genealogy-table-body');
  const searchInput = document.getElementById('genealogy-search-input');
  const genFilter = document.getElementById('genealogy-generation-filter');
  
  if (!tableBody) return;
  
  function renderTable() {
    const query = searchInput.value.toLowerCase().trim();
    const activeGen = genFilter.value;
    
    // Sort all family members: Generation 1 first, then Generation 2, then Generation 3
    const sortedMembers = Object.values(familyData).sort((a, b) => {
      // 1. Sort by generation (1st, 2nd, 3rd)
      if (a.generation !== b.generation) {
        return a.generation - b.generation;
      }
      
      // 2. Group by role weight (direct family first, spouses second, pets last)
      const getRoleWeight = (m) => {
        if (m.roleGroup === "spouse") return 1;
        if (m.roleGroup === "pet" || m.id === "loloy") return 2;
        return 0; // Direct family
      };
      
      const weightA = getRoleWeight(a);
      const weightB = getRoleWeight(b);
      if (weightA !== weightB) {
        return weightA - weightB;
      }
      
      // 3. Chronological sort (eldest first)
      const dateA = a.dates ? Date.parse(a.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
      const dateB = b.dates ? Date.parse(b.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
      const hasA = !isNaN(dateA);
      const hasB = !isNaN(dateB);
      
      if (hasA && hasB) return dateA - dateB;
      if (hasA) return -1;
      if (hasB) return 1;
      return a.name.localeCompare(b.name);
    });
    
    tableBody.innerHTML = '';
    
    sortedMembers.forEach(m => {
      const matchQuery = m.name.toLowerCase().includes(query) || 
                         m.relationship.toLowerCase().includes(query) ||
                         m.occupation.toLowerCase().includes(query) ||
                         m.birthPlace.toLowerCase().includes(query) ||
                         m.dates.includes(query);
                         
      const matchGen = activeGen === 'all' || m.generation.toString() === activeGen;
      
      if (!matchQuery || !matchGen) return;
      
      const tr = document.createElement('tr');
      tr.addEventListener('click', () => {
        window.location.href = `profile.html?id=${m.id}`;
      });
      
      const avatarHTML = m.image ? 
        `<img src="${m.image}" class="member-avatar-mini" alt="${m.name}">` : 
        `<div class="member-avatar-fallback avatar-fallback fallback-${m.roleGroup}" style="display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:700;color:#fff">${m.name.split(' ')[0][0]}</div>`;
      
      const age = calculateAge(m.dates);
      const ageText = age !== null ? `${m.dates} (Age ${age})` : (m.dates || '—');
      
      // Build detailed relationship text
      let detailedRelation = m.relationship;
      if (m.roleGroup === "spouse" && m.spouse && familyData[m.spouse]) {
        detailedRelation = `Spouse of ${familyData[m.spouse].name}`;
      } else if (m.parents && m.parents.length > 0) {
        const getShortName = (fullName) => {
          if (!fullName) return '';
          const parts = fullName.split(' ');
          if (parts[0] === 'Mary' && parts[1]) {
            return parts[0] + ' ' + parts[1];
          }
          return parts[0];
        };
        const parentNames = m.parents
          .map(pId => familyData[pId] ? getShortName(familyData[pId].name) : '')
          .filter(Boolean);
        
        // Dynamically compute birth order relationship for general "Son" / "Daughter" labels
        let relationLabel = m.relationship;
        if (relationLabel === "Son" || relationLabel === "Daughter") {
          const isSon = relationLabel === "Son";
          const targetGenderClass = isSon ? ["son", "eldest son", "second son", "third son", "fourth son", "youngest son"] 
                                          : ["daughter", "first daughter", "second daughter", "third daughter", "fourth daughter", "youngest daughter", "fifth daughter"];
          
          const siblings = Object.values(familyData).filter(c => 
            c.parents && c.parents.some(p => m.parents.includes(p))
          );
          
          const sameGenderSiblings = siblings.filter(c => {
            const relLower = c.relationship ? c.relationship.toLowerCase() : "";
            return targetGenderClass.some(cls => relLower.includes(cls));
          });
          
          sameGenderSiblings.sort((a, b) => {
            const dateA = a.dates ? Date.parse(a.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
            const dateB = b.dates ? Date.parse(b.dates.replace(/^(b\.|d\.|born|died)\s+/i, '').trim()) : NaN;
            const hasA = !isNaN(dateA);
            const hasB = !isNaN(dateB);
            
            if (hasA && hasB) return dateA - dateB;
            if (hasA) return -1;
            if (hasB) return 1;
            return a.name.localeCompare(b.name);
          });
          
          const index = sameGenderSiblings.findIndex(c => c.id === m.id);
          const total = sameGenderSiblings.length;
          
          if (total === 1) {
            relationLabel = isSon ? "Only Son" : "Only Daughter";
          } else if (index === total - 1) {
            relationLabel = isSon ? "Youngest Son" : "Youngest Daughter";
          } else {
            const ordinals = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];
            const prefix = ordinals[index] || (index + 1) + "th";
            relationLabel = `${prefix} ${isSon ? "Son" : "Daughter"}`;
          }
        }

        if (parentNames.length > 0) {
          detailedRelation = `${relationLabel} of ${parentNames.join(' & ')}`;
        }
      }
      
      tr.innerHTML = `
        <td>
          <div class="member-info-cell">
            ${avatarHTML}
            <span style="font-weight: 600;">${m.name}</span>
          </div>
        </td>
        <td><span class="relation-badge badge-${m.roleGroup}">${detailedRelation}</span></td>
        <td>${ageText}</td>
        <td>${m.birthPlace || '—'}</td>
        <td>${m.occupation || '—'}</td>
      `;
      
      tableBody.appendChild(tr);
    });
  }
  
  if (searchInput) searchInput.addEventListener('input', renderTable);
  if (genFilter) genFilter.addEventListener('change', renderTable);
  
  renderTable();
}