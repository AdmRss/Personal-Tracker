'use client';

import { useState } from 'react';
import { mealLog, MealEntry } from '@/data/schedule';

export default function NutritionPage() {
  const [meals] = useState<MealEntry[]>(mealLog);
  const [scoopCount] = useState(4);

  const totalCalories = meals.reduce((acc, meal) => acc + meal.cal, 0);
  const targetCalories = 2700;
  const ringProgress = (totalCalories / targetCalories) * 314;
  const ringOffset = 314 - ringProgress;

  const protein = 135;
  const carbs = 280;
  const fat = 42;

  return (
    <div className="page active" id="page-nutrition">
      <div className="page-header">
        <h2>Nutrisi</h2>
        <span className="page-date">Hari ini</span>
      </div>

      <div className="calorie-ring-card">
        <div className="ring-wrapper">
          <svg viewBox="0 0 120 120" className="ring-svg">
            <circle cx="60" cy="60" r="50" className="ring-bg" />
            <circle
              cx="60"
              cy="60"
              r="50"
              className="ring-fill"
              strokeDasharray="314"
              strokeDashoffset={ringOffset}
            />
          </svg>
          <div className="ring-center">
            <span className="ring-num">{totalCalories}</span>
            <span className="ring-label">kcal</span>
            <span className="ring-sub">dari {targetCalories}</span>
          </div>
        </div>
        <div className="macro-row">
          <div className="macro-item">
            <div className="macro-bar-wrap">
              <div className="macro-bar protein" style={{ height: '70%' }}></div>
            </div>
            <span className="macro-val">{protein}g</span>
            <span className="macro-lbl">Protein</span>
          </div>
          <div className="macro-item">
            <div className="macro-bar-wrap">
              <div className="macro-bar carbs" style={{ height: '55%' }}></div>
            </div>
            <span className="macro-val">{carbs}g</span>
            <span className="macro-lbl">Karbo</span>
          </div>
          <div className="macro-item">
            <div className="macro-bar-wrap">
              <div className="macro-bar fat" style={{ height: '40%' }}></div>
            </div>
            <span className="macro-val">{fat}g</span>
            <span className="macro-lbl">Lemak</span>
          </div>
        </div>
      </div>

      <div className="section-title">Log Makan</div>
      <div className="meal-log">
        {meals.map((meal, index) => (
          <div key={index} className={`meal-entry ${meal.pending ? 'pending' : ''}`}>
            <div className="meal-left">
              <span className="meal-emoji">{meal.emoji}</span>
              <div>
                <p className="meal-name">{meal.name}</p>
                <p className="meal-desc">{meal.desc}</p>
              </div>
            </div>
            <span className={`meal-cal ${meal.pending ? 'pending-text' : ''}`}>
              {meal.pending ? '—' : meal.cal} kcal
            </span>
          </div>
        ))}
      </div>

      <div className="section-title" style={{ marginTop: '20px' }}>
        Evomass Tracker
      </div>
      <div className="evo-tracker">
        <div className="evo-label-row">
          <span>Progress Scoop Hari Ini</span>
          <span id="scoopCount">
            {scoopCount} / 6
          </span>
        </div>
        <div className="evo-bar-bg">
          <div
            className="evo-bar-fill"
            style={{ width: `${(scoopCount / 6) * 100}%` }}
          ></div>
        </div>
        <div className="evo-dots">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`evo-dot ${i < scoopCount ? 'filled' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
