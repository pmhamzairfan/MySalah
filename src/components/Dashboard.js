import React, { useState } from 'react';
import PrayerCard from './PrayerCard';
import Calendar from './Calendar';

const defaultPrayers = [
  { name: 'Fajr', done: false, khushu: 3 },
  { name: 'Dhuhr', done: false, khushu: 3 },
  { name: 'Asr', done: false, khushu: 3 },
  { name: 'Maghrib', done: false, khushu: 3 },
  { name: 'Isha', done: false, khushu: 3 },
];

function Dashboard() {
  const [prayers, setPrayers] = useState(defaultPrayers);

  const toggleDone = (index) => {
    const newPrayers = [...prayers];
    newPrayers[index].done = !newPrayers[index].done;
    setPrayers(newPrayers);
  };

  const setKhushu = (index, value) => {
    const newPrayers = [...prayers];
    newPrayers[index].khushu = value;
    setPrayers(newPrayers);
  };

  const completed = prayers.filter(p => p.done).length;
  const percent = Math.round((completed / prayers.length) * 100);

  return (
    <div className="container">
      <h2>MySalah Dashboard</h2>
      <p>Today's Completion: {percent}%</p>
      {prayers.map((p, i) => (
        <PrayerCard
          key={i}
          prayer={p}
          toggleDone={() => toggleDone(i)}
          setKhushu={(val) => setKhushu(i, val)}
        />
      ))}
      <Calendar prayers={prayers} />
    </div>
  );
}

export default Dashboard;
