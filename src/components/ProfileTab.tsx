import React, { useState } from 'react';
import { APP_CONFIG, type AdFreePass } from '../config';

interface ProfileTabProps {
  user: any;
  onLogin: () => void;
  onLogout: () => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ user, onLogin, onLogout }) => {
  const [showAdFreeStore, setShowAdFreeStore] = useState(false);

  if (!user) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-center tab-content">
        <div className="text-6xl mb-4">👤</div>
        <h2 className="text-2xl font-display font-bold mb-3">Not Logged In</h2>
        <p className="text-muted mb-6 max-w-md">Create an account to access your AHA Coins wallet, save progress, download games offline, and purchase Ad-Free Pass.</p>
        <button
          onClick={onLogin}
          className="btn-primary px-8 py-3"
        >
          Log In / Sign Up
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 tab-content">
      {/* User Profile Header */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl">
            {user.avatar}
          </div>
          <div>
            <h2 className="text-xl font-display font-bold">{user.name}</h2>
            <p className="text-muted">@{user.handle}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Tier: Standard</span>
              {user.adFreePass && (
                <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                  Ad-Free Pass • {user.adFreePass}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AHA Coins Balance */}
      <section>
        <h3 className="text-lg font-bold mb-3">Wallet Balance</h3>
        <div className="card p-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">Available Balance</p>
              <p className="text-2xl font-display font-bold text-primary">🪙 {user.coins.toLocaleString()}</p>
            </div>
            <div className="flex gap-2">
              <button className="btn-secondary text-sm px-4 py-2">Add Coins</button>
              <button className="btn-primary text-sm px-4 py-2">Withdraw</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad-Free Pass Store */}
      <section>
        <h3 className="text-lg font-bold mb-4">Ad-Free Pass (Premium)</h3>
        {user.adFreePass ? (
          <div className="card p-4 bg-success/10 border border-success/30">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-success">Ad-Free Active</h4>
              <span className="text-sm font-medium text-success">
                Until: {user.adFreePass === '12m' ? 'Dec 2026' :
                        user.adFreePass === '3m' ? 'May 2026' : 'Jan 2026'}
              </span>
            </div>
            <div className="flex gap-2">
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                {user.adFreePass === '1m' && '1 Month'}
                {user.adFreePass === '3m' && '3 Months'}
                {user.adFreePass === '12m' && '12 Months'}
              </div>
              <button className="text-sm text-error underline">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="grid gap-3">
            {APP_CONFIG.adFreePasses.map((plan) => (
              <AdFreeCard key={plan.id} plan={plan} user={user} />
            ))}
          </div>
        )}
      </section>

      {/* Best Scores & Rankings */}
      <section>
        <h3 className="text-lg font-bold mb-4">Best Scores</h3>
        <div className="space-y-3">
          <ScoreRow game="Snake Classic" score={1250} rank="#42" />
          <ScoreRow game="Tetris Pro" score={45000} rank="#8" />
          <ScoreRow game="2048" score={1024} rank="#15" />
          <ScoreRow game="Flappy Bird" score={87} rank="#23" />
        </div>
      </section>

      {/* Account Actions */}
      <section>
        <h3 className="text-lg font-bold mb-3">Account</h3>
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            🏆 Achievements
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            📊 Game Statistics
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            🎯 Tournament History
          </button>
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-3 rounded-xl bg-error/10 text-error hover:bg-error/20 transition"
          >
            🚪 Log Out
          </button>
        </div>
      </section>
    </div>
  );
};

const AdFreeCard: React.FC<{ plan: AdFreePass; user: any }> = ({ plan, user }) => {
  const isPopular = plan.popular;
  const canAfford = user.coins >= plan.price;

  return (
    <div className={`relative card p-4 hover:shadow-lg transition ${isPopular ? 'ring-2 ring-primary' : ''}`}
         style={{ borderLeft: `4px solid ${plan.color}` }}>
      {isPopular && (
        <span className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-white text-xs rounded-full font-bold">
          POPULAR
        </span>
      )}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-bold text-lg mb-1">{plan.label}</h4>
          <p className="text-xs text-muted">Get full access, no ads</p>
        </div>
        <div className="text-right">
          {canAfford ? (
            <button className="btn-primary text-sm px-4 py-2" onClick={() => alert('Purchase initiated!')}>Buy Now</button>
          ) : (
            <div>
              <p className="font-bold text-lg">₹{plan.price}</p>
              <p className="text-xs text-error">Need {plan.coins - user.coins} more coins</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-muted line-through">₹{plan.originalPrice}</div>
        <div className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
          Save {((plan.originalPrice - plan.price) / plan.originalPrice * 100).toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

const ScoreRow: React.FC<{ game: string; score: number; rank: string }> = ({ game, score, rank }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
    <div className="flex items-center gap-3">
      <span className="text-muted font-bold w-6">#{rank.split('#')[1]}</span>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-sm">
        🎮
      </div>
      <span className="font-medium">{game}</span>
    </div>
    <div className="text-right">
      <span className="font-bold text-primary">{score.toLocaleString()}</span>
    </div>
  </div>
);

export default ProfileTab;