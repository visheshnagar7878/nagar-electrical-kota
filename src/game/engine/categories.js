// categories.js — Game category definitions
// New categories can be added here or loaded from Firestore without code changes

export const CATEGORIES = [
  {
    id: 'bollywood',
    name: 'Bollywood & Celebs',
    nameHindi: 'बॉलीवुड',
    description: 'Discover which Bollywood star or Indian celebrity matches your vibe!',
    emoji: '🎬',
    themeColor: '#FF6B5E',
    gradientFrom: '#FF6B5E',
    gradientTo: '#FF9A8B',
    isActive: true,
    displayOrder: 1,
    questionCount: 10,
  },
  {
    id: 'memes',
    name: 'Indian Meme Culture',
    nameHindi: 'मेमे दुनिया',
    description: 'Are you Binod, a Sigma, or peak Aunty Ji energy? Find out!',
    emoji: '😂',
    themeColor: '#FFD84D',
    gradientFrom: '#FFD84D',
    gradientTo: '#FFB800',
    isActive: true,
    displayOrder: 2,
    questionCount: 10,
  },
  {
    id: 'mythology',
    name: 'Indian Mythology',
    nameHindi: 'पुराण',
    description: 'Which mythological hero shares your values and personality?',
    emoji: '🪔',
    themeColor: '#7047EB',
    gradientFrom: '#7047EB',
    gradientTo: '#A78BFA',
    isActive: true,
    displayOrder: 3,
    questionCount: 10,
  },
  {
    id: 'mystery',
    name: 'Mystery Mode 🔮',
    nameHindi: 'रहस्य मोड',
    description: 'Anime? Gaming? Fiction? Gappu Muni surprises you!',
    emoji: '🔮',
    themeColor: '#171717',
    gradientFrom: '#3D1A78',
    gradientTo: '#7047EB',
    isActive: true,
    displayOrder: 4,
    questionCount: 10,
  },
];

export const getCategoryById = (id) => CATEGORIES.find((c) => c.id === id) || null;
