import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to={'/pagination'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Pagination
                </Link>
                <Link
                  to={'/DigitalClock'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  DigitalClock
                </Link>
                <Link
                  to={'/Stopwatch'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Stopwatch
                </Link>
                <Link
                  to={'/Filter-product'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Filter-product
                </Link>
                <Link
                  to={'/QNA'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  QNA
                </Link>
                <Link
                  to={'/Short_Data'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Short_Data
                </Link>
                <Link
                  to={'/ToDoList'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  ToDoList
                </Link>
                <Link
                  to={'/Weather_App'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Weather_App
                </Link>
                <Link
                  to={'/Movie_App'}
                  className='text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Movie_App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
