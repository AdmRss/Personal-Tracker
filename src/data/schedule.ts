export interface ScheduleItem {
  start: string;
  end: string;
  icon: string;
  name: string;
  timeText: string;
  gymClass?: string;
  tag?: string;
}

export const weeklySchedule: Record<number, ScheduleItem[]> = {
  1: [
    { start: '07:00', end: '07:30', icon: '🍚', name: 'Sarapan Warteg', timeText: '07:00' },
    { start: '09:40', end: '12:10', icon: '📚', name: 'Kuliah PBO', timeText: '09:40 – 12:10' },
    { start: '12:15', end: '12:30', icon: '🥤', name: 'Evomass #1 (2 Scoop)', timeText: '12:15' },
    { start: '13:00', end: '15:30', icon: '📚', name: 'Kuliah Grafik & Interaktif', timeText: '13:00 – 15:30' },
    { start: '15:45', end: '16:15', icon: '🍚', name: 'Makan Siang Warteg', timeText: '15:45' },
    { start: '17:30', end: '17:45', icon: '🥤', name: 'Evomass #2 (2 Scoop)', timeText: '17:30' },
    { start: '19:00', end: '20:00', icon: '🏋️', name: 'GYM – Push Day', timeText: '19:00 – 20:00', gymClass: 'gym', tag: 'Push' },
    { start: '20:10', end: '20:25', icon: '🥤', name: 'Evomass #3 (Post-Gym)', timeText: '20:10' },
    { start: '20:30', end: '21:00', icon: '🍚', name: 'Makan Malam Warteg', timeText: '20:30' }
  ],
  2: [
    { start: '07:00', end: '07:30', icon: '🍚', name: 'Sarapan Warteg', timeText: '07:00' },
    { start: '09:40', end: '12:10', icon: '📚', name: 'Kuliah MBD', timeText: '09:40 – 12:10' },
    { start: '12:15', end: '12:30', icon: '🥤', name: 'Evomass #1 (2 Scoop)', timeText: '12:15' },
    { start: '13:00', end: '13:30', icon: '🍚', name: 'Makan Siang Warteg', timeText: '13:00' },
    { start: '15:30', end: '15:45', icon: '🥤', name: 'Evomass #2 (2 Scoop)', timeText: '15:30' },
    { start: '19:00', end: '20:00', icon: '🏋️', name: 'GYM – Pull Day', timeText: '19:00 – 20:00', gymClass: 'gym', tag: 'Pull' },
    { start: '20:10', end: '20:25', icon: '🥤', name: 'Evomass #3 (Post-Gym)', timeText: '20:10' },
    { start: '20:30', end: '21:00', icon: '🍚', name: 'Makan Malam Warteg', timeText: '20:30' }
  ],
  3: [
    { start: '07:00', end: '07:30', icon: '🍚', name: 'Sarapan Warteg', timeText: '07:00' },
    { start: '09:40', end: '12:10', icon: '📚', name: 'Kuliah AI', timeText: '09:40 – 12:10' },
    { start: '12:15', end: '12:30', icon: '🥤', name: 'Evomass #1 (2 Scoop)', timeText: '12:15' },
    { start: '13:00', end: '13:30', icon: '🍚', name: 'Makan Siang Warteg', timeText: '13:00' },
    { start: '15:30', end: '15:45', icon: '🥤', name: 'Evomass #2 (2 Scoop)', timeText: '15:30' },
    { start: '19:00', end: '20:00', icon: '🏋️', name: 'GYM – Leg Day', timeText: '19:00 – 20:00', gymClass: 'gym', tag: 'Legs' },
    { start: '20:10', end: '20:25', icon: '🥤', name: 'Evomass #3 (Post-Gym)', timeText: '20:10' },
    { start: '20:30', end: '21:00', icon: '🍚', name: 'Makan Malam Warteg', timeText: '20:30' }
  ],
  4: [
    { start: '07:00', end: '07:30', icon: '🍚', name: 'Sarapan Warteg', timeText: '07:00' },
    { start: '09:00', end: '09:15', icon: '🥤', name: 'Evomass #1 (2 Scoop)', timeText: '09:00' },
    { start: '12:00', end: '12:30', icon: '🍚', name: 'Makan Siang Warteg', timeText: '12:00' },
    { start: '13:00', end: '13:15', icon: '🥤', name: 'Evomass #2 (2 Scoop)', timeText: '13:00' },
    { start: '15:40', end: '18:10', icon: '📚', name: 'Kuliah KJI', timeText: '15:40 – 18:10' },
    { start: '18:30', end: '19:00', icon: '🍚', name: 'Makan Malam Warteg', timeText: '18:30' },
    { start: '20:00', end: '20:15', icon: '🥤', name: 'Evomass #3 (2 Scoop)', timeText: '20:00' }
  ],
  5: [
    { start: '07:00', end: '07:30', icon: '🍚', name: 'Sarapan Warteg', timeText: '07:00' },
    { start: '09:40', end: '12:10', icon: '📚', name: 'Kuliah IMK', timeText: '09:40 – 12:10' },
    { start: '12:15', end: '12:30', icon: '🥤', name: 'Evomass #1 (2 Scoop)', timeText: '12:15' },
    { start: '13:00', end: '15:30', icon: '📚', name: 'Kuliah Jaringan Komputer', timeText: '13:00 – 15:30' },
    { start: '15:35', end: '15:55', icon: '🍚', name: 'Makan Siang Warteg', timeText: '15:35' },
    { start: '15:40', end: '18:10', icon: '📚', name: 'Kuliah ASA', timeText: '15:40 – 18:10' },
    { start: '18:15', end: '18:30', icon: '🥤', name: 'Evomass #2 (Sblm Gym)', timeText: '18:15' },
    { start: '19:00', end: '20:00', icon: '🏋️', name: 'GYM – Upper Day', timeText: '19:00 – 20:00', gymClass: 'gym', tag: 'Upper' },
    { start: '20:10', end: '20:25', icon: '🥤', name: 'Evomass #3 (Post-Gym)', timeText: '20:10' },
    { start: '20:30', end: '21:00', icon: '🍚', name: 'Makan Malam Warteg', timeText: '20:30' }
  ],
  6: [
    { start: '08:00', end: '08:30', icon: '🍚', name: 'Sarapan Warteg', timeText: '08:00' },
    { start: '10:00', end: '10:15', icon: '🥤', name: 'Evomass #1 (2 Scoop)', timeText: '10:00' },
    { start: '13:00', end: '13:30', icon: '🍚', name: 'Makan Siang Warteg', timeText: '13:00' },
    { start: '15:00', end: '15:15', icon: '🥤', name: 'Evomass #2 (2 Scoop)', timeText: '15:00' },
    { start: '19:00', end: '20:00', icon: '🏋️', name: 'GYM – Lower Day', timeText: '19:00 – 20:00', gymClass: 'gym', tag: 'Lower' },
    { start: '20:10', end: '20:25', icon: '🥤', name: 'Evomass #3 (Post-Gym)', timeText: '20:10' },
    { start: '20:30', end: '21:00', icon: '🍚', name: 'Makan Malam Warteg', timeText: '20:30' }
  ],
  0: [
    { start: '08:00', end: '08:30', icon: '🍚', name: 'Sarapan Warteg', timeText: '08:00' },
    { start: '10:00', end: '10:15', icon: '🥤', name: 'Evomass #1 (2 Scoop)', timeText: '10:00' },
    { start: '13:00', end: '13:30', icon: '🍚', name: 'Makan Siang Warteg', timeText: '13:00' },
    { start: '15:00', end: '15:15', icon: '🥤', name: 'Evomass #2 (2 Scoop)', timeText: '15:00' },
    { start: '18:30', end: '19:00', icon: '🍚', name: 'Makan Malam Warteg', timeText: '18:30' },
    { start: '20:00', end: '20:15', icon: '🥤', name: 'Evomass #3 (2 Scoop)', timeText: '20:00' }
  ]
};

export interface Exercise {
  name: string;
  detail: string;
  icon: string;
  done: boolean;
}

export const pushExercises: Exercise[] = [
  { name: 'Bench Press', detail: '4 set × 8-10 reps · 60kg', icon: '🏋️', done: false },
  { name: 'Overhead Press', detail: '4 set × 8-10 reps · 40kg', icon: '💪', done: true },
  { name: 'Incline Dumbbell', detail: '3 set × 10-12 reps · 24kg', icon: '🔄', done: false },
  { name: 'Tricep Pushdown', detail: '3 set × 12-15 reps · Cable', icon: '📐', done: false },
  { name: 'Lateral Raise', detail: '3 set × 12-15 reps · 10kg', icon: '🤸', done: false }
];

export interface MealEntry {
  emoji: string;
  name: string;
  desc: string;
  cal: number;
  pending?: boolean;
}

export const mealLog: MealEntry[] = [
  { emoji: '🍚', name: 'Sarapan Warteg', desc: 'Nasi + Ayam + Telur', cal: 600 },
  { emoji: '🥤', name: 'Evomass #1', desc: '2 Scoop Vanilla', cal: 300 },
  { emoji: '🍚', name: 'Makan Siang Warteg', desc: 'Nasi + Lauk Pilihan', cal: 650 },
  { emoji: '🥤', name: 'Evomass #2', desc: '2 Scoop Vanilla', cal: 300 },
  { emoji: '🍚', name: 'Makan Malam', desc: 'Belum dicatat', cal: 0, pending: true }
];