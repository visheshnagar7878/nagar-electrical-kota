// questions.js — Seed question bank
// Each answer maps to traitMappings: { traitId: weight }
// Questions are category-scoped but some can appear across categories

export const QUESTIONS = [
  // ═══════════════════════════════════════════════════════
  // UNIVERSAL QUESTIONS (all categories)
  // ═══════════════════════════════════════════════════════
  {
    id: 'q_group_role',
    text: 'Group mein tera role kya hota hai?',
    subtext: 'Apne dost-log ke saath soch ke bata',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '😂 Main sabko hasata hoon — entertainer hoon main',
        traitMappings: { funny: 0.9, extroverted: 0.7, mischievous: 0.4 },
      },
      {
        id: 'a2', text: '📋 Main planning karta hoon — sabka schedule mere paas hota hai',
        traitMappings: { responsible: 0.9, intelligent: 0.7, ambitious: 0.5 },
      },
      {
        id: 'a3', text: '👀 Main mostly observe karta hoon — sun-sun ke sab samajhta hoon',
        traitMappings: { introverted: 0.9, intelligent: 0.8, calm: 0.6 },
      },
      {
        id: 'a4', text: '🤝 Main sabko sambhalta hoon — peacemaker hoon',
        traitMappings: { kind: 0.9, loyal: 0.8, calm: 0.7, emotional: 0.5 },
      },
    ],
    isActive: true,
    displayOrder: 1,
  },
  {
    id: 'q_saturday_plan',
    text: 'Saturday free hai — kya karta hai tu?',
    subtext: 'Sach mein batana, judge nahi hoga yahan',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '🎉 Dosto ke saath bahar — adventure chahiye mujhe',
        traitMappings: { extroverted: 0.9, adventurous: 0.8, funny: 0.5 },
      },
      {
        id: 'a2', text: '📚 Kuch naya seekhna — course, video, ya book',
        traitMappings: { intelligent: 0.9, ambitious: 0.7, introverted: 0.5 },
      },
      {
        id: 'a3', text: '🛋️ Ghar pe quiet time — peace milti hai',
        traitMappings: { introverted: 0.9, calm: 0.85, creative: 0.4 },
      },
      {
        id: 'a4', text: '🎨 Kuch creative karna — music, art, writing',
        traitMappings: { creative: 0.95, introverted: 0.5, emotional: 0.6 },
      },
    ],
    isActive: true,
    displayOrder: 2,
  },
  {
    id: 'q_conflict_style',
    text: 'Dost se ladai ho jaaye toh tu kya karta hai?',
    subtext: 'Pehla reaction batao',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '😤 Direct baat karta hoon — problem solve karo tabhi sukoon',
        traitMappings: { confident: 0.9, extroverted: 0.6, responsible: 0.6 },
      },
      {
        id: 'a2', text: '😶 Chhod deta hoon — kuch time baad sab theek ho jaata hai',
        traitMappings: { calm: 0.9, introverted: 0.7, responsible: 0.4 },
      },
      {
        id: 'a3', text: '💬 Kisi aur se baat karta hoon pehle — perspective chahiye',
        traitMappings: { emotional: 0.8, loyal: 0.6, extroverted: 0.5, intelligent: 0.5 },
      },
      {
        id: 'a4', text: '😢 Andar hi andar feel karta hoon — express karna mushkil hai',
        traitMappings: { emotional: 0.9, introverted: 0.8, kind: 0.5 },
      },
    ],
    isActive: true,
    displayOrder: 3,
  },
  {
    id: 'q_superpower',
    text: 'Agar ek superpower mil jaaye, tu kya choose karega?',
    subtext: 'Seedha bata, philosophy mat karo',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '🧠 Sabka mind padhna — secrets aur truth jaanna chahiye',
        traitMappings: { intelligent: 0.9, sarcastic: 0.5, mischievous: 0.4 },
      },
      {
        id: 'a2', text: '⚡ Super speed — duniya ghoomni hai, ruka nahi sakta',
        traitMappings: { adventurous: 0.9, extroverted: 0.7, ambitious: 0.6 },
      },
      {
        id: 'a3', text: '🛡️ Sab ki rakshai karna — apno ko protect karna chahiye',
        traitMappings: { loyal: 0.9, kind: 0.9, responsible: 0.8 },
      },
      {
        id: 'a4', text: '🎭 Koi bhi ban jaana — acting aur transformation!',
        traitMappings: { creative: 0.9, adventurous: 0.7, dramatic: 0.8, mischievous: 0.6 },
      },
    ],
    isActive: true,
    displayOrder: 4,
  },
  {
    id: 'q_compliment',
    text: 'Log tujhe sabse zyada kya kehte hain?',
    subtext: 'Jo sabse zyada suna ho, woh choose karo',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '😂 "Tu toh bahut funny hai yaar"',
        traitMappings: { funny: 0.95, extroverted: 0.7, mischievous: 0.5 },
      },
      {
        id: 'a2', text: '🧠 "Tujhe itna kaise pata hai?"',
        traitMappings: { intelligent: 0.9, calm: 0.6, introverted: 0.5 },
      },
      {
        id: 'a3', text: '🤝 "Tu hamesha mere liye available hota hai"',
        traitMappings: { loyal: 0.95, kind: 0.85, responsible: 0.7 },
      },
      {
        id: 'a4', text: '💪 "Tera confidence dekh ke dil khush ho jaata hai"',
        traitMappings: { confident: 0.95, extroverted: 0.7, ambitious: 0.6 },
      },
    ],
    isActive: true,
    displayOrder: 5,
  },
  {
    id: 'q_dream',
    text: 'Agar koi roke na, tu kya karna chahega life mein?',
    subtext: 'Sabse bada dream — no limits',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '🌍 Duniya ghoomna — hamesha naya experience chahiye',
        traitMappings: { adventurous: 0.95, extroverted: 0.7, creative: 0.6 },
      },
      {
        id: 'a2', text: '🏆 Apne field mein top pe jaana — recognition milni chahiye',
        traitMappings: { ambitious: 0.95, confident: 0.8, intelligent: 0.65 },
      },
      {
        id: 'a3', text: '🎨 Kuch creative banana — music, art, writing, films',
        traitMappings: { creative: 0.95, emotional: 0.7, adventurous: 0.5 },
      },
      {
        id: 'a4', text: '🌱 Dusron ki zindagi better karna — service aur impact',
        traitMappings: { kind: 0.95, loyal: 0.75, responsible: 0.8, emotional: 0.6 },
      },
    ],
    isActive: true,
    displayOrder: 6,
  },
  {
    id: 'q_social_battery',
    text: 'Party ke baad tu kaisa feel karta hai?',
    subtext: 'Honest answer please',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '🎉 Energized! Main toh aur chahta tha',
        traitMappings: { extroverted: 1.0, adventurous: 0.6, funny: 0.5 },
      },
      {
        id: 'a2', text: '😌 Achhha laga, par ab ghar pe rest chahiye',
        traitMappings: { introverted: 0.6, calm: 0.7, kind: 0.5 },
      },
      {
        id: 'a3', text: '😩 Exhausted — zyada people, zyada drained',
        traitMappings: { introverted: 0.95, calm: 0.5, creative: 0.4 },
      },
      {
        id: 'a4', text: '🤔 Depends — right crowd ke saath toh maza aaya',
        traitMappings: { intelligent: 0.7, calm: 0.6, emotional: 0.5 },
      },
    ],
    isActive: true,
    displayOrder: 7,
  },
  {
    id: 'q_bad_day',
    text: 'Bahut bura din gaya — tu pehle kya karta hai?',
    subtext: 'Wahi choose karo jo actually karte ho',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '🎵 Music lagaana — music thoda better karta hai',
        traitMappings: { emotional: 0.75, creative: 0.7, introverted: 0.6 },
      },
      {
        id: 'a2', text: '📞 Dost ko call karna — baat karne se halka lagta hai',
        traitMappings: { extroverted: 0.8, emotional: 0.8, loyal: 0.6 },
      },
      {
        id: 'a3', text: '😴 So jaana — neend mein problem nahi hoti',
        traitMappings: { calm: 0.8, introverted: 0.7, responsible: 0.3 },
      },
      {
        id: 'a4', text: '🔍 Analyze karna — kya galat hua, next time better karo',
        traitMappings: { intelligent: 0.9, ambitious: 0.6, responsible: 0.7 },
      },
    ],
    isActive: true,
    displayOrder: 8,
  },
  {
    id: 'q_risk',
    text: 'Ek safe job ya exciting startup — tujhe kya chahiye?',
    subtext: 'Seedha answer, bina overthinking ke',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '🚀 Startup — risk le aur kuch bada bana',
        traitMappings: { adventurous: 0.9, ambitious: 0.9, confident: 0.75 },
      },
      {
        id: 'a2', text: '🏢 Safe job — stability important hai mujhe',
        traitMappings: { responsible: 0.85, calm: 0.75, introverted: 0.4 },
      },
      {
        id: 'a3', text: '🤹 Dono — part-time side hustle bhi chalega',
        traitMappings: { intelligent: 0.8, creative: 0.7, ambitious: 0.65 },
      },
      {
        id: 'a4', text: '🎨 Creative field — paise se zyada passion matter karta hai',
        traitMappings: { creative: 0.9, emotional: 0.65, adventurous: 0.6 },
      },
    ],
    isActive: true,
    displayOrder: 9,
  },
  {
    id: 'q_villain_or_hero',
    text: 'Movie mein agar tu hota toh kaunsa character hota?',
    subtext: 'Honest mein bata — judge nahi karenge',
    categoryIds: ['bollywood', 'memes', 'mythology', 'mystery'],
    answerOptions: [
      {
        id: 'a1', text: '🦸 Hero — sab ko bachata hoon, sab mujhe pyaar karte hain',
        traitMappings: { loyal: 0.8, confident: 0.8, kind: 0.9, responsible: 0.75 },
      },
      {
        id: 'a2', text: '😈 Villain — zyada interesting hota hai villain',
        traitMappings: { ambitious: 0.85, sarcastic: 0.8, dramatic: 0.85, mischievous: 0.7 },
      },
      {
        id: 'a3', text: '🤺 Anti-hero — naa full good, naa full bad',
        traitMappings: { sarcastic: 0.75, adventurous: 0.7, intelligent: 0.8, emotional: 0.6 },
      },
      {
        id: 'a4', text: '😂 Comic relief — sabko hasaata hoon',
        traitMappings: { funny: 0.95, kind: 0.65, extroverted: 0.75, mischievous: 0.55 },
      },
    ],
    isActive: true,
    displayOrder: 10,
  },
];

export const getQuestionsByCategory = (categoryId) =>
  QUESTIONS.filter((q) => q.categoryIds.includes(categoryId) && q.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);
