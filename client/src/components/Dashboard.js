import React from 'react';


const Dashboard = () => {
  return (
    <div style={{width: '50%', marginLeft:'30%', maginRight:'auto'}} >
      <div style={{width:'50%', float:'left'}}>
      <a class="waves-effect waves-light btn-large" href= "/mainMenu/attendance" style={{backgroundColor:"#990000", color: "white", marginTop:"50%"}}>Attendance</a>
      </div>
      <div style={{width:'50%', float:'left'}}>
      <a class="waves-effect waves-light btn-large" href= "/mainMenu/questions" style={{backgroundColor:"#990000", color: "white", marginTop:"50%"}}>Questions</a>
      </div>
    </div>
  );
};


export default Dashboard;
