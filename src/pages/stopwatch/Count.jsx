import React, { useEffect, useState, useRef } from 'react';

function Count() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else if (!running && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  function start() {
    setRunning(true);
  }

  function stopt() {
    setRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setRunning(false);
  }

  const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, '0');
  const seconds = String(elapsedTime % 60).padStart(2, '0');

  return (
    <>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex flex-col justify-center items-center'>
        <div className='bg-gray-900 text-white p-6 rounded-lg shadow-lg mb-4'>
          <span className='text-5xl font-mono'>{minutes}:</span>
          <span className='text-5xl font-mono'>{seconds}</span>
        </div>
        <div className='flex space-x-4'>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg'
            onClick={stopt}>
            Stop
          </button>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg'
            onClick={start}>
            Start
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg'
            onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Count;
