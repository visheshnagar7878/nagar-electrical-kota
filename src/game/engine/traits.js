// traits.js — All available personality traits in Gappu Muni
// Editable from Firestore without code changes

export const TRAITS = {
  funny: { id: 'funny', name: 'Funny', emoji: '😂', description: 'Loves making people laugh' },
  introverted: { id: 'introverted', name: 'Introverted', emoji: '🌙', description: 'Prefers inner world, needs alone time' },
  extroverted: { id: 'extroverted', name: 'Extroverted', emoji: '🎉', description: 'Energised by people and social settings' },
  ambitious: { id: 'ambitious', name: 'Ambitious', emoji: '🚀', description: 'Driven by goals and success' },
  emotional: { id: 'emotional', name: 'Emotional', emoji: '💖', description: 'Deeply feels and expresses emotions' },
  intelligent: { id: 'intelligent', name: 'Intelligent', emoji: '🧠', description: 'Sharp, analytical, loves learning' },
  calm: { id: 'calm', name: 'Calm', emoji: '☁️', description: 'Stays composed under pressure' },
  adventurous: { id: 'adventurous', name: 'Adventurous', emoji: '⚡', description: 'Seeks new experiences and thrills' },
  loyal: { id: 'loyal', name: 'Loyal', emoji: '🤝', description: 'Deeply devoted and trustworthy' },
  sarcastic: { id: 'sarcastic', name: 'Sarcastic', emoji: '😏', description: 'Sharp wit with dry humour' },
  creative: { id: 'creative', name: 'Creative', emoji: '🎨', description: 'Original thinker, loves art and ideas' },
  mischievous: { id: 'mischievous', name: 'Mischievous', emoji: '😈', description: 'Loves pranks and surprises' },
  responsible: { id: 'responsible', name: 'Responsible', emoji: '📋', description: 'Dependable, takes duties seriously' },
  dramatic: { id: 'dramatic', name: 'Dramatic', emoji: '🎭', description: 'Expressive, theatrical, loves attention' },
  confident: { id: 'confident', name: 'Confident', emoji: '💪', description: 'Self-assured and bold' },
  kind: { id: 'kind', name: 'Kind', emoji: '🌸', description: 'Warm-hearted and compassionate' },
};

export const TRAIT_IDS = Object.keys(TRAITS);
