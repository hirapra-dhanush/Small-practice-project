import React, { useEffect, useState } from 'react';

function DigitalClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
      <h1 className='uppercase text-5xl text-center mb-5'>Digital Clock</h1>
      <p className='text-6xl text-center mb-5'>
        <span>{date.getHours().toString().padStart(2, '0')}</span>:
        <span>{date.getMinutes().toString().padStart(2, '0')}</span>:
        <span>{date.getSeconds().toString().padStart(2, '0')}</span>
      </p>
      <div className='text-2xl text-center'>
        {date.toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </div>
  );
}

export default DigitalClock;
