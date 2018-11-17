import Header from './Header';
import React from 'react';
import AttendanceList from './AttendanceList';


const Attendance = () => {
  return (
    <div className = "container">
      <Header />
      <AttendanceList />
    </div>
  );
};


export default Attendance;
