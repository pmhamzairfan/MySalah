import React from 'react';

function PrayerCard({ prayer, toggleDone, setKhushu }) {
  return (
    <div
      style={{
        margin: '10px 0',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff5e6'
      }}
    >
      <h3>{prayer.name}</h3>
      <label>
        Done:{' '}
        <input type="checkbox" checked={prayer.done} onChange={toggleDone} />
      </label>
      <br />
      <label>
        Khushu: 
        <input
          type="range"
          min="1"
          max="5"
          value={prayer.khushu}
          onChange={(e) => setKhushu(parseInt(e.target.value))}
        />{' '}
        {prayer.khushu}
      </label>
    </div>
  );
}

export default PrayerCard;
