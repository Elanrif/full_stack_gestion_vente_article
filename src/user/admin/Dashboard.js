import React from 'react';
import { Outlet } from 'react-router-dom';
import Manager from './Manager';
import Sidebar from './SideBar';

function Dashboard() {
  return (
    <div className="flex space-x-3 bg-slate-50">
      <Sidebar />
      <div className='ps-[20rem] max-w-6xl min-h-[100vh]'>
        <Outlet className="border border-pink-300"/>
      </div>
    </div>
  );
}

export default Dashboard
