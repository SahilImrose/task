import React from 'react'
import './App.css';
import LeftComponent from './components/LeftComponent/LeftComponent';
import MiddleComponent from './components/MiddleComponent/MiddleComponent';
import Sidebar from './components/SideBar/Sidebar';
import Topbar from './components/TopBar/Topbar';

export default function App() {
  return (
    <div>
      <Sidebar />
      <LeftComponent/>
      <MiddleComponent/>
      <Topbar />
    </div>
  )
}
