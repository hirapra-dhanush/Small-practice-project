import React, { useState } from 'react';

let employeeNames = [
  'Michael Johnson',
  'Yara Young',
  'Patricia Taylor',
  'Karen King',
  'David Doe',
  'William Thomas',
  'Wendy White',
  'John Smith',
  'Frank Foster',
  'Christopher Harris',
  'Susan Lee',
  'Jack Johnson',
  'Paul Parker',
  'Nancy Young',
  'Louis Lewis',
  'Jennifer Lewis',
  'David Martinez',
  'James Wilson',
  'Queen Quill',
  'Oscar Owens',
  'Eva Edwards',
  'Matthew Clark',
  'Catherine Clark',
  'Joseph Walker',
  'Linda Brown',
  'Robert Moore',
  'Henry Harris',
  'Ivy Ingram',
  'Barbara Jackson',
  'Emily Davis',
  'Robert Richards',
  'Alice Adams',
  'Victor Vance',
  'Sarah Smith',
  'Karen King',
  'Tom Taylor',
  'Daniel Allen',
  'Jane Doe',
  'Grace Green',
  'Bob Brown',
  'Mary Martinez',
  'Zoe Zimmerman',
  'Mary Anderson',
  'Nina Nelson',
  'Uma Underwood',
];

function Short_Data() {
  const [change, setchange] = useState(employeeNames);

  function handelchange(event) {
    if (event.target.value === 'a-z') {
      setchange([...employeeNames].sort());
    }
    if (event.target.value === 'z-a') {
      setchange([...employeeNames].sort().reverse());
    }
    if (event.target.value === 'all') {
      setchange(employeeNames);
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6'>
      <div className='bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 rounded-2xl p-8 w-full max-w-5xl'>
        <div className='flex justify-center mb-6'>
          <select
            onChange={handelchange}
            className='font-[Open_Sans] text-lg text-gray-900 bg-white/80 p-3 border border-gray-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:bg-white'>
            <option value='all'>🔄 All</option>
            <option value='a-z'>🔼 A-Z Sort</option>
            <option value='z-a'>🔽 Z-A Sort</option>
          </select>
        </div>

        <h1 className='text-3xl font-extrabold text-white text-center mb-8 drop-shadow-lg'>
          Employee List
        </h1>

        <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          {change.map((val, index) => (
            <div
              key={index}
              className='relative group cursor-pointer bg-white/20 backdrop-blur-md border border-white/30 text-white text-center py-4 px-6 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:border-white/50'>
              <span className='absolute inset-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg'></span>
              <span className='relative z-10'>{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Short_Data;
