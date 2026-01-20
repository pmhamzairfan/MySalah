import React from 'react';

function PrayerCard({ prayer, toggleDone, setKhushu }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <h3>{prayer.name}</h3>
      <button onClick={toggleDone}>{prayer.done ? 'Mark Missed' : 'Mark Done'}</button>
      <div>
        <label>Khushu: </label>
        <select value={prayer.khushu} onChange={(e) => setKhushu(Number(e.target.value))}>
          {[1,2,3,4,5].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default PrayerCard;
