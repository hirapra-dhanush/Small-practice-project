import React, { useState } from 'react';
import Count from './Count';

function Stopwatch() {
  return (
    <div>
      <h1 className='uppercase'><Count/></h1>
    </div>
  );
}

export default Stopwatch;
