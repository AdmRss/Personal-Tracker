'use client';

import { useApp } from '@/context/AppContext';

const tabs = [
  { id: 'page-home', label: 'Beranda', icon: 'home' },
  { id: 'page-nutrition', label: 'Nutrisi', icon: 'nutrition' },
  { id: 'page-gym', label: 'Gym', icon: 'gym' },
  { id: 'page-profile', label: 'Profil', icon: 'profile' },
];

export default function TabBar() {
  const { activePage, setActivePage } = useApp();

  return (
    <>
      <div className={`tab-bar ${activePage === 'page-login' ? 'hidden' : ''}`} id="mainTabBar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activePage === tab.id ? 'active' : ''}`}
            onClick={() => setActivePage(tab.id)}
          >
            {tab.id === 'page-home' && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
              </svg>
            )}
            {tab.id === 'page-nutrition' && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8h1a4 4 0 010 8h-1" />
                <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            )}
            {tab.id === 'page-gym' && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6.5 6.5h11M6.5 17.5h11M3 10h18M3 14h18" />
              </svg>
            )}
            {tab.id === 'page-profile' && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            )}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className={`home-indicator ${activePage === 'page-login' ? 'hidden' : ''}`} id="mainHomeIndicator"></div>
    </>
  );
}