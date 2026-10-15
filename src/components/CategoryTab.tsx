import React, { useState } from 'react';
import { APP_CONFIG } from '../config';

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  plays: string;
  icon: string;
  color: string;
}

interface CategoryTabProps {
  onPlayGame: (gameId: string) => void;
}

// Extended game library organized by category
const ALL_GAMES: Game[] = [
  // Must Have (Social Apps)
  { id: 'whatsapp-web', title: 'WhatsApp Web', description: 'Access WhatsApp from browser', category: 'Must Have', rating: 4.9, plays: 'Web App', icon: '💬', color: '#25D369' },
  { id: 'instagram-web', title: 'Instagram', description: 'Photo & video sharing', category: 'Must Have', rating: 4.8, plays: 'Web App', icon: '📷', color: '#E4405F' },
  { id: 'facebook-web', title: 'Facebook', description: 'Social connect worldwide', category: 'Must Have', rating: 4.7, plays: 'Web App', icon: '👍', color: '#1877F2' },
  { id: 'youtube-web', title: 'YouTube', description: 'Watch videos and streams', category: 'Must Have', rating: 4.9, plays: 'Web App', icon: '▶️', color: '#FF0000' },
  { id: 'x-twitter', title: 'X (Twitter)', description: 'Microblogging and news', category: 'Must Have', rating: 4.6, plays: 'Web App', icon: '🐦', color: '#1DA1F2' },
  { id: 'telegram-web', title: 'Telegram', description: 'Secure messaging', category: 'Must Have', rating: 4.8, plays: 'Web App', icon: '✈️', color: '#28A745' },
  { id: 'gmail-web', title: 'Gmail', description: 'Email made simple', category: 'Must Have', rating: 4.8, plays: 'Web App', icon: '📧', color: '#4285F4' },
  { id: 'drive-web', title: 'Google Drive', description: 'Store files in cloud', category: 'Must Have', rating: 4.7, plays: 'Web App', icon: '☁️', color: '#4285F4' },
  // Puzzle games
  { id: 'snake', title: 'Snake Classic', description: 'Classic snake game', category: 'Puzzle', rating: 4.8, plays: '2.1M', icon: '🐍', color: '#4CAF50' },
  { id: '2048', title: '2048', description: 'Merge numbers to reach 2048', category: 'Puzzle', rating: 4.9, plays: '1.8M', icon: '🔢', color: '#FF9800' },
  { id: 'tetris', title: 'Tetris Pro', description: 'Stack blocks, clear lines', category: 'Puzzle', rating: 4.7, plays: '3.2M', icon: '🧱', color: '#2196F3' },
  { id: 'memory', title: 'Memory Match', description: 'Match all pairs', category: 'Puzzle', rating: 4.3, plays: '650K', icon: '🧠', color: '#9C27B0' },
  { id: 'minesweeper', title: 'Minesweeper', description: 'Clear the minefield', category: 'Puzzle', rating: 4.5, plays: '1.2M', icon: '💣', color: '#795548' },
  { id: 'sudoku', title: 'Sudoku Master', description: 'Fill the 9x9 grid', category: 'Puzzle', rating: 4.7, plays: '1.1M', icon: '📐', color: '#3F51B5' },
  { id: 'bubble', title: 'Bubble Shooter', description: 'Pop matching bubbles', category: 'Puzzle', rating: 4.7, plays: '2.2M', icon: '🫧', color: '#00BCD4' },
  { id: 'match3', title: 'Jewel Crush', description: 'Match 3 or more gems', category: 'Puzzle', rating: 4.6, plays: '1.7M', icon: '💎', color: '#E91E63' },
  // Simulation games
  { id: 'chess', title: 'Chess Online', description: 'Play against AI or friends', category: 'Simulation', rating: 4.8, plays: '1.9M', icon: '♟️', color: '#212121' },
  { id: 'solitaire', title: 'Solitaire', description: 'Classic card game', category: 'Simulation', rating: 4.6, plays: '2.5M', icon: '🃏', color: '#4CAF50' },
  // Action games
  { id: 'pacman', title: 'Pac-Man', description: 'Eat dots, avoid ghosts', category: 'Action', rating: 4.6, plays: '1.5M', icon: '🟡', color: '#FFEB3B' },
  { id: 'flappy', title: 'Flappy Bird', description: 'Tap to fly through pipes', category: 'Action', rating: 4.2, plays: '2.8M', icon: '🐦', color: '#FF9800' },
  { id: 'breakout', title: 'Breakout', description: 'Break all the bricks', category: 'Action', rating: 4.5, plays: '980K', icon: '🧱', color: '#F44336' },
  { id: 'pong', title: 'Pong Classic', description: 'Classic 2-player pong', category: 'Action', rating: 4.4, plays: '750K', icon: '🏓', color: '#607D8B' },
  { id: 'helicopter', title: 'Copter Rescue', description: 'Fly and save people', category: 'Action', rating: 4.4, plays: '680K', icon: '🚁', color: '#FF5722' },
  { id: 'frogger', title: 'Frogger Cross', description: 'Cross the busy road', category: 'Action', rating: 4.3, plays: '720K', icon: '🐸', color: '#4CAF50' },
  // Adventure games
  { id: 'platformer', title: 'Jump Hero', description: 'Run, jump, collect coins', category: 'Adventure', rating: 4.6, plays: '1.1M', icon: '🦸', color: '#FF5722' },
  { id: 'findtreasure', title: 'Treasure Hunt', description: 'Find hidden treasure', category: 'Adventure', rating: 4.5, plays: '520K', icon: '💰', color: '#F44336' },
  { id: 'maze', title: 'Maze Runner', description: 'Navigate through mazes', category: 'Adventure', rating: 4.4, plays: '380K', icon: '🗺️', color: '#673AB7' },
  // Racing games
  { id: 'racing', title: 'Speed Racer', description: 'High-speed car racing', category: 'Racing', rating: 4.4, plays: '890K', icon: '🏎️', color: '#E91E63' },
  { id: 'moto', title: 'MotoGP', description: 'Fast motorcycle racing', category: 'Racing', rating: 4.3, plays: '420K', icon: '🏍️', color: '#D32F2F' },
  // Shooting games
  { id: 'space', title: 'Space Shooter', description: 'Defend Earth from aliens', category: 'Shooting', rating: 4.5, plays: '1.3M', icon: '🚀', color: '#673AB7' },
  { id: 'zombie', title: 'Zombie Shooter', description: 'Survive the zombie apocalypse', category: 'Shooting', rating: 4.4, plays: '780K', icon: '👾', color: '#9C27B0' },
  { id: 'alien', title: 'Alien Attack', description: 'Save Earth from invasion', category: 'Shooting', rating: 4.3, plays: '310K', icon: '👽', color: '#3F51B5' },
  // Casual games
  { id: 'pinball', title: 'Pinball Deluxe', description: 'Classic pinball action', category: 'Casual', rating: 4.3, plays: '540K', icon: '⚽', color: '#FF9800' },
  { id: 'sudoku', title: 'Word Search', description: 'Find hidden words', category: 'Casual', rating: 4.2, plays: '290K', icon: '❓', color: '#4CAF50' },
  { id: 'crossword', title: 'Crossword', description: 'Solve daily crossword', category: 'Casual', rating: 4.5, plays: '450K', icon: '🧩', color: '#2196F3' },
];

const CATEGORY_ORDER = ['Must Have', 'Puzzle', 'Simulation', 'Action', 'Adventure', 'Racing', 'Shooting', 'Casual'];

const CategoryTab: React.FC<CategoryTabProps> = ({ onPlayGame }) => {
  const [activeCategory, setActiveCategory] = useState('Must Have');
  const [activeTab, setActiveTab] = useState<'social' | 'games'>('social');

  const socialApps = ALL_GAMES.filter(g => g.category === 'Must Have');
  const filteredGames = ALL_GAMES.filter(g => g.category === activeCategory && g.category !== 'Must Have');

  return (
    <div className="space-y-4 tab-content">
      {/* Social Apps Tab */}
      <div>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('social')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === 'social'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Social Apps
          </button>
          <button
            onClick={() => setActiveTab('games')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === 'games'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Games
          </button>
        </div>

        {activeTab === 'social' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {socialApps.map((app) => (
              <AppCard key={app.id} app={app} onLaunch={onPlayGame} />
            ))}
          </div>
        ) : (
          <div>
            <div className="flex gap-2 overflow-x-auto pb-3 px-2">
              {CATEGORY_ORDER.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
                    activeCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} onPlay={onPlayGame} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AppCard: React.FC<{ app: Game; onLaunch: (id: string) => void }> = ({ app, onLaunch }) => (
  <button
    onClick={() => onLaunch(app.id)}
    className="card p-4 flex flex-col items-center text-center group hover:scale-105 transition-transform"
  >
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
      {app.icon}
    </div>
    <h3 className="font-bold text-sm mb-1 truncate w-full">{app.title}</h3>
    <p className="text-xs text-muted truncate w-full">{app.description}</p>
    <span className="mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
      Open Now
    </span>
  </button>
);

const GameCard: React.FC<{ game: Game; onPlay: (id: string) => void }> = ({ game, onPlay }) => (
  <button
    onClick={() => onPlay(game.id)}
    className="card p-3 flex flex-col items-center text-center group hover:scale-105 transition-transform"
    style={{ borderLeft: `4px solid ${game.color}` }}
  >
    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform"
      style={{ background: `${game.color}20` }}>
      {game.icon}
    </div>
    <h3 className="font-bold text-sm mb-1 truncate w-full">{game.title}</h3>
    <div className="flex items-center gap-1 text-xs text-muted mb-2 w-full">
      <span>⭐ {game.rating}</span>
    </div>
    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
      {game.category}
    </span>
  </button>
);

export default CategoryTab;