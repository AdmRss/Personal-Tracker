'use client';

import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import NutritionPage from './NutritionPage';
import GymPage from './GymPage';
import ProfilePage from './ProfilePage';
import TabBar from './TabBar';

function formatTime(): string {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  return `${h}:${m}`;
}

export default function IPhone() {
  const { isLoggedIn, activePage } = useApp();
  const [currentTime, setCurrentTime] = useState(formatTime());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(formatTime());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const showPage = isLoggedIn ? activePage : 'page-login';

  return (
    <div className="iphone">
      <div className="dynamic-island">
        <div className="di-camera"></div>
      </div>

      <div className="status-bar">
        <span className="time" id="liveTimeStatus">
          {currentTime}
        </span>
        <div className="status-icons">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
            <rect x="0" y="3" width="3" height="9" rx="1" opacity="0.3" />
            <rect x="4.5" y="2" width="3" height="10" rx="1" opacity="0.5" />
            <rect x="9" y="0" width="3" height="12" rx="1" opacity="0.75" />
            <rect x="13.5" y="0" width="3" height="12" rx="1" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <path
              d="M8 2C10.5 2 12.7 3 14.3 4.7L15.5 3.5C13.5 1.3 10.9 0 8 0S2.5 1.3.5 3.5L1.7 4.7C3.3 3 5.5 2 8 2Z"
              opacity="0.5"
            />
            <path
              d="M8 5C9.7 5 11.2 5.7 12.3 6.8L13.5 5.6C12 4.1 10.1 3.2 8 3.2S4 4.1 2.5 5.6L3.7 6.8C4.8 5.7 6.3 5 8 5Z"
              opacity="0.75"
            />
            <circle cx="8" cy="10" r="2" />
          </svg>
          <div className="battery">
            <div className="battery-body">
              <div className="battery-fill" style={{ width: '82%' }}></div>
            </div>
            <div className="battery-tip"></div>
          </div>
        </div>
      </div>

      <div className="screen-wrap">
        {!isLoggedIn && <LoginPage />}
        {isLoggedIn && showPage === 'page-home' && <HomePage />}
        {isLoggedIn && showPage === 'page-nutrition' && <NutritionPage />}
        {isLoggedIn && showPage === 'page-gym' && <GymPage />}
        {isLoggedIn && showPage === 'page-profile' && <ProfilePage />}
      </div>

      <TabBar />
    </div>
  );
}
