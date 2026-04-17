'use client';

import { useState } from 'react';
import { useApp } from '@/context/AppContext';

export default function LoginPage() {
  const { setUserName, setIsLoggedIn } = useApp();
  const [inputValue, setInputValue] = useState('');

  const handleLogin = () => {
    const name = inputValue.trim() || 'Adam';
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="page active" id="page-login">
      <div className="login-screen">
        <div className="login-card">
          <div className="login-icon">💪</div>
          <h2 className="login-title">Selamat Datang</h2>
          <p className="login-subtitle">Masukkin Nama Lo</p>
          <input
            type="text"
            id="userNameInput"
            className="login-input"
            placeholder="(Contoh: Adam Ganteng)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="login-submit-btn" onClick={handleLogin}>
            Mulai Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}