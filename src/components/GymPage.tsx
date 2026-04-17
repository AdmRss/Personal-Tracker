'use client';

import { useState, useEffect, useRef } from 'react';
import { pushExercises, Exercise } from '@/data/schedule';

const weekDays = [
  { day: 'Sen', label: 'Push', active: true },
  { day: 'Sel', label: 'Pull', active: false },
  { day: 'Rab', label: 'Legs', active: false },
  { day: 'Kam', label: 'Rest', rest: true, active: false },
  { day: 'Jum', label: 'Upper', active: false },
  { day: 'Sab', label: 'Lower', active: false },
  { day: 'Min', label: 'Rest', rest: true, active: false },
];

export default function GymPage() {
  const [exercises, setExercises] = useState<Exercise[]>(pushExercises);
  const [timerVal, setTimerVal] = useState(90);
  const [remaining, setRemaining] = useState(90);
  const [timerRunning, setTimerRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const toggleExercise = (index: number) => {
    const newExercises = [...exercises];
    newExercises[index].done = !newExercises[index].done;
    setExercises(newExercises);
  };

  const setTimer = (val: number) => {
    setTimerVal(val);
    setRemaining(val);
    setTimerRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const toggleTimer = () => {
    if (timerRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setTimerRunning(false);
    } else {
      if (remaining <= 0) {
        setRemaining(timerVal);
      }
      setTimerRunning(true);
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            setTimerRunning(false);
            return timerVal;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const today = new Date().getDay();

  const getDayType = (index: number) => {
    const types = ['Push', 'Pull', 'Legs', 'Rest', 'Upper', 'Lower', 'Rest'];
    return types[index];
  };

  return (
    <div className="page active" id="page-gym">
      <div className="page-header">
        <h2>Program Gym</h2>
        <span className="page-date">PPL-R-UL</span>
      </div>

      <div className="week-strip">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={`day-pill ${day.rest ? 'rest' : ''} ${index === (today + 6) % 7 ? 'active' : ''}`}
          >
            {day.day}
            <br />
            <small>{day.label}</small>
          </div>
        ))}
      </div>

      <div className="section-title">Latihan Hari Ini – {getDayType((today + 6) % 7)}</div>
      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className={`exercise-card ${exercise.done ? 'done' : ''}`}
            onClick={() => toggleExercise(index)}
          >
            <div className="ex-left">
              <div className="ex-icon">{exercise.icon}</div>
              <div>
                <p className="ex-name">{exercise.name}</p>
                <p className="ex-detail">{exercise.detail}</p>
              </div>
            </div>
            <div
              className={`ex-check ${exercise.done ? 'checked' : ''}`}
              aria-label="selesai"
            >
              {exercise.done ? '✓' : ''}
            </div>
          </div>
        ))}
      </div>

      <div className="section-title" style={{ marginTop: '20px' }}>
        Rest Timer
      </div>
      <div className="timer-card">
        <div className="timer-display" id="timerDisplay">
          {formatTime(remaining)}
        </div>
        <div className="timer-controls">
          {[60, 90, 120].map((val) => (
            <button
              key={val}
              className={`timer-btn ${timerVal === val ? 'active-timer' : ''}`}
              onClick={() => setTimer(val)}
            >
              {val}s
            </button>
          ))}
        </div>
        <button
          className="start-timer-btn"
          id="startTimerBtn"
          onClick={toggleTimer}
        >
          {timerRunning ? 'Pause' : remaining < timerVal && !timerRunning ? 'Lanjut' : 'Mulai'}
        </button>
      </div>
    </div>
  );
}
