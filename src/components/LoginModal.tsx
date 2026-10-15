import React, { useState } from 'react';
import { APP_CONFIG } from '../config';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (userData: { name: string; handle: string; avatar: string; coins: number }) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
  const [step, setStep] = useState<'signup' | 'login'>('signup');
  const [form, setForm] = useState({
    name: '',
    handle: '',
    avatar: '👤',
    coins: 0,
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      name: form.name,
      handle: form.handle || `@${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      avatar: form.avatar,
      coins: step === 'signup' ? 500 : 100,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-zxl z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-neo-lg transform scale-100 transition-all duration-300">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-display font-bold text-gray-900">
            {step === 'signup' ? 'Sign Up' : 'Log In'}
          </h2>
          <button
            onClick={() => setStep(step === 'signup' ? 'login' : 'signup')}
            className="text-sm text-gray-500 hover:text-gray-700 transition"
          >
            {step === 'signup' ? 'Already have an account?' : 'Create account?'}
          </button>
        </div>

        {/* Name Field - always visible */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Your name"
            required
          />
        </div>

        {/* Conditional fields based on step */}
        {step === 'signup' ? (
          <>
            {/* Handle */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Handle (@ChallengerRanged4)
              </label>
              <input
                type="text"
                name="handle"
                value={form.handle}
                onChange={handleChange}
                className="input-field"
                placeholder="ChallengerRanged4"
                required
              />
            </div>

            {/* Avatar */}
            <div className="mb-4 flex gap-3">
              <label className="flex-1 flex items-center justify-center py-3 px-4 border rounded-xl border-gray-300 cursor-pointer hover:border-primary transition">
                <span className="text-3xl font-bold" style={{ color: form.avatar === '👤' ? '#FF6B00' : '#6C757D' }}>
                  {form.avatar}
                </span>
              </label>
              <button
                onClick={() => setForm({ ...form, avatar: '💪' })} className="px-3 py-1 rounded bg-primary text-white text-sm font-medium">💪
              <button
                onClick={() => setForm({ ...form, avatar: '🎮' })} className="px-3 py-1 rounded bg-secondary text-white text-sm font-medium">🎮
              <button
                onClick={() => setForm({ ...form, avatar: '💰' })} className="px-3 py-1 rounded bg-success text-white text-sm font-medium">💰
              <button
                onClick={() => setForm({ ...form, avatar: '🚀' })} className="px-3 py-1 rounded bg-warning text-black text-sm font-medium">🚀
              </button>
            </div>

            {/* Coins on signup */}
            <div className="mb-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-muted mb-2">
                Welcome! You'll start with 🪙 500 AHA Coins
              </p>
              <p className="text-xs text-error">Coins can be earned by playing games and referring friends</p>
            </div>
          </>
        ) : (
          <>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input-field"
                placeholder="challenger@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-muted mb-2">
                Or continue with social login
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => onLogin({
                    name: form.name,
                    handle: form.handle || `@User${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
                    avatar: form.avatar,
                    coins: 100,
                  })}
                  className="flex-1 btn-secondary py-2 rounded text-sm font-medium"
                >
                  Google
                </button>
                <button
                  onClick={() => onLogin({
                    name: form.name,
                    handle: form.handle || `@User${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
                    avatar: form.avatar,
                    coins: 100,
                  })}
                  className="flex-1 btn-primary py-2 rounded text-sm font-medium"
                >
                  Apple
                </button>
              </div>
            </div>
          </>
        )}

        {/* Submit Button */}
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            className="w-full btn-primary py-3 rounded-xl font-medium text-lg hover:bg-secondary transition-all duration-200"
            disabled={!form.name || (step === 'signup' && (!form.handle || form.coins < 100))}
          >
            {step === 'signup' ? 'Create Account' : 'Sign In'}
          </button>
        </div>

        {/* Loading state */}
        {form.name && <p className="mt-3 text-center text-sm text-muted">Processing...</p>}
      </div>
    </div>
  );
};

export default LoginModal;