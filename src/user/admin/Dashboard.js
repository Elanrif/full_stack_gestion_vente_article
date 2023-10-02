import React from 'react';
import { Outlet } from 'react-router-dom';
import Manager from './Manager';
import Sidebar from './SideBar';

function Dashboard() {
  return (
    <div className="flex space-x-3 bg-slate-50">
      <div className='w-1/6'>
        <Sidebar />
      </div>
      <div className="w-5/6 px-[4rem] mx-auto min-h-[88vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard
