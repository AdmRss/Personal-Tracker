'use client';

import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { weeklySchedule, ScheduleItem } from '@/data/schedule';

function getTodaySchedule(): ScheduleItem[] {
  const today = new Date().getDay();
  return weeklySchedule[today] || [];
}

function formatDate(): string {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return now.toLocaleDateString('id-ID', options);
}

export default function HomePage() {
  const { userName, userInitial } = useApp();
  const [currentTime, setCurrentTime] = useState('--:--:--');
  const [currentDate, setCurrentDate] = useState(formatDate());
  const [scheduleItems] = useState<ScheduleItem[]>(() => getTodaySchedule());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${h}:${m}:${s}`);
      setCurrentDate(formatDate());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getScheduleStatus = (item: ScheduleItem) => {
    const now = new Date();
    const currentTimeStr = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
    const start = item.start;
    const end = item.end;

    if (currentTimeStr > end) {
      return 'done';
    } else if (currentTimeStr >= start && currentTimeStr <= end) {
      return 'active-now';
    }
    return '';
  };

  return (
    <div className="page active" id="page-home">
      <div className="home-header">
        <div className="greeting-block">
          <p className="greeting-sub" id="currentDateDisplay">
            {currentDate}
          </p>
          <h1 className="greeting-title">
            Hai, <span className="user-display-name">{userName}</span> 👋
          </h1>
        </div>
        <button className="avatar-btn" aria-label="Profile">
          <div className="avatar user-initial">{userInitial}</div>
        </button>
      </div>

      <div className="summary-card">
        <div className="summary-top">
          <span className="summary-label">Program Bulking Data Adam</span>
          <span className="summary-badge">Letsgo🔥</span>
        </div>
        <div className="summary-stats">
          <div className="stat-item">
            <span className="stat-num">56.5</span>
            <span className="stat-unit">kg</span>
            <span className="stat-desc">Berat</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">2700</span>
            <span className="stat-unit">kcal</span>
            <span className="stat-desc">Target/hari</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">6</span>
            <span className="stat-unit">scoop</span>
            <span className="stat-desc">Evomass</span>
          </div>
        </div>
      </div>

      <div className="section-title">
        <span>Jadwal Hari Ini</span>
        <span
          id="liveClockDisplay"
          style={{ color: 'var(--blue)', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}
        >
          {currentTime}
        </span>
      </div>
      <div className="schedule-list" id="liveSchedule">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
            className={`schedule-item ${item.gymClass || ''} ${getScheduleStatus(item)}`}
          >
            <div className="sched-icon">{item.icon}</div>
            <div className="sched-info">
              <span className="sched-name">{item.name}</span>
              <span className="sched-time">{item.timeText}</span>
            </div>
            <div className="sched-check">✓</div>
            <div className="sched-dot-live"></div>
            {item.tag && <span className="gym-tag">{item.tag}</span>}
          </div>
        ))}
      </div>

      <div className="section-title" style={{ marginTop: '20px' }}>
        Tips Hari Ini
      </div>
      <div className="tip-card">
        <span className="tip-emoji">💡</span>
        <p className="tip-text">
          Tidur minimal 7–8 jam setiap malam. Itu bagian terpenting dari
          proses bulking untuk recovery otot!
        </p>
      </div>
    </div>
  );
}
