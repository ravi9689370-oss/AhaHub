import React, { useState, useEffect } from 'react';
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
  // For HTML5 game embedding
  gameUrl?: string;
}

interface HomeTabProps {
  onPlayGame: (gameId: string) => void;
}

// Extended game library with 50+ games
const HOT_GAMES: Game[] = [
  { id: 'snake', title: 'Snake Classic', description: 'Classic snake game', category: 'Casual', rating: 4.8, plays: '2.1M', icon: '🐍', color: '#4CAF50' },
  { id: '2048', title: '2048', description: 'Merge numbers to reach 2048', category: 'Puzzle', rating: 4.9, plays: '1.8M', icon: '🔢', color: '#FF9800' },
  { id: 'tetris', title: 'Tetris Pro', description: 'Stack blocks, clear lines', category: 'Puzzle', rating: 4.7, plays: '3.2M', icon: '🧱', color: '#2196F3' },
  { id: 'pacman', title: 'Pac-Man', description: 'Eat dots, avoid ghosts', category: 'Action', rating: 4.6, plays: '1.5M', icon: '🟡', color: '#FFEB3B' },
  { id: 'flappy', title: 'Flappy Bird', description: 'Tap to fly through pipes', category: 'Casual', rating: 4.2, plays: '2.8M', icon: '🐦', color: '#FF9800' },
  { id: 'breakout', title: 'Breakout', description: 'Break all the bricks', category: 'Action', rating: 4.5, plays: '980K', icon: '🧱', color: '#F44336' },
  { id: 'pong', title: 'Pong Classic', description: 'Classic 2-player pong', category: 'Action', rating: 4.4, plays: '750K', icon: '🏓', color: '#607D8B' },
  { id: 'memory', title: 'Memory Match', description: 'Match all pairs', category: 'Puzzle', rating: 4.3, plays: '650K', icon: '🧠', color: '#9C27B0' },
  { id: 'minesweeper', title: 'Minesweeper', description: 'Clear the minefield', category: 'Puzzle', rating: 4.5, plays: '1.2M', icon: '💣', color: '#795548' },
  { id: 'sudoku', title: 'Sudoku Master', description: 'Fill the 9x9 grid', category: 'Puzzle', rating: 4.7, plays: '1.1M', icon: '📐', color: '#3F51B5' },
  { id: 'solitaire', title: 'Solitaire', description: 'Classic card game', category: 'Casual', rating: 4.6, plays: '2.5M', icon: '🃏', color: '#4CAF50' },
  { id: 'chess', title: 'Chess Online', description: 'Play against AI or friends', category: 'Simulation', rating: 4.8, plays: '1.9M', icon: '♟️', color: '#212121' },
  { id: 'racing', title: 'Speed Racer', description: 'High-speed car racing', category: 'Racing', rating: 4.4, plays: '890K', icon: '🏎️', color: '#E91E63' },
  { id: 'space', title: 'Space Shooter', description: 'Defend Earth from aliens', category: 'Shooting', rating: 4.5, plays: '1.3M', icon: '🚀', color: '#673AB7' },
  { id: 'platformer', title: 'Jump Hero', description: 'Run, jump, collect coins', category: 'Adventure', rating: 4.6, plays: '1.1M', icon: '🦸', color: '#FF5722' },
  { id: 'pinball', title: 'Pinball Deluxe', description: 'Classic pinball action', category: 'Casual', rating: 4.3, plays: '540K', icon: '⚽', color: '#FF9800' },
  { id: 'bubble', title: 'Bubble Shooter', description: 'Pop matching bubbles', category: 'Puzzle', rating: 4.7, plays: '2.2M', icon: '🫧', color: '#00BCD4' },
  { id: 'match3', title: 'Jewel Crush', description: 'Match 3 or more gems', category: 'Puzzle', rating: 4.6, plays: '1.7M', icon: '💎', color: '#E91E63' },
  { id: 'helicopter', title: 'Copter Rescue', description: 'Fly and save people', category: 'Action', rating: 4.4, plays: '680K', icon: '🚁', color: '#FF5722' },
  { id: 'frogger', title: 'Frogger Cross', description: 'Cross the busy road', category: 'Action', rating: 4.3, plays: '720K', icon: '🐸', color: '#4CAF50' },
];

const CONTINUE_PLAYING = [
  { id: 'snake', progress: 75, score: 1250 },
  { id: 'tetris', progress: 45, score: 45000 },
  { id: '2048', progress: 90, score: 1024 },
];

const BANNERS = [
  { id: 1, title: '🎁 Daily Bonus', subtitle: 'Claim 50 AHA Coins today!', color: 'from-yellow-400 to-orange-500' },
  { id: 2, title: '🏆 Tournament', subtitle: 'Join weekly tournament - Win 5000 coins', color: 'from-purple-500 to-pink-500' },
  { id: 3, title: '⚡ New Games', subtitle: '10 new games added this week', color: 'from-blue-500 to-cyan-500' },
  { id: 4, title: '💎 Ad-Free Pass', subtitle: 'Get 3 months for ₹249 only!', color: 'from-primary to-secondary' },
];

const HomeTab: React.FC<HomeTabProps> = ({ onPlayGame }) => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [hotGames] = useState(HOT_GAMES);

  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % BANNERS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getGameById = (id: string) => HOT_GAMES.find(g => g.id === id);

  return (
    <div className="space-y-6 pb-24 tab-content">
      {/* Banner Carousel */}
      <div className="relative h-40 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${bannerIndex * 100}%)` }}>
          {BANNERS.map((banner, i) => (
            <div key={banner.id} className={`absolute inset-0 flex items-center justify-center text-white ${banner.color} rounded-3xl`}>
              <div className="px-8 text-center">
                <h3 className="text-3xl font-display font-bold mb-1">{banner.title}</h3>
                <p className="text-lg opacity-90">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setBannerIndex(i)}
              className={`w-2 h-2 rounded-full transition ${i === bannerIndex ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Banner ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Continue Playing */}
      {CONTINUE_PLAYING.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-3 px-2">
            <h2 className="text-xl font-display font-bold">Continue Playing</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 px-2 snap-x snap-mandatory">
            {CONTINUE_PLAYING.map((item) => {
              const game = getGameById(item.id);
              if (!game) return null;
              return (
                <div key={item.id} className="min-w-[200px] card flex-shrink-0 snap-start p-4 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                      {game.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold truncate">{game.title}</h3>
                      <p className="text-xs text-muted truncate">{game.description}</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted">Progress</span>
                      <span className="font-medium">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all"
                        style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">Score: {item.score.toLocaleString()}</span>
                    <button
                      onClick={() => onPlayGame(item.id)}
                      className="btn-primary text-sm px-4 py-1.5"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Hot Games Grid */}
      <section>
        <div className="flex items-center justify-between mb-3 px-2">
          <h2 className="text-xl font-display font-bold">Hot Games</h2>
          <span className="text-sm text-muted">{hotGames.length} games</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {hotGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onPlay={() => onPlayGame(game.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const GameCard: React.FC<{ game: Game; onPlay: () => void }> = ({ game, onPlay }) => (
  <button
    onClick={onPlay}
    className="card p-3 flex flex-col items-center text-center group hover:scale-105 transition-transform"
    style={{ borderLeft: `4px solid ${game.color}` }}
  >
    <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform"
      style={{ background: `${game.color}20` }}>
      {game.icon}
    </div>
    <h3 className="font-bold text-sm mb-1 truncate w-full">{game.title}</h3>
    <div className="flex items-center justify-center gap-2 text-xs text-muted mb-2 w-full">
      <span className="flex items-center gap-1">
        ⭐ {game.rating}
      </span>
      <span className="flex items-center gap-1">
        👁 {game.plays}
      </span>
    </div>
    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
      {game.category}
    </span>
    <div className="mt-2 w-full">
      <button className="btn-primary w-full text-sm py-2" onClick={(e) => { e.stopPropagation(); onPlay(); }}>
        Play Now
      </button>
    </div>
  </button>
);

export default HomeTab;