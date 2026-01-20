import React from 'react';

function Calendar({ prayers }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Today's Prayers</h3>
      {prayers.map((p, i) => (
        <p key={i}>
          {p.name}: {p.done ? '✅' : '❌'} | Khushu: {p.khushu}
        </p>
      ))}
    </div>
  );
}

export default Calendar;
