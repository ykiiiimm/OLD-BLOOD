// ============================================================
//  OLD BLOOD — CONTENT CONTROL FILE
//  Edit THIS file to update anything on the website.
//  No need to touch any HTML file for content changes.
// ============================================================

const OB = {
  // ── SITE-WIDE ──────────────────────────────────────────────
  site: {
    name: 'Old Blood',
    tagline: 'More than a team, we are a lineage.',
    founded: '2024',
    copyright: '© Copyright 2026 — All rights reserved.\nOld Blood™ is a registered trademark of Old Blood Esports.',
    youtube: 'https://www.youtube.com/@Wi_xz0',
    spotify: 'https://open.spotify.com/',
  },

  // ── HOMEPAGE ───────────────────────────────────────────────
  heroSlides: [
    { img: 'hero_1.jpeg', alt: 'Old Blood — Shadow Squad Championship' },
    { img: 'hero_2.jpeg', alt: 'Old Blood — Shadow Squad Champions' },
    { img: 'hero_3.jpeg', alt: 'Old Blood — The Lineage' },
  ],

  trendingVideos: [
    { youtubeId: '4JQ8sMt-GnM', title: 'our goattt', url: 'https://youtu.be/4JQ8sMt-GnM' },
    { youtubeId: 'sgIVBTrF1jM', title: 'clutch man.exe', url: 'https://youtu.be/sgIVBTrF1jM' },
    { youtubeId: 'CZGK5ovAxu0', title: 'OB doc time', url: 'https://youtu.be/CZGK5ovAxu0' },
  ],

  lineageClub: {
    description: "The Old Blood Lineage Club is how we keep our community bound together — just like the team. Earn rewards through loyalty: follow our socials, own official merch, attend live events, or join our YouTube membership. Every action deepens the bond.",
    joinLink: 'contact.html',
    cards: [
      { img: 'Feature_Cards_1.jpeg', title: 'Esports Elite Club Member', desc: 'All members receive a digital Blood Card — Pro / Master rank displayed on their profile.' },
      { img: 'Feature_Cards_2.jpeg', title: 'Obsidian Vanguard Member', desc: 'Prove your dedication and unlock the Obsidian Vanguard tier — Premier / Elite rank awaits.' },
      { img: 'Feature_Cards_3.jpeg', title: 'Aurora Vanguard Member', desc: 'Rise to the Aurora Vanguard tier and show off Cosmic / Grandmaster status on your profile.' },
      { img: 'Feature_Cards_4.jpeg', title: 'Crimson Phoenix VIP', desc: 'The highest tier. Infernal / Grandmaster. Only the most loyal reach the Crimson Phoenix.' },
    ],
  },

  // Vibes / Spotify section (index.html)
  vibes: [
    { img: 'Spotify_Covers1.jpeg', title: 'This Is VALORANT',        desc: 'VALORANT Official — Dark EDM // Hardcore Sessions. The warmup playlist before every match block.',                    url: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b' },
    { img: 'Spotify_Covers2.jpeg', title: 'EVOLUTION // VALORANT',   desc: 'VALORANT Official — Distorted Chrono // Industrial Echoes. What we loop during late night VOD reviews.',            url: 'https://open.spotify.com/track/2yGcGAhdIGiObLOnmsAoFT' },
    { img: 'Spotify_Covers3.jpeg', title: 'PLAY: CYPHER',            desc: 'VALORANT Official — Nightdrive Records 2024. The bus anthem every road trip to LAN. No skips.',                     url: 'https://open.spotify.com/track/6dOtVTDdiauQNBQEDOtlAB' },
    { img: 'Spotify_Covers4.jpeg', title: 'PLAY: ISO',               desc: 'VALORANT Official — Nightdrive Records 2024. The victory closer after every series win. Every. Single. Time.',       url: 'https://open.spotify.com/track/51ZQ1vr10ffzbwIjDCwqm4' },
  ],

  // ── NEWS PAGE (news.html) + Homepage "Latest News" ─────────
  // first card = featured (big). All cards appear on news.html.
  // Homepage shows first 4.
  // cat options: 'match' | 'roster' | 'event' | 'community'
  newsCards: [
    {
      featured: true,
      cat: 'match',
      img: 'news_1.jpeg',
      tag: 'Match Result',
      date: 'March 14, 2026',
      title: 'PH4NTM Clutches a Pivotal 1v3 to Secure the Map Against Shadow Squad',
      excerpt: 'In one of the most intense rounds of the season, PH4NTM held off a 1v3 post-plant to close out Bind and send Old Blood into map three with all the momentum.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034395650062795095?s=20',
    },
    {
      cat: 'roster',
      img: 'news_2.jpeg',
      tag: 'Roster',
      date: 'March 10, 2026',
      title: 'Real Man Agent Joins as Shadow Squad\'s Newest Omen Main',
      excerpt: 'The controller specialist steps in ahead of the Spring Split, bringing elite smokes and IGL experience to the lineup.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034392517664190833?s=20',
    },
    {
      cat: 'match',
      img: 'news_3.jpeg',
      tag: 'Match Result',
      date: 'March 7, 2026',
      title: 'Navi Shawn Clutches 1v3 on Haven to Secure the Win',
      excerpt: 'Down to the wire on Haven, Navi Shawn defused the spike with one second remaining to steal the round and force overtime.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034396824526610721?s=20',
    },
    {
      cat: 'event',
      img: 'news_4.jpeg',
      tag: 'Event',
      date: 'March 3, 2026',
      title: 'NEXUS\'s Unbelievable 1v4 Ace — Fnatic Advances at Masters',
      excerpt: 'On the grandest stage of the Spring season, NEXUS pulled off a clean 1v4 Ace on Ascent to keep Old Blood\'s Masters run alive.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034389121662099809?s=20',
    },
    {
      cat: 'community',
      img: 'news_5.jpeg',
      tag: 'Community',
      date: 'Feb 28, 2026',
      title: 'Old Blood Lineage Club Reaches 500 Members — Thank You',
      excerpt: 'The Lineage Club hit 500 active members this week. To everyone who signed up — you are the reason we compete. The blood runs deep.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034383924936212571?s=20',
    },
    {
      cat: 'match',
      img: 'news_6.jpeg',
      tag: 'Match Result',
      date: 'Feb 22, 2026',
      title: 'Old Blood Goes 3-0 in Group Stage — Advance to Playoffs Undefeated',
      excerpt: 'A perfect group stage performance sees Old Blood enter the playoffs as the number one seed, losing zero maps across the entire stage.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034397515953405994?s=20',
    },
    {
      cat: 'roster',
      img: 'news_7.jpeg',
      tag: 'Roster',
      date: 'Feb 15, 2026',
      title: 'KRIXX Named IGL as Old Blood Locks in VCT 2026 Roster',
      excerpt: 'After weeks of internal trials, Karim "KRIXX" Belhadj is confirmed as the team\'s official in-game leader heading into VCT 2026.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034394763026182469?s=20',
    },
    {
      cat: 'event',
      img: 'news_8.jpeg',
      tag: 'Event',
      date: 'Feb 8, 2026',
      title: 'Old Blood Qualifies for VCT Spring Invitational — First International LAN',
      excerpt: 'Qualifying through the Open Bracket, Old Blood becomes the first team under the Lineage banner to compete on an international LAN stage.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034390219890237504?s=20',
    },
    {
      cat: 'community',
      img: 'news_9.jpeg',
      tag: 'Community',
      date: 'Feb 1, 2026',
      title: 'Old Blood Opens Discord — Join the Lineage Today',
      excerpt: 'The official Old Blood community server is now live. Drop in for match watch parties, VOD reviews, giveaways, and direct access to the team.',
      linkLabel: 'Read on X',
      linkUrl: 'https://x.com/xyressszz784205/status/2034456497749479627?s=20',
    },
  ],

  // ── ABOUT PAGE ─────────────────────────────────────────────
  about: {
    story: [
      'Founded in 2024, Old Blood is a VALORANT esports organization built on a single belief: that the bonds formed through shared struggle are unbreakable. We don\'t just field a team — we build a lineage.',
      'Old Blood was born out of the competitive VALORANT scene, with a roster assembled from some of the most talented rising players across the globe. Our mission is simple — compete at the highest level, represent our community with pride, and give every fan something they can truly call their own.',
      'We are more than a team. We are a movement. Every match, every grind, every victory and every defeat deepens the blood that binds us together. Welcome to the lineage.',
    ],
    heroImg: 'hero_3.jpeg',
    stats: [
      { num: '2024', label: 'Year Founded' },
      { num: '5',    label: 'Active Roster Players' },
      { num: '3+',   label: 'Tournament Wins' },
    ],
    // "Our People" section
    people: [
      { ign: 'GHOST',  name: 'Hakim — Founder & CEO',  img: 'https://i.pravatar.cc/400?img=11' },
      { ign: 'DIVRA',  name: 'Head Coach',             img: 'https://i.pravatar.cc/400?img=12' },
      { ign: 'CRIXX',  name: 'Team Manager',           img: 'https://i.pravatar.cc/400?img=13' },
      { ign: 'NOVA',   name: 'Content Director',       img: 'https://i.pravatar.cc/400?img=14' },
      { ign: 'RAVEN',  name: 'Analyst',                img: 'https://i.pravatar.cc/400?img=15' },
    ],
  },

  // ── VALORANT PAGE (valorant.html) ──────────────────────────
  valorant: {
    seasonBadge: 'VCT 2026 Season — Active Roster',
    achievementsTitle: 'Old Blood Achievements 2026',
    // Players: img = filename in folder (e.g. '1.jpeg'), num = jersey number shown
    roster: [
      {
        num: '01', img: '6.jpeg', alt: 'KRIXX',
        role: 'IGL · Controller', ign: 'KRIXX', realName: 'Karim Belhadj',
        socials: [
          { label: 'X',        url: 'https://x.com/1johnqt' },
          { label: 'Twitch',   url: 'https://www.twitch.tv/johnqtcs' },
          { label: 'Instagram',url: 'https://www.instagram.com/johnqt/' },
          { label: 'YouTube',  url: 'https://www.youtube.com/@johnqt' },
        ],
      },
      {
        num: '02', img: '1.jpeg', alt: 'PH4NTM',
        role: 'Duelist', ign: 'PH4NTM', realName: 'Lucas Soares 🇧🇷',
        socials: [
          { label: 'X',        url: 'https://x.com/corteziafps' },
          { label: 'Twitch',   url: 'https://www.twitch.tv/corteziafps' },
          { label: 'Instagram',url: 'https://www.instagram.com/corteziafps/' },
          { label: 'YouTube',  url: 'https://www.youtube.com/@corteziafps' },
        ],
      },
      {
        num: '03', img: '2.jpeg', alt: 'VOLT',
        role: 'Initiator', ign: 'VOLT', realName: 'Enzo Marchetti 🇮🇹',
        socials: [
          { label: 'X',        url: 'https://x.com/N4RRATE' },
          { label: 'Twitch',   url: 'https://www.twitch.tv/N4RRATE' },
          { label: 'Instagram',url: 'https://www.instagram.com/n4rrate/' },
          { label: 'YouTube',  url: 'https://www.youtube.com/@N4RRATE' },
        ],
      },
      {
        num: '04', img: '3.jpeg', alt: 'NEXUS',
        role: 'Sentinel', ign: 'NEXUS', realName: 'Ji-ho Park 🇰🇷',
        socials: [
          { label: 'X',        url: 'https://x.com/zekkenVAL' },
          { label: 'Twitch',   url: 'https://www.twitch.tv/zekken' },
          { label: 'Instagram',url: 'https://www.instagram.com/zekkenval/' },
          { label: 'YouTube',  url: 'https://www.youtube.com/@zekkenVAL' },
        ],
      },
      {
        num: '05', img: '4.jpeg', alt: 'RAVEN',
        role: 'Flex', ign: 'RAVEN', realName: 'Amir Osman 🇪🇬',
        socials: [
          { label: 'X',        url: 'https://x.com/reduxxVAL' },
          { label: 'Twitch',   url: 'https://www.twitch.tv/reduxx' },
          { label: 'Instagram',url: 'https://www.instagram.com/reduxxval/' },
          { label: 'YouTube',  url: 'https://www.youtube.com/@reduxx' },
        ],
      },
      {
        num: '06', img: '5.jpeg', alt: 'ZER0',
        role: 'Sub · Duelist', ign: 'ZER0', realName: 'Seo-jun Kang 🇰🇷',
        socials: [
          { label: 'X',        url: 'https://x.com/JonahP_' },
          { label: 'Twitch',   url: 'https://www.twitch.tv/jonahp' },
          { label: 'Instagram',url: 'https://www.instagram.com/jonahp_/' },
          { label: 'YouTube',  url: 'https://www.youtube.com/@JonahP' },
        ],
      },
    ],
    staff: [
      { role: 'Head Coach',       ign: 'DIVRA',  name: 'Marcus "DIVRA" Tan' },
      { role: 'Assistant Coach',  ign: 'ECHO',   name: 'Yuki "ECHO" Hayashi' },
      { role: 'Analyst',          ign: 'CILISS', name: 'Alex "CILISS" Novak' },
      { role: 'CEO & Team Manager', ign: 'GARDER', name: 'Hakim "GARDER"' },
    ],
    // Gallery images shown in Achievements section
    galleryImgs: [
      { img: 'acheve_1.png', alt: 'Achievement 1' },
      { img: 'acheve_2.png', alt: 'Achievement 2' },
      { img: 'acheve_3.png', alt: 'Achievement 3' },
      { img: 'acheve_4.png', alt: 'Achievement 4' },
      { img: 'acheve_5.png', alt: 'Achievement 5' },
      { img: 'acheve_6.png', alt: 'Achievement 6' },
    ],
  },

  // ── PARTNERS PAGE ──────────────────────────────────────────
  partners: [
    {
      cat: 'Gaming Peripherals', name: 'SteelSeries',
      desc: 'Official peripheral partner of Old Blood. Built for those who refuse to break — IRONCLAD provides our players with the highest quality mice, keyboards, and headsets for peak performance.',
      visitLabel: 'Visit SteelSeries', visitUrl: 'https://steelseries.com/',
    },
    {
      cat: 'PC Hardware', name: 'ASUS ROG',
      desc: 'Our official PC hardware partner. VoidTech custom-builds the rigs our players compete on — zero compromise, maximum output, built for the grind.',
      visitLabel: 'Visit ASUS ROG', visitUrl: 'https://rog.asus.com/',
    },
    {
      cat: 'Energy & Nutrition', name: 'G FUEL',
      desc: 'Fuel of champions. Redline Energy is the official energy drink partner keeping Old Blood sharp through every scrim, every tournament, every grind session.',
      visitLabel: 'Visit G FUEL', visitUrl: 'https://gfuel.com/',
    },
    {
      cat: 'Music & Audio', name: 'Monstercat',
      desc: 'Official music partner of Old Blood. Nightdrive curates the soundtrack to every match day, every highlight, and every moment that defines the lineage.',
      visitLabel: 'Visit Monstercat', visitUrl: 'https://www.monstercat.com/',
    },
    {
      cat: 'Fintech & Payments', name: 'Crypto.com',
      desc: 'Our official fintech partner — making it easier for fans to engage with Old Blood through digital payments, collectibles, and the Lineage Club rewards system.',
      visitLabel: 'Visit Crypto.com', visitUrl: 'https://crypto.com/en',
    },
    {
      cat: 'Apparel', name: 'Represent',
      desc: 'Official apparel partner. Strikewear designs and manufactures every Old Blood jersey, hoodie, and drop — wear the lineage with pride.',
      visitLabel: 'Visit Represent', visitUrl: 'https://row.representclo.com/',
    },
  ],

  // ── CREATORS PAGE ──────────────────────────────────────────
  creators: [
    {
      ign: '808_1Y',     type: 'Streamer / YouTuber',
      img: 'https://i.pravatar.cc/400?img=33',
      desc: 'Dropping daily VALORANT content, clutch highlights, and IGL breakdowns. The voice of Old Blood on YouTube.',
    },
    {
      ign: 'NOVA_CLiPS', type: 'TikTok / Short-Form',
      img: 'https://i.pravatar.cc/400?img=34',
      desc: 'Short-form highlights, funny moments, and unfiltered team reactions. Old Blood\'s fastest growing creator.',
    },
    {
      ign: 'VOIDX',      type: 'Analyst / Educator',
      img: 'https://i.pravatar.cc/400?img=57',
      desc: 'Deep dive VOD reviews, pro meta breakdowns, and ranked tips. If you want to improve, VOIDX is the one to watch.',
    },
    {
      ign: 'RAVENX',     type: 'Instagram / Lifestyle',
      img: 'https://i.pravatar.cc/400?img=36',
      desc: 'Behind the scenes, travel vlogs, and lifestyle content from inside the Old Blood house. Life as a pro gamer, unfiltered.',
    },
  ],

};

// ============================================================
//  RENDERERS — called automatically by each page on load.
//  You do NOT need to edit these.
// ============================================================

// ─── SVG icons ────────────────────────────────────────────────
const SVG = {
  arrow: `<svg width="20" height="20" viewBox="0 0 20 20"><polyline fill="none" stroke="currentColor" points="10 5 15 9.5 10 14"/><line fill="none" stroke="currentColor" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>`,
  arrowSm: `<svg width="16" height="16" viewBox="0 0 20 20"><polyline fill="none" stroke="currentColor" points="10 5 15 9.5 10 14"/><line fill="none" stroke="currentColor" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>`,
  x: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874Z"/></svg>`,
  discord: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.014.043.031.055a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.1.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>`,
  // social icons (18px) for link rendering
  social(platform, size=18) {
    const paths = {
      youtube:   `<path d="M21.54 7.2c-.25-.93-.98-1.66-1.91-1.91C17.88 5 12 5 12 5s-5.88 0-7.63.29c-.93.25-1.66.98-1.91 1.91C2.17 8.95 2.17 12 2.17 12s0 3.05.29 4.8c.25.93.98 1.66 1.91 1.91C6.12 19 12 19 12 19s5.88 0 7.63-.29c.93-.25 1.66-.98 1.91-1.91.29-1.75.29-4.8.29-4.8s0-3.05-.29-4.8zM9.75 15V9l5.5 3-5.5 3z"/>`,
      instagram: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>`,
      tiktok:    `<path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.97a8.16 8.16 0 004.77 1.52V7.04a4.85 4.85 0 01-1-.35z"/>`,
      x:         `<path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874Z"/>`,
      discord:   `<path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.014.043.031.055a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.1.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>`,
    };
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor">${paths[platform]||''}</svg>`;
  }
};

// ─── NEWS PAGE RENDERER ───────────────────────────────────────
// ─── NEWS PAGE RENDERER ───────────────────────────────────────
function renderNews(filter = 'all') {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? OB.newsCards 
    : OB.newsCards.filter(c => c.cat === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p id="newsEmpty" style="grid-column:1/-1;text-align:center;padding:100px 0;color:#6a5050;font-size:13px;letter-spacing:.08em;text-transform:uppercase;opacity:0.6;">No articles found in this category.</p>`;
    return;
  }

  grid.innerHTML = filtered.map((c, idx) => {
    const isFeatured = idx === 0;
    const cardClass = isFeatured ? 'news-card featured' : 'news-card';
    const icon = c.linkUrl.includes('discord') ? SVG.discord : SVG.x;
    
    return `
    <div class="${cardClass}" data-cat="${c.cat}">
      <div class="news-card-img">
        <img src="${c.img}" alt="${c.title}" loading="lazy" decoding="async"
             onerror="this.parentElement.style.background='linear-gradient(145deg,#2a0606,#400010)'">
      </div>
      <div class="news-card-body">
        <div class="news-card-meta">
          <span class="news-tag">${c.tag}</span>
          <span class="news-date">${c.date}</span>
        </div>
        <h3 class="news-title">${c.title}</h3>
        <p class="news-excerpt">${c.excerpt}</p>
        <div class="news-links">
          <a href="${c.linkUrl}" target="_blank" class="news-link-btn">
            ${icon} ${c.linkLabel}
          </a>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ─── HOMEPAGE LATEST NEWS RENDERER ───────────────────────────
function renderHomeNews() {
  const grid = document.getElementById('homeNewsGrid');
  if (!grid) return;
  grid.innerHTML = OB.newsCards.slice(0, 4).map(c => `
    <div class="card">
      <div class="card-media"><img src="${c.img}" alt="${c.title}" loading="lazy"></div>
      <div class="card-body">
        <h3 class="card-title">${c.title}</h3>
        <p>${c.excerpt}</p>
        <a href="news.html" class="link-btn">Read More ${SVG.arrow}</a>
      </div>
    </div>`).join('');
}

// ─── HOMEPAGE TRENDING RENDERER ──────────────────────────────
function renderHomeTrending() {
  const grid = document.getElementById('homeTrendingGrid');
  if (!grid) return;
  grid.innerHTML = OB.trendingVideos.map(v => `
    <div class="card">
      <div class="card-media">
        <img src="https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg" alt="${v.title}" loading="lazy"
             onerror="this.src='https://i.ytimg.com/vi/${v.youtubeId}/mqdefault.jpg'">
      </div>
      <div class="card-body">
        <h3 class="card-title">${v.title}</h3>
        <a href="${v.url}" class="link-btn" target="_blank">Watch ${SVG.arrow}</a>
      </div>
    </div>`).join('');
}

// ─── HOMEPAGE LINEAGE CLUB RENDERER ──────────────────────────
function renderLineageClub() {
  const grid = document.getElementById('lineageClubGrid');
  if (!grid) return;
  grid.innerHTML = OB.lineageClub.cards.map(c => `
    <div class="club-card">
      <img src="${c.img}" alt="${c.title}" loading="lazy">
      <div class="club-card-body">
        <h3 class="club-card-title">${c.title}</h3>
        <p>${c.desc}</p>
      </div>
    </div>`).join('');
  const desc = document.getElementById('lineageClubDesc');
  if (desc) desc.textContent = OB.lineageClub.description;
}

// ─── HOMEPAGE HERO SLIDESHOW RENDERER ────────────────────────
function renderHeroSlides() {
  const track = document.getElementById('slideshowTrack');
  const dotsContainer = document.getElementById('slideDots');
  if (!track || !dotsContainer) return;

  const slides = OB.heroSlides;
  if (!slides || slides.length === 0) return;

  // Seamless loop logic: [Last Clone] [Slides...] [First Clone]
  const lastClone = slides[slides.length - 1];
  const firstClone = slides[0];

  let html = `
    <div class="slide clone"><img src="${lastClone.img}" alt="" aria-hidden="true"></div>
    ${slides.map((s, i) => `
      <div class="slide"><img src="${s.img}" alt="${s.alt}"></div>
    `).join('')}
    <div class="slide clone"><img src="${firstClone.img}" alt="" aria-hidden="true"></div>
  `;
  track.innerHTML = html;

  // Dots
  dotsContainer.innerHTML = slides.map((_, i) => `
    <button class="dot${i===0?' active':''}" onclick="goToSlide(${i})"></button>
  `).join('');

  // Re-init slideshow script if it exists
  if (window.initSlideshow) window.initSlideshow();
}

// ─── HOMEPAGE VIBES RENDERER ─────────────────────────────────
function renderVibes() {
  const grid = document.getElementById('vibesGrid');
  if (!grid) return;
  grid.innerHTML = OB.vibes.map(v => `
    <div class="card vibes-card">
      <div class="card-media">
        <img src="${v.img}" alt="${v.title}" loading="lazy" style="aspect-ratio:1/1;object-fit:cover;">
      </div>
      <div class="card-body">
        <h3 class="card-title">${v.title}</h3>
        <p>${v.desc}</p>
        <a href="${v.url}" class="link-btn" target="_blank">Play on Spotify ${SVG.arrow}</a>
      </div>
    </div>`).join('');
}

// ─── ABOUT PAGE RENDERER ─────────────────────────────────────
function renderAbout() {
  const storyEl = document.getElementById('aboutStory');
  if (storyEl) storyEl.innerHTML = OB.about.story.map(p => `<p>${p}</p>`).join('');

  const heroImg = document.getElementById('aboutHeroImg');
  if (heroImg) { heroImg.src = OB.about.heroImg; heroImg.alt = 'Old Blood team'; }

  const statsEl = document.getElementById('aboutStats');
  if (statsEl) statsEl.innerHTML = OB.about.stats.map(s => `
    <div class="stat-box"><div class="num">${s.num}</div><div class="label">${s.label}</div></div>`).join('');

  const peopleEl = document.getElementById('aboutPeople');
  if (peopleEl) peopleEl.innerHTML = OB.about.people.map(p => `
    <div class="person-card">
      <div class="img-wrap"><img src="${p.img}" alt="${p.ign}" loading="lazy"></div>
      <div class="person-body">
        <div class="person-ign">${p.ign}</div>
        <div class="person-name">${p.name}</div>
      </div>
    </div>`).join('');
}

// ─── VALORANT PAGE RENDERER ───────────────────────────────────
function renderValorant() {
  const badge = document.getElementById('vctBadgeText');
  if (badge) badge.textContent = OB.valorant.seasonBadge;

  const titleEl = document.getElementById('achievementsTitle');
  if (titleEl) titleEl.textContent = OB.valorant.achievementsTitle;

  const rosterEl = document.getElementById('rosterGrid');
  if (rosterEl) rosterEl.innerHTML = OB.valorant.roster.map(p => `
    <div class="player-card">
      <div class="player-img">
        <figure><img src="${p.img}" alt="${p.ign}" loading="lazy"></figure>
        <div class="player-num">${p.num}</div>
      </div>
      <div class="player-body">
        <div class="player-role-tag">${p.role}</div>
        <div class="player-ign">${p.ign}</div>
        <div class="player-meta">${p.realName}</div>
        <div class="player-socials">
          ${p.socials.map((s,i,a) => `<a href="${s.url}" target="_blank">${s.label}</a>`).join('')}
        </div>
      </div>
    </div>`).join('');

  const staffEl = document.getElementById('staffGrid');
  if (staffEl) staffEl.innerHTML = OB.valorant.staff.map(s => `
    <div class="staff-card">
      <div class="staff-role">${s.role}</div>
      <div class="staff-ign">${s.ign}</div>
      <div class="staff-name">${s.name}</div>
    </div>`).join('');

  const galleryEl = document.getElementById('achievementsGrid');
  if (galleryEl) galleryEl.innerHTML = OB.valorant.galleryImgs.map(g => `
    <div class="gallery-img">
      <img src="${g.img}" alt="${g.alt}" loading="lazy" decoding="async"
           onerror="this.parentElement.style.background='linear-gradient(145deg,#1a0606,#300010)'">
    </div>`).join('');
}

// ─── PARTNERS PAGE RENDERER ───────────────────────────────────
function renderPartners() {
  const grid = document.getElementById('partnersGrid');
  if (!grid) return;
  grid.innerHTML = OB.partners.map(p => `
    <div class="partner-card">
      <div class="partner-logo-box" style="height:80px;display:flex;align-items:center;">
        <span style="font-family:'Bebas Neue',sans-serif;font-size:32px;letter-spacing:.06em;color:var(--secondary);opacity:.85;">${p.name}</span>
      </div>
      <div>
        <div class="partner-cat">${p.cat}</div>
        <div class="partner-name">${p.name}</div>
      </div>
      <p class="partner-desc">${p.desc}</p>
      <a href="${p.visitUrl}" class="partner-link" target="_blank">${p.visitLabel} ${SVG.arrowSm}</a>
    </div>`).join('');
}

// ─── CREATORS PAGE RENDERER ───────────────────────────────────
function renderCreators() {
  const grid = document.getElementById('creatorsGrid');
  if (!grid) return;
  grid.innerHTML = OB.creators.map(c => `
    <div class="creator-card">
      <div class="creator-img"><img src="${c.img}" alt="${c.ign}" loading="lazy"></div>
      <div class="creator-body">
        <div class="creator-type">${c.type}</div>
        <div class="creator-ign">${c.ign}</div>
        <div class="creator-desc">${c.desc}</div>
      </div>
    </div>`).join('');
}

// ─── NEWS FILTER (Re-renders for correct layout) ───────────
function filterNews(btn, cat) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderNews(cat);
}

// ─── SITE-WIDE META (Title, Copyright) ───────────────────────
function renderSiteMeta() {
  document.querySelectorAll('.footer-copy').forEach(el => {
    el.innerHTML = OB.site.copyright.replace('\n', '<br>');
  });
  // Update document title if on a page where OB.site.name is appropriate
  if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
     document.title = `${OB.site.name} — ${OB.site.tagline}`;
  }
}

// ─── AUTO-INIT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSiteMeta();
  renderHeroSlides();
  renderNews();
  renderHomeNews();
  renderHomeTrending();
  renderLineageClub();
  renderVibes();
  renderAbout();
  renderValorant();
  renderPartners();
  renderCreators();
});
