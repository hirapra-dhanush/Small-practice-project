import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './nav/Nav';

function Common() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Common;
