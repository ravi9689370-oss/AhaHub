import React, { useState, useEffect, lazy, Suspense } from 'react';
import { APP_CONFIG } from './config';

// Lazy load tab components for better performance
const HomeTab = lazy(() => import('./components/HomeTab'));
const CategoryTab = lazy(() => import('./components/CategoryTab'));
const DownloadsTab = lazy(() => import('./components/DownloadsTab'));
const ProfileTab = lazy(() => import('./components/ProfileTab'));
const LoginModal = lazy(() => import('./components/LoginModal'));
const GameSandbox = lazy(() => import('./components/GameSandbox'));

interface User {
  name: string;
  handle: string;
  avatar: string;
  coins: number;
  adFreePass?: string;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'category' | 'downloads' | 'profile'>('home');
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [gameToPlay, setGameToPlay] = useState<string | null>(null);

  // Load user from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ahahub_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse user data', e);
      }
    }
  }, []);

  // Save user to localStorage
  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('ahahub_user', JSON.stringify(userData));
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('ahahub_user');
  };

  const handlePlayGame = (gameId: string) => {
    setGameToPlay(gameId);
  };

  const handleBackFromGame = () => {
    setGameToPlay(null);
  };

  // If a game is selected, show the sandbox
  if (gameToPlay) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <GameSandbox gameId={gameToPlay} onBack={handleBackFromGame} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900">{APP_CONFIG.name}</h1>
              <p className="text-xs text-muted -mt-1">Multi-App & Game Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <button
                onClick={() => setActiveTab('profile')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="text-lg">{user.avatar}</span>
                <span className="text-sm font-medium hidden sm:block">{user.handle}</span>
                <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                  🪙 {user.coins}
                </span>
              </button>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-secondary transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Suspense fallback={<LoadingFallback />}>
          {activeTab === 'home' && <HomeTab onPlayGame={handlePlayGame} />}
          {activeTab === 'category' && <CategoryTab onPlayGame={handlePlayGame} />}
          {activeTab === 'downloads' && <DownloadsTab />}
          {activeTab === 'profile' && (
            <ProfileTab
              user={user}
              onLogin={() => setShowLogin(true)}
              onLogout={handleLogout}
            />
          )}
        </Suspense>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-around">
          <NavButton
            active={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
            icon="🏠"
            label="Home"
          />
          <NavButton
            active={activeTab === 'category'}
            onClick={() => setActiveTab('category')}
            icon="🎮"
            label="Categories"
          />
          <NavButton
            active={activeTab === 'downloads'}
            onClick={() => setActiveTab('downloads')}
            icon="⬇️"
            label="Downloads"
          />
          <NavButton
            active={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
            icon={user ? user.avatar : '👤'}
            label="Me"
          />
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <Suspense fallback={<LoadingFallback />}>
          <LoginModal
            onClose={() => setShowLogin(false)}
            onLogin={handleLogin}
          />
        </Suspense>
      )}
    </div>
  );
};

const NavButton: React.FC<{
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
      active ? 'text-primary' : 'text-muted hover:text-gray-900'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

export default App;