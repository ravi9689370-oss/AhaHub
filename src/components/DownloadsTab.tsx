import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from '../config';

interface DownloadedApp {
  id: string;
  title: string;
  type: 'web' | 'pwa' | 'game';
  lastUsed: string;
  size: string;
  installed: boolean;
}

interface DownloadsTabProps {}

const DOWNLOADED_APPS: DownloadedApp[] = [
  { id: 'snake', title: 'Snake Classic', type: 'game', lastUsed: '2h ago', size: '1.2 MB', installed: true },
  { id: 'tetris', title: 'Tetris Pro', type: 'game', lastUsed: '1d ago', size: '2.1 MB', installed: true },
  { id: 'whatsapp', title: 'WhatsApp (PWA)', type: 'pwa', lastUsed: '5m ago', size: 'Cached', installed: true },
  { id: 'instagram', title: 'Instagram (PWA)', type: 'pwa', lastUsed: '30m ago', size: 'Cached', installed: true },
  { id: 'facebook', title: 'Facebook (Web App)', type: 'web', lastUsed: 'Today', size: 'Instant', installed: true },
  { id: '2048', title: '2048 Game', type: 'game', lastUsed: 'Never', size: '0.8 MB', installed: false },
];

const DownloadsTab: React.FC<DownloadsTabProps> = () => {
  const [apps, setApps] = useState<DownloadedApp[]>([]);
  const [showCache, setShowCache] = useState(true);

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('ahahub_downloads');
    if (saved) {
      try {
        setApps(JSON.parse(saved));
      } catch (e) {
        setApps(DOWNLOADED_APPS);
      }
    } else {
      setApps(DOWNLOADED_APPS);
    }
  }, []);

  const installedApps = apps.filter(a => a.installed);
  const cachedApps = apps.filter(a => a.type === 'pwa' && a.installed);

  return (
    <div className="space-y-6 tab-content">
      {/* Installed Apps */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-display font-bold">Installed Apps</h2>
          <span className="text-sm text-muted">{installedApps.length} installed</span>
        </div>
        <div className="space-y-3">
          {installedApps.map((app) => (
            <AppItem key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* Offline Games Cache */}
      {showCache && (
        <section>
          <h2 className="text-xl font-display font-bold mb-4">Offline Game Cache</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cachedApps.map((app) => (
              <CachedGameCard key={app.id} app={app} />
            ))}
          </div>
        </section>
      )}

      {/* Desktop Shortcuts */}
      <section>
        <h2 className="text-xl font-display font-bold mb-4">Desktop Shortcuts</h2>
        <p className="text-sm text-muted mb-3">Add favorites to your home screen</p>
        <div className="flex flex-wrap gap-2">
          <ShortcutBadge label="WhatsApp" />
          <ShortcutBadge label="Instagram" />
          <ShortcutBadge label="Games Hub" />
        </div>
      </section>

      {/* Empty State */}
      {installedApps.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="font-bold text-lg mb-2">No apps installed yet</h3>
          <p className="text-muted mb-4">Download apps from the Category tab to use them here</p>
          <button
            onClick={() => window.location.hash = '#category'}
            className="btn-primary"
          >
            Browse Apps
          </button>
        </div>
      )}
    </div>
  );
};

const AppItem: React.FC<{ app: DownloadedApp }> = ({ app }) => (
  <div className="card p-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl">
        {app.type === 'game' ? '🎮' : app.type === 'pwa' ? '💾' : '🌐'}
      </div>
      <div>
        <h3 className="font-bold">{app.title}</h3>
        <p className="text-xs text-muted">{app.type === 'game' ? 'Game' : app.type === 'pwa' ? 'PWA' : 'Web App'} • {app.lastUsed}</p>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted bg-gray-100 px-2 py-1 rounded">{app.size}</span>
      <button className="px-3 py-1.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-secondary transition">
        {app.installed ? 'Open' : 'Install'}
      </button>
    </div>
  </div>
);

const CachedGameCard: React.FC<{ app: DownloadedApp }> = ({ app }) => (
  <button className="card p-3 flex flex-col items-center text-center hover:scale-105 transition-transform">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl mb-2">
      🎮
    </div>
    <h3 className="font-bold text-sm truncate w-full mb-1">{app.title}</h3>
    <span className="text-xs text-muted">{app.lastUsed}</span>
  </button>
);

const ShortcutBadge: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-primary transition">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <span className="block text-xs text-muted">Add</span>
  </button>
);

export default DownloadsTab;