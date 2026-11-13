// main-game.jsx — Entry point for the Gappu Muni game
import React from 'react';
import { createRoot } from 'react-dom/client';
import GameApp from './GameApp.jsx';

const root = createRoot(document.getElementById('game-root'));
root.render(<GameApp />);
