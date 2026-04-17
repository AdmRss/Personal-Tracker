'use client';

import { useApp } from '@/context/AppContext';

export default function ProfilePage() {
  const { userName, userInitial } = useApp();

  return (
    <div className="page active" id="page-profile">
      <div className="profile-hero">
        <div className="profile-avatar-lg user-initial">{userInitial}</div>
        <h2 className="profile-name user-display-name">{userName}</h2>
        <p className="profile-tag">Ectomorph · Hardgainer 🔥</p>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="sb-val">167</span>
          <span className="sb-unit">cm</span>
          <span className="sb-lbl">Tinggi</span>
        </div>
        <div className="stat-box">
          <span className="sb-val">56.5</span>
          <span className="sb-unit">kg</span>
          <span className="sb-lbl">Berat</span>
        </div>
        <div className="stat-box">
          <span className="sb-val">20.3</span>
          <span className="sb-unit">BMI</span>
          <span className="sb-lbl">Indeks</span>
        </div>
        <div className="stat-box">
          <span className="sb-val">5</span>
          <span className="sb-unit">hari</span>
          <span className="sb-lbl">Gym/minggu</span>
        </div>
      </div>

      <div className="section-title">Suplemen</div>
      <div className="supp-card">
        <div className="supp-icon">💪</div>
        <div className="supp-info">
          <p className="supp-name">Evomass 900g – Vanilla</p>
          <p className="supp-desc">6 scoop/hari · Whey + Complex Carbs</p>
        </div>
        <span className="supp-badge">Aktif</span>
      </div>

      <div className="section-title" style={{ marginTop: '16px' }}>
        Target Bulking
      </div>
      <div className="target-card">
        <div className="target-row">
          <span className="target-lbl">Kalori Harian</span>
          <span className="target-val">2.700 kcal</span>
        </div>
        <div className="target-row">
          <span className="target-lbl">Protein Harian</span>
          <span className="target-val">140 – 160g</span>
        </div>
        <div className="target-row">
          <span className="target-lbl">Program Latihan</span>
          <span className="target-val">PPL-R-UL</span>
        </div>
        <div className="target-row">
          <span className="target-lbl">Jam Gym</span>
          <span className="target-val">19:00 – 20:00</span>
        </div>
      </div>
    </div>
  );
}
